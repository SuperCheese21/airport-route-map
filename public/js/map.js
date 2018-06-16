const iata = 'IND';
let routes = {};
let coords = {};

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.828175,
            lng: -98.5795
        },
        zoom: 5
    });

    $.getJSON('js/map_style.json', json => {
        map.setOptions({
            styles: json
        });
    });

    $.getJSON('/api/routes/' + iata, json => {
        routes = json;
    })

    $.getJSON('/api/coords/routes/' + iata, json => {
        coords = json;
    });
}
