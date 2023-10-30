import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch((loginActions.setUsername(value)));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch((loginActions.setPassword(value)));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={ThemeText.ERROR} text={error} />}
      <Input
        onChange={onChangeUsername}
        autofocus
        placeholder={t('Введите логин')}
        type="text"
        className={cls.input}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        placeholder={t('Введите пароль')}
        type="text"
        className={cls.input}
        value={password}

      />
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
