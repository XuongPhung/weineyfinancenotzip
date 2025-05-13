const webAppUrl = 'https://script.google.com/macros/s/AKfycbwwghX0rH_kNIDTc7KeE4xSoxw1yPKlbq3QKW19Ecj1jfc8IWMrvl6Wyv6O_j0WS-mNCg/exec';

function postToGoogleSheets(sheetName, rowData) {
  fetch(webAppUrl, {
    method: 'POST',
    body: JSON.stringify({ sheet: sheetName, row: rowData }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  .then(text => {
    console.log('Response:', text);
    document.getElementById('status').innerText = '✅ Transaction submitted!';
  })
  .catch(err => {
    console.error('Error posting:', err);
    document.getElementById('status').innerText = '❌ Failed to submit. Check console.';
  });
}
