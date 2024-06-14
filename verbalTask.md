_Verbal task_:

What alternative approaches would you consider if you had more time to work on it? What are the advantages and disadvantages for each of them?

_Answer_:

Fuzzy matching search has different solutions:

- use different algorithms (Levenshtein, Damerau-Levenshtein, Jaro–Winkler and etc.)
  Advantages: can be used in embedded database
  Disadvantages: complexity, O(n\*m)
- use AI models
  Advantages: opportunity to create complex requests
  Disadvantages: set up & support infrastructure / integrations with 3-party services
- use search engine :) (Lucene algorithm under the hood)
  Advantages: high-performance tool out of the box
  Disadvantages: set up and support infrastructure
