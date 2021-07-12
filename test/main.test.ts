import { getSaleGames, eshopApiResponse } from '../src/main';

test('getSaleGames', async () => {
  jest.setTimeout(30000);
  const games = await getSaleGames();

  expect(games).toBeInstanceOf(Object);
});
