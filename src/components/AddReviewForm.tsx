export const AddReviewForm = () => {
	async function addReview(data: FormData) {
		"use server";
		console.log(data);
		return null;
	}

	return (
		<form action={addReview} data-testid="add-review-form">
			<input type="text" name="headline" placeholder="Headline" />
			<input type="text" name="content" placeholder="Content" />
			<input type="text" name="rating" placeholder="Rating" />
			<input type="text" name="name" placeholder="Name" />
			<input type="email" name="email" placeholder="Email" />
		</form>
	);
};
