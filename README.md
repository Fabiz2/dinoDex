# DinoDex

Aplicativo para consultar informações sobre dinossauros. Explore listas de dinossauros carnívoros, herbívoros ou a lista geral e acesse uma ficha com detalhes de cada espécie.

O projeto é uma aplicação multiplataforma construída com Expo, React Native e TypeScript. As telas e a navegação usam Expo Router, e as consultas à API são gerenciadas pelo TanStack Query.

## Funcionalidades

- Navegação entre as categorias **Geral**, **Carnívoros** e **Herbívoros**.
- Listagem de dinossauros com nome, imagem e descrição.
- Tela de detalhes com era, dieta, altura, peso e comprimento.
- Indicadores de carregamento e mensagens de erro durante a busca de dados.

## Tecnologias

- [Expo SDK 58](https://docs.expo.dev/versions/v58.0.0/)
- [React Native 0.88](https://reactnative.dev/)
- [React 19](https://react.dev/)
- [TypeScript 6](https://www.typescriptlang.org/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TanStack Query 5](https://tanstack.com/query/latest)

## Requisitos

- Node.js e npm.
- A API do DinoDex em execução e acessível pela rede do dispositivo ou emulador.
- Expo Go ou um emulador/dispositivo configurado para executar o aplicativo.

## Instalação

Clone o repositório, entre na pasta do projeto e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd dinodex
npm install
```

## API

O aplicativo consulta uma API HTTP externa. Os endpoints usados são:

| Informação | Método | Endpoint |
| --- | --- | --- |
| Lista geral de dinossauros | `GET` | `/dinossauros` |
| Lista de dinossauros carnívoros | `GET` | `/carnivoros` |
| Lista de dinossauros herbívoros | `GET` | `/herbivoros` |
| Detalhes de um dinossauro | `GET` | `/dinossauro/:id` |

A URL base está atualmente definida diretamente nos módulos em `src/api/` como `http://10.92.198.29:8080`. Esse endereço precisa ser atualizado nesses arquivos caso a API esteja hospedada em outro endereço:

- `src/api/get-dinossauros.ts`
- `src/api/get-carnivoros.ts`
- `src/api/get-hebivoros.ts`
- `src/api/get-dinossauro.ts`

O código do servidor da API não está incluído neste repositório. Inicie o servidor separadamente antes de usar as telas que carregam dados. O endereço deve estar acessível pelo aparelho: em um dispositivo físico, use um IP alcançável pela rede local; `localhost` aponta para o próprio dispositivo, não para o computador que executa a API.

As telas esperam que os registros da lista forneçam dados como `id`, `nome`, `descricao` e `urlImagem`. A tela de detalhes também utiliza `era`, `dieta`, `altura`, `peso` e `comprimento`.

## Executar o aplicativo

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

Ou inicie diretamente para uma plataforma:

```bash
npm run android
npm run ios
npm run web
```

Depois de iniciar o Expo, siga as instruções exibidas no terminal para abrir o app no Expo Go ou em um emulador. A execução de `npm run ios` requer um ambiente compatível com iOS.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run start` | Inicia o servidor de desenvolvimento do Expo. |
| `npm run android` | Inicia o Expo com destino Android. |
| `npm run ios` | Inicia o Expo com destino iOS. |
| `npm run web` | Inicia o Expo para web. |
| `npm run lint` | Executa o linter do Expo. |
| `npm run reset-project` | Executa o script de reset do template Expo. |

## Estrutura do projeto

```text
assets/
  images/             Imagens e identidade visual do aplicativo
src/
  api/                 Funções de acesso à API
  app/                 Telas e rotas do Expo Router
    dinossauro/
      [id].tsx         Detalhes de um dinossauro
    _layout.tsx        Navegação e provedor do TanStack Query
    index.tsx          Tela inicial e categorias
    carnivoros.tsx     Lista de carnívoros
    herbivoros.tsx     Lista de herbívoros
    dinossauros.tsx    Lista geral
  components/          Diretório para componentes reutilizáveis
```

## Verificações

Execute o linter:

```bash
npm run lint
```

Para verificar os tipos TypeScript:

```bash
npx tsc --noEmit
```

## Licença

Consulte o arquivo [LICENSE](./LICENSE) para as informações de licença do projeto.
