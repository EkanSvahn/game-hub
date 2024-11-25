# Game Hub

Game Hub is a web application built with TypeScript that allows users to explore and discover various games. The project leverages the RAWG video game database to fetch comprehensive details about different games.

## Features

- **Game Exploration**: Browse and search for a wide variety of games.
- **Detailed Game Information**: View detailed information about each game, including genres and popularity.
- **Error Handling**: Graceful handling of errors with informative messages.

## Installation and Setup

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/EkanSvahn/game-hub.git
    cd game-hub
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    npm run dev
    ```

## Usage

Once the application is running, you can:

- **Browse Games**: Navigate through the list of available games.
- **Search Games**: Use the search functionality to find specific games.
- **View Game Details**: Click on a game to see detailed information about it.

## API Client

The project includes an API client to interact with the RAWG video game database:

```typescript
import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7ec73e4d1adf4e69a031afc2a48ad1b2",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default APIClient;
```
## Contributing
Contributions are welcome! Please fork the repository, make your changes, and open a pull request.
