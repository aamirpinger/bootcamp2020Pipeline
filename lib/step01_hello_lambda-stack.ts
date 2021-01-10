import * as cdk from "@aws-cdk/core";
import * as ddb from '@aws-cdk/aws-dynamodb';

export class Step01HelloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dynamoDBTable = new ddb.Table(this, 'Table', {
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },
    });
  }
}
