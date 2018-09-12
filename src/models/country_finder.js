const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const CountryFinder = function () {
    this.allCountries = null;
}

CountryFinder.prototype.getAllData = function () {
    const request = new Request('https://restcountries.eu/rest/v2/all');

    request.get((data) => {
        this.allCountries = data;
        PubSub.publish('CountryFinder:countries-ready', this.allCountries);
        // console.log(this.allCountries);
    })
}

CountryFinder.prototype.bindEvents = function () {
    PubSub.subscribe('SelectView:country-selected', (event) => {
        const countryIndex = event.detail;
        const foundCountry = this.findCountry(countryIndex);
        console.log(this.findCountry(countryIndex));
        PubSub.publish('CountryFinder:country-found', foundCountry);
    })
}

CountryFinder.prototype.findCountry = function (indexNumber) {
    return this.allCountries[indexNumber];
}

module.exports = CountryFinder;