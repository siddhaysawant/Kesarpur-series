# Kesarpur Series

Complete static website source: homepage, all eleven stories, shared CSS and JavaScript, and story metadata. No build step or package installation is needed.

## Open locally
Extract the ZIP and open index.html in a browser. Keep all files together.
For consistent saved progress across pages, serve the folder with a local web server:

    python -m http.server 8000

Then visit http://localhost:8000 in your browser.

## Deploy
Upload the contents of this folder to any static website host, keeping the filenames and structure unchanged. The homepage is index.html.

## Edit
Story content, diagrams and original interactions are inside each HTML file.
series.css contains shared navigation styles; series.js contains theme, navigation and reading-progress behavior.

Google Fonts needs an internet connection; fallback fonts work offline. Reading progress and theme preferences are stored in your browser.
