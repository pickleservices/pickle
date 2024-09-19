function openIframe(url) {
      // Open a new window with about:blank#ff
      const newWindow = window.open('about:blank#ff');
  
      if (newWindow) {
          // Wait a short moment before writing the content to ensure the new window is ready
          setTimeout(() => {
              // Write the HTML content to the new window
              newWindow.document.open();
              newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
                    <link rel="icon" href="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png?" type="image/x-icon">                     
                    <link rel="shortcut icon" href="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png?" type="image/x-icon">                     
                    <title>Google Drive - My Drive</title>                     
                    <style>
                        html, body {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                        iframe {
                            width: 100%;
                            height: 100%;
                            border: none;
                        }
                    </style>
                </head>
                <body>
                    <iframe src="${url}" frameborder="0"></iframe>
                </body>
                </html>
              `);
              newWindow.document.close();
          }, 0);
      } else {
          alert('Please allow popups for this website.');
      }
  }
  
  // function that alerts user if something is not working
function notWorking() {
    alert("This link is not working right now. Sorry.");
}
    
    
  