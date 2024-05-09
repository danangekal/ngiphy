This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- Search gif with keyword & rating
- Show trending gifs and categories
- Search GIFs by keyword or filter based on rating
- Play/Pause GIFs
- Responsive UI support desktop, tab & mobile (done)
- Unit testing with coverage > 40% (example on video carousel, categories container, suggestion container, etc)

## Tech Stack

- [React.js 18](https://react.dev/blog/2022/03/29/react-v18) - Blog introduce react v18.0 (javascript library)
- [Next.js 14](https://nextjs.org/blog/next-14) - Blog introduce next.js 14 (react framework full stack web application)
- [State management](https://react.dev/learn/scaling-up-with-reducer-and-context) - Global state management combine useContext & useReducer from react hooks
- [Typescript 5](https://www.typescriptlang.org/) - Documentation of typescript (typed programming language)
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - Documentation of tailwind css (utility css framework)
- [Eslint 8](https://eslint.org/docs/user-guide/getting-started) - Documentation of eslint (linter javascript)
- [Prettier 3](https://prettier.io/docs/en/index.html) - Documentation of prettier (code formatter)
- [Husky 9](https://typicode.github.io/husky/#/) - Documentation of husky (native git hook)
- [Commitlint](https://commitlint.js.org/#/) - Documentation of commitlint (commit convention)
- [Lint Staged 15](https://github.com/lint-staged/lint-staged) - Documentation of lint staged (linters on git staged)
- [SWR](https://swr.vercel.app/docs/getting-started) - Documentation of swr (react hooks for data fetching)
- [Jest](https://jestjs.io/docs/getting-started) - Documentation of jest (javascript testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Documentation of react testing library (react UI testing)

## Getting Started

### Prerequisites

This project using node >= 18.17 and recommended use node 20.11 & yarn 1.22.19
Please ensure you have the following installed on your system:

- **Internet connection**: Please make sure there is an internet connection for access install dependency & fonts

- **Node.js**: This project requires Node.js version 20 or higher. We recommend using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage your Node.js installations. You can follow these steps to install Node.js with NVM:

  1. Install NVM by following the instructions on the [NVM GitHub repository](https://github.com/nvm-sh/nvm#installing-and-updating)

  2. Once NVM is installed, open a new terminal window and install Node.js version 20 using the following command:

     ```bash
     nvm install v20
     ```

  3. Set Node.js version 20 as the default for this project:

     ```bash
     nvm use v20
     ```

- **Yarn**: You can install Yarn globally using npm (Node Package Manager) with the following command:

```bash
npm install -g yarn
```

- **API Key Giphy**: You must register & create api key from [giphy](https://developers.giphy.com)

Once you have Node.js, Yarn installed as specified above and get API Key from giphy, you'll be ready to set up and run this project.

### Installation

```bash
git clone https://github.com/danangekal/ngiphy.git
yarn install
```

#### Development

Please don't forget replace environment with the following:

- `GIPHY_API_URL=` -> fill base url api giphy https://api.giphy.com/v1
- `GIPHY_API_KEY=` -> fill key from your dashboard developer giphy

```bash
copy .env.example to .env.local
yarn dev
```

#### Production

Please don't forget replace environment with the following:

- `GIPHY_API_URL=` -> fill base url api giphy https://api.giphy.com/v1
- `GIPHY_API_KEY=` -> fill key from your dashboard developer giphy

```bash
copy .env.example to .env.production
yarn build
yarn start
```

#### Linter

```bash
yarn lint
```

#### Formater

```bash
yarn format
```

#### Testing

```bash
yarn test
yarn test:watch -> (running mode watch for watch files for changes and rerun tests related to changed files)
yarn test:ci -> (running in a CI environment)
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
