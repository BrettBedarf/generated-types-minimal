/** @type {import('./[slug].json').RequestHandler} */
export async function get({ params }) {
	params.slug; // type is string
	return {};
}
