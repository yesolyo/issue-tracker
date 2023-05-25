export const fetchData = async (path) => {
  const response = await fetch(path);
  const resData = await response.json();
  return resData;
};

export const fetchAll = async (...url) => {
  const response = [...url].map((url) => fetch(url));
  const resData = await Promise.all(response);
  const jsonObject = await Promise.all(resData.map((obj) => obj.json()));
  return jsonObject;
};

export const getIssueList = async (filterCondition) => {
  const { data } = await get(`${url}`);
  return data;
};

export const fetchPost = async (url, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    quries: { code: queryCode }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
};
