export default function shouldBeMobile() {
  return /Mobi/.test(navigator.userAgent) || "ontouchstart" in window;
}
