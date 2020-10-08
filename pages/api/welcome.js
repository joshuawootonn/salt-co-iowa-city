import { getWelcomeBlock } from '../../src/services/welcome.services';
import { createRoute } from './_helper';

const handler = createRoute(getWelcomeBlock);
export default handler;
