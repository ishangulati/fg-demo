import { ThemeVariables, ThemeVariablesDark } from "./ThemeVariables";

export default function toggleDarkMode(setDarkMode: boolean) {
  const themeObj: Record<string, string> = setDarkMode
    ? ThemeVariablesDark
    : ThemeVariables;
  Object.keys(themeObj).forEach((key: string) => {
    document.documentElement.style.setProperty(key, themeObj[key]);
  });
}
