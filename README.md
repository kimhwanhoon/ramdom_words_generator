# Random Words Generator

Welcome to the Random Words Generator API - a lightning-fast, serverless solution built with Next.js that provides random English words on demand.

This minimalist API harnesses the comprehensive `an-array-of-english-words` library to deliver random word selections with configurable parameters. Built as a focused, server-side API endpoint, it offers a clean interface for generating random word collections.

Key Features:

- ⚡️ Blazing fast serverless architecture
- 🎯 Precise word length control
- 📦 Simple REST API interface
- 🔄 Customizable word count
- 🛠 Built with modern Next.js

Get started by making a GET request to `/api/v1/words` with your desired parameters.

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
