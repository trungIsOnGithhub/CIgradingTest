const spawn = require('spawn-please');

const haskell_run_command = spawn("cabal run", ["-v0"]);
const post_execution_run_command = spawn('API_KEY=NR23lHuWdW6R7zrBe5kqa-mKviTOPPnFF0GQEohuy14HAzFuXTtO-g== node ./mock-server/pre.js')

haskell_run_command
.then(result => {
	console.log('OUT: ' + result.stdout);
	console.log('RUN SUCCESS');

	post_execution_run_command
	.then(result => {
		console.log('OUT 2: ' + result.stdout);
	})
	.catch(err => {
		console.log('ERR: ' + err.stdout);
		console.log('ERR: ' + err.stderr);
		throw new Error('UNEXPECTED ERROR!! - PLEASE CHECK YOUR EXERCISE FORMAT!!');
	})
})
.catch(err => {
	console.log('ERR: ' + err.stdout);
	console.log('ERR: ' + err.stderr);
	throw new Error('UNEXPECTED ERROR!! - PLEASE CHECK YOUR EXERCISE FORMAT!!');
});