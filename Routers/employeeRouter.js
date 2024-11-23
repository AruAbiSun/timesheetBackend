import express from 'express';
import { getEmployee, loginEmployee, registerEmployee } from '../Controllers/employeeController.js';
import authMiddleware from '../Middlewares/employeeMiddleware.js';

const router = express.Router();

router.post('/register', registerEmployee)
router.post('/login', loginEmployee)
router.get('/getemployee', authMiddleware, getEmployee)
export default router