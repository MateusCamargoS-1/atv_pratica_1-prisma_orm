import { Request, Response } from "express";
import db from "../database/prisma.connection";

class FornecedorController {
    public async criar(req: Request, res: Response) {
        try {
            const { nome, email, avaliacao } = req.body;

            const novoFornecedor = await db.fornecedor.create({
                data: {
                    nome,
                    email,
                    avaliacao,
                    dataHoraCriacao: new Date(),
                    dataHoraAtualizacao: new Date()
                }
            });

            return res.status(201).json({ sucesso: true, mensagem: "Fornecedor cadastrado", dados: novoFornecedor });
        } catch (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro no servidor", dados: erro });
        }
    }
}

export default FornecedorController;
