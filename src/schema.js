/**
 * Module which define rules for checking the sweep tracking objects
 */
module.exports = function() {

	return {
		requried: {
			object: {
				requried: {
					name: 'string',
					id: 'string'
				}
			},
			action: {
				required: {
					name: 'string'
				}
			},
			actor: {
				requried: {
					name: 'string',
					id: 'string'
				}
			},
			platform: {
				required: {
					name: 'string',
					version: 'string'
				}
			}
		}
	}
}
