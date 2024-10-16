import { User } from "../models/user.models";



declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};