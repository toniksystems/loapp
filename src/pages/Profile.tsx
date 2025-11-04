import Layout from '../components/Layout';
import ProfileHeader from '../components/profile/ProfileHeader';
import PersonalInformation from '../components/profile/PersonalInformation';
import SecuritySettings from '../components/profile/SecuritySettings';

const Profile = () => {
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl font-bold text-nimasa-dark-text mb-10">My Profile</h1>
      <ProfileHeader />
      <div className="mt-10">
        <PersonalInformation />
      </div>
      <div className="mt-10">
        <SecuritySettings />
      </div>
    </Layout>
  );
};

export default Profile;
