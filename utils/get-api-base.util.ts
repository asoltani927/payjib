import { isProduction } from "./is-production.util";

export function getApiBase(version: "v1" | "v2" = "v1") {
  if (isProduction()) {
    return `${process.env.NUXT_PUBLIC_API_BASE ?? 'https://pjb-staging.darkube.app/api/'}` + version;
  }
  return `${process.env.NUXT_PUBLIC_API_BASE ?? 'https://pjb-staging.darkube.app/api/'}` + version;
}
