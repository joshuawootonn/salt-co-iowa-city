export interface ConnectionGroup {
    leaders: string;
    description: string;
    gender: 'Male' | 'Female';
    dateTime: string;
}

export interface ConnectionGroupBlock {
    title: string;
    description: string;
    groups: ConnectionGroup[];
}
