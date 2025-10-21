const http = require('http')
const server = http.createServer((req, res) => {
	if(req.method === 'POST' && req.url === '/data'){
		let body = ''
		req.on('data', c => body += c.toString())
		req.on('end', () => {
			console.log({ body })
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.setHeader('Access-Control-Allow-Methods', '*')
			res.setHeader('Access-Control-Allow-Headers', '*')
			res.end('Ok')
		})
	}
})
server.listen(3030, () => console.log('Server Started'))