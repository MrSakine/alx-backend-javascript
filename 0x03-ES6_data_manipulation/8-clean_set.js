export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      res += `${value.substring(startString.length)}-`;
    }
  });
  if (res.endsWith('-')) {
    res = res.slice(0, -1);
  }
  return res;
}
