import { createRoute } from './_helper';
import { getWhoWeAreBlock } from '../../src/services/whoWeAre.services';

const handler = createRoute(getWhoWeAreBlock);
export default handler;
