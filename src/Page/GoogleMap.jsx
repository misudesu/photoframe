import LocationLink from './LocationLink'
const GoogleMap=()=>{
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return(
        <div className='py-5 text-center mt-8 bg-white'>
<h1 className=''>Find Us on Google Maps</h1>
<p>Google map</p>
<LocationLink   defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}/>
        </div>
    )
}
export default GoogleMap;