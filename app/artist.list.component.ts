import { Component, ViewChild } from '@angular/core';
import { ArtistInfoComponent } from './artist.info.component';
import { ArtistListService } from './artist.list.service';

@Component({
	selector: 'artist-list',
	templateUrl: './partials/artist-list.html'
})

export class ArtistListComponent {
	
	arDisplayList;
	currentAr;

	@ViewChild(ArtistInfoComponent) artistInfoChild: ArtistInfoComponent;

	constructor(private _arListSrv: ArtistListService) {}

	ngOnInit() {
		this.arDisplayList = this._arListSrv.getArList();
	}

	showArtistInfoFn(ar) {
		this.currentAr = ar;
		// console.log(ar.id);
		this.artistInfoChild.showArBio(this.currentAr);
		// this.artistInfoChild.childMethodTrace();

	}

}