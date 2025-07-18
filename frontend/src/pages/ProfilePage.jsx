import { Camera } from "lucide-react";
import { useAuthStore } from "../store/useAutheStore.js";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  const handleImageUpload = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen pt-20">
      <div className="mx-auto max-w-2xl p-4 py-8">
        <div className="bg-base-300 space-y-8 rounded-xl p-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full border-4 object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className={`bg-base-content duration-200" absolute bottom-0 right-0 cursor-pointer rounded-full p-2 transition-all hover:scale-105 ${isUpdatingProfile ? "pointer-events-none animate-pulse" : ""}`}
              >
                <Camera className="text-base-200 h-5 w-5" />
                <input />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
