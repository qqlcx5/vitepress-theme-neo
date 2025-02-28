import { useData } from "vitepress";
import { nextTick, provide, unref } from "vue";
import "../styles/dark-transition.css";

export const useViewTransition = () => {
  const { isDark, theme } = useData();

  const isOpenViewTransition = unref(theme).viewTransition ?? true;

  if (!isOpenViewTransition) return;

  const enableTransitions = () =>
    "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
    ];

    await document.startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;

    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
      }
    );
  });
};
