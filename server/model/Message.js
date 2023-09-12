import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: Number
    },
    receiverId: {
        type: Number
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{ 
        timestamps: true
})

const message = mongoose.model('Message', MessageSchema);

export default message;