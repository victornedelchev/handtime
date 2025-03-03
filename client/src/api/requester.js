export default async function requester(method, url, data) {
  const options = {};

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    };

    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  let result;
  try {
    result = await response.json();
  } catch (error) {
    throw {
      status: response.status,
      message: "Server returned non-json response",
    };
  }

  if (!response.ok) {
    throw result;
  }

  return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");
