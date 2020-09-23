export default function toggleRTL(setRTL: boolean) {
  document.documentElement.setAttribute("dir", setRTL ? "rtl" : "ltr");
}
