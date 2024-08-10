-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "github" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "quantidadeEstoque" INTEGER NOT NULL,
    "tipoProduto" TEXT NOT NULL,
    "dataHoraCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disponivel" BOOLEAN,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loja" (
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "segmento" TEXT DEFAULT 'alimentação',
    "endereco" TEXT NOT NULL,
    "telefone" TEXT,
    "quantidadeFiliais" INTEGER NOT NULL,
    "dataHoraAbertura" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "fornecedor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "dataHoraCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataHoraAtualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");
