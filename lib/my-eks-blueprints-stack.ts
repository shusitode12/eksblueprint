#import { Construct, Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as blueprints from '@aws-quickstart/eks-blueprints';
import { VPCStack } from './vpc-stack';

export class ClusterConstruct extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const account = props?.env?.account!;
    const region = props?.env?.region!;

    const vpcStack = new VPCStack(this, 'CustomVPCStack');

    const blueprint = blueprints.EksBlueprint.builder()
      .version('auto')
      .account(account)
      .region(region)
      .addOns([])
      .teams([])
      .resourceProvider(blueprints.GlobalResources.Vpc, new blueprints.DirectVpcProvider(vpcStack.vpc))
      .build(scope, id + '-stack');
  }
}
