# Domivio API

Bem-vindo à **Domivio API**.

Este é o backend responsável por alimentar o aplicativo Domivio, um sistema criado para conectar compradores e vendedores de imóveis sem a necessidade de intermediadores.  
A API foi construída em Node.js com Express e utiliza PostgreSQL como banco de dados principal.

---

> **Tecnologias utilizadas**
>
> - Node.js  
> - Express  
> - PostgreSQL  
> - Sequelize  
> - CORS  

---

## Endpoints

> **Endpoints disponíveis para interação com a API:**
>
> ```
> /users      → Gerenciamento de usuários (cadastro, login, listagem)
> /ads        → CRUD de imóveis (criação, listagem, atualização e exclusão)
> /chats      → Criação e listagem de conversas
> /messages   → Envio e recebimento de mensagens
> ```

---

## Estrutura

A API segue o padrão REST, retornando dados em formato JSON e integrando-se ao cliente por meio do Axios.  
Todas as rotas principais exigem autenticação, exceto o cadastro e o login.

---

## Deploy

API hospedada em:  
[https://domivioapi.onrender.com/](https://domivioapi.onrender.com/)

---

## Repositórios relacionados

> **Frontend (mobile):**  
> [DomivioClient](https://github.com/RyanM-Ferreira/DomivioClient)

---

## Créditos

> **Back-end e arquitetura:**  
> Ryan Ferreira – [github.com/RyanM-Ferreira](https://github.com/RyanM-Ferreira)  
>
> **Integração e suporte ao front-end:**  
> Arthur Martin – [github.com/arthur1105](https://github.com/arthur1105)
