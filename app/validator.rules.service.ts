export class ValidatorRulesService {

	lastNameRules(empLastName) {

		if(empLastName.value !== "test") {
			console.log("not test ");
			return { "lastName" : true  };
		} else {
			console.log("yes test ");
			return null;
		}

	}



}