import { Description } from 'utils/types';

export interface ExperienceQuery {
  allContentfulExperience: {
    nodes: ExperienceNode[];
  };
}

export interface ExperienceNode {
  id: string;
  title: string;
  stack: string[];
  start: string;
  end: string;
  location: Location;
  isCurrentlyWorking: boolean;
  description: Description;
  company: string;
}

export interface Experience {
  id: string;
  description: string;
  title: string;
  stack: string[];
  start: string;
  end: string;
  location: Location;
  isCurrentlyWorking: boolean;
  company: string;
}
