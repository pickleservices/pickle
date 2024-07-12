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

            // Wait for the new window to fully load before adding the favicon
            newWindow.addEventListener('DOMContentLoaded', () => {
                const link = newWindow.document.createElement('link');
                link.rel = 'icon';
                link.type = 'image/x-icon';
                link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
                newWindow.document.head.appendChild(link);
            });
        }, 100);
    } else {
        alert('Please allow popups for this website.');
    }
}
