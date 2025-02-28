export const create_slug = (name: string) => {
	const withoutAccents: string = name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');

	const slug: string = withoutAccents
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/[()]/g, '-');
	return slug;
};
