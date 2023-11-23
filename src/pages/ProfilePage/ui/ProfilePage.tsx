import { useTranslation } from 'react-i18next';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const { id } = useParams<{id: string}>();

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
