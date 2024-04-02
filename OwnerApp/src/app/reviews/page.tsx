import { Account, BusinessProfile, UserProfile } from "@/API";
import MyReviewsClientComponent from "@/page_components/reviews/MyReviewsClientComponent";
import fetchAccount from "@/utils/data/fetchAccount";
import fetchBusinessProfile from "@/utils/data/fetchBusinessProfile";
import {
  fetchBusinessReviews,
  individualReviewReturnType,
} from "@/utils/data/fetchBusinessReviews";
import { cookies } from "next/headers";

export default async function ReviewsPage() {
  const cookie = cookies();
  const userId = cookie.get("userId")?.value;

  let userAccount: Account | undefined;
  if (userId) {
    userAccount = await fetchAccount({ userId });
  }

  let businessReviews: individualReviewReturnType[] = [];
  if (userAccount && userAccount.accountBusinessProfileId) {
    businessReviews = await fetchBusinessReviews({
      businessId: userAccount.accountBusinessProfileId,
    });
  }

  let businessProfile: BusinessProfile | undefined;

  if (
    userAccount &&
    userAccount.accountBusinessProfileId &&
    userAccount.businessProfile
  ) {
    businessProfile = await fetchBusinessProfile({
      id: userAccount?.accountBusinessProfileId,
    });
  }

  return (
    <MyReviewsClientComponent
      businessProfile={businessProfile}
      businessReviews={businessReviews}
    />
  );
}
