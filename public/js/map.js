let routes = {};
let coords = {};

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.828175,
            lng: -98.5795
        },
        zoom: 4,
        disableDefaultUI: true
    });

    $.getJSON('js/map_style.json', json => {
        map.setOptions({
            styles: json
        });
    });

    $.getJSON('/api/coords/routes/' + homeIcao, json => {
        coords = json;
        $.getJSON('/api/routes/' + homeIcao, json => {
            routes = json;
            map.setCenter(coords[homeIcao]);
            plotAirports(map);
        })
    });
}

function plotAirports(map) {
    let paths = {};
    let homeCoords = coords[homeIcao];

    routes.forEach((airport) => {
        const iata = airport.destination;
        paths[iata] = {
            marker: plotMarker(map, iata),
            polyline: plotPolyline(map, iata)
        };
    });

    return paths;
}

function plotMarker(map, iata) {
    const destCoords = coords[iata];
    return new google.maps.Marker({
        position: destCoords,
        title: iata,
        map: map
    });
}

function plotPolyline(map, iata) {
    const homeCoords = coords[homeIcao];
    const destCoords = coords[iata];

    return new google.maps.Polyline({
        path: [homeCoords, destCoords],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 1.5,
        map: map
    });
}
