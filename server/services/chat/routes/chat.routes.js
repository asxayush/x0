import express from 'express'
import { createConversation, getConversation, getMessages, saveMessage, updateConversation } from '../controller/chat.controller.js'

const router = express.Router()

router.get("/create-conversation", createConversation)
router.get("/get-conversation", getConversation)
router.post("/save-message", saveMessage)
router.get("/get-message/:conversationId", getMessages)
router.post("/update-conersation", updateConversation)

export default router