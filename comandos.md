-- AULA 01 (Criando o projeto)

## iniciar projeto

npm init -y

## instalar express

npm i express@4.19.2

# instalar typescript

npm i typescript@5.5.4 @types/node@20.14.12 -D
npm i tsx@4.16.2 -D
npx tsc --init

---

-- AULA 02 (Middleware de Tratamento de Exceções)

## Criado a pasta Middlewares e o arquivos error-handling.ts

## criado pasta utils e arquivo AppError.ts

## Instalando express async errors

npm i express-async-errors@3.1.1

---

-- AULA 03 (Adicionando Zod)

## instalar zod

npm i zod@3.23.8

---

-- AULA 04 (Criando Rota e Controller de Usuário)

## Criado pastas routes e controllers

-- AULA 11 (instalando prisma)
npm i prisma@5.19.1 -D
npx prisma init --datasource-provider postgresql

-- AULA 12, criando tabelas
npx prisma migrate dev

Abrir prisma studio
npx prisma studio

-- Instalando bcrypt
npm i bcrypt@5.1.1
