import { Request, Response } from "express";
import db from "../database/prisma.connection";

class UserController {
    public async criar (req: Request, res: Response) {
        try {
            const {nome, idade, email, password} = req.body;

            const newUser = await db.usuario.create({
                data: {
                    nome,
                    idade,
                    email,
                    password
                }
            });

            return res.status(201).json({success: true, msg: "User created", data: newUser});

        } catch(err) {
            return res.status(500).json({success: false, msg: "Erro no servidor"});
        }
    }
}

export default UserController;