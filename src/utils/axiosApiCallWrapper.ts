import axios, { AxiosRequestConfig, Method, AxiosResponse } from "axios";
import { serviceUrl } from "../api/constants";

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: serviceUrl.baseURL,
});

/**
 * Request Wrapper with default success/error actions
 */
export const apiCall = async <T>(
  method: Method,
  route: string,
  body: any = null,
  accessToken: string | null = null
): Promise<T> => {
  if (accessToken) {
    client.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  const onSuccess = (response: AxiosResponse<T>) => {
    console.log("Request Successful!", response);
    return response.data;
  };

  const onError = (error: any) => {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else {
      console.log("Error Message:", error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  console.log("test before call", method, route, body, accessToken);

  const config: AxiosRequestConfig = {
    method,
    url: route,
    data: body,
  };

  try {
    const response = await client(config);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
