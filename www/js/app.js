var resultDiv;
function startScan() {
  cordova.plugins.barcodeScanner.scan(
      (result) => {
        var s = 'Result: ' + result.text + '<br/>' +
            'Format: ' + result.format + '<br/>' +
            'Cancelled: ' + result.cancelled;
        resultDiv.html(s);
        let url = new URL(result.text);
        if (url.hostname === 'fish.mowei.com.tw') window.location = result.text;
      },
      (error) => {
        alert('Scanning failed: ' + error);
      });
}

function init() {
  $('#startScan').click(startScan);
  resultDiv = $('#results');
}

document.addEventListener('deviceready', init, false);
