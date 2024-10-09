// server.js
import { createServer } from 'http'
import { readFile } from 'fs'

// Define the port to run the server on
const port = 3000;

// Create the server
const server = createServer((req, res) => {
    // Define the file path for the HTML file
    const filePath = "/home/aca/Documents/Projects/charts/index.html"

    // Check the request URL
    if (req.url === '/') {
        // Read the HTML file from the filesystem
        readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error occurred: ' + err.message);
            } else {
                // Serve the HTML file
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        // If the page is not found
        res.writeHead
    }
})


// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});