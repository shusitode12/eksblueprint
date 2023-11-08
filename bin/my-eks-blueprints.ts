import * as cdk from 'aws-cdk-lib';
import { App } from 'aws-cdk-lib';
import { ClusterConstruct } from '../lib/my-eks-blueprints-stack';

const app = new App();

new ClusterConstruct(app, 'ClusterStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
