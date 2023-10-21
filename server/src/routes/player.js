import { Router } from 'express'
import {
    validateAuthentication,
    validateAdminRole,
  } from '../middleware/auth.js';

const router = Router()

router.get('/get-player-by-id/:userId')


export default router
