import { Injectable } from '@angular/core';

@Injectable()

export class ArtistInfoService {

	arInfo = [{
		id: "fe",		
		location: 'New Jersey',
		bio: "With her powerful, honeyed soprano and talent for songwriting and record production, Faith Renée Evans is one of R&B's all-time greats, despite her name forever being linked to hip hop through her association with Bad Boy Records and her marriage to the rap legend, the Notorious B.I.G. Evans became known as the First Lady of Bad Boy after Sean \"Puffy\" Combs signed her to his influential label in 1994. The same year, Evans married Christopher Wallace — aka the Notorious BIG — and found herself at the center of the bitter East Coast/West Coast rap rivalry, which would claim the lives of Wallace and his great rival, Tupac Shakur, in 1996-97."
	}, {
		id: "ba",
		location: 'Sanfrancisco',
		bio: "Born in 1947, Gregg Allman started performing as a teenager. He had several groups with his older brother, Duane, before the pair helped create the Allman Brothers Band in 1969. Known for their bluesy, improvisational style, the Allman Brothers Band achieved commercial success via hits like \"Midnight Rider.\" Allman also enjoyed critical acclaim as a solo artist, though he continued to record and tour with the Allman Brothers for much of his later career. After battling a series of health issues, including Hepatitis C, the legendary rocker died from liver cancer complications at age 69 on May 27, 2017."
	}, {
		id: "sr",
		location: 'Newzeeland',
		bio: "She was born Sylvia Vanderpool in Harlem in 1936 (some sources say 1935). Her father had moved there from the Virgin Islands and worked for General Motors; her older sister Audrey became a successful opera singer. Robinson began her own music career at 14, singing with a blues band led by the trumpet impresario Hot Lips Page. At 16 she landed her first record deal with Savoy records under the stage name Little Sylvia, and scored her first rhythm-and-blues hit, Little Boy (You're Going to Be Sorry). A Savoy session musician, McHouston Mickey Baker, began teaching her guitar and they went on to form a double act; Sylvia wrote their million-selling 1956 single, the latin-flavoured duet Love Is Strange."
	}, {
		id: "ch",
		location: 'New York',
		bio: "Born on May 20, 1946, in El Centro, California, Cher rose to stardom as part of a singing act with husband Sonny Bono in the 1960s, hitting No. 1 with the single I Got You Babe. The couple later starred on The Sonny and Cher Comedy Hour, though the show ended as the couple's marriage dissolved. Cher had established a solo career of her own as well, having chart-toppers like Gypsies, Tramps and Thieves, Half-Breed and Dark Lady. She then pursued acting in the 1980s, starring in films like Silkwood and Mask and earning an Academy Award for her performance in Moonstruck. Cher also found more music success with rock-oriented tracks in the '80s and a global dance hit, Believe, in the late '90s. From 2008 to 2011, she performed a concert series entitled Cher at the Colosseum at Caesars Palace in Las Vegas. She released Closer to the Truth, her first studio album in 12 years, in 2013, which offered fans more dance hits."
	}]

	getArInfo() {
		return this.arInfo;
	}

	getArInfoById(id) {
		return this.arInfo.filter(artist => artist.id == id);
	}

}