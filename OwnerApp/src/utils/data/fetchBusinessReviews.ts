import { getStartUrl } from "./environment";

export interface individualReviewReturnType {
  businessId: string;
  userId: string;
  rating: number;
  text: string;
  updatedAt: number;
  id: string;
}

export async function fetchBusinessReviews({
  businessId,
}: {
  businessId: string;
}) {
  try {
    const START_URL = getStartUrl();

    const axios = (await require("axios")).default;

    const options = {
      method: "GET",
      url: `${START_URL}/fetchBusinessReviews/${businessId}`,
    };

    const response = await axios.request(options);
    const reviews = response.data;

    return reviews as individualReviewReturnType[];
  } catch (error) {
    return [];
  }
}
