import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkupButton(direction = 'prev') {
    // direction - next (right), prev (left)
    const whichPage =
      direction === 'next' ? this._data.page + 1 : this._data.page - 1;
    return `
    <button data-goto="${whichPage}" class="btn--inline pagination__btn--${direction}">
        <span>Page ${whichPage}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-${
      direction === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
    </button>`;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton('next');
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton('prev');
    }
    // Other page
    if (curPage < numPages) {
      return `${this._generateMarkupButton('prev')}${this._generateMarkupButton(
        'next'
      )}`;
    }
    // Page 1, and NO other pages
    return '';
  }
}

export default new PaginationView();
