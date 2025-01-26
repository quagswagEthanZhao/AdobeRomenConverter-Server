import { Router } from "express";
import { convertNumberController } from "../controllers/roman.controller";

const router = Router();

// Get /api/romannumerals?query=number
router.get('/', convertNumberController);

export default router;