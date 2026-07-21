import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Get personality profile - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.post('/analyze', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Analyze personality - To be implemented' });
  } catch (error) {
    next(error);
  }
});

export default router;