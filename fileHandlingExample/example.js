const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// Create an HTTP server
const server = http.createServer(async (req, res) => {
    try {
        // Check if the file exists
        await fs.promises.access(filePath, fs.constants.F_OK);
        let responseHTML = '<h2>File Operations:</h2>';

        // 1. Read the file
        const data = await fs.promises.readFile(filePath, 'utf8');
        responseHTML += `<p>File content before writing:<br>${data}</p>`;

        // // 2. Write to the file
        await fs.promises.writeFile(filePath, 'Hello, world!');
        responseHTML += '<p>File written successfully!</p>';

        // // 3. Append to the file
        await fs.promises.appendFile(filePath, '\nAppended text.');
        responseHTML += '<p>Text appended successfully!</p>';

        // // 4. Read the file again to show the updated content
        const updatedData = await fs.promises.readFile(filePath, 'utf8');
        responseHTML += `<p>File content after appending:<br>${updatedData}</p>`;

        // // 5. Delete the file
        await fs.promises.unlink(filePath);
        responseHTML += '<p>File deleted successfully!</p>';

        // // Send the response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);

    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h2>Error:</h2><p>${err.message}</p>`);
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
