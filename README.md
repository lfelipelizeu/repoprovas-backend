
# Repoprovas

Este projeto é a ideia de um repositório onde os estudantes podem cadastrar provas antigas de alguma matéria para que os outros estudantes possam consultá-las!

Você pode acessar o site com o aplicativo funcionando [aqui](https://repoprovas-frontend-two.vercel.app/).


## Conteúdo
- [Stack utilizada](#stack-utilizada)
- [Relacionados](#relacionados)
- [Documentação da API](#documentação-da-api)
- [Criando o banco](#criando-o-banco)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Rodando localmente](#rodando-localmente)
- [Rodando os testes](#rodando-os-testes)
## Stack utilizada

- Node
- Express
- Typescript
- PostgreSQL


## Relacionados

[Frontend](https://github.com/lfelipelizeu/repoprovas-frontend)


## Documentação da API

#### Retorna todos as matérias + quantidade de provas cadastradas

```http
GET /subjects
```

#### Retorna todos os professores + quantidade de provas cadastradas

```http
GET /professors
```

#### Retorna todas as turmas cadastradas ou filtradas por matéria

```http
GET /classes?subject={subject}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `subject`      | `integer` | Opcional. O ID da matéria que você quer.  |

#### Retorna as provas cadastradas, filtradas por professor

```http
GET /tests/professor/${id}
```

| Parâmetro   | Tipo       | Descrição                                                |
| :---------- | :--------- | :------------------------------------------------------- |
| `id`        | `integer`  | **Obrigatório**. O ID do professor que você que filtrar. |

#### Retorna as provas cadastradas, filtradas por matéria

```http
GET /tests/subject/${id}
```

| Parâmetro   | Tipo       | Descrição                                              |
| :---------- | :--------- | :----------------------------------------------------- |
| `id`        | `integer`  | **Obrigatório**. O ID da matéria que você que filtrar. |

#### Cadastrar uma nova prova

```http
POST /tests
```

| Parâmetro   | Tipo       | Descrição                                                    |
| :---------- | :--------- | :----------------------------------------------------------- |
| `year`      | `integer`  | **Obrigatório**. O ano da aplicação da prova.                |
| `semester`  | `integer`  | **Obrigatório**. O semestre da aplicação da prova.           |
| `categoryId`| `integer`  | **Obrigatório**. O ID da categoria da prova (P1, P2 etc...). |
| `classId`   | `integer`  | **Obrigatório**. O ID da turma que a prova foi aplicada.     |
| `link`      | `string`   | **Obrigatório**. O link para acessar a prova.                |

## Criando o banco

Este aplicativo aplicativo precisa de um banco de dados PostgreSQL para funcionar.\
Após a criação do banco, utilize os comandos [deste arquivo](https://github.com/lfelipelizeu/repoprovas-backend/blob/main/dump.sql) para criar as tabelas necessárias para a utilização da aplicação.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

- `DATABASE_URL`: a URL para o [banco de dados](#criando-o-banco) utilizado

- `PORT`: porta que o servidor será executado (se não for fornecido, o padrão será 4000)

Esse projeto possui um [exemplo](https://github.com/lfelipelizeu/repoprovas-backend/blob/main/.env.example) de como ficará o arquivo `.env`


## Rodando localmente

Clone o projeto

```bash
git clone https://github.com/lfelipelizeu/repoprovas-backend
```

Entre no diretório do projeto

```bash
cd repoprovas-backend
```

Instale as dependências

```bash
npm install
```

Este projeto utiliza Typescript, portanto precisa de compilação

```bash
npm run build
```

Inicie a aplicação

```bash
npm run start
```

Se deseja utilizar um [banco](#criando-o-banco) de desenvolvimento, configure o `.env.dev` e use:
```bash
npm run dev
```

Se desejar testar a aplicação completamente, você pode baixar o frontend destre projeto [aqui](https://github.com/lfelipelizeu/repoprovas-frontend).


## Rodando os testes

Para rodar os testes, [crie um banco](#criando-o-banco) de testes, configure o `.env.test` e use:

```bash
npm run test
```

