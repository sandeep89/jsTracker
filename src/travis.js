/**
 * Library used for validating all the javascript track event defined in any codebase
 */

/**
 * Private method to upload 
 */
function loadJSONSchema(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'schema.json', true);
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			return callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

module.exports = loadJSONSchema;
