import { Staff } from '../../models/staff';
import { ConnectionGroup } from '../../models/connectionGroup';
import { defaultStaff } from '../../defaultValues';

export type FormUIPhase = 'initial' | 'loading' | 'error' | 'success';

export type InitialContactForm = {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: Staff | null | undefined | ConnectionGroup;
    formUIPhase: any;
};

export type FinalContactForm = {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: Staff | ConnectionGroup;
    formUIPhase: 'loading' | 'error' | 'success';
};

export interface ContactRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: string;
}

export type ContactForm = InitialContactForm | FinalContactForm;

export const initialContactForm: InitialContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    to: null,
    formUIPhase: 'initial',
};
export const filledInContactForm: InitialContactForm = {
    name: 'First Last name',
    email: 'firstLast@gmail.com',
    subject: 'some Really IMportantn Subject',
    message: 'Compelling message with a nice plot arc',
    to: defaultStaff,
    formUIPhase: 'initial',
};
