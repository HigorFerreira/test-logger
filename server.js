const https = require('https')
const fs = require('fs')
const writeStream = fs.createWriteStream('out.txt', { flags: 'a' })
const server = https.createServer((req, res) => {
	if(req.method === 'POST' && req.url === '/data'){
		let body = ''
		req.on('data', c => body += c.toString())
		req.on('end', () => {
			writeStream.write(body.concat('\n'))
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.setHeader('Access-Control-Allow-Methods', '*')
			res.setHeader('Access-Control-Allow-Headers', '*')
			res.end('Ok')
		})
	}
})
server.listen({
	port: 3030,
		
}, () => console.log('Server Started'))