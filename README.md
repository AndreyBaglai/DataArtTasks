# Frontend test tasks

1. Show the list of all countries from API (https://restcountries.eu/#api-endpoints-all).
   While countries are not loaded yet show loader.
   Display country as a card with next info:

-   flag
-   country name
-   capital
-   region
-   population
-   list of all timezones that country has (example: "Timezones: UTC+07:00, UTC+08:00, UTC+10:00")
-   list of all currencies for the country ( code + symbol, example: "Currencies: USD \$, EUR €")
-   list of country name translation - only for languages "de", "es", "it" (example:
    "Translations:
    de: Ukraine,
    es: Ucrania,
    it: Ucraina
    ")

    Add sidebar on the left side of the page. It should contain radiobuttons for filtering countries by region. List of regions: Africa, Americas, Asia, Europe, Oceania.
    
    Behaviour: when I click on radiobutton with label Europe, I want to see the list of countries only from Europe region (Check https://restcountries.eu/#api-endpoints-region).

Light variant: to simplify task, you can use jQuery. If you don't now how to work with xhr requests in JavaScript, instead of loading countries from API, you can create global array with countries in the file and work with it.

2. There is an array of users:
  const users = [{
    id: 'as23'
    nick: 'Octopus',
    firstName: 'John',
    LastName: 'Dou'
   }, {
    id: 'as25'
    nick: 'Star',
    firstName: 'Andy',
    LastName: 'Lee'
   }, {
    id: 'as77'
    nick: 'Wally',
    firstName: 'Liza',
    LastName: 'Corty'}]

   Property 'id' of all array elements is always unique (id: 'as23'). Transform this array into an object where object's property key is this id, and value is the array item itself.

   { 'as23' : {}}
