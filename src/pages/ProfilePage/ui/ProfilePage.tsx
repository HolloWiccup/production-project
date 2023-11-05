import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from 'features/EditableProfileCard';

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <EditableProfileCard />
  );
};

export default ProfilePage;
