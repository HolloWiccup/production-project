import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { Select } from '../../../../shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  readonly?: boolean;
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation();
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = useCallback((value: String) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      label={t('Укажите страну')}
      readonly={readonly}
      value={value}
      onChange={onChangeHandler}
      options={options}
      className={classNames('', {}, [className])}
    />
  );
});
