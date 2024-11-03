export const passApplicationFormTemplate = (
  name: string,
  jobTitle: string,
  testFormat: string,
  testDuration: string,
  instructionTime: string,
  testLink: string,
  jobDescriptionLink: string,
  completeDate: string,
) => {
  return `
    <p>Dear ${name},</p>
    <p>
      We're thrilled to inform you that your application for the
      ${jobTitle} position at Google Developer Student Clubs - HANU has
      impressed our team! Your qualifications and experience stood out,
      and
      <span style="color: #3b82f6"
        >You've successfully passed the Form Application</span
      >.
    </p>
    <p>
      As the next step in the hiring process, we'd like to invite you to
      complete a professional test. This assessment will help us gauge
      your skills and knowledge relevant to the role.
    </p>
    <p>Here's what you can expect:</p>
    <ul style="margin-bottom: 24px">
      <li><b>Test format:</b> ${testFormat}</li>
      <li style="margin-top: 16px">
        <b>Test duration:</b> ${testDuration}
      </li>
      <li style="margin-top: 16px">
        <b>Access instructions:</b> You will receive a separate email with
        a unique link to access the professional test within the next
        ${instructionTime}.
      </li>
    </ul>
    <a
      style="margin-top: 24px; width: fit-content; text-decoration: none"
      href="${testLink}"
      target="_blank"
      ><button
        style="
          cursor: pointer;
          border-radius: 200px;
          border: none;
          background-color: #3b82f6;
          color: #ffffff;
          font-size: 16px;
          padding: 8px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          gap: 10px;
        "
      >
        Take the test now
        <img
          src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703607/arrow-small-right_bemnqd.png"
          style="width: 24px; height: 24px"
        />
      </button>
    </a>
    <p style="margin-top: 24px">
      We encourage you to review the
      <a href="${jobDescriptionLink}" style="color: #3b82f6"
        >job description</a
      >
      again to familiarize yourself with the key skills and experience
      we're looking for.
    </p>

    <p>
      <b>Please note:</b> This test needs to be completed by ${completeDate} to
      remain in consideration for the position.
    </p>
  `;
};
