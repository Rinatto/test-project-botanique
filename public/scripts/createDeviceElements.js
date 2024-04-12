export function createDeviceElements(devices) {
  const templateElement = document.getElementById("device-template");
  if (!templateElement) {
    console.error("Template element 'device-template' not found");
    return;
  }
  const template = templateElement.content;
  const devicesContainer = document.querySelector(".devices");

  // Удаление только элементов устройств, не трогая шаблон
  const existingDevices = devicesContainer.querySelectorAll(".device");
  existingDevices.forEach(device => device.remove());

  devices.forEach((device) => {
    const clone = document.importNode(template, true);
    clone.querySelector("img").src = device.imgSrc;
    clone.querySelector("img").alt = device.altText;
    clone.querySelector("p").textContent = device.description;
    const clockImg = clone.querySelectorAll("img")[1];
    if (clockImg) {
      clockImg.src = device.clockImgSrc;
      clockImg.alt = device.clockAlt;
    }

    clone.querySelector(".device").addEventListener("click", () => {
      window.location.href = `/analytics?device=${encodeURIComponent(device.description)}`;
    });

    devicesContainer.appendChild(clone);
  });
}