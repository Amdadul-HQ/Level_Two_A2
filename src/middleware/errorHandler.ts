import { Request, Response } from 'express';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message as string || 'An error occurred',
    success: false,
    error: err,
  });
};
