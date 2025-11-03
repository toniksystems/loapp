import Layout from '../components/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInformation from '../components/profile/PersonalInformation';
import SecuritySettings from '../components/profile/SecuritySettings';

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-lg md:text-xl font-bold text-nimasa-dark-text mb-4">My Profile</h1>
      <ProfileHeader />
      <div className="mt-4">
        <PersonalInformation />
      </div>
      <div className="mt-4">
        <SecuritySettings />
      </div>
    </Layout>
  );
};

export default Profile;
