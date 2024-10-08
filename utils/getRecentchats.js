import Message from "@/models/message";
export async function getRecentChats(userId) {
  return Message.find({
    receiverId: userId,
    isSeen: false,
  })
    .populate("senderId", "name profile_image")
    .sort({ createdAt: -1 });
}
