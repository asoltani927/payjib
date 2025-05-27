import { fetchLastesArticles } from "~/api/articles";
import type { Article } from "~/typings/article.typing";

export const useLatestArticles = async (): Promise<Ref<Article[]>> => {
  const articles = useState<Article[] | null>("articles-cache", () => null);

  if (!articles.value) {
    const response = await fetchLastesArticles();
    articles.value = response
      ? response.map((article) => ({
          ...article,
          content: summarizeText(stripHtmlTags(article.content), 60),
          thumbnail: "/home/img/Rectangle 6304.png",
          link: "https://payjib.com/blog/",
        }))
      : null;
  }
  return ref(articles.value ?? []);
};
