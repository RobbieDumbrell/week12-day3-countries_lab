const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function () {

}

CountryInfoView.prototype.bindEvents = function () {
    PubSub.subscribe('CountryFinder:country-found', (event) => {
        const foundCountry = event.detail;

        const countryDiv = document.querySelector('#country');

        countryDiv.innerHTML = '';

        const countryName = document.createElement('h2');
        countryName.className = 'country-name';
        countryName.textContent = foundCountry.name;
        countryDiv.appendChild(countryName);

        const countryFlag = document.createElement('img');
        countryFlag.className = 'country-flag';
        countryFlag.src = foundCountry.flag;
        countryDiv.appendChild(countryFlag);

        const countryRegionHeader = document.createElement('h3');
        countryRegionHeader.className = 'country-region-header';
        countryRegionHeader.textContent = 'Region:'
        countryDiv.appendChild(countryRegionHeader);

        const countryRegion = document.createElement('h4');
        countryRegion.className = 'country-region';
        countryRegion.textContent = foundCountry.region;
        countryDiv.appendChild(countryRegion);

        const countryLanguagesHeader = document.createElement('h3');
        countryLanguagesHeader.className = 'country-languages-header';
        countryLanguagesHeader.textContent = 'Languages:'
        countryDiv.appendChild(countryLanguagesHeader);

        const countryLanguageList = document.createElement('ul');
        const countryLangauges = foundCountry.languages;
        countryLangauges.forEach((language) => {
            const newLi = document.createElement('li');
            newLi.textContent = language.name;
            countryLanguageList.appendChild(newLi);
        })

        countryLanguageList.className = ('country-languages');
        countryDiv.appendChild(countryLanguageList);
    })
}

module.exports = CountryInfoView;