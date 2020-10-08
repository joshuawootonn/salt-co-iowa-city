import { getWelcomeBlock } from '../../src/services/welcome.services';
import { createRoute } from '../helper';

const handler = createRoute(getWelcomeBlock);
export default handler;
