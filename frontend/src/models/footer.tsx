export interface FooterBlock {
    externalLinks: ExternalLink[];
    whoWeAreLinks: string[];
    howToConnectLinks: string[];
}

export interface ExternalLink {
    href: string;
    label: string;
}
export interface InternalLink {
    to: string;
    label: string;
}
