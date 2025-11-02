import Layout from '../components/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInformation from '../components/profile/PersonalInformation';
import SecuritySettings from '../components/profile/SecuritySettings';

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-5xl font-bold text-nimasa-dark-text mb-8">My Profile</h1>
      <ProfileHeader />
      <PersonalInformation />
      <SecuritySettings />
    </Layout>
  );
};

export default Profile;
