import { GraphQLResult, generateClient } from "aws-amplify/api";
import { getAccount as getAccountQuery } from "../../graphql/queries";
import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";

Amplify.configure(awsconfig);

const client = generateClient();

export default async function fetchAccount({ userId }: { userId: string }) {
  console.log("IN FETCH ACCOUNT: ", userId);

  try {
    const res = await client.graphql({
      query: getAccountQuery,
      variables: {
        id: userId,
      },
    });

    console.log("FROM FETCH ACCOUNT", (res as GraphQLResult).data);

    return ((res as GraphQLResult).data as any).getAccount;
  } catch (error) {
    console.log(error);
    return (error as any).message;
  }
}
