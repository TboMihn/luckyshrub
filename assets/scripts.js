// form function that checks each field.value > 2 and if valid enables the submit button

// submit function to hide the form and show a thank you message

function my_submit() {
	event.preventDefault();
	const firstName = document.getElementById("customer_name");
	const lastName = document.getElementById("customer_last_name");
	const contact_form = document.getElementById("lucky_contact_form");
	const thank_you_message = document.getElementById("contact_response");

	contact_form.style.display = "none";
	thank_you_message.style.display = "block";
	thank_you_message.innerHTML = `<h2>Thank you, ${firstName.value}, for contacting us.</h2>
        <p>We will respond to your email shortly.</p>
        <p>Have a great day!</p>`;
	// const fullname = `${firstName.value} ${lastName.value}`;
	// console.log(fullname);
}

let button_to_top = document.getElementById("top");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button_to_top.style.display = "block";
	} else {
		button_to_top.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
