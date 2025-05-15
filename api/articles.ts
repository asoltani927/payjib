// api/users.ts
import { useApi } from "~/composables/useApi";
import { MemoryLRUCache } from "~/libs/cache/MemoryLRUCache";
import type { Article } from "~/typings/article.typing";

const currencyCache = new MemoryLRUCache<Article[]>({
  cacheTime: 600,
});

export const fetchLastesArticles = async (): Promise<
  Article[] | null | undefined
> => {
  // Check if data is in the cache
  return currencyCache.cache(
    () => useApi().get<Article[]>("/posts/latest"),
    "articles"
  );
};
