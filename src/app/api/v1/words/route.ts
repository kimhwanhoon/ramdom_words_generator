import { NextRequest, NextResponse } from 'next/server'
import words from 'an-array-of-english-words'

export const GET = async (req: NextRequest) => {
  const params = {
    minWordLength: req.nextUrl.searchParams.get('minWordLength'),
    maxWordLength: req.nextUrl.searchParams.get('maxWordLength'),
    numberOfWords: req.nextUrl.searchParams.get('numberOfWords'),
  }

  const minWordLength = params.minWordLength
    ? parseInt(params.minWordLength)
    : 1
  const maxWordLength = params.maxWordLength
    ? parseInt(params.maxWordLength)
    : 1000
  const numberOfWords = params.numberOfWords
    ? parseInt(params.numberOfWords)
    : 1

  const filteredRandomWords = words
    .filter((word) => word.length <= maxWordLength)
    .filter((word) => word.length >= minWordLength)

  const randomIndexes = []
  for (let i = 0; i < numberOfWords; i++) {
    randomIndexes.push(Math.floor(Math.random() * filteredRandomWords.length))
  }

  const randomWords = randomIndexes.map((index) => filteredRandomWords[index])

  return NextResponse.json({ words: randomWords })
}
