import { GraphQLResult, generateClient } from "aws-amplify/api";
import { getBusinessProfile as getBusinessProfileQuery } from "../../graphql/queries";
import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const client = generateClient();

export default async function fetchBusinessProfile({ id }: { id: string }) {
  try {
    const res = await client.graphql({
      query: getBusinessProfileQuery,
      variables: {
        id,
      },
    });

    return ((res as GraphQLResult).data as any).getBusinessProfile;
  } catch (error) {
    throw new Error((error as any).message);
  }
}
