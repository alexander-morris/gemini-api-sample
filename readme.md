# Gemini Sample Repo

This repo requires a Gemini Key. 

Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to get an API key.

## RAG and Long-Context Usage
Gemini supports long-context file storage via the API, which is described [here](https://ai.google.dev/gemini-api/docs/long-context).

*Context Caching* provides API management and usage of the key components, and supports garbage collection to reduce costs.

`./RAG.js` provides a demo of the upload and RAG functionality.

To delete a file after it's been uploaded, we can use: `await cacheManager.delete(cacheName);`

