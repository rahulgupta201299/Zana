import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import serviceActionCreator from "@/Redux/serviceActionCreator";
import Network from "@/Configurations/Network";
import {  geoLocationActions } from "../Actions";
import {  GeolocationType } from "../Types";



const network = new Network();

async function geoLocationService({ lat, lng }: { lat: number; lng: number }): Promise<GeolocationType> {
  const options = {
    url: `/api/v1/country/location-currency?lat=${lat}&lng=${lng}`,
    method: API_METHOD_ENUM.GET,
  };

  const response = await network.request(options);
  const { data } = response;
   return data
    
}

const geoLocationServiceAction = serviceActionCreator(geoLocationActions, geoLocationService);

export default geoLocationServiceAction