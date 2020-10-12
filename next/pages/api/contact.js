import { createRoute } from './_helper';
import { getContactBlock } from '../../src/services/contact.service';

const handler = createRoute(getContactBlock);
export default handler;
