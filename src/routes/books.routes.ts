import { Router } from 'express';
import { postCreateBookController, deleteBookController, getBookByIdController, putBookController } from '../controllers/book.controller.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';

const router = Router();
router.get('/:id', authenticateToken, authorizeRole('user'), getBookByIdController);
router.post("/", authenticateToken, authorizeRole('admin'), postCreateBookController);
router.put("/:id", authenticateToken, authorizeRole('admin'), putBookController);
router.delete("/:id", authenticateToken, authorizeRole('admin') ,deleteBookController);


export default router;