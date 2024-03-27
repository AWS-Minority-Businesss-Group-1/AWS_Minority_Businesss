import { GraphQLResult, generateClient } from "aws-amplify/api";
import { albumsByBusinessProfileId } from "../../graphql/queries";
import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const client = generateClient();

export default async function fetchBusinessAlbum({
  businessProfileId,
}: {
  businessProfileId: string;
}) {
  try {
    const res = await client.graphql({
      query: albumsByBusinessProfileId,
      variables: {
        businessProfileId,
      },
    });

    return ((res as GraphQLResult).data as any).albumsByBusinessProfileId.items;
  } catch (error) {
    throw new Error((error as any).message);
  }
}
