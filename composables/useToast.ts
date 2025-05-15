import { ref, computed } from "vue";

// Define the structure of a Toast object
interface Toast {
  type: "success" | "error" | "warning" | "info";
  message: string;
  title: string;
  duration?: number;
}

// Define a reactive state for the toast queue, visibility, and the current toast
const toastQueue = ref<Toast[]>([]);
const visible = ref<boolean>(false);
const currentToast = ref<Toast | null>(null);
let icons: Record<string, unknown> = {}; // Record for dynamically imported icons

// Show the next toast from the queue
function showNextToast() {
  if (!visible.value) {
    currentToast.value = toastQueue.value.shift() || null;
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
      showNextToast();
    }, currentToast.value?.duration || 3000); // Default to 3000ms if duration is not set
  }
}

// Define the useToast composable function
export function useToast() {
  // Dynamically import lucide icons when needed
  if (!icons.success) {
    import("lucide-vue-next").then((module) => {
      icons = {
        success: module.CheckCircleIcon,
        error: module.XCircleIcon,
        warning: module.AlertTriangleIcon,
        info: module.InfoIcon,
      };
    });
  }

  // Compute the current icon based on the toast type
  const icon = computed(
    () => icons[currentToast?.value?.type ?? "info"] || icons.info
  );

  // Compute the CSS classes for the toast based on its type
  const toastClass = computed(() => {
    if (!currentToast.value) return "";

    switch (currentToast.value.type) {
      case "success":
        return "bg-green-100 text-green-800 border-l-4 border-green-500";
      case "error":
        return "bg-red-100 text-red-800 border-l-4 border-red-500";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500";
      default:
        return "bg-blue-100 text-blue-800 border-l-4 border-blue-500";
    }
  });

  // Hide the current toast and show the next one
const hideToast = () => {
  visible.value = false;
  setTimeout(() => {
    currentToast.value = null;
    showNextToast();
  }, 300);
};

  // Add a new toast to the queue and show it
  const add = (toast: Toast) => {
    toastQueue.value.push(toast);
    showNextToast();
  };

  // Utility methods for success, error, and warning to add specific toasts
  const success = (
    message: string,
    title: string = "Success",
    duration: number = 3000
  ) => add({ type: "success", message, title, duration });

  const error = (
    message: string,
    title: string = "Error",
    duration: number = 3000
  ) => add({ type: "error", message, title, duration });

  const warn = (
    message: string,
    title: string = "Warning",
    duration: number = 3000
  ) => add({ type: "warning", message, title, duration });

  return {
    visible,
    icon,
    toastClass,
    hideToast,
    add,
    success,
    error,
    warn,
    currentToast,
  };
}
