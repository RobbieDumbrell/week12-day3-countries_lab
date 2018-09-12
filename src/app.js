const CountryFinder = require('./models/country_finder.js');
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryFinder = new CountryFinder();
  countryFinder.getAllData();

  const selectView = new SelectView();
  selectView.bindEvents();

  countryFinder.bindEvents();

  const countryInfoView = new CountryInfoView;
  countryInfoView.bindEvents();

});
