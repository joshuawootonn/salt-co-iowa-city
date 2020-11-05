import { mixed, object, string } from 'yup';

export const contactValidationSchema = object().shape({
    to: mixed().required('Who are you trying to connect with?'),
    name: string()
        .max(50, "Let's just stick to first and last name here :)")
        .required("Don't forget to add your name"),
    email: string()
        .email("This doesn't look like an email to me. Can you double check?")
        .required("Don't forget to add your email"),
    subject: string()
        .max(100, "Let's keep it to one sentence please :)")
        .required("Don't forget to add a subject"),
    message: string()
        .max(300, "Let's keep it to a paragraph or two :)")
        .required("Don't forget to add some details"),
});
