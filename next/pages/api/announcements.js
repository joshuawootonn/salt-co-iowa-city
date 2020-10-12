import { createRoute } from './_helper';
import { getAnnouncementBlock } from '../../src/services/announcements.services';

const handler = createRoute(getAnnouncementBlock);
export default handler;
