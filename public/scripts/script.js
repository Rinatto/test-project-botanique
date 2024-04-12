import { navigateToMain, navigateToAnalytics } from "./navigation.js";
import { fetchDevices } from "./fetchDevices.js";
import { createDeviceElements } from "./createDeviceElements.js";
import { handleDeviceName } from "./handleDeviceName.js";
import { setupClientFilter } from "./clientFilter.js";

const buttonToMenu = document.querySelector("#goToMain");
const buttonGoToAnalytics = document.querySelector("#goToAnalytics");

buttonToMenu.addEventListener("click", navigateToMain);
buttonGoToAnalytics.addEventListener("click", navigateToAnalytics);

handleDeviceName();

let devicesData = []; 

async function init() {
  const devices = await fetchDevices();
  
  if (devices) {
    devicesData = devices; 
    createDeviceElements(devices);
    setupClientFilter(devices);
  }
}

document.addEventListener("DOMContentLoaded", init);
