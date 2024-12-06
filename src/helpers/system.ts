export const isIOS = (): boolean => {
  const ua = window.navigator.userAgent;
  return !!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/Macintosh/i);
};
