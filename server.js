const http = require("node:http");
const port = Number(process.env.PORT || 3917);
http.createServer((req, res) => {
  if (req.url === "/health") { res.writeHead(200, { "content-type": "text/plain" }); return res.end("ok"); }
  res.writeHead(200, { "content-type": "text/plain" }); res.end("katalog uji publik\n");
}).listen(port, "0.0.0.0", () => console.log(`listening on ${port}`));
