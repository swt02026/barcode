var resultDiv;
function startScan() {
  alert('click');
  cordova.plugins.barcodeScanner.scan(
      (result) => {
        var s = 'Result: ' + result.text + '<br/>' +
            'Format: ' + result.format + '<br/>' +
            'Cancelled: ' + result.cancelled;
        resultDiv.html(s);
        window.location = result.text;
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
