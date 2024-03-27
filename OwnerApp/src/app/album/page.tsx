import { cookies } from "next/headers";
import fetchAccount from "@/utils/data/fetchAccount";
import fetchBusinessProfile from "@/utils/data/fetchBusinessProfile";
import { Account, BusinessProfile, Album } from "@/API";
import AlbumPageClientComponent from "@/page_components/Album/ClientComponent";
import fetchBusinessAlbum from "@/utils/data/fetchBusinessAlbum";

export interface albumImage {
  id: string;
  imageUrl: string;
  createdAt: number;
  fileName: string;
  businessProfileId: string;
}

export default async function Home() {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;

  let userAccount: Account | undefined;
  if (userId) {
    userAccount = await fetchAccount({ userId });
  }

  let album: [albumImage] | [];
  let businessProfileId: string = "";

  if (
    userAccount &&
    userAccount.accountBusinessProfileId &&
    userAccount.businessProfile
  ) {
    businessProfileId = userAccount.accountBusinessProfileId;
    album = await fetchBusinessAlbum({ businessProfileId });
  } else {
    album = [];
  }

  return (
    <AlbumPageClientComponent
      album={album}
      businessProfileId={businessProfileId}
    />
  );
}
