import { createRoute } from './_helper';
import { getConnectionGroupBlock } from '../../src/services/connectionGroup.service';

const handler = createRoute(getConnectionGroupBlock);
export default handler;
