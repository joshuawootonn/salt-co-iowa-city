import { createRoute } from './_helper';
import { getUpcomingEventsBlock } from '../../src/services/upcomingEvent.service';

const handler = createRoute(getUpcomingEventsBlock);
export default handler;
