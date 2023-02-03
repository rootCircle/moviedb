# moviedb

A small website using [OMDb API](https://www.OMDbapi.com/) to fetch movie details

## To try it out

## Clone the project locally

```bash
git clone https://github.com/iiitl/moviedb.git
```

## Put the OMDb API key in a config file

For the OMDb API to work you'll need an API key.
You can get one for free from [here](https://www.omdbapi.com/apikey.aspx)

After you get an API key, create a file called `config.js` in the project root and export an object with `API_KEY` set

```javascript
// Generic config.js file
export default {
  API_KEY: "your_api_key",
};
```

## Start a server

You can use an extension called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to start a live server in the project root

After you start the server, live server automatically opens a browser window with the index.html file open

## Contributing Guidelines

Contributing guidelines for this repository are available [here](CONTRIBUTING.md). Please read them before you start contributing.
