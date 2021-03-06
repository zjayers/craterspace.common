import { NextFunction, Request, Response } from "express";

import { NotAuthorizedError } from "..";

export const requireAuth: (
  req: Request,
  res: Response,
  next: NextFunction
) => void = (req: Request, _res: Response, next: NextFunction): void => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
