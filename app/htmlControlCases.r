rebol []

update-form: func [model obj /local name type status value p v html][
	html: ""
 	foreach [name type status value] model [
? type? value
		do select [
			string! [
				repend html [
					"<div>"
						"<label>" name "</label>"
						"<input type='text' name='" name "' value='" obj/:name "'>"
					"</div>"
				]
			]
			list! [
				repend html ["<div><label>" name "</label><select>"]
				foreach [p v] value [
					repend html ["<option value='" p "'>" v "</option>"]
				]
				repend html "</select></div>"
			]
		] type
	]
?? html
	print html
]

