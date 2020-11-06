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
    description: string;
    groups: ConnectionGroup[];
    __typename: 'ContentfulBlockConnectionGroups';
}
