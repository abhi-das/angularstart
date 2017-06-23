export class NotificationService {

	notify = [{
		priority: 'low',
		type: 'local'
	}, {
		priority: 'high',
		type: 'server'
	}, {
		priority: 'high',
		type: 'local'
	}, {
		priority: 'high',
		type: 'server'
	}];

	get() {
		return this.notify;
	}

	set(newNotify) {
		this.notify.push(newNotify);
	}

	delete(notifyIndex){
		this.notify.splice(notifyIndex, 1);
	}
}