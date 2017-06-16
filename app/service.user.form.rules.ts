export class UserProfileRulesService {

	firstNameRules(firstName) {

		console.log(firstName.value.trim());
		if(firstName.value.toLowerCase().trim().length > 0) {
			return null;
		}

		if(firstName.value.toLowerCase().trim() == 'test') {
			return {
				'firstName' : false
			}
		} else {
			return null;
		}

	}

}