export type MemberDetailCard = {
  name: string;
  avatar: string;
  position: string;
  team: string;
  memberActivities: {
    period: string;
    position: string;
  }[];
  memberSocialList: {
    linkedin: string;
    github: string;
    email: string;
    facebook: string;
  };
};
