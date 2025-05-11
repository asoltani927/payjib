// api/users.ts
import { useApi } from "~/composables/useApi";
import { MemoryLRUCache } from "~/libs/cache/MemoryLRUCache";
import type { Currency } from "~/typings/currency.typing";
import type { ApiV1Response } from "~/typings/responses.typing";

const currencyCache = new MemoryLRUCache<ApiV1Response<Currency[]> | null>({
  cacheTime: 600,
});

export const fetchCurrencies = async (): Promise<
  ApiV1Response<Currency[]> | null | undefined
> => {
  // Check if data is in the cache
  return currencyCache.cache(
    () => useApi().get<ApiV1Response<Currency[]> | null>("/currencies/list"),
    "currencies"
  );
};
