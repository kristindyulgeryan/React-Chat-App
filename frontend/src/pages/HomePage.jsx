import ChatContainer from "../components/ChatContainer.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import SideBar from "../components/SideBar.jsx";

import { useChatStore } from "../store/useChatStore.js";

const HomePage = () => {
  const { selectedUser } = useChatStore();
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center px-4 pt-20">
        <div className="h-[calc(100vh-8rem)] w-full max-w-6xl rounded-lg bg-base-100 shadow-xl">
          <div className="flex h-full overflow-hidden rounded-lg">
            <SideBar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
