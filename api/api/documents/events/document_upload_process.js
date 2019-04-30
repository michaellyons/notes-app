import uuid from "uuid";
import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(data);

  const params = {
    TableName: process.env.docTableName,
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      docId: uuid.v1(),
      name: data.name,
      attachment: 'prefix_'+data.attachment,
      createdAt: Date.now()
    }
  };
  console.log(params);

  try {
    await dynamoDbLib.call("put", params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
