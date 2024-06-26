import cors from 'cors';
import express from 'express';
import { faker } from '@faker-js/faker';
import * as levenshtein from 'fastest-levenshtein';

import companies from './data/companies.json';
import { createdInvertedIndex, splitTextToTokens } from './utils/createInvertedIndex';
import { InvertedIndexType } from './utils/invertedIndex.type';
import { LEVENSHTEIN_THRESHOLD, MIN_TOKEN_LENGTH } from './constants';

const COINS = ['btc', 'eth', 'ada', 'bnb', 'trx', 'doge', 'dot', 'eos'];
let INVERTED_INDEX_CACHE: InvertedIndexType;

const app = express();
const port = 3001;

app.use(cors());

app.get('/companies', (req, res) => {
  const searchQuery = req.query.query as string | undefined;
  if (!searchQuery || searchQuery.length < MIN_TOKEN_LENGTH) {
    return res.send(companies);
  }

  const tokens = splitTextToTokens(searchQuery);
  const matchingCompanyIndexes: Set<number> = new Set();

  tokens.forEach((queryToken) => {
    Object.keys(INVERTED_INDEX_CACHE).forEach((invertedIndexToken) => {
      if (levenshtein.distance(queryToken, invertedIndexToken) <= LEVENSHTEIN_THRESHOLD) {
        INVERTED_INDEX_CACHE[invertedIndexToken].forEach((invertedIndexValue) => {
          matchingCompanyIndexes.add(invertedIndexValue);
        });
      }
    });
  });

  const filteredCompanies = Array.from(matchingCompanyIndexes).map((index) => companies[index]);

  return res.send(filteredCompanies);
});

app.get('/companies/random', (_req, res) => {
  const randomCompanies = Array(100)
    .fill(undefined)
    .map((_, index) => {
      const id = index + 1;

      return {
        id,
        name: faker.company.name(),
        logoUrl: `https://picsum.photos/seed/ubit-${id}/200`,
        coins: faker.helpers.arrayElements(COINS, faker.datatype.number({ min: 1, max: 4 })),
      };
    });

  res.send(randomCompanies);
});

app.listen(port, () => {
  INVERTED_INDEX_CACHE = createdInvertedIndex(companies);

  // eslint-disable-next-line no-console
  console.log(`API listening on port ${port}`);
});
