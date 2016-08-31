/**
 * Module which creates a tracker object for pushing data to analytics platform
 * Defines a javascript prototype class which needs to be instantiated 
 * while pushing data to server.
 */

/**
 * Main class which define constructor for creating a PEL event object
 * 
 * object : Entity on which event is performed (eg: doctor)
 * action: 
 */
import loadJSONSchema from './travis';

function Event(object, action, actor, platform) {
	if (!object || !action || !actor || !platform) {
		var missing = [];
		if (!object) {
			missing.push('object');
		}
		if (!action) {
			missing.push('action');
		}
		if (!actor) {
			missing.push('actor');
		}
		if (!platform) {
			missing.push('platform');
		}
		var err = missing.length > 1 ? missing.join(',') + ' are required to log events':
			missing[0] + ' is requried to log events';
		return new Error(missing.join(','))
	}
	this.object = object;
	this.action = action;
	this.actor = actor;
	this.platform = platform;
	this.objectContext = objectContext;
	this.actionContext = actionContext;
	this.actorContext = actorContext;
	this.platformContext = platformContext;
}

Event.prototype.setObject = function(object) {
	if (object) {
		this.object = object;
	}
}

Event.prototype.setContexts = function(contexts) {
	this.objectContext = contexts.object;
	this.actionContext = contexts.action;
	this.actorContext = contexts.actor;
	this.platformContext = contexts.platform;
}

Event.prototype.logEvent = function(argument) {

};

/**
* Class defining tracker which pushes event to the analytics tools
* Config is object can be used to configure keys for undelying services
* On production, config will be ignored
**/
function Tracker(config) {
	
}
