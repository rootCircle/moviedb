export class Generator {
  /**
   * @param  {import('./typedefs.js').SearchResult} movieSearchResObj
   */
  static generateSearchResultCard(movieSearchResObj) {
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
    // title
    let title = document.createElement("h2");
    title.classList.add("vinyl-info-title", "clickable");
    title.innerText = movieSearchResObj.Title;
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

  static generateMainCard;
}
