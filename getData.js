const airportData = require('./data/airports.json');
const routes = require('./data/routes.json');

function getRoutes(iata) {
    return routes[iata];
}

function getAirportCoords(iata) {
    const airport = airportData[iata];
    if (airport) {
        return {
            lat: airport.latitude_deg,
            lng: airport.longitude_deg
        }
    }
}

function getRouteCoords(iata) {
    const routeData = routes[iata];
    const mainCoords = getAirportCoords(iata);
    const coords = {};

    if (routeData && mainCoords) {
        coords[iata] = mainCoords;
        routeData.forEach(route => {
            const iata = route.destination;
            const c = getAirportCoords(iata);
            if (c) coords[iata] = c;
        });
        return coords;
    }
}

module.exports = {
    routes: getRoutes,
    airportCoords: getAirportCoords,
    routeCoords: getRouteCoords
};
