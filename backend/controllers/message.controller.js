import Message from "../models/message.model.js"
import Conversation from "../models/conversation.model.js"
import { getReceiverUserId, io } from "../server.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const { receiver } = req.params
  const sender = req.user._id
  try {

    let conversation = await Conversation.findOne({
      users: { $all: [sender, receiver] }
    })

    if (!conversation) {
      conversation = await new Conversation({
        users: [sender, receiver]
      })
      await conversation.save();
    }

    if (!message) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newMessage = await new Message({
      sender,
      receiver,
      message
    });

    if (!newMessage) {
      return res.status(400).json({ message: "Failed to send message" });
    }

    conversation.messages.push(newMessage);

   await Promise.all([
      newMessage.save(),
      conversation.save()
    ]);

       const receiverUserId = getReceiverUserId(receiver);
   if(receiverUserId){
      io.to(receiverUserId).emit("getMessage",newMessage)
   }
   
    res.status(201).json({"message": "Message sent successfully", newMessage });
    

    
  } catch (error) {
    
  }

}

export const getMessages = async (req, res) => {
    const { receiver } = req.params
    const sender = req.user._id
    try {
      let conversation = await Conversation.findOne({
        users: { $all: [sender, receiver] }
      }).populate("messages");
      if (!conversation) {
        return res.status(200).json([]);
      }
      const messages = conversation.messages
      res.status(200).json({ messages });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
}