const airportData = require('./data/airports.json');
const routes = require('./data/routes.json');

function getRoutes(icao) {
    return routes[icao];
}

function getAirlines(icao1, icao2) {
    const routes = getRoutes(icao1);
    if (routes) {
        for (var i = 0; i < routes.length; i++) {
            if (routes[i].destination == icao2) {
                return routes[i];
            }
        }
    }
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
    airlines: getAirlines,
    airportCoords: getAirportCoords,
    routeCoords: getRouteCoords
};
