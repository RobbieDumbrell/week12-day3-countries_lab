const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const CountryFinder = function () {
    this.data = null;
}

CountryFinder.prototype.getAllData = function () {
    const request = new Request('https://restcountries.eu/');
}