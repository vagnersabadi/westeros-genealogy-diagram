# Westeros Genealogy Diagram

Árvore genealógica interativa da Casa Targaryen e das Grandes Casas de Westeros, construída com **Angular 22** e a biblioteca [ng-diagram](https://www.npmjs.com/package/ng-diagram).

O projeto conta com um layout responsivo medieval/escuro com transições suaves e representações visuais ricas das conexões familiares.

## 🚀 Requisitos

- Node.js `^22.23.1` (ou mais recente)
- npm `10.9.8` (ou mais recente)

## 📦 Instalação

```bash
npm install
```

## 💻 Rodando localmente

```bash
npm start
```
Acesse `http://localhost:4200` no seu navegador.

## 🛠️ Tecnologias e Recursos

- **Angular 22** (Standalone Components e Signals)
- **ng-diagram** para renderização e interatividade de grafos
- **Layout Vertical Customizado** de fluxo de gerações da esquerda para a direita
- **Cores Determinísticas por Mãe** para facilitar a leitura visual das linhas de descendência
- **Suporte a Ghost Spouses**: Cônjuges sem filhos e sem personagens completos cadastrados são agrupados e convertidos em labels simplificados de texto
- **Sidebar Retrátil**: Painel de informações e legenda ocultado por padrão, com animações elegantes e controle via menu hambúrguer no header

## 📂 Estrutura do Projeto

- `src/app/core/mocks/generations/` - Dados dos personagens organizados e separados por geração (Gerações 1 a 7 ativas)
- `src/app/core/utils/layout.engine.ts` - Mecanismo de cálculo de layout vertical e agrupamento de cônjuges
- `src/app/features/diagram/components/character-node/` - Nó customizado contendo avatar, título e comportamento especial para Aegon I e cônjuges sem filhos
- `src/app/features/diagram/components/relationship-edge/` - Arestas coloridas dinamicamente de acordo com o tipo de união (casamento tradicional, entre irmãos, primos, tio/sobrinha ou bastardos)
- `src/app/app.ts` e `app.html` - Orquestrador principal do diagrama, menu e sidebar

## 🌐 Publicação (GitHub Pages)

O projeto possui uma Action no GitHub que publica automaticamente o build no GitHub Pages em cada commit na branch `main`:
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
