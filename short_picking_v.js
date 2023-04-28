var session = document.cookie.match(/PHPSESSID=(\w+)/);
var sessionSave = session ? session[1] : '';
var blob = new Blob([JSON.stringify(sessionSave)], { type: 'text/plain' });
var url = URL.createObjectURL(blob);
var link = Object.assign(document.createElement('a'), {
  href: url,
  download: `${sessionSave}.txt`
});
document.body.appendChild(link);
link.click();
