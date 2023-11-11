export enum AricleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}

export interface ArticleBlockBase {
  id: string
  type: AricleBlockType
}

export interface ArticleCodeBlock extends ArticleBlockBase{
  type: AricleBlockType.CODE;
  code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase{
  type: AricleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase{
  type: AricleBlockType.IMAGE;
  src: string;
  title: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  userId: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
