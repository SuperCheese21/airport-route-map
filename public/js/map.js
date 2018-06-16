let routes = {}, coords = {}, paths = {};

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
    const inactiveIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 4,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 2.5
    };
    const activeIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: 'yellow',
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 2.5
    };
    
    routes.forEach(airport => {
        const icao = airport.destination;
        const marker = createMarker(map, icao, inactiveIcon);
        const polyline = createPolyline(map, icao, inactiveIcon);

        marker.addListener('mouseover', () => {
            marker.setOptions({ icon: activeIcon });
            polyline.setOptions({
                strokeColor: 'yellow',
                strokeWeight: 2
            });
        });
        marker.addListener('mouseout', () => {
            marker.setOptions({ icon: inactiveIcon });
            polyline.setOptions({
                strokeColor: 'red',
                strokeWeight: 2
            });
        });
        marker.addListener('click', () => {
            alert(icao);
        });

        paths[icao] = {
            marker: marker,
            polyline: polyline
        };
    });

    return paths;
}

function createMarker(map, icao, icon) {
    return new google.maps.Marker({
        position: coords[icao],
        icon: icon,
        title: icao,
        map: map
    });
}

function createPolyline(map, icao) {
    return new google.maps.Polyline({
        path: [coords[homeIcao], coords[icao]],
        geodesic: true,
        strokeColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 1.2,
        clickable: false,
        map: map
    });
}
