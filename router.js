const {fileRead} = require('./fs-promise');
/* ^^^ EQUIVALENT TO:
	const fsPromise = require('./fs-promise');
	const fileRead = fsPromise.fileRead;
*/

const onRequest = (request, response) => {
	// console.log(request.url, request.method);
	// ^^ same as...
	let {url, method} = request;

	if (url === '/') {
		url = '/index.html';
	}

	const pathToFile = './public' + url;
	// const pathToFile = './public' + (url === '/' ? '/index.html' : url);
	// ^^^ opposite approach, less verbose but harder to read

	fileRead(pathToFile)
		.then((data) => {
			response.end(data);
		});
}


module.exports = onRequest;