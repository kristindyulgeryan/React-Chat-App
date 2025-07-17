import { useAuthStore } from "../store/useAutheStore.js";

const ProfilePage = () => {
  const { authUser } = useAuthStore();
  return <div>ProfilePage</div>;
};

export default ProfilePage;
