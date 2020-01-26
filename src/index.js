const anyCase = (data, caseFn) => {
  if (!caseFn) { return data; }
  if (Array.isArray(data)) { return data.map((item) => anyCase(item, caseFn)); }
  if (Object.prototype.toString.call(data) === '[object Object]') {
    return Object.keys(data).reduce((s, key) => ({ ...s, [caseFn(key)]: anyCase(data[key]) }), {});
  }
  return data;
};

export default anyCase;

