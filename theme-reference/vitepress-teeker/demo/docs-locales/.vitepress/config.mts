import { defineConfig } from "vitepress";
import shared from "./locales/shared";
import zh from "./locales/zh";
import en from "./locales/en";

export default defineConfig({
  ...shared,
  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
  },
});
