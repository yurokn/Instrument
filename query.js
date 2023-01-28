export function getUrlParam(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null

}



// url参数解码
export const decodeQuery = search => {
  if (!search) {
    return {};
  }

  return (/^[?#]/.test(search) ? search.slice(1) : search).split('&').reduce((params, tuple) => {
    let [key, value] = tuple.split('=');
    params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
    return params;
  }, {});
};

//url参数 编码
export const encodeQuery = query => {
  if (!query) {
    return '';
  }

  let keys = Object.keys(query);
  if (keys.length === 0) {
    return '';
  }
  return '?' + keys.map(key => {
    return key + '=' + (query[key] ? encodeURIComponent(query[key]) : '');
  }).join('&');
};
