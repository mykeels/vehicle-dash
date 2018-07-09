export const apiRoot = 'https://raven-norfolk.herokuapp.com/'

export const api = function (url) {
  return apiRoot + url;
}

export const url = function (path) {
  return location.origin + '/' + path;
}
