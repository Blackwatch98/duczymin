import { GoogleMap, useLoadScript, MarkerF, OverlayView, InfoWindow } from "@react-google-maps/api";
/*import Marker from "./marker";*/


export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
    });

    if (!isLoaded) return <div>Ładuję się</div>;

    return (
        <GoogleMap
            zoom = {17}
            center = {{ lat: 51.7903098959238, lng: 19.340856562499862 }}
            mapContainerStyle = { {width: "100%", height: "75vh" }}
        >
            <MarkerF
                key="marker_1"
                position={{
                    lat: 51.7903098959238,
                    lng: 19.340856562499862
                }}
                icon={{

                    url: '/markerIcon.png',
            
                    anchor: new google.maps.Point(30, 55),
            
                    scaledSize: new google.maps.Size(60, 60)
            
                }}
            />
            <InfoWindow>
                TEST
            </InfoWindow>
        </GoogleMap>
    );
}