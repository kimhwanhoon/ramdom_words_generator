# Random Words Generator

Hello, this simple Next.js serverless app has a random word generation API feature.

It uses the `an-array-of-english-words` library to generate random words. The development time was `30 minutes`.

This is built only for api purpose.

Only server side is supported.

Fetch from `/api/v1/words` to get random words.

## Parameters

- `minWordLength`: minimum length of the word
- `maxWordLength`: maximum length of the word
- `numberOfWords`: number of words to return

## Returned Data

- `words`: array of words

## Example

### Request

`/api/v1/words?minWordLength=5&maxWordLength=10&numberOfWords=10`

### Response

`["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]`
