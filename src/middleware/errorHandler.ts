import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'An error occurred',
    success: false,
    error: err,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
