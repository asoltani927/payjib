// composables/useApi.ts
export function useApi() {
  // const config = useRuntimeConfig();

  const request = async <T>(
    url: string,
    options: Omit<Parameters<typeof $fetch<T>>[1], "baseURL"> = {}
  ): Promise<T> => {
    try {
      return await $fetch<T>(url, {
        baseURL: getApiBase('v1'),
        ...options,
      });
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  };

  // Helper methods
  const get = <T>(url: string, options = {}) =>
    request<T>(url, { method: "GET", ...options });

  const post = <T>(url: string, body: unknown, options = {}) =>
    request<T>(url, { method: "POST", body, ...options });

  const put = <T>(url: string, body: unknown, options = {}) =>
    request<T>(url, { method: "PUT", body, ...options });

  const patch = <T>(url: string, body: unknown, options = {}) =>
    request<T>(url, { method: "PATCH", body, ...options });

  const del = <T>(url: string, options = {}) =>
    request<T>(url, { method: "DELETE", ...options });

  return { get, post, put, patch, del };
}
