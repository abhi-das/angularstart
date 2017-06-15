export class ValidatorRulesService {

	lastNameRules(empLastName) {

		if(empLastName.value.trim().length === 0) {
			return null;
		}

		if(empLastName.value.trim() !== "test") {
			/*Fail the test then send error message back to controller*/
			return { 
				'lastName': {
					validFlag : true,
					testPass: "YES for last name"  
				}
			};
		} else {
			return null;
		}

	}



}