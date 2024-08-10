import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
import UserController from "./controller/user.controller";
import ProdutoController from "./controller/produto.controller";
import LojaController from "./controller/loja.controller";
import FornecedorController from "./controller/fornecedor.controller";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is running...');
})

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({success: true, msg: "Server is running"});
})

const userController = new UserController();
app.post("/user", userController.criar);

const produtoController = new ProdutoController();
app.post('/produto', produtoController.criar);

const lojaController = new LojaController();
app.post('/loja', lojaController.criar);

const fornecedorController = new FornecedorController();
app.post('/fornecedor', fornecedorController.criar);