// Base type with only text
export interface ISearchItem {
  text: string;
}

// Type with description and link
export interface ISearchItemWithLink extends ISearchItem {
  description: string;
  link: string;
}

// Type with image
export interface ISearchItemWithImage extends ISearchItemWithLink {
  image: string;
}
