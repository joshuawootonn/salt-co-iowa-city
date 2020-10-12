import { createRoute } from './_helper';
import { getHowToConnectBlock } from '../../src/services/howToConnect.services';

const handler = createRoute(getHowToConnectBlock);
export default handler;
