function startScan() {
  cordova.plugins.barcodeScanner.scan(
      (result) => {
        let url = new URL(result.text);
        if (url.hostname === 'fish.mowei.com.tw')
          window.location = result.text;
        else
          navigator.notification.alert(
              'Error QRCode: ' + result.text,  // message
              null,                            // callback
              'Scan result',                   // title
              'Sucess'                         // buttonName
          );
      },
      (error) => {
        navigator.notification.alert(
            'Scanning failed: ' + error,  // message
            null,                         // callback
            'Scan result',                // title
            'Rescan'                      // buttonName
        );
      });
}

function init() {
  $('#startScan').click(startScan);
}

document.addEventListener('deviceready', init, false);
