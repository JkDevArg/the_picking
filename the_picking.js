//Ty ChatGPT :)
var session = document.cookie;
var sessionSave = '';

var sessionArray = session.split("; ");

for (var i = 0; i < sessionArray.length; i++) {
  var cookieKeyValue = sessionArray[i].split("=");
  var cookieKey = cookieKeyValue[0];
  var cookieValue = cookieKeyValue[1];

  if (cookieKey === "PHPSESSID") {
    sessionSave = cookieValue;
    break;
  }
}

var sessionJSON = JSON.stringify(sessionSave);
var now = new Date();
var dateNow = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
var timeNow = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
var dateTimeNow = dateNow + ' - ' + timeNow;
var content = sessionJSON + ',' + dateTimeNow;

var blob = new Blob([content], { type: 'text/plain' });
var url = URL.createObjectURL(blob);
var link = document.createElement('a');
link.href = url;

var filename = sessionSave+'.txt';
link.download = filename;

document.body.appendChild(link);
link.click();

