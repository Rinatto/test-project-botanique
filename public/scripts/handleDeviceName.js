export function handleDeviceName() {
    const params = new URLSearchParams(window.location.search);
    const deviceName = params.get('device');
    
    if (deviceName) {
      document.getElementById('deviceName').textContent = decodeURIComponent(deviceName);
    }
  }