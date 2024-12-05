import type { BrandText } from '../component/brand-text';

export type JobItem = {
  id?: string;
  title: string;
  team: string;
  tag?: 'Hot' | 'New';
  description: string;
};

export type DescriptionItem = {
  id: number;
  content: string;
};

export type DescriptionType = 'DO' | 'NEED' | 'OFFER';

export type JobDescriptionDetail = {
  type: DescriptionType;
  description: DescriptionItem[];
};
export type JobDescription = {
  title: string;
  description: string;
  detail: JobDescriptionDetail[];
};

export type UiJobDescription = {
  type: DescriptionType;
  icon: string;
  title: BrandText;
};
