export const MailTemplate = (content: string) => {
  return `
  <main style="font-family: sans-serif; width: 600px; border: 1px solid #e0e0e0; color: #1e293b">
    <header style="width: 100%">
      <img
        src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720697928/Frame_mexnct.png"
        alt="Build your future"
        style="width: 100%; margin-top: 12px"
      />
    </header>
    <div
      style="font-size: 18px; line-height: 27px; margin: 24px 36px; border-top: 1px solid #f1f3f4"
    >
      <div style="margin-top: 24px">
        ${content}
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        text-align: center;
        line-height: 27px;
        margin: 24px 36px;
        border-top: 1px solid #f1f3f4;
      "
    >
      <span style="margin-top: 24px">
        In the meantime, feel free to visit
        <a href="https://facebook.com/gdschanu" target="_blank" style="color: #3b82f6"
          >Google Developer Student Clubs - HANU Fanpage</a
        >
        to follow our update.
      </span>
      <a
        style="margin-top: 16px; width: fit-content; text-decoration: none"
        href="https://facebook.com/gdschanu"
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
            margin-x: auto;
            gap: 10px;
          "
        >
          Visit now
          <img
            src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703607/arrow-small-right_bemnqd.png"
            style="width: 24px; height: 24px"
          />
        </button>
      </a>
      <span style="margin-top: 24px">
        Thank you for your patience, <br />
        Google Developer Student Clubs - HANU Team
      </span>
      <img
        src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720701643/image_1_panepo.png"
        style="width: 100%; margin-top: 24px"
        alt="GDSC Footer"
      />
      <span
        style="
          margin-top: 20px;
          margin-left: 0;
          font-weight: bold;
          font-size: 12px;
          line-height: 18px;
          align-self: flex-start;
        "
      >
        Thanks to our Diamond sponsor
      </span>
      <div style="display: flex; margin-top: 24px; align-items: center; gap: 16px">
        <img
          src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720702187/IMG_3133_1_1_lubwbw.jpg"
          alt="Mr. Ta Minh Duc"
          style="width: 60px; height: 60px; border-radius: 200px"
        />
        <div style="display: flex; flex-direction: column; align-items: flex-start">
          <span style="color: #4a3aff">Mr. Ta Minh Duc</span>
          <span style="font-size: 12px">Devoted Alumni Gen 1</span>
        </div>
      </div>
    </div>
    <footer style="background-color: #f8f9fa; width: 100%">
      <div style="padding: 46px 36px">
        <img
          src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703000/GDSC_Hanoi_University_Horizontal_color_1_1_a3nfy3.png"
          style="width: 300px"
        />
        <p style="font-size: 12px; padding-top: 12px; line-height: 18px">
          © 2024 Google Developer Student Clubs - HANU <br />
          Hanoi University, Km9 Nguyen Trai, Thanh Xuan, Ha Noi <br />
          <br />
          We sent you this email because you have indicated that you are willing to receive
          periodic emails on news, product updates, and invitations to events from the Google
          Developer Student Clubs - HANU team. <br />
          <br />
          If you no longer wish to receive these Google Developer Student Clubs - HANU emails,
          <a href="https://gdschanu.com" target="_blank" style="color: #3b82f6">unsubscribe</a>.
        </p>
        <div style="display: flex; gap: 36px; margin-top: 28px">
          <a href="https://facebook.com/gdschanu">
            <img
              src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703779/Social_Icon_Link_ibwiog.png"
              alt="Facebook"
              style="width: 20px; height: 20px"
            />
          </a>
          <a href="https://instagram.com/gdschanu">
            <img
              src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703779/Social_Icon_Link_1_g6yohd.png"
              alt="Instagram"
              style="width: 20px; height: 20px"
            />
          </a>
          <a href="https://facebook.com/gdschanu">
            <img
              src="https://res.cloudinary.com/dszkt92jr/image/upload/v1720703779/Vector_pqgnjs.png"
              alt="Linkedin"
              style="width: 20px; height: 20px"
            />
          </a>
        </div>
      </div>
    </footer>
  </main>
  `;
};
