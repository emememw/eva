module.exports = {
	check(processedSentence) {
		var result = false;
		if(processedSentence.action === "what") {
			if(processedSentence.subject === "time" || processedSentence.parsedSubject.indexOf("time") > -1) {
				result = true;	
			}
		}
		return result;
	},

	exec() {
		const date = new Date();
		console.log(`It's ${date.getHours()}:${date.getMinutes()} :)`);
	}
};
