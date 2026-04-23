# Sistema de Futebol em JavaScript

Este projeto é um sistema simples de gerenciamento de futebol feito em JavaScript (Node.js).

Ele permite gerenciar Campeonatos, Times, Jogadores e Partidas usando um arquivo JSON para guardar os dados.

## Arquivos do projeto

- `crud.js`: arquivo principal do programa. Nele ficam o menu principal e os menus específicos para gerenciar Campeonatos, Times, Jogadores e Partidas.
- `json.json`: arquivo onde os dados ficam salvos.
- `package.json`: arquivo de configuração do Node.js com as dependências do projeto.

## O que o programa faz

Ao iniciar o programa, aparece um menu principal com as opções:

1. Campeonatos
2. Times
3. Jogadores
4. Partidas
0. Sair

Cada opção leva a um submenu com as operações CRUD:

- Adicionar
- Listar
- Atualizar
- Excluir
- Voltar

### Regras do sistema

- **Campeonatos**: Ao excluir um Campeonato, todos os Times pertencentes a ele também são excluídos.
- **Times**: Só é possível adicionar um Time se houver um Campeonato cadastrado.
- **Jogadores**: Só é possível adicionar um Jogador se houver um Time cadastrado.
- **Partidas**: Só é possível adicionar uma Partida se os dois Times estiverem cadastrados.

## Como executar

No terminal, entre na pasta do projeto e rode:

```bash
npm install
node crud.js
```

Depois disso, basta escolher as opções pelo número que aparece no menu.

## Como os dados são salvos

Os dados ficam no arquivo `json.json`.

O arquivo contém 4 seções:

### Campeonatos

- `id`: identificador único
- `nome`: nome do Campeonato
- `pais`: país do Campeonato

Exemplo:

```json
{
  "id": 1,
  "nome": "Brasileirão",
  "pais": "Brasil"
}
```

### Times

- `id`: identificador único
- `nome`: nome do Time
- `fundacao`: ano de fundação
- `campeonato_id`: ID do Campeonato ao qual o Time pertence
- `estadio`: nome do Estádio

Exemplo:

```json
{
  "id": 1,
  "nome": "Corinthians",
  "fundacao": 1910,
  "campeonato_id": 1,
  "estadio": "Neo Química Arena"
}
```

### Jogadores

- `id`: identificador único
- `nome`: nome do Jogador
- `idade`: idade do Jogador
- `numeroCamisa`: número da camisa
- `time_id`: ID do Time ao qual o Jogador pertence

Exemplo:

```json
{
  "id": 1,
  "nome": "Cristiano Ronaldo",
  "idade": 39,
  "numeroCamisa": 7,
  "time_id": 1
}
```

### Partidas

- `id`: identificador único
- `time1_id`: ID do primeiro Time
- `time2_id`: ID do segundo Time

Exemplo:

```json
{
  "id": 1,
  "time1_id": 1,
  "time2_id": 2
}
```

## Dependências

O projeto utiliza a biblioteca `prompt-sync` para capturar a entrada do usuário no terminal.

Instale as dependências com:

```bash
npm install
```