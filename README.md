# Fuzzy Matching Coding Challenge

Welcome to the Fuzzy Matching Coding Challenge!

This application demonstrates the implementation of fuzzy matching for filtering items by their names.

**Description:**

This application showcases a list of items and provides a search input field for filtering these items.

It is designed to return meaningful results to the user even in cases of typos in the search query (e.g., “gruop” instead of “group”).

**Features:**

- Display a list of items with their names

- Provide an input field for filtering items

- Implement fuzzy matching to handle typos in the search query.

**Stack:** React, Node.js, TypeScript.

## How to run

### Run API

1. Go to `api` folder

2. Install dependencies

   `yarn install`

3. Run locally

   `yarn start`

### Run WEB

1. Go to `web` folder

2. Install dependencies

   `yarn install`

3. Run locally

   `yarn start`

## Alternative approaches

Fuzzy matching search has different solutions:

- use different algorithms (Levenshtein, Damerau-Levenshtein, Jaro–Winkler and etc.)

  _Advantages:_ can be used in embedded database

  _Disadvantages:_ complexity, `O(n\*m)`

- use AI models

  _Advantages:_ opportunity to create complex requests

  _Disadvantages:_ set up & support infrastructure / integrations with 3-party services

- use search engine :) (Lucene algorithm under the hood)

  _Advantages:_ high-performance tool out of the box

  _Disadvantages:_ set up and support infrastructure
