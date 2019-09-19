export default function onMobileBrowser() {
  return /Mobi/.test(navigator.userAgent) && "ontouchstart" in window;
}
