import { apiCall } from "../../utils/axiosApiCallWrapper";
import { serviceUrl } from "../../api/constants";

interface NewsArticle {
  id: number;
  title: string;
  abstract: string;
  byline: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
  url: string;
}

export interface NewsApiResponse {
  results: NewsArticle[];
}
export const getNews = (): Promise<NewsApiResponse> => {
  return apiCall("GET", serviceUrl.mostViewed, null, null);
};
