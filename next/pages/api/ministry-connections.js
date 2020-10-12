import { createRoute } from './_helper';
import { getMinistryConnectionsBlock } from '../../src/services/ministryConnection.service';

const handler = createRoute(getMinistryConnectionsBlock);
export default handler;
