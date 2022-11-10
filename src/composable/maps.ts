import { Geolocation } from "@capacitor/geolocation";
import { setupConfig } from "@ionic/core";

export function meuMapa() {
    const pegarCordenadas= async()=> {
        const coordinates = await Geolocation.getCurrentPosition();

        console.log('Current position:', coordinates);
    };

    return{
        pegarCordenadas
    }
}