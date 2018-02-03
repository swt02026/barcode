function startScan() {
  cordova.plugins.barcodeScanner.scan(
      (result) => {
        let url = new URL(result.text);
        if (url.hostname === 'fish.mowei.com.tw') window.location = result.text;
        alert('Error QRCode: ' + url.hostname);
      },
      (error) => {
        alert('Scanning failed: ' + error);
      });
}

function init() {
  $('#startScan').click(startScan);
}

document.addEventListener('deviceready', init, false);
