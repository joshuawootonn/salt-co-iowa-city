import slugify, { slugConnectionGroup, slugStaff } from './slugify';
import { Staff } from '../models/staff';
import {
    ConnectionGroup,
    ConnectionGroupBlock,
} from '../models/connectionGroup';

export const mapReferenceToLink = (
    reference: Staff | ConnectionGroupBlock | ConnectionGroup
): string => {
    switch (reference.__typename) {
        case 'ContentfulBlockConnectionGroups':
            return `/how-to-connect/#${slugify(reference.title)}`;
        case 'ContentfulStaff':
            return `/contact?name=${slugStaff(reference)}`;
        case 'ContentfulConnectionGroup':
            return `/contact?groupName=${slugConnectionGroup(reference)}`;
    }
};

