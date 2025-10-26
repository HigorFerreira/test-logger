const https = require('https')
const fs = require('fs')

const writeStream = fs.createWriteStream('out.txt', { flags: 'a' })
const server = https.createServer({ key: fs.readFileSync('localhost.key'), cert: fs.readFileSync('localhost.crt') }, (req, res) => {

	console.log({ m: req.method, u: req.url })
	
	if(req.method === 'GET' && req.url === '/'){
		console.log('Req Get')
		res.setHeader('Content-Type', 'text/html')
		res.end('<h1>Server is working</h1>')
		return
	}

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

server.listen(3030, () => console.log('Server started'))