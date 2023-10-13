"use client";

// const FormSchema = z.object({
// 	name: z.string().min(3).max(50),
// 	email: z.string().email(),
// 	headline: z.string().min(3).max(100),
// 	content: z.string().min(3).max(500),
// 	rating: z.number().min(1).max(5),
// });

export const AddReviewForm = () => {
	// const form = useForm<z.infer<typeof FormSchema>>({
	// 	resolver: zodResolver(FormSchema),
	// 	defaultValues: {
	// 		name: "",
	// 		email: "",
	// 		headline: "",
	// 		content: "",
	// 		rating: 1,
	// 	},
	// });

	// function onSubmit(data: z.infer<typeof FormSchema>) {
	// 	console.log(data);
	// }

	// useEffect(() => {}, [form]);

	return (
		// <Form {...form}>
		// 	<form onSubmit={form.handleSubmit(onSubmit)} data-testid="add-review-form">
		// 		<FormField
		// 			control={form.control}
		// 			name="headline"
		// 			render={({ field }) => (
		// 				<FormItem className="pt-4">
		// 					<FormLabel className="sr-only">Title</FormLabel>
		// 					<FormControl>
		// 						<Input placeholder="Title" {...field} />
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="content"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel className="sr-only">Content</FormLabel>
		// 					<FormControl>
		// 						<Textarea placeholder="Content" {...field} />
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<StarRanking rating={form.getValues("rating")} form={form} />

		// 		<FormField
		// 			control={form.control}
		// 			name="name"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel className="sr-only">Name</FormLabel>
		// 					<FormControl>
		// 						<Input placeholder="Name" {...field} />
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<FormField
		// 			control={form.control}
		// 			name="email"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel className="sr-only">Name</FormLabel>
		// 					<FormControl>
		// 						<Input placeholder="Email" {...field} />
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>

		// 		<Button
		// 			type="submit"
		// 			className="mt-6 inline-flex w-full items-center justify-center rounded-md border  px-8 py-2 text-sm font-medium  hover:bg-zinc-400 hover:text-zinc-950 sm:w-auto lg:w-full"
		// 		>
		// 			Send a review
		// 		</Button>
		// 	</form>
		// </Form>
		null
	);
};
