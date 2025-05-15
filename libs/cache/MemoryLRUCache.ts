interface MemoryLRUCacheOptions {
  cacheTime?: number; // TTL in seconds
  maxSize?: number; // Optional: max items for LRU
  key?: string; // Optional: default key
  log?: boolean; // Optional: enable console logging
}

export class MemoryLRUCache<T> {
  private _cache: Record<string, T> = {};
  private _expiresAt: Record<string, number> = {};
  private _usageOrder: string[] = [];
  private readonly _cacheTime?: number;
  private readonly _maxSize?: number;
  private readonly _logEnabled: boolean;
  private readonly _defaultKey: string;

  constructor({ cacheTime, maxSize, key, log }: MemoryLRUCacheOptions = {}) {
    this._cacheTime = cacheTime;
    this._maxSize = maxSize;
    this._defaultKey = key ?? "default";
    this._logEnabled = log ?? !isProduction();
  }

  private log(...args: unknown[]) {
    if (this._logEnabled) console.log("[MemoryLRUCache]", ...args);
  }

  private updateExpiry(key: string): void {
    this._expiresAt[key] = this._cacheTime
      ? Date.now() + this._cacheTime * 1000
      : 0; // never expires
  }

  public isEmpty(key: string = this._defaultKey): boolean {
    const expiry = this._expiresAt[key];
    if (this._cache[key] !== undefined && expiry !== undefined) {
      if (expiry === 0 || Date.now() < expiry) return false;
    }
    return true;
  }

  public get(key: string = this._defaultKey): T | undefined {
    return this.isEmpty(key) ? undefined : this._cache[key];
  }

  public getAll(): Record<string, T> {
    return this._cache;
  }

  public set(data: T, key: string = this._defaultKey): void {
    if (this._maxSize && Object.keys(this._cache).length >= this._maxSize) {
      const lruKey = this._usageOrder.shift();
      if (lruKey) {
        this._cache[lruKey] = undefined as unknown as T;
        this._expiresAt[lruKey] = undefined as unknown as number;
        this.log("Evicted LRU key:", lruKey);
      }
    }

    this._cache[key] = data;
    this.updateExpiry(key);

    this._usageOrder = this._usageOrder.filter((k) => k !== key);
    this._usageOrder.push(key);

    this.log("Cache set for key:", key);
  }

  public delete(key: string): void {
    this._cache[key] = undefined as unknown as T;
    this._expiresAt[key] = undefined as unknown as number;
    this._usageOrder = this._usageOrder.filter((k) => k !== key);
    this.log("Deleted key:", key);
  }

  public clear(): void {
    this._cache = {};
    this._expiresAt = {};
    this._usageOrder = [];
    this.log("Cache cleared");
  }

  public async cache(
    callback: () => Promise<T> | T,
    key: string = this._defaultKey
  ): Promise<T | undefined> {
    try {
      if (!this.isEmpty(key)) {
        this.log("Cache hit:", key);
        return this._cache[key];
      }

      const data = await callback();
      this.set(data, key);
      return data;
    } catch (error) {
      console.error(`[MemoryLRUCache][${key}] Error:`, error);
      return undefined;
    }
  }
}
