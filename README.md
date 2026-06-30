# TargaryenTree

Árvore genealógica interativa da Casa Targaryen, construída com **Angular 22** e a biblioteca [ngDiagram](https://www.ngdiagram.dev/).

## Requisitos

- Node.js `^22.22.3 || ^24.15.0 || >=26.0.0` (exigido pelo Angular CLI 22). Se sua versão de Node for mais antiga (ex.: 22.22.2), atualize antes de rodar `ng serve` / `ng build`.
- npm 10+

## Instalação

```bash
npm install
```

## Rodando localmente

```bash
npm start
```

Acesse `http://localhost:4200`.

## Estrutura

- `src/app/targaryen-data.ts` — dados das personagens (nome, título, foto) e das uniões/relações de parentesco.
- `src/app/targaryen-node/` — nó customizado do ngDiagram que renderiza foto + nome de cada personagem.
- `src/app/app.ts` — monta o modelo do diagrama (nós e arestas) a partir dos dados e configura o `provideNgDiagram()`.

## O que dá pra fazer no diagrama

- Arrastar os cards para reorganizar a árvore.
- Zoom e pan no canvas.
- Visualizar a posição geral pelo minimapa no canto.
- Clicar em um nó para selecioná-lo (destaque visual).
