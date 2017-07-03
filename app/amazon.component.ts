import { Component } from '@angular/core';

import { AmazonService } from './amazon-service';

@Component({
	selector: 'amazon-feed',
	templateUrl: './partials/amazon-feed.html',
	providers: [AmazonService]
})

export class AmazonFeedComponent {

	constructor(private amzSer: AmazonService) {
		
	}

	ngOnInit() {

		var dd = this.amzSer.getAmzData()


	}
	
}