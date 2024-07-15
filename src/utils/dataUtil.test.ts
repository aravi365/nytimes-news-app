import { IArticle } from "../pages/Home";
import { formattedData, findNewsById } from "./dataUtils";

describe("formattedData", () => {
  it("should format the raw data correctly", () => {
    const rawData = [
      {
        id: 1,
        title: "Article 1",
        abstract: "Description of Article 1",
        media: [
          {
            "media-metadata": [
              { url: "thumbnail-url-1" }, // index 0
              { url: "thumbnail-url-2" }, // index 1 (thumbnail)
              { url: "image-url-1" }, // index 2 (image)
            ],
          },
        ],
        byline: "By Author 1",
        url: "url-1",
      },
    ];

    const expectedData: IArticle[] = [
      {
        id: 1,
        title: "Article 1",
        description: "Description of Article 1",
        thumbnail: "thumbnail-url-2",
        image: "image-url-1",
        byline: "By Author 1",
        abstract: "Description of Article 1",
        url: "url-1",
      },
    ];

    expect(formattedData(rawData)).toEqual(expectedData);
  });
});
describe("findNewsById", () => {
  it("should find an IArticle object by its id", () => {
    const data = [
      {
        id: 1,
        title: "Title 1",
        description: "Abstract 1",
        thumbnail: "thumbnail-url-1",
        image: "image-url-1",
        byline: "Byline 1",
        abstract: "Abstract 1",
        url: "url-1",
      },
      {
        id: 2,
        title: "Title 2",
        description: "Abstract 2",
        thumbnail: "thumbnail-url-2",
        image: "image-url-2",
        byline: "Byline 2",
        abstract: "Abstract 2",
        url: "url-2",
      },
    ];

    const result = findNewsById(1, data);
    expect(result).toEqual(data[0]);

    const notFoundResult = findNewsById(3, data);
    expect(notFoundResult).toBeUndefined();
  });
});
