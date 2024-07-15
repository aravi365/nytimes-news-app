import { apiCall } from "../utils/axiosApiCallWrapper";
import { serviceUrl } from "../api/constants";

export function getNews() {
  return apiCall("GET", serviceUrl.mostViewed, null, null);
}
