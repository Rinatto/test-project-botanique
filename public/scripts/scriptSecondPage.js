import { navigateToMain, navigateToAnalytics } from "./navigation.js";
import { handleDeviceName } from "./handleDeviceName.js";

const buttonToMenu = document.querySelector("#goToMain");
const buttonGoToAnalytics = document.querySelector("#goToAnalytics");

buttonToMenu.addEventListener("click", navigateToMain);
buttonGoToAnalytics.addEventListener("click", navigateToAnalytics);

handleDeviceName();