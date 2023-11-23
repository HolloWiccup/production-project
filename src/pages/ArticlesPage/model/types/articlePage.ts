import {
  Article, ArticleView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  view: ArticleView;
  order: SortOrder;
  search: string;
  sort: ArticleSortField;
  type: ArticleType;

  _inited?: boolean;
}
