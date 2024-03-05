export const setKey = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getKey = (key) => {
  return localStorage.getItem(key);
};

export const clearKey = () => {
  return localStorage.clear();
};
