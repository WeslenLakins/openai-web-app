import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import OpenAI from 'openai'

const app = express()
const port = 3000

// Initialize OpenAI
const openai = new OpenAI(process.env.OPENAI_API_KEY)

app.use(bodyParser.json())
app.use(express.static('public')) // Serve static files from 'public' directory

// Endpoint to handle the AI request
app.post('/ask-ai', async (req, res) => {
  try {
    const userMessage = req.body.message
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage },
      ],
    })

    res.json({ response: completion.choices[0].message.content })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).send('An error occurred while processing your request.')
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
