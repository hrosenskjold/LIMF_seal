import * as EL from "esri-leaflet";
import states from "./states";

// create points layer
const pointsFeatureLayer = EL.featureLayer({
    url:
      "https://gis.aalborg.dk/akpe/rest/services/Limf/Limf_Aarsrap2017/FeatureServer/0",

  }).addTo(map);
  