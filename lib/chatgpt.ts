import OpenAIAPI from 'openai'
 

const openai = new OpenAIAPI({
    apiKey: process.env.OPENAI_SECRET
})

export default openai