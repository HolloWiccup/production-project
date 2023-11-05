import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { profileActions } from 'features/EditableProfileCard/model/slice/profileSlice';
import {
  updateProfileData,
} from '../../model/services/updateProfileData/updateProfileData';
import {
  getProfileReadonly,
} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = ({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const cancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.EditableProfileCardHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly
        ? (
          <Button
            onClick={onEdit}
            theme={ThemeButton.OUTLINE}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <div className={cls.buttons}>
            <Button
              onClick={cancelEdit}
              theme={ThemeButton.OUTLINE_RED}
            >
              {t('Отменить')}
            </Button>
            <Button
              onClick={onSave}
              theme={ThemeButton.OUTLINE}
            >
              {t('Сохранить')}
            </Button>
          </div>
        )}
    </div>

  );
};
