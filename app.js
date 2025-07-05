// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// 1. Handle message selection from inbox
	const messages = document.querySelectorAll(".list-group-item-action");
	const reviewPane = document.querySelector(".card-body");
	const reviewText = document.querySelector(".card-body p");
	const reviewerName = document.querySelector(".card-body strong");
	const reviewDate = document.querySelector(".card-body small.text-muted");
	const reviewRating = document.querySelector(".card-body .text-warning");

	messages.forEach((message, index) => {
		message.addEventListener("click", function () {
			const dummyReviews = [
				{
					name: "Jacob Jones",
					rating: 4,
					text: "Great attention to detail. Will work again.",
					date: "June 26, 2025 - 3:25 PM",
				},
				{
					name: "Marvin McKinney",
					rating: 3,
					text: "Talented team, but communication could improve.",
					date: "June 26, 2025 - 3:28 PM",
				},
				{
					name: "Theresa Webb",
					rating: 5,
					text: "Excellent support and timely delivery.",
					date: "June 26, 2025 - 3:15 PM",
				},
			];

			const selected = dummyReviews[index % dummyReviews.length];
			reviewerName.textContent = selected.name;
			reviewDate.textContent = selected.date;
			reviewText.textContent = selected.text;

			let stars = "";
			for (let i = 1; i <= 5; i++) {
				stars += i <= selected.rating ? "★" : "☆";
			}
			reviewRating.innerHTML = stars;
		});
	});

	const sendBtn = document.querySelector("button.btn-primary");
	const replyInput = document.querySelector("textarea");

	sendBtn.addEventListener("click", function () {
		const message = replyInput.value.trim();
		if (message === "") {
			alert("Please enter your reply before sending.");
			return;
		}

		alert("Reply sent: " + message);
		replyInput.value = "";
	});

	const sidebarItems = document.querySelectorAll(".list-group-item");
	sidebarItems.forEach((item) => {
		item.addEventListener("click", () => {
			sidebarItems.forEach((i) => i.classList.remove("active"));
			item.classList.add("active");
		});
	});
});
