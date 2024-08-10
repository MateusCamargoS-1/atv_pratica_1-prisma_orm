import { Request, Response } from "express";
import db from "../database/prisma.connection";

class LojaController {
    public async criar(req: Request, res: Response) {
        try {
            const { cnpj, nome, endereco, quantidadeFiliais } = req.body;

            const novaLoja = await db.loja.create({
                data: {
                    cnpj,
                    nome,
                    endereco,
                    quantidadeFiliais,
                    dataHoraAbertura: new Date()
                }
            });

            return res.status(201).json({ sucesso: true, mensagem: "Loja cadastrada", dados: novaLoja });
        } catch (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro no servidor", dados: erro });
        }
    }
}

export default LojaController;
