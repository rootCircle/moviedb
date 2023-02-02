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
