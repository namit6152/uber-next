import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

const Map = () => {
  return <Wrapper id="map"></Wrapper>;
};
const Wrapper = tw.div`
flex-1 bg-red-100 mb-5 
`;
export default Map;
