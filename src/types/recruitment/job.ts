import type { BrandText } from '../component/brand-text';

export type JobDetail = {
  id?: string;
  title: string;
  team: string;
  is_spotlight: boolean;
  description: string;
  short_description: string;
  minimum_qualifications: string;
  responsibilities: string;
  benefits: string;
  expire_date: Date;
};

export type JobItem = {
  id: string;
  title: string;
  team: string;
  short_description: string
}

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
