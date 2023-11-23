import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    const inited = getArticlePageInited(getState());
    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const typeFromUrl = searchParams.get('type') as ArticleType;
      const searchFromUrl = searchParams.get('search');

      if (orderFromUrl) {
        dispatch(articlePageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articlePageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(articlePageActions.setSearch(searchFromUrl));
      }
      if (typeFromUrl) {
        dispatch(articlePageActions.setType(typeFromUrl));
      }

      dispatch(articlePageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
