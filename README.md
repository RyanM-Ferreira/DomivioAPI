# Domivio API

Bem-vindo à **Domivio API**.

Este é o backend responsável por alimentar o aplicativo Domivio, um sistema criado para conectar compradores e vendedores de imóveis sem a necessidade de intermediadores.  

A API foi construída em Node.js com Express e utiliza PostgreSQL como banco de dados.

---

> **Tecnologias utilizadas**
>
> - Node.js  
> - Express  
> - PostgreSQL  
> - Sequelize  

---

## Endpoints

> **Endpoints disponíveis para interação com a API:**
>
> ```
> /users      -> Gerenciamento de usuários (cadastro, login, listagem)
> /ads        -> Gerenciamento de imóveis (criação, listagem)
> /chats      -> Criação e listagem de conversas
> /messages   -> Envio e recebimento de mensagens (separado por ChatID)
> ```

---

## Estrutura

A API segue o padrão REST, retornando dados em formato JSON e integrando-se ao cliente por meio do Axios.

---

## Deploy

API hospedada em:  
[https://domivioapi.onrender.com/](https://domivioapi.onrender.com/)

---

## Repositórios relacionados

> **Front-end:**  
> [DomivioClient](https://github.com/RyanM-Ferreira/DomivioClient)

---

## Créditos

> **Estrutura geral e Back-end:**  
> Ryan Ferreira – [github.com/RyanM-Ferreira](https://github.com/RyanM-Ferreira)  
>
> **Front-end e integração com a API:**  
> Arthur Martin – [github.com/arthur1105](https://github.com/arthur1105)
