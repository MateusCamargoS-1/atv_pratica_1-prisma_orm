import { Request, Response } from "express";
import db from "../database/prisma.connection";

class ProdutoController {
    public async criar(req: Request, res: Response) {
        try {
            const { descricao, quantidadeEstoque, tipoProduto, valor } = req.body;

            const novoProduto = await db.produto.create({
                data: {
                    descricao,
                    quantidadeEstoque,
                    tipoProduto,
                    valor
                }
            });

            return res.status(201).json({ sucesso: true, mensagem: "Produto criado", dados: novoProduto });
        } catch (erro) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro no Servidor", dados: erro });
        }
    }
}

export default ProdutoController;
