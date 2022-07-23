export interface ISource {
  id: string | null;
  name: string;
  category: string;
  country: string;
  description: string;
  language: string;
  url: string;
}

export interface IArticleObject extends ISource{
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: ISource;
}

export interface IDataObject{
  sources: ISource[];
  articles: IArticleObject[];
}

export enum StatusErrors { 
  StatusError1 = 401, 
  StatusError2 = 404 
}

export type LoaderOptions = {
  [key: string]: string
}
