// api/users.ts
import { useApi } from "~/composables/useApi";
import { MemoryLRUCache } from "~/libs/cache/MemoryLRUCache";

interface AppStats {
  user_count: number;
  requisition_count: number;
  transaction_count: number;
}

const currencyCache = new MemoryLRUCache<AppStats>({
  cacheTime: 600,
});

export const fetchAppStats = async (): Promise<
  AppStats | null | undefined
> => {
  return useApi().get<AppStats>("/weekly")
  // Check if data is in the cache
  return currencyCache.cache(
    () => useApi().get<AppStats>("/weekly"),
    "app_states"
  );
};
