export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<section>{children}</section>
		</>
	);
}
