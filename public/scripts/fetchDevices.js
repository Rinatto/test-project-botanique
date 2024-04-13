export async function fetchDevices() {
    try {
      const apiUrl = 'http://testinformation.ru/';
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