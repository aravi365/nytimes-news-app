import { IArticle } from "../pages/Home";

export function formattedData(rawData: any[]): IArticle[] {
  return rawData.map((data: any) => ({
    id: data.id,
    title: data.title,
    description: data.abstract,
    thumbnail: data?.media?.[0]?.["media-metadata"]?.[1]?.url,
    image: data?.media?.[0]?.["media-metadata"]?.[2]?.url,
    byline: data.byline,
    abstract: data.abstract,
    url: data.url,
  }));
}
export const placeHolderImage =
  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

export function findNewsById(
  id: number,
  data: IArticle[]
): IArticle | undefined {
  return data.find((item: IArticle) => item.id === id);
}
