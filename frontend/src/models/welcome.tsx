import { Image } from './image';

export interface RichText {
    json: any;
}

export interface WelcomeBlock {
    title: string;
    introWhoWeAre: string;
    introGetConnected: string;
    primaryImage: Image;
    secondaryImage: Image;
    text1: RichText;
    text2: RichText;
    text3: RichText;
    text4: RichText;
}
