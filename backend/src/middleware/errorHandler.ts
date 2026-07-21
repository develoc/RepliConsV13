import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  statusCode?: number;
  details?: string;
}

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  if (err instanceof Error && 'statusCode' in err) {
    const statusCode = (err as AppError).statusCode || 500;
    return res.status(statusCode).json({
      error: err.message,
      details: (err as AppError).details,
    });
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: err instanceof Error ? err.message : 'Unknown error',
  });
};