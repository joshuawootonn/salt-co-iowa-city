import { Staff } from '../../models/staff';

export type FormUIPhase = 'initial' | 'loading' | 'error' | 'success';

export type InitialContactForm = {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: Staff | null;

    formUIPhase: 'initial';
};

export type FinalContactForm = {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: Staff;
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
