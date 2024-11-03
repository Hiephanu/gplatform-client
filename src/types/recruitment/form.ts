export type UploadButtonStatus = 'default' | 'uploading' | 'completed' | 'failed';

export type UploadButton = {
  status: UploadButtonStatus;
  label: string;
  disabled: boolean;
  icon: string;
  color: string;
};

export type UploadButtonVariant = {
  status: UploadButtonStatus;
};

export type ApplyForm = {
  fullName: string;
  dob: Date | null;
  email: string;
  phoneNumber: string;
  facebook: string;
  university: string;
  year: string;
  plans: string;
  experience: string;
  interested: string;
  contributing: string;
  expectations: string;
  hearAbout: string;
};
