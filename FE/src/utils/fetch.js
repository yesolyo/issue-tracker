export const fetchData = async (path) => {
  const response = await fetch(path);
  const resData = await response.json();
  return resData;
};

export const fetchAll = async (...url) => {
  const requests = [...url].map((url) => fetch(url));
  const requestObject = await Promise.all(requests);
  const jsonObject = await Promise.all(requestObject.map((obj) => obj.json()));
  return jsonObject;
};
