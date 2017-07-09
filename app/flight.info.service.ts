import { Injectable } from '@angular/core';

@Injectable()

export class FlightInfoService {

	info = [{
		"id": 1,
		"flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
		"time": "Dolor ad duis tempor laboris. 02:22 EST",
		"location": "Australia - Mumbai"
	}, {
		"id": 2,
		"flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
		"time": "Aliqua esse nostrud ut. 01:44 EST",
		"location": "Netherland - USA"
	}, {
		"id": 3,
		"flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
		"time": "Anim ad. 12:55 EST",
		"location": "Japan - Kolkata"
	}, {
		"id": 4,
		"flight": "The Flight Tracks APIs give you access to information on an active flight, including position (lat/long), altitude, bearing, speed and route. Initial flight plans and aircraft positions are made available when they are received (often roughly 24 hours in advance for flight plans) until roughly seven days after arrival.",
		"time": "Anim exercitation veniam do. 05:05 EST",
		"location": "Canada - Newzeland"
	}]

	getInfoById(id) {

		return this.info.filter(finfo => finfo.id == id);

	}

}