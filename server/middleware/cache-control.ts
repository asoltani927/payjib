// import { isProduction } from "~/utils/is-production.util";

export default defineEventHandler((_event) => {
  // if (isProduction()) {
  //   setResponseHeader(
  //     event,
  //     "Cache-Control",
  //     "public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600"
  //   );
  // }
});
