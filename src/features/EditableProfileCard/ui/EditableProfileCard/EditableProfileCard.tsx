import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  fetchProfileData, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/profileSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './EditableProfileCard.module.scss';
import {
  getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';

interface EditableProfileCardProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = ({ className }: EditableProfileCardProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const validateErrorTranslate = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
    console.log('mounted');
  }, [dispatch]);

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div className={classNames(cls.EditableProfileCard, {}, [className])}>
      <DynamicModuleLoader reducers={reducers}>
        <EditableProfileCardHeader />
        {validateErrors?.length && (
        <div>
          {validateErrors.map((err) => (
            <Text
              key={err}
              text={validateErrorTranslate[err]}
              theme={ThemeText.ERROR}
            />
          ))}
        </div>
        )}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </DynamicModuleLoader>
    </div>
  );
};
