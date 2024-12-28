export type UploadButtonStatus = 'default' | 'uploading' | 'completed' | 'failed';

export type UploadButton = {
  status: UploadButtonStatus;
  label: string;
  disabled: boolean;
  icon: string;
  color: string[] | undefined;
};

export type UploadButtonVariant = {
  status: UploadButtonStatus;
};

export type ApplyForm = {
  full_name: string;
  dob: Date | null;
  email: string;
  phone_number: string;
  facebook_link: string;
  university: string;
  academic_year: string;
  future_plan: string;
  experience: string;
  interest_reason: string;
  contribution_vision: string;
  expectations: string;
  referral_source: string;
};
