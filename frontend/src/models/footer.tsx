export interface FooterBlock {
    externalLinks: ExternalLink[];
    whoWeAreLinks: string[];
    howToConnectLinks: string[];
    socialMediaLinks: SocialMediaLink[];
}

export interface SocialMediaLink {
    type: 'facebook' | 'instagram' | 'youtube' | 'vimeo';
    href: string;
}

export interface ExternalLink {
    href: string;
    label: string;
}
export interface InternalLink {
    to: string;
    label: string;
}
