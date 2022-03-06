// import type { RequestHandler } from '.svelte-kit/types/src/routes/js/[slug].json'; // works
import type { RequestHandler } from './[slug].json'; // error: Circular definition of import alias 'RequestHandler'.ts(2303)

export const get: RequestHandler = async function ({ params }) {
	return {};
};
