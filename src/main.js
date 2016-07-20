const Eva = require("./eva");


const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('> ');
rl.prompt();
rl.on('line', function(line) {
	Eva.input(line);
	rl.prompt();
}).on('close',function(){
	process.exit(0);
});



