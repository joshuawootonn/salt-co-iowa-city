export interface FooterBlock {
    externalLinks: ExternalLink[];
}

export interface ExternalLink {
    href: string;
    label: string;
}
export interface InternalLink {
    to: string;
    label: string;
}
