export interface UserInfo {
  connected_at: string;
  id: number;
  kakao_account: {
    email: string;
    birthday: string;
  };
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
}
