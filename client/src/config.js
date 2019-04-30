const isProd = process.env.NODE_ENV === 'production'
const env = isProd ? 'prod' : 'dev';


const region = 'us-east-1'

const configSets = {
  'prod': {
    serviceEndpointKey: '2lz83citj1',
    bucketName: 'guildskills-api-prod-serverlessdeploymentbucket-74q0gfpdz361',
    uploadBucketName: 'guildskills-api-prod-attachmentsbucket-xlndn4u9t87m',
    userPoolId: 'us-east-1_os7ChbVl1',
    appClientId: '176sobo47re7qabbmi5ap0nem9',
    identityPoolId: 'us-east-1:02e3b6d3-2748-4520-9617-989f12979131',
  },
  'dev': {
    serviceEndpointKey: 'ju10zdge19',
    bucketName: 'guildskills-api-dev-serverlessdeploymentbucket-18ajqruo5pg6t',
    uploadBucketName: 'guildskills-api-dev-attachmentsbucket-1b4qkmnveain6',
    userPoolId: 'us-east-1_FnAgY6C3M',
    appClientId: '3s4dlhpr0kp2naogkqimt5v2te',
    identityPoolId: 'us-east-1:6cc4a551-7175-4fe6-b313-cafa9dbebb51',
  }
}

const bucketName = configSets[env]['bucketName'];
const uploadBucketName = configSets[env]['uploadBucketName'];
const userPoolId = configSets[env]['userPoolId'];
const appClientId = configSets[env]['appClientId'];
const identityPoolId = configSets[env]['identityPoolId'];

const serviceEndpointKey = configSets[env]['serviceEndpointKey'];

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: region,
    BUCKET: uploadBucketName
  },
  apiGateway: {
    REGION: region,
    URL: `https://${serviceEndpointKey}.execute-api.us-east-1.amazonaws.com/${env}`
  },
  cognito: {
    REGION: region,
    USER_POOL_ID: userPoolId,
    APP_CLIENT_ID: appClientId,
    IDENTITY_POOL_ID: identityPoolId
  }
};
