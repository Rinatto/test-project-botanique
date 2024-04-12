export async function fetchDevices() {
    try {
      const apiUrl = 'http://80.78.243.62/data/devices.json';
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const devices = await response.json();
      return devices;
    } catch (error) {
      console.error("Ошибка при получении данных об устройствах:", error);
    }
  }