import type { BrandText } from '../component/brand-text';

export type JobItem = {
  id?: string;
  title: string;
  team: string;
  tag?: 'Hot' | 'New';
  description: string;
};

export type DescriptionItem = {
  id: string;
  content: string;
};

export type JobDescription = {
  id?: string;
  icon?: string;
  title: BrandText;
  descriptionItems: DescriptionItem[];
};
