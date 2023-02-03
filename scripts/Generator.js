export class Generator {
  /**
   * Returns a HTML Node containing the details of the search result
   * @param  {import('./typedefs.js').SearchResult} movieSearchResObj
   */
  static generateSearchResultCard(movieSearchResObj, titleClickHandler = null) {
    // click handlers
    function defaultTitleClickHandler(e) {
      console.log({ target: e.target });
    }
    //  divs
    let searchResultNode = document.createElement("div");
    searchResultNode.classList.add("card", "search-result");
    let vinylRecordStyledCard = document.createElement("div");
    vinylRecordStyledCard.classList.add("vinyl-record-card", "glassy");
    let vinylImageWrapper = document.createElement("div");
    vinylImageWrapper.classList.add("vinyl-image-wrapper");
    let vinylInfo = document.createElement("div");
    vinylInfo.classList.add("vinyl-info");
    let vinylOverflowInfo = document.createElement("div");
    vinylOverflowInfo.classList.add("overflow-info");
    // img
    let image = document.createElement("img");
    image.classList.add("vinyl-img");
    // image.width = "400";
    image.loading = "lazy";
    image.height = "400";
    image.src = movieSearchResObj.Poster;
    image.onerror = () => {
      this.onerror = null;
      this.src = "public/not-found.svg";
    };
    // title
    let title = document.createElement("h2");
    title.setAttribute("data-id", movieSearchResObj.imdbID);
    title.classList.add("vinyl-info-title", "clickable");
    title.innerText = movieSearchResObj.Title;
    title.onclick = titleClickHandler || defaultTitleClickHandler;
    // link
    // let link = document.createElement("a");
    // link.href = `/showcase?id=${movieSearchResObj.imdbID}`;
    // link.innerText = movieSearchResObj.Title;
    let dataShowcase = document.createElement("p");
    dataShowcase.classList.add("vinyl-info-data");
    dataShowcase.innerText = `
                Year : ${movieSearchResObj.Year}
                imdbID : ${movieSearchResObj.imdbID}
                Type : ${movieSearchResObj.Type}
    `;

    // Creating the tree
    searchResultNode.appendChild(vinylRecordStyledCard);
    vinylRecordStyledCard.appendChild(vinylImageWrapper);
    vinylImageWrapper.appendChild(image);
    vinylRecordStyledCard.appendChild(vinylInfo);
    vinylInfo.appendChild(vinylOverflowInfo);
    vinylOverflowInfo.appendChild(title);
    // title.appendChild(link);
    vinylOverflowInfo.appendChild(dataShowcase);
    console.log({ movieSearchResObj, searchResultNode });
    return searchResultNode;
  }

  // TODO: Add typedefs for the required parameters
  /**
   * Returns a HTML Node containing the details of the Movie Card
   */
  static generateMainCard({
    Title,
    imdbID,
    Year,
    Runtime,
    imdbRating,
    Ratings,
    Plot,
    Director,
    Writer,
    Poster,
    Actors,
  }) {
    console.log({ Ratings });
    let returnDiv = document.createElement("div");
    returnDiv.innerHTML = `
        <div class="display-card">
          <div class="highlights">
            <div class="poster-display">
              <img
                src="${Poster}"
                alt="image"
              />
            </div>
            <div class="right-bar">
              <div class="title-display">
                <h1 class="title">${Title}</h1>
                <div class="attribute-display">
                  <p class="subtitle">${imdbID}</p>
                  <p class="subtitle">${Year}</p>
                  <p class="subtitle">${Runtime}</p>
                </div>
              </div>
              <div class="rating-display">
                <div class="rating detail badge">
                  <p class="detail-title">IMDB Rating</p>
                  <p class="detail-data">⭐ ${imdbRating}/10</p>
                </div>
              ${Ratings.map((rating) => {
                return `
                  <div class="rating detail badge">
                    <p class="detail-title">${rating.Source}</p>
                    <p class="detail-data">⭐ ${rating.Value}</p>
                  </div>
                  `;
              }).join("")}
                </div>
              <div class="plot-display detail">
                <div class="detail-title">plot</div>
                <div class="detail-data">${Plot}</div>
              </div>
            </div>
          </div>
          <div class="details-display">
            <div class="detail">
              <p class="detail-title">Creators</p>
              <p class="detail-data">${Director} (Director), ${Writer} (Writer)</p>
            </div>
            <div class="detail">
              <p class="detail-title">Actors</p>
              <p class="detail-data">${Actors}</p>
            </div>
          </div>
        </div>`;
    return returnDiv;
  }
}
