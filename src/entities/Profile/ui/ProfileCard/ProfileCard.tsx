import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastName,
    onChangeFirstName,
    onChangeCity,
    onChangeUsername,
    onChangeAge,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          align={TextAlign.CENTER}
          theme={ThemeText.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <div className={cls.avatarWrapper}>
          <Avatar src={data.avatar} size={100} alt="avatar" />
        </div>
      )}
      <Input
        onChange={onChangeFirstName}
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeLastName}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeAge}
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t('Ваш город')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t('Имя пользователя')}
        className={cls.input}
        readonly={readonly}
      />
      <CurrencySelect
        onChange={onChangeCurrency}
        value={data?.currency}
        readonly={readonly}
      />
      <CountrySelect
        onChange={onChangeCountry}
        value={data?.country}
        readonly={readonly}
      />
      <Input
        onChange={onChangeAvatar}
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        className={cls.input}
        readonly={readonly}
      />
    </div>
  );
});
