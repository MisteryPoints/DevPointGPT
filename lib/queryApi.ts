import openai from "./chatgpt";

const query = async (prompt: String, chatId: String, model: String) => {
    const res = await openai.createCompletion
}