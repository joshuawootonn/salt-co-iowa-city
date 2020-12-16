import { Staff } from './models/staff';

export const defaultStaff: Staff = {
    firstName: 'Emily',
    lastName: 'Borwick',
    email: 'emily.sandvold@gmail.com',
    position: 'Ministry Leader',
    id: 'c5dcb6ca-e6d6-5a29-9359-cbfd1b67af61',
    connectionLinkText: 'Say hey!',
    image: {
        fluid: {
            sizes: '',
            src: '',
            srcSet: '',
            aspectRatio: 1,
        },
    },
    about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    __typename: 'ContentfulStaff',
};

export const defaultStaffs: Staff[] = [
    defaultStaff,
    {
        ...defaultStaff,
        firstName: 'Joshua',
        lastName: 'Wootonn',
    },
    {
        ...defaultStaff,
        firstName: 'Mitch',
        lastName: 'Volk',
    },
];
