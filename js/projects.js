const arr = [0, 0, 0, 0];

export const projectMarkup = arr.map(
  (el) =>
    `<div class="portfolio-item">
          <div class="portfolio-item-thumbnail">
            <img src="img/portfolio/1.jpg" alt="" />
          </div>
          <h3 class="portfolio-item-title">my website 2</h3>
          <button type="button" class="btn view-project-btn">
            view project
          </button>
          <div class="portfolio-item-details">
            <div class="description">
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
            <div class="general-info">
              <ul>
                <li>Created - <span>1 jan 2001</span></li>
                <li>technologies used - <span>html,css </span></li>
                <li>role - <span>frontend</span></li>
                <li>
                  view live -
                  <span><a href="#" target="_blank">domain.com</a></span>
                </li>
              </ul>
            </div>
            <div class="mt-4 row align-items-center justify-items-center">
              <button type="button" class="btn">get source code</button>
            </div>
          </div>
      </div>`
);

console.log(projectMarkup);
