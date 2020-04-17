import React, { Component } from 'react'
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl'
import geojson from "../data/geojson"

class GoogleMap extends Component {
    state ={
        visible: false,
        viewport: {
            latitude:49.2624379,
            longitude:-123.2488843,
            zoom: 13
        }
    }

    togglePopup = () => {
        const currentState = this.state.visible;
        this.setState({ visible: !currentState});
    }



    render() {   

        const markers = geojson.features.map((data, i) =>
            <Marker latitude={data.geometry.coordinates[1]} longitude={data.geometry.coordinates[0]} key={i}>
                <div className="map-marker"></div>
                <div className="pop-up">
                    <h3>{data.properties.title}</h3>
                </div>
            </Marker>
        );

        return (
            <div className="map">
                <ReactMapGL 
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({viewport})}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken="pk.eyJ1IjoiaGVsbG9sYW1wcG9zdCIsImEiOiJjanhrYXhmdDcyODgwM3lzOGg1OG50ZmVtIn0.4PNfG_tujoAdey9k61WSdA"
                scrollZoom={false}
                >
                    {markers}
                    <div className="map-controls">
                        <NavigationControl showCompass={false} captureScroll={false}/>
                    </div>
                </ReactMapGL>
            </div>

        )
    }
}

export default GoogleMap
