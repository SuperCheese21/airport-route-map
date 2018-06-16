const airportData = require('./data/airports.json');
const routes = require('./data/routes.json');

function getRoutes(icao) {
    return routes[icao];
}

function getAirportCoords(icao) {
    const airport = airportData[icao];
    if (airport) {
        return {
            lat: parseFloat(airport.latitude_deg),
            lng: parseFloat(airport.longitude_deg)
        }
    }
}

function getRouteCoords(icao) {
    const routeData = routes[icao];
    const coords = {};

    if (routeData) {
        routeData.forEach(route => {
            const icao = route.destination;
            const c = getAirportCoords(icao);
            if (c) coords[icao] = c;
        });
        return coords;
    }
}

module.exports = {
    routes: getRoutes,
    airportCoords: getAirportCoords,
    routeCoords: getRouteCoords
};
