# Fuzzy Matching Coding Challenge

This is a fuzzy matching coding challenge :).

**Description:**

- this application show list of items with names.

- user can use `input` field for filtering items.

- this application can return meaningful results to the user even when there are typos in the search query (e.g. “gruop” instead of “group”).

- this task took about two hours of work

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

  *Advantages:* can be used in embedded database

  *Disadvantages:* complexity, `O(n\*m)`

- use AI models

  *Advantages:* opportunity to create complex requests

  *Disadvantages:* set up & support infrastructure / integrations with 3-party services

- use search engine :) (Lucene algorithm under the hood)

  *Advantages:* high-performance tool out of the box

  *Disadvantages:* set up and support infrastructure
