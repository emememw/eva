const Eva = module.exports = {};

const nlp = require("speakeasy-nlp");

Eva.registeredTasks = [
	require("./tasks/time")
];


Eva.input = function input(sentence) {
	const processedSentence = this.process(sentence);
	return this.think(processedSentence);
};

Eva.process = function process(sentence) {
	var processedSentence = {};
	try {
		processedSentence = nlp.classify(sentence);
		processedSentence.parsedSubject = processedSentence.subject.split(" ");
	} catch(ex) {}
	console.log("==================");
	console.log(processedSentence);
	console.log("==================");
	return processedSentence;
};

Eva.think = function think(processedSentence) {
	var foundTasks = [];
	this.registeredTasks.forEach((task) => {
		if(task.check(processedSentence)) {
			foundTasks.push(task);
		}
	});
	// TODO let user choose task 
	if(foundTasks.length > 0) {
		foundTasks[0].exec();
	}

};
