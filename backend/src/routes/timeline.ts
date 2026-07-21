import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Get timeline - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.get('/:year', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Get timeline by year - To be implemented' });
  } catch (error) {
    next(error);
  }
});

export default router;