import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers?.includes(selectedUser?._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-[#e6dccb]/90 border-b border-[#b8aa98]/60 px-6 py-4 min-h-[84px]">
      <div className="flex items-center space-x-3 min-w-0">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full border border-[#b8aa98]/70">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
            />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="text-[#2f2926] font-medium truncate">
            {selectedUser.fullName}
          </h3>
          <p className="text-[#7a6d62] text-sm">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="p-2 rounded-lg text-[#7a6d62] hover:text-[#2f2926] hover:bg-[#f3eadf] transition-colors"
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
}

export default ChatHeader;
