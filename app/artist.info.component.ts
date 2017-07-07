import { Component } from '@angular/core';
import { ArtistInfoService } from './artist.info.service';


@Component({
	selector: 'artist-into',
	templateUrl: './partials/artist-info.html'
})

export class ArtistInfoComponent {

	arName;
	arInfo;
	arBio;
	constructor(private _arInfoSrv: ArtistInfoService) {}

	showArBio(ar) {
		this.arName = ar.name;
		this.arInfo = this._arInfoSrv.getArInfoById(ar.id)[0];
		this.arBio = this.arInfo.bio;
		// console.log("Child Method worked!!   ", ar.name);
		// console.log( this.arInfo.bio );

	}

}