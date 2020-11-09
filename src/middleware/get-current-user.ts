import { NextFunction, Request, Response } from 'express';

import { TokenManager } from '../services/token-manager';

export const getCurrentUser: (
  req: Request,
  res: Response,
  next: NextFunction
) => void = (req: Request, _res: Response, next: NextFunction): void => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    req.currentUser = TokenManager.VerifyToken(req.session.jwt);
  } catch (e) {}
  next();
};
