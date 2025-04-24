import jwt from "jsonwebtoken";

interface TokenPayload {
  _id: string;
  
}

export const generateToken = (userId: string): string => {
  if (!process.env.TOKEN_SECRET) {
    throw new Error("TOKEN_SECRET is not defined in environment variables");
  }
  
  const payload: TokenPayload = { _id: userId };
  
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });
};