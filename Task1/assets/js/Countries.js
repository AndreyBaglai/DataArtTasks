class Countries {
    init(basePath) {
        this.renderMainSection();
        this.renderCountriesWrapper();
        this.getCountries(basePath);

        return this;
    }

    getCountries(path) {
        fetch(`${API_COUNTRIES}${path}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Failed url`);
                }
            })
            .then((data) => {
                preloader.style.display = 'none';
                this.renderCountries(data);
            });
    }

    renderMainSection() {
        preloader.style.display = 'block';
        this.main = document.createElement('main');
        this.main.className = 'main';

        root.appendChild(this.main);
        return this;
    }

    renderCountries(countries) {
        countries.forEach((country) => {
            this.countriesWrp.innerHTML += this.renderCountry(country);
        });
    }

    renderCountriesWrapper() {
        if (this.countriesWrp) {
            this.countriesWrp.remove();
        }
        this.countriesWrp = document.createElement('div');
        this.countriesWrp.className = 'countries-wrapper';

        this.main.appendChild(this.countriesWrp);
        return this;
    }

    renderCountry(country) {
        return `
          <div class="country">
              <img class="country__flag" src="${country.flag}" alt="Flag" />
              <div class="country__description">
                  <h2 class="country__name">${country.name}</h2>
                  <h3 class="country__capital">${country.capital}</h3>
                  <p class="country__region">Region: ${country.region}</p>
                  <p class="country__population">Population: ${country.population}</p>
                  <ul class="timezones">
                      ${this.renderListTimezones('Timezones', country.timezones)}
                  </ul>
                  <p>Currencies: ${this.renderCurrencies(country.currencies)}</p>
                  <ul  class="translations">
                      ${this.renderListTranslations('Translations', country.translations)}
                  </ul>
              </div>
          </div>
      `;
    }

    renderListTimezones(name, list) {
        let markup = '';
        markup = `<h5>${name}:</h5>`;

        list.forEach((item) => {
            markup += `<li>${item}</li>`;
        });

        return markup;
    }

    renderCurrencies(list) {
        let markup = '';

        list.forEach((item, index) => {
            if (item.code === '(none)' || !item.code) return;
            !(list.length - 1 === index) ? (markup += `${item.code} ${item.symbol}, `) : (markup += `${item.code} ${item.symbol}`);
        });

        return markup;
    }

    renderListTranslations(name, translations) {
        const { de, es, it } = translations;
        let markup = '';
        markup = `<h5>${name}</h5>`;

        markup += `<li>de: ${de}</li><li>es: ${es}</li><li>it: ${it}</li>`;

        return markup;
    }
}
