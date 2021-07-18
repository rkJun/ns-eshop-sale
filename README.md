# ns-eshop-sale

> `ns-eshop-sale` is a package written in Node.js that fetches Nintendo Switch's eShop Games on Sale.

## Installation

```
npm install ns-eshop-sale
```

## Usage

```js
import { getSaleGames } from 'ns-eshop-sale';

(async () => {
  console.log(
    await getSaleGames({ country: 'KR', language: 'ko', count: 3, offset: 0 })
  );
})();
```

## API

### getSaleGames(apiParams: ApiParams): Promise&lt;ApiResponse&gt;

### ApiParams

```js
  country?: string;
  language?: string;
  count?: number;
  offset?: number;
```

### ApiResponse

```js
{
  contents: Content[];
  length: number;
  offset: number;
  total: number;
}
```

### ApiResponse Sample
```json
{
  "contents": [
    {
      "content_type": "title",
      "dominant_colors": [
        "ffffff",
        "000000",
        "ff0000"
      ],
      "formal_name": "다함께 쿠키요미3 -아버지가 아들에게-",
      "hero_banner_url": "https://img-eshop.cdn.nintendo.net/i/28210c027b859c248da8a4a17b1d4c7266f0dae81daeec151897ebfd2d2e4d0e.jpg",
      ...
      ...
    },
    ...
  ],
  "length": 10,
  "offset": 0,
  "total": 54
}
```

## Known Issues
- This API uses 'ec.nintendo.com' and available on the backend. (it has CORS issue on the client).

## Samples using this api
- https://ns-eshop-sale-nuxt.rkjun.com/ [Git Repo](https://github.com/rkJun/ns-eshop-sale-nuxt)

## Related

- [Shy07/switch-eshop.md - Nintendo Switch eShop API](https://gist.github.com/Shy07/822eff655ec8da2717f269bc21c65976)
