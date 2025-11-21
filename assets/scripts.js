// form function that checks each field.value > 2 and if valid enables the submit button

// submit function to hide the form and show a thank you message

function my_submit() {
	const name = document.getElementById("customer_first_name");
	const lastName = document.getElementById("customer_last_name");
	const fullname = name.value + " " + lastName.value;

	console.log(fullname);
}
