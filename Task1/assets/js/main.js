new Sidebar().renderSidebar();
const countries = new Countries().init('all');

document.querySelector('.sidebar').addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.sidebar__item')) {
        if (target.nodeName === 'LABEL') {
            const region = target.textContent.toLowerCase();
            preloader.style.display = 'block';

            if (region === 'all') {
                location.reload();
            }

            countries.renderCountriesWrapper().getCountries(`region\\${region}`);
        } else if (target.nodeName === 'INPUT') {
            const region = target.value.toLowerCase();
            preloader.style.display = 'block';

            if (region === 'all') {
                location.reload();
            }

            countries.renderCountriesWrapper().getCountries(`region\\${region}`);
        }
    }
});