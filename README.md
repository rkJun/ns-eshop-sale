# ns-eshop-sale

> `ns-eshop-sale` is a package written in Node.js that fetches Nintendo Switch's eShop Games on Sale.

## Installation

```
npm install ns-eshop-sale
```

## Usage

```js
import { getSaleGames } from 'ns-eshop-sale';

(async() => {
  console.log (await getSaleGames());
})();
```

## API

### getSaleGames(apiParams: ApiParams): Promise<ApiResponse>

### ApiParams

```js
  country?: string;
  language?: string;
  count?: number;
  offset?: number;
```

### ApiResponse

```js
  contents: Content[];
  length: number;
  offset: number;
  total: number;

```