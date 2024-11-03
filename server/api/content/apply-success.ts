export const applySuccessTemplate = (name: string, jobDescriptionLink: string) => {
  return `
    <p>Dear ${name},</p>
    <p>
      Thank you for your interest in Google Developer Student Clubs - HANU! We have
      <span style="color: #3b82f6">received your application</span> and it's
      <span style="color: #3b82f6">currently under review</span>.
    </p>
    <p>
      We will carefully consider all applications and only shortlisted candidates will be
      contacted for the next steps, which include an application form, a professional test and
      an interview round. You can review process by taking a looking inside our
      <a href="https://gdschanu/hiring_process" style="color: #3b82f6">hiring process</a>
      and <a href="${jobDescriptionLink}" style="color: #3b82f6">job description</a>.
    </p>
    <p>
      You can expect a follow-up email within one week if you progress to the next stage.<br />
    </p>
  `;
};
