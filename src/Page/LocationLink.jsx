import GoogleMapReact from 'google-map-react';
const Map = ({ text }) => <div>{text}</div>;

const LocationLink=(props)=>{
    return(
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={props.defaultCenter}
          defaultZoom={props.defaultZoom}
        >
          <Map
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}
export default LocationLink;