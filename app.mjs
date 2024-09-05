import http from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

const host = 'localhost';
const port = 8000;
const srcPath = path.join(process.cwd(), 'src');

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const requestListener = async (req, res) => {
    let filePath = path.join(srcPath, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
    
    if (!existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Servidor corriendo en http://${host}:${port}`);
});
