import Layout from '../components/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInformation from '../components/profile/PersonalInformation';
import SecuritySettings from '../components/profile/SecuritySettings';

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl font-bold text-nimasa-dark-text mb-6">My Profile</h1>
      <ProfileHeader />
      <div className="mt-6">
        <PersonalInformation />
      </div>
      <div className="mt-6">
        <SecuritySettings />
      </div>
    </Layout>
  );
};

export default Profile;
