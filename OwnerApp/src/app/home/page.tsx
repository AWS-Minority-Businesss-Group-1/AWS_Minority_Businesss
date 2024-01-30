import HomePageClientComponent from "@/page_components/Home/ClientComponent";
import { cookies } from "next/headers";
import fetchAccount from "@/utils/data/fetchAccount";
import fetchBusinessProfile from "@/utils/data/fetchBusinessProfile";
import { Account, BusinessProfile } from "@/API";

export default async function Home() {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;

  let userAccount: Account | undefined;

  if (userId) {
    userAccount = await fetchAccount({ userId });
  }

  let businessProfile: BusinessProfile | undefined;

  if (userAccount && userAccount.businessProfile) {
    businessProfile = userAccount.businessProfile;
  }

  return <HomePageClientComponent businessDetails={businessProfile} />;
}
