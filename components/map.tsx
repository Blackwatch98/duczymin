import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Marker from "./marker";


export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
    });

    if (!isLoaded) return <div>Ładuję się</div>;

    return (
        <GoogleMap
            zoom = {15}
            center = {{ lat: 51.7903098959238, lng: 19.340856562499862 }}
            mapContainerStyle = { {width: "100%", height: "75vh" }}
        >
            <Marker
            lat={51.7903098959238}
            lng={19.340856562499862}
            name="My Marker"
            color="red"
          />
        </GoogleMap>
    );
}