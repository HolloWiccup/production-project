import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import {
  getProfileData,
} from '../getProfileData/getProfileData';

export const getCanEdit = createSelector(
  getUserAuthData,
  getProfileData,
  (user, profile) => user?.id === profile?.id,
);
