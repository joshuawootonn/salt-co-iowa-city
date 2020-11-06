import { Staff } from './staff';

export interface ContactBlock {
    title: string;
    contacts: Staff[];
    confirmationTitle: string;
    errorTitle: string;
}
