const spawn = require('spawn-please');

// const set_api_key_command = spawn('export', ['API_KEY=NR23lHuWdW6R7zrBe5kqa-mKviTOPPnFF0GQEohuy14HAzFuXTtO-g==']);
const pre_execution_script = spawn('node', ['/opt/pre.js']);
// const compile_code_command = spawn('ghc', ['Main.hs']);
const execute_code_command = spawn('cabal', ['run']);
const post_execution_script = spawn('node', ['/opt/post.js']);

// spawn('API_KEY=NR23lHuWdW6R7zrBe5kqa-mKviTOPPnFF0GQEohuy14HAzFuXTtO-g== node ./pre.js

pre_execution_script
.then(result => {
	console.log('PRE OUTPUT: ' + result.stdout);

	compile_code_command
	.then(result => {
		console.log('COMPILATION OUTPUT: ' + result.stdout);

		execute_code_command
		.then(result => {
			console.log('COMPILATION OUTPUT: ' + result.stdout);

			post_execution_script
			.then(result => {
				console.log('POST-EXECUTION OUTPUT: ' + result.stdout);
			})
			.catch(err => {
				console.log('POST-EXECUTION ERROR: ' + result.stderr);
			})
		})
		.catch(err => {
			console.log('COMPILATION ERROR: ' + result.stderr);
		})
	})
	.catch(err => {
		console.log('COMPILATION OUTPUT: ' + result.stdout);
		throw new Error('UNEXPECTED ERROR!! - PLEASE CHECK YOUR EXERCISE FORMAT!!');
	});
})
.catch(err => {
	console.log('PRE OUTPUT: ' + err.stdout);
	console.log('PRE ERROR: ' + err.stderr);
	// throw new Error('UNEXPECTED ERROR!! - PLEASE CHECK YOUR EXERCISE FORMAT!!');
})