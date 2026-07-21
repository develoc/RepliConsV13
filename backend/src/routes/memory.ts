import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Get all memories - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Get memory - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({ message: 'Create memory - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Update memory - To be implemented' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: 'Delete memory - To be implemented' });
  } catch (error) {
    next(error);
  }
});

export default router;