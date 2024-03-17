const spawn = require('spawn-please');

const ls = spawn("cabal run", ["-v0"]);

ls.then(result => {
		console.log('OUT: ' + result.stdout);
		console.log('RUN SUCCESS');
	})
	.catch(err => {
		console.log('OUT: ' + err.stdout);
		console.log('ERR: ' + err.stderr);
		console.log('UNEXPECTED ERROR!! - PLEASE CHECK YOUR EXERCISE FORMAT!!');
		process.exit(1);
	});
