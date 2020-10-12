import { createRoute } from './_helper';
import { getMinistryDescriptionBlock } from '../../src/services/ministryDescription.service';

const handler = createRoute(getMinistryDescriptionBlock);
export default handler;
