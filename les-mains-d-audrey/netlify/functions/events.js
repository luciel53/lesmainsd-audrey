const events = require ('../content/events.json');

exports.handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(events),
	};
};
