"use strict";

import { getURLParams } from "./utils.js";
import config from "../config.js";

const { API_KEY } = config;

// Parsing the URL to get the imdbID

window.onload = async function () {
  let { id } = getURLParams(document.location.href);
  console.log({ id, API_KEY });
  // fetch data from the API
  let res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
  );
  let data = await res.json();

  console.log({ data });
};
