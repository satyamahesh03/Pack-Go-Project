import React from "react";
import { useParams } from "react-router-dom";

// Import all package components
import GoldenTriangleIndia from "./GoldenTriangleIndia";
import GoldenTriangleAmritsar from "./GoldenTriangleAmritsar";
import SrinagarLeh from "./SrinagarLeh";
import ChardhamYatra from "./ChardhaYatra";
import DarjeelingGangtok from "./DarjeelingGangtok";
import GarhwalKumaon from "./Garhwalkumaon";
import GoldenTriangleGoa from "./GoldenTriangleGoa";
import Himachal from "./Himachal";
import Karnataka from "./Karnataka";
import Kerala from "./Kerala";
import Ladak from "./Ladak";
import Orrisa from "./Orrisa";
import GoldenTriangleVaranasi from "./GoldenTriangleVaranasi";
import Rajasthan from "./Rajasthan";
import GoldenTriangleShimla from "./GoldenTriangleShimla";
import AssamSundarbans from "./AssamSundarbans";

const packageComponents = {
  "golden-triangle-india": GoldenTriangleIndia,
  "golden-triangle-amritsar": GoldenTriangleAmritsar,
  "srinagar-leh": SrinagarLeh,
  "chardham-yatra": ChardhamYatra,
  "darjeeling-gangtok": DarjeelingGangtok,
  "garhwalkumaon": GarhwalKumaon,
  "golden-triangle-goa": GoldenTriangleGoa,
  "himachal": Himachal,
  "karnataka": Karnataka,
  "kerala": Kerala,
  "ladak": Ladak,
  "orrisa": Orrisa,
  "golden-triangle-varanasi": GoldenTriangleVaranasi,
  "rajasthan": Rajasthan,
  "golden-triangle-shimla": GoldenTriangleShimla,
  "assam-sundarbans": AssamSundarbans,
};

const PackageDetail = () => {
  const { packageName } = useParams();
  const Component = packageComponents[packageName];

  return Component ? <Component /> : <h1>Package Not Found</h1>;
};

export default PackageDetail;