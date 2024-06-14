function removeDuplicates(array: string[]): string[] {
  return Array.from(new Set(array));
}

function splitTextToTokens(text: string): string[] {
  return text
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(' ')
    .filter((token) => token.length > 1);
}

export default function createdInvertedIndex(companyList: { name: string }[]): {
  [key: string]: number[];
} {
  const invertedIndex: { [key: string]: number[] } = {};

  companyList.forEach((company, index) => {
    const tokens = removeDuplicates(splitTextToTokens(company.name));

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
