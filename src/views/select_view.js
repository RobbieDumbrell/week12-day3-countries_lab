const PubSub = require('../helpers/pub_sub.js');

const SelectView = function () {

}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('CountryFinder:countries-ready', (event) => {
        const allCountries = event.detail;
        this.populateDropdown(allCountries);
    })

    const countryDropdown = document.querySelector('#countries');
    countryDropdown.addEventListener('change', () =>{
        const countryIndex = countryDropdown.value;
        PubSub.publish('SelectView:country-selected', countryIndex);
    })
}

SelectView.prototype.populateDropdown = function (allCountries) {
    const countryDropdown = document.querySelector('#countries');
    allCountries.forEach((country, index) => {
        const newOption = document.createElement('option');
        newOption.textContent = country.name;
        newOption.value = index;
        countryDropdown.appendChild(newOption);
    })
}

module.exports = SelectView;