export interface ISource {
  id: string | null;
  name: string;
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
};