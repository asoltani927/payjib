// composables/useApi.ts
import { useToast } from "~/composables/useToast";
export function useApi() {
  const toast = useToast(); // assuming useToast is globally available
  // const config = useRuntimeConfig();

  const request = async <T>(
    url: string,
    options: Omit<Parameters<typeof $fetch<T>>[1], "baseURL"> & {
      method: "GET" | "PUT" | "DELETE" | "POST" | "PATCH";
      toast?: {
        title?: string;
        message?: string;
      };
    } = { method: "GET", toast: {} }
  ): Promise<T> => {
    try {
      const response = await $fetch<T>(url, {
        baseURL: getApiBase("v1"),
        ...options,
      });
      // Optional: Only show success toast for non-GET methods
      if (options.method && options.method !== "GET" && options?.toast?.title && options?.toast?.message) {
        toast.success(options.toast.message, options.toast.title);
      }

      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("API error:", error);
      // Display a meaningful error message
      const message =
        error?.data?.message || error?.message || "Something went wrong";
      toast.error("error", message);
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
