// import { setLocalStorage } from "./utils.mjs";
// import { getLocalStorage } from "./utils.mjs";
// import { loadHeaderFooter } from "./utils.mjs";
// import { findProductById } from "./productData.mjs";
import productDetails from "./productDetails.mjs";
import { getParam } from "./utils.mjs";

const productId = getParam("product");
productDetails(productId);
