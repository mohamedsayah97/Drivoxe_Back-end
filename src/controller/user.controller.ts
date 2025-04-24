import { Request, Response } from "express";
import userRepo from "../models/user/schema/user.schema";
import { comparePassword } from "../util/password.util";  
import { generateToken } from "../util/jwt.util"; 

interface User {
  _id: string;
  email: string;
  password: string;
 
}

const userController = {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const user = await userRepo.findOne({ email: data.email });

      if (user) {
        return res.status(400).json({ message: "This email is already taken" });
      }
      const newUser = await userRepo.insert(data);
      return res.status(200).json({ data: newUser });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const user: User | null = await userRepo.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ message: "This user is not found!" });
      }
      const isPasswordCorrect = await comparePassword(password, user.password);

      if (!isPasswordCorrect) {
        return res
          .status(400)
          .json({ message: "Email ou mot de passe incorrect!" });
      }

      const accessToken = generateToken(user._id);

      return res
        .status(200)
        .json({ message: "Données valide", accessToken: accessToken });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const users = await userRepo.find();
      return res.status(200).json({ data: users });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const entity = await userRepo.findById(id);
      if (entity == null) {
        return res.status(404).json({ message: "User not found!" });
      }
      await userRepo.deleteById(id);
      return res.status(200).json({ message: "delete successfull" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const data = req.body;
      const entity = await userRepo.findById(id);
      if (entity == null) {
        return res.status(404).json({ message: "User not found!" });
      }
      await userRepo.updateById(id, data);
      return res.status(200).json({ message: "update successfull" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default userController;