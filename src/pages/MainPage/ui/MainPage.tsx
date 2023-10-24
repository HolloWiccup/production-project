import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton/BugButton';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      <BugButton />
      {t('Главная')}
    </div>
  );
};

export default MainPage;
