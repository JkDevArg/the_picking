const session = document.cookie.match(/PHPSESSID=(\w+)/);
const sessionSave = session ? session[1] : '';
const blob = new Blob([JSON.stringify(sessionSave)], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const link = Object.assign(document.createElement('a'), {
  href: url,
  download: `${sessionSave}.txt`
});
document.body.appendChild(link);
link.click();
