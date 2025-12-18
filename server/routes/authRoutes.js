import { Router } from "express";
import { getUserProfile, loginUser } from "../controllers/authController.js";

const router = Router()

router.get('/profile', getUserProfile)
router.post('/login', loginUser)

export default router;