import express from 'express'
import authMiddleware from '../Middlewares/employeeMiddleware.js';
import { createTimesheet, getTimesheet, updateTimesheet } from '../Controllers/timesheetController.js';


const router = express.Router();

router.post('/create', authMiddleware, createTimesheet)
router.put('/update/:id', authMiddleware, updateTimesheet)
router.get('/get', authMiddleware, getTimesheet)

export default router;