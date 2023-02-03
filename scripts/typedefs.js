export class SearchResult {
  /**
   * @param  {string} Title Result title
   * @param  {number} Year Release year
   * @param  {string} imdbID IMDB ID
   * @param  {("Movie"|"Series"|"Episode")} Type Result type
   * @param  {string} Poster Poster image URL
   */
  constructor(title, year, imdbID, type, poster) {
    this.Title = title;
    this.Year = year;
    this.imdbID = imdbID;
    this.Type = type;
    this.Poster = poster;
  }
}

// TODO: Add typedefs for Movie class
export class Movie {
  /**
   */
  constructor() {
    // A generic JSON Response: {"Title":"Tom Cruise: An Eternal Youth","Year":"2020","Rated":"N/A","Released":"05 Oct 2020","Runtime":"53 min","Genre":"Documentary, Biography","Director":"Régis Brochier","Writer":"Régis Brochier","Actors":"Tom Cruise, Nicole Kidman, Dany Benedito","Plot":"After 40 years, Tom Cruise continues to push the envelope in film. Exposing one's heart to the world through their work is not only risky business, as far as Cruise is concerned, it is the only way to achieve an end that feels complete.","Language":"English","Country":"France","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BNmU5ZWQzOTQtMDhhMC00YTIwLTk5MGEtMzVkNDdiNGEyZTVlXkEyXkFqcGdeQXVyMTIzNTI5NTM1._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"}],"Metascore":"N/A","imdbRating":"6.7","imdbVotes":"212","imdbID":"tt13177242","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}
  }
}
