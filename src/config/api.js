import axios from "axios";

export default async function api({ url, method, data, router }) {
  try {
    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    return response;
  } catch (error) {
    if (error?.response.status >= 300) {
      if (error?.response.status >= 500) {
        router.push("/");
        return error?.response;
      }
      if (error?.response.status === 401 || error?.response.status === 403) {
        router.push("/");
        return error?.response;
      }
    }

    return error?.response;
  }
}
