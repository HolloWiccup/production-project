import { DeepPartial } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(true),
    )).toEqual({ readonly: true });
  });
});
