export interface LinkQuery {
  contentfulLinks: {
    github: string;
    medium: string;
    twitter: string;
    linkedIn: string;
  };
}
export interface Link {
  github: string;
  medium: string;
  twitter: string;
  linkedIn: string;
  [key: string]: any;
}
