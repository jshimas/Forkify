import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes find for your query. Please try again!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }

  addHandlerSort(handler) {
    document
      .querySelector('.search-results')
      .addEventListener('click', function (e) {
        e.preventDefault();
        const btn = e.target.closest('.btn--sort');
        if (!btn) return;
        console.log('Veikia');
        handler();
      });
  }
}
export default new ResultsView();
