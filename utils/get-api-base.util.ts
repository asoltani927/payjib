import { isProduction } from "./is-production.util";

export function getApiBase(version: "v1" | "v2" = "v1") {
  console.log(process.env.NUXT_PUBLIC_API_BASE);
  if (isProduction()) {
    return `${process.env.NUXT_PUBLIC_API_BASE ?? 'https://service.payjib.com/api/'}` + version;
  }
  return `${process.env.NUXT_PUBLIC_API_BASE ?? 'https://service.payjib.com/api/'}` + version;
}
