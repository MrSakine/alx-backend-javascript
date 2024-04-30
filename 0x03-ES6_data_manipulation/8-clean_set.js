export default function cleanSet(set, startString) {
  let res = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      res += `${value.substring(startString.length)}-`;
    }
  });
  if (res.endsWith('-')) {
    res = res.slice(0, -1);
  }
  return res;
}
