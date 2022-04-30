# Documentation

The following instructions will help you get started and use the application.

## Getting Started

### Create `.env` configuration file

First, create a `.env` file with the content of the `.env.example` file:

```bash
cp .env.example .env
```

Then, if necessary, update the following lines in the `.env` file:

```bash
REACT_APP_API_URL=<api-url>
REACT_APP_GRAPHQL_URL=<graphql-url>
```

### Install the dependencies

```bash
npm install
```

### Run the application

```bash
npm start
```

Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Testing the application

### End-to-end

Use the following command to run the tests with **cypress**:

```bash
npm run cypress
```

---

[Sami Lafrance](https://www.samilafrance.com/) & [Elise Echasseriau](https://www.eliseechasseriau.com/)
