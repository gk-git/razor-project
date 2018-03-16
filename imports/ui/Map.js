import React from 'react';

function showmap(ref) {
    var mapOptions = {
        zoom: 8,
        scrollwheel: false,
        center: new google.maps.LatLng(-34.397, 150.644),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(ref, mapOptions);
}

export default class Map extends React.Component {
    componentDidMount() {
        const map = this.map
        showmap(map)
    }
    render() {
        return (<div id="geo">
            <div className="container">
                <div className="section-title text-center center">
                    <h2>Geolocation</h2>
                    <hr />
                </div>
                <div className="row">
                </div>
            </div>
            <div>
                <div ref={(el) => this.map = el} id="map_canvas" style={{ height: 300 }} />
            </div>
        </div>
        )

    }
}