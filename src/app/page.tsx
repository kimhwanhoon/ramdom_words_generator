import React from 'react'

function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center h-dvh ">
      <div>
        <h1>Random Words Generator</h1>
        <div className="text-center">
          <p>Hi, this is random words generator app.</p>
          <p>This is built only for api purpose.</p>
          <p>Only server side is supported.</p>
        </div>
      </div>

      <p>
        fetch from <code>/api/v1/words</code> to get random words.
      </p>

      <div className="space-y-1">
        <h2 className="text-center">Parameters</h2>
        <p>
          <code>minWordLength</code>: minimum length of the word
        </p>
        <p>
          <code>maxWordLength</code>: maximum length of the word
        </p>
        <p>
          <code>numberOfWords</code>: number of words to return
        </p>
      </div>

      <div className="space-y-1 text-center">
        <h2 className="text-center">Returned Data</h2>
        <p>
          <code>words</code>: array of words
        </p>
      </div>

      <div className="space-y-1 text-center">
        <h2>Example</h2>
        <div>
          <h3>Request</h3>
          <code>
            /api/v1/words?
            <span className="px-2 font-bold">minWordLength=5</span>&
            <span className="px-2 font-bold">maxWordLength=10</span>&
            <span className="px-2 font-bold">numberOfWords=10</span>
          </code>
        </div>
        <div>
          <h3>Response</h3>
          <code>
            [
            <span className="px-2 font-bold">
              &quot;apple&quot;, &quot;banana&quot;, &quot;cherry&quot;,
              &quot;date&quot;, &quot;elderberry&quot;, &quot;fig&quot;,
              &quot;grape&quot;, &quot;honeydew&quot;, &quot;kiwi&quot;,
              &quot;lemon&quot;
            </span>
            ]
          </code>
        </div>
      </div>
    </main>
  )
}

export default Home
