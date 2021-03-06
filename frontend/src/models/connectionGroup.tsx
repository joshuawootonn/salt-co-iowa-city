import { RichText } from './welcome';

export interface ConnectionGroup {
    leaders: string;
    description: string;
    gender: 'Male' | 'Female';
    dateTime: string;
    email: string;
    connectionLinkText: string;
    id: string;
    __typename: 'ContentfulConnectionGroup';
}

export interface ConnectionGroupBlock {
    title: string;
    visible: boolean;
    description: string;
    groups: ConnectionGroup[];
    emptyTitle: RichText;
    __typename: 'ContentfulBlockConnectionGroups';
}
