import Conversation  from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;

        // Find existing conversation using both sender and receiver IDs
        const existingConversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (existingConversation) {
            response.status(200).json(existingConversation);
            return;
        }

        // Create a new conversation
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });

        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);

    } catch (error) {
        response.status(500).json(error);
    }
}



export const getConversation = async (request, response) => {
    try {
        let senderId = request.body.senderId;
        let receiverId = request.body.receiverId;

        const conversation = await Conversation.findOne({ members: { $all:[ senderId, receiverId]} });
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}