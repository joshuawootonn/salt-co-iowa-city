import { createRoute } from './_helper';
import { getStaffBlock } from '../../src/services/staff.services';

const handler = createRoute(getStaffBlock);
export default handler;
