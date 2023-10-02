"use client";
import clsx from "clsx";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export const StarRanking = ({
	rating,
	form,
}: {
	rating: number;
	form: UseFormReturn<
		{
			rating: number;
			name: string;
			email: string;
			headline: string;
			content: string;
		},
		any,
		undefined
	>;
}) => {
	const [ratingValue, setRatingValue] = useState(rating);
	return (
		<div className="stars-rating:fill-orange-500 current-hover:fill-orange-500 mb-4 mt-2 flex flex-row-reverse items-center justify-center">
			<StarIcon
				name="rating"
				onClick={() => {
					form.setValue("rating", 5);
					setRatingValue(5);
				}}
				className={clsx(
					ratingValue === 5 ? "fill-orange-500" : "",
					"h-8 w-8 cursor-pointer stroke-orange-500 p-1",
				)}
			/>

			<StarIcon
				onClick={() => {
					form.setValue("rating", 4);
					setRatingValue(4);
				}}
				className={clsx(
					ratingValue >= 4 ? "fill-orange-500" : "",
					"h-8 w-8 cursor-pointer stroke-orange-500 p-1",
				)}
			/>
			<StarIcon
				onClick={() => {
					form.setValue("rating", 3);
					setRatingValue(3);
				}}
				className={clsx(
					ratingValue >= 3 ? "fill-orange-500" : "",
					"h-8 w-8 cursor-pointer stroke-orange-500 p-1",
				)}
			/>
			<StarIcon
				onClick={() => {
					form.setValue("rating", 2);
					setRatingValue(2);
				}}
				className={clsx(
					ratingValue >= 2 ? "fill-orange-500" : "",
					"h-8 w-8 cursor-pointer stroke-orange-500 p-1",
				)}
			/>
			<StarIcon
				onClick={() => {
					form.setValue("rating", 1);
					setRatingValue(1);
				}}
				className={clsx(
					ratingValue >= 1 ? "fill-orange-500" : "",
					"h-8 w-8 cursor-pointer stroke-orange-500 p-1",
				)}
			/>
		</div>
	);
};
