export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    priceOrginal: number;
    currency: string;
    imageId: string;
  }


 export interface CartItem extends Product {
    uuid: string;
  }
  

// To parse this data:
//
//   import { Convert, Pictures } from "./file";
//
//   const pictures = Convert.toPictures(json);

export interface Pictures {
  data:   PictureData[];
}

export interface PictureData {
  id:         string;
  caption?:   string;
  media_url:  string;
  timestamp:  string;
  username:   Username;
  media_type: MediaType;
  permalink:  string;
  children?:  Children;
}

export interface Children {
  data: ChildrenData[];
}

export interface ChildrenData {
  media_url: string;
  id:        string;
  media_type: MediaType;
}

export enum MediaType {
  CarouselAlbum = "CAROUSEL_ALBUM",
  Image = "IMAGE",
  Video = "VIDEO",
}

export enum Username {
  AdellN = "adell_n",
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before: string;
  after:  string;
}

