rebol []

htmlControlCases: [ 
	string! {
		func [name value][
			rejoin [
				"<div>"
				"<label>" name "</label>"
				"<input type='text' name='" name "' value='" value "'>"
				"</div>"
			]
		]
	}
]
