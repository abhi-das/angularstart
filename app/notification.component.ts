import { Component } from '@angular/core';

import { NotifyModal } from './notify.modal';
import { NotificationService } from './notification.service';

@Component({
	selector: 'notification',
	templateUrl: './partials/notification.html',
	providers: [
		NotificationService
	]
})

export class NotificationComponent {

	notifications;

	constructor(private notifyService: NotificationService) {}

	ngOnInit() {
		this.notifications = this.notifyService.get();
	}

	onAdd() {
		var newNt = {
			priority: 'high',
			type: 'monitor'
		};

		this.notifyService.set(newNt);
	}

	onDelete() {
		this.notifyService.delete(1);
	}
}