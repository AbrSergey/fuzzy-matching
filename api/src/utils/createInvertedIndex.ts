import { MIN_TOKEN_LENGTH } from './invertedIndex.constants';
import { InvertedIndexType } from './invertedIndex.type';

type CompanyType = {
  id: number;
  name: string;
  logoUrl: string;
  coins: string[];
};

function removeDuplicates(array: string[]): string[] {
  return Array.from(new Set(array));
}

export function splitTextToTokens(text: string): string[] {
  const tokens = text
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ')
    .filter((token) => token.length >= MIN_TOKEN_LENGTH);

  return removeDuplicates(tokens);
}

export function createdInvertedIndex(companyList: CompanyType[]): InvertedIndexType {
  const invertedIndex: { [key: string]: number[] } = {};

  companyList.forEach((company, index) => {
    const tokens = splitTextToTokens(company.name);

    tokens.forEach((token) => {
      if (invertedIndex[token] !== undefined) {
        invertedIndex[token].push(index);
      } else {
        invertedIndex[token] = [index];
      }
    });
  });

  return invertedIndex;
}
