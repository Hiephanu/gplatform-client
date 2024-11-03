export type CommonBreadcrumb = {
  links: BreadcumbLink[];
};

type BreadcumbLink = {
  label: string;
  to: string;
};
