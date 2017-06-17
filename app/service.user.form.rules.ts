export class UserProfileRulesService {

	firstName(firstName) {

		if(firstName.value.toLowerCase().trim().length == 0) {
			return null;
		}

		if(firstName.value.toLowerCase().trim() !== 'john') {
			// console.log("error!!");
			return {
				'firstName' : true
			}
		} else {
			// console.log("no error!!");
			return null;
		}

	}

}