import { NgModule } from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { ArtistListService } from './artist.list.service';
import { ArtistInfoService } from './artist.info.service';

import { AppComponent } from './app.component';

import { ArtistListComponent } from './artist.list.component';
import { ArtistInfoComponent  } from './artist.info.component';

@NgModule({
	imports:[
		BrowserModule
	],
	declarations: [
		AppComponent, ArtistListComponent, ArtistInfoComponent
	],
	providers: [
		ArtistListService, ArtistInfoService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}