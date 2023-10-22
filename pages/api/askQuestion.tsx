import { adminDb } from '@/firebaseAdmin';
import query from '@/lib/queryApi';
import admin from 'firebase-admin'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    answer: string;
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>){
    const { prompt, chatId, model, session } = req.body

    if(!prompt) {
        res.status(400).json({ answer: "Please provide a Prompt!"})
        return
    }

    if(!chatId) {
        res.status(400).json({ answer: "Please provide a valid Chat ID!"})
        return
    }

    //Chat GPT Query
    const response = await query(prompt, chatId, model)
    
    const message: Message = {
        text: response || "DevPoint GPT no pudo encontrar una respuesta para eso.",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png"
        }
    }

    await adminDb.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(message)

    res.status(200).json({ answer: message.text })
}