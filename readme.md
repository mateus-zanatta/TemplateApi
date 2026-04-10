# 🚀 API Template — Express + Prisma + TypeScript

Template de API REST pronto para reutilizar em novos projetos.

---

## 📁 Estrutura do projeto

```
├── prisma/
│   ├── schema.prisma       → models do banco de dados
│   └── migrations/         → histórico de migrações
├── src/
│   ├── generated/prisma/   → gerado automaticamente pelo Prisma (não editar)
│   ├── lib/
│   │   └── prisma.ts       → instância do Prisma Client
│   └── server.ts           → rotas da API
├── .env                    → variáveis de ambiente (não sobe pro git)
├── .gitignore
├── prisma.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚙️ Como usar em um novo projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/mateus-zanatta/TemplateApi.git
cd TemplateApi
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com a URL do seu banco:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```

> Troque `postgresql` por `mysql` ou `sqlite` se necessário.

### 4. Editar o `prisma/schema.prisma`

Troque os models pelo do seu novo projeto. Exemplo:

```prisma
model SeuModel {
  id   Int    @id @default(autoincrement())
  nome String
}
```

### 5. Rodar a migration

```bash
npx prisma migrate dev --name init
```

### 6. Gerar o Prisma Client

```bash
npx prisma generate
```

### 7. Editar as rotas em `src/server.ts`

Troque as rotas para as do seu novo projeto. Exemplo:

```typescript
app.get("/seumodel", async (req, res) => {
  const dados = await prisma.seuModel.findMany();
  res.json(dados);
});
```

### 8. Rodar o servidor

```bash
npm run dev
```

---

## 📝 Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Inicia o servidor compilado |
| `npx prisma migrate dev` | Cria/atualiza as tabelas no banco |
| `npx prisma generate` | Gera o Prisma Client |
| `npx prisma studio` | Abre interface visual do banco |

---

## 🔁 Resumo rápido ao clonar

```bash
git clone https://github.com/mateus-zanatta/TemplateApi.git
cd TemplateApi
npm install
# crie o .env com sua DATABASE_URL
# edite o prisma/schema.prisma com seus models
npx prisma migrate dev --name init
npx prisma generate
# edite o src/server.ts com suas rotas
npm run dev
```