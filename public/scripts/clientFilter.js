import { createDeviceElements } from './createDeviceElements.js';

export function setupClientFilter(devices) {
  const searchInput = document.getElementById('searchInput');
  function handleInput() {
    const searchText = searchInput.value.trim().toLowerCase();
    if (searchText.length === 0) {
      createDeviceElements(devices);
    } else {
      const filteredDevices = devices.filter(device => 
        device.description && device.description.toLowerCase().includes(searchText)
      );
      createDeviceElements(filteredDevices);
    }
  }

  searchInput.removeEventListener('input', handleInput); // Предотвращение накопления обработчиков
  searchInput.addEventListener('input', handleInput);
}