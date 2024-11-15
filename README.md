# Random Words Generator

Hi, this is random words generator app.

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
