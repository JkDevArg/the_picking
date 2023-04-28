fetch('https://raw.githubusercontent.com/JkDevArg/the_picking/main/short_picking.js')
  .then(response => response.text())
  .then(data => {
    const script = document.createElement('script');
    script.innerHTML = data;
    document.body.appendChild(script);
  });
  console.log('Ty chat gpt :)');
