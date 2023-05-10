/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/aws-sdk-connectparticipant.js":
/*!**************************************************!*\
  !*** ./src/client/aws-sdk-connectparticipant.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// AWS SDK for JavaScript v2.772.0
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
!function () {
  function e(t, r, n) {
    function i(s, a) {
      if (!r[s]) {
        if (!t[s]) {
          var u = undefined;
          if (!a && u) return require(s, !0);
          if (o) return o(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        var l = r[s] = {
          exports: {}
        };
        t[s][0].call(l.exports, function (e) {
          return i(t[s][1][e] || e);
        }, l, l.exports, e, t, r, n);
      }
      return r[s].exports;
    }
    for (var o = undefined, s = 0; s < n.length; s++) i(n[s]);
    return i;
  }
  return e;
}()({
  1: [function (e, t, r) {
    t.exports = {
      version: "2.0",
      metadata: {
        apiVersion: "2014-06-30",
        endpointPrefix: "cognito-identity",
        jsonVersion: "1.1",
        protocol: "json",
        serviceFullName: "Amazon Cognito Identity",
        serviceId: "Cognito Identity",
        signatureVersion: "v4",
        targetPrefix: "AWSCognitoIdentityService",
        uid: "cognito-identity-2014-06-30"
      },
      operations: {
        CreateIdentityPool: {
          input: {
            type: "structure",
            required: ["IdentityPoolName", "AllowUnauthenticatedIdentities"],
            members: {
              IdentityPoolName: {},
              AllowUnauthenticatedIdentities: {
                type: "boolean"
              },
              AllowClassicFlow: {
                type: "boolean"
              },
              SupportedLoginProviders: {
                shape: "S5"
              },
              DeveloperProviderName: {},
              OpenIdConnectProviderARNs: {
                shape: "S9"
              },
              CognitoIdentityProviders: {
                shape: "Sb"
              },
              SamlProviderARNs: {
                shape: "Sg"
              },
              IdentityPoolTags: {
                shape: "Sh"
              }
            }
          },
          output: {
            shape: "Sk"
          }
        },
        DeleteIdentities: {
          input: {
            type: "structure",
            required: ["IdentityIdsToDelete"],
            members: {
              IdentityIdsToDelete: {
                type: "list",
                member: {}
              }
            }
          },
          output: {
            type: "structure",
            members: {
              UnprocessedIdentityIds: {
                type: "list",
                member: {
                  type: "structure",
                  members: {
                    IdentityId: {},
                    ErrorCode: {}
                  }
                }
              }
            }
          }
        },
        DeleteIdentityPool: {
          input: {
            type: "structure",
            required: ["IdentityPoolId"],
            members: {
              IdentityPoolId: {}
            }
          }
        },
        DescribeIdentity: {
          input: {
            type: "structure",
            required: ["IdentityId"],
            members: {
              IdentityId: {}
            }
          },
          output: {
            shape: "Sv"
          }
        },
        DescribeIdentityPool: {
          input: {
            type: "structure",
            required: ["IdentityPoolId"],
            members: {
              IdentityPoolId: {}
            }
          },
          output: {
            shape: "Sk"
          }
        },
        GetCredentialsForIdentity: {
          input: {
            type: "structure",
            required: ["IdentityId"],
            members: {
              IdentityId: {},
              Logins: {
                shape: "S10"
              },
              CustomRoleArn: {}
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {},
              Credentials: {
                type: "structure",
                members: {
                  AccessKeyId: {},
                  SecretKey: {},
                  SessionToken: {},
                  Expiration: {
                    type: "timestamp"
                  }
                }
              }
            }
          }
        },
        GetId: {
          input: {
            type: "structure",
            required: ["IdentityPoolId"],
            members: {
              AccountId: {},
              IdentityPoolId: {},
              Logins: {
                shape: "S10"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {}
            }
          }
        },
        GetIdentityPoolRoles: {
          input: {
            type: "structure",
            required: ["IdentityPoolId"],
            members: {
              IdentityPoolId: {}
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityPoolId: {},
              Roles: {
                shape: "S1c"
              },
              RoleMappings: {
                shape: "S1e"
              }
            }
          }
        },
        GetOpenIdToken: {
          input: {
            type: "structure",
            required: ["IdentityId"],
            members: {
              IdentityId: {},
              Logins: {
                shape: "S10"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {},
              Token: {}
            }
          }
        },
        GetOpenIdTokenForDeveloperIdentity: {
          input: {
            type: "structure",
            required: ["IdentityPoolId", "Logins"],
            members: {
              IdentityPoolId: {},
              IdentityId: {},
              Logins: {
                shape: "S10"
              },
              TokenDuration: {
                type: "long"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {},
              Token: {}
            }
          }
        },
        ListIdentities: {
          input: {
            type: "structure",
            required: ["IdentityPoolId", "MaxResults"],
            members: {
              IdentityPoolId: {},
              MaxResults: {
                type: "integer"
              },
              NextToken: {},
              HideDisabled: {
                type: "boolean"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityPoolId: {},
              Identities: {
                type: "list",
                member: {
                  shape: "Sv"
                }
              },
              NextToken: {}
            }
          }
        },
        ListIdentityPools: {
          input: {
            type: "structure",
            required: ["MaxResults"],
            members: {
              MaxResults: {
                type: "integer"
              },
              NextToken: {}
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityPools: {
                type: "list",
                member: {
                  type: "structure",
                  members: {
                    IdentityPoolId: {},
                    IdentityPoolName: {}
                  }
                }
              },
              NextToken: {}
            }
          }
        },
        ListTagsForResource: {
          input: {
            type: "structure",
            required: ["ResourceArn"],
            members: {
              ResourceArn: {}
            }
          },
          output: {
            type: "structure",
            members: {
              Tags: {
                shape: "Sh"
              }
            }
          }
        },
        LookupDeveloperIdentity: {
          input: {
            type: "structure",
            required: ["IdentityPoolId"],
            members: {
              IdentityPoolId: {},
              IdentityId: {},
              DeveloperUserIdentifier: {},
              MaxResults: {
                type: "integer"
              },
              NextToken: {}
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {},
              DeveloperUserIdentifierList: {
                type: "list",
                member: {}
              },
              NextToken: {}
            }
          }
        },
        MergeDeveloperIdentities: {
          input: {
            type: "structure",
            required: ["SourceUserIdentifier", "DestinationUserIdentifier", "DeveloperProviderName", "IdentityPoolId"],
            members: {
              SourceUserIdentifier: {},
              DestinationUserIdentifier: {},
              DeveloperProviderName: {},
              IdentityPoolId: {}
            }
          },
          output: {
            type: "structure",
            members: {
              IdentityId: {}
            }
          }
        },
        SetIdentityPoolRoles: {
          input: {
            type: "structure",
            required: ["IdentityPoolId", "Roles"],
            members: {
              IdentityPoolId: {},
              Roles: {
                shape: "S1c"
              },
              RoleMappings: {
                shape: "S1e"
              }
            }
          }
        },
        TagResource: {
          input: {
            type: "structure",
            required: ["ResourceArn", "Tags"],
            members: {
              ResourceArn: {},
              Tags: {
                shape: "Sh"
              }
            }
          },
          output: {
            type: "structure",
            members: {}
          }
        },
        UnlinkDeveloperIdentity: {
          input: {
            type: "structure",
            required: ["IdentityId", "IdentityPoolId", "DeveloperProviderName", "DeveloperUserIdentifier"],
            members: {
              IdentityId: {},
              IdentityPoolId: {},
              DeveloperProviderName: {},
              DeveloperUserIdentifier: {}
            }
          }
        },
        UnlinkIdentity: {
          input: {
            type: "structure",
            required: ["IdentityId", "Logins", "LoginsToRemove"],
            members: {
              IdentityId: {},
              Logins: {
                shape: "S10"
              },
              LoginsToRemove: {
                shape: "Sw"
              }
            }
          }
        },
        UntagResource: {
          input: {
            type: "structure",
            required: ["ResourceArn", "TagKeys"],
            members: {
              ResourceArn: {},
              TagKeys: {
                type: "list",
                member: {}
              }
            }
          },
          output: {
            type: "structure",
            members: {}
          }
        },
        UpdateIdentityPool: {
          input: {
            shape: "Sk"
          },
          output: {
            shape: "Sk"
          }
        }
      },
      shapes: {
        S5: {
          type: "map",
          key: {},
          value: {}
        },
        S9: {
          type: "list",
          member: {}
        },
        Sb: {
          type: "list",
          member: {
            type: "structure",
            members: {
              ProviderName: {},
              ClientId: {},
              ServerSideTokenCheck: {
                type: "boolean"
              }
            }
          }
        },
        Sg: {
          type: "list",
          member: {}
        },
        Sh: {
          type: "map",
          key: {},
          value: {}
        },
        Sk: {
          type: "structure",
          required: ["IdentityPoolId", "IdentityPoolName", "AllowUnauthenticatedIdentities"],
          members: {
            IdentityPoolId: {},
            IdentityPoolName: {},
            AllowUnauthenticatedIdentities: {
              type: "boolean"
            },
            AllowClassicFlow: {
              type: "boolean"
            },
            SupportedLoginProviders: {
              shape: "S5"
            },
            DeveloperProviderName: {},
            OpenIdConnectProviderARNs: {
              shape: "S9"
            },
            CognitoIdentityProviders: {
              shape: "Sb"
            },
            SamlProviderARNs: {
              shape: "Sg"
            },
            IdentityPoolTags: {
              shape: "Sh"
            }
          }
        },
        Sv: {
          type: "structure",
          members: {
            IdentityId: {},
            Logins: {
              shape: "Sw"
            },
            CreationDate: {
              type: "timestamp"
            },
            LastModifiedDate: {
              type: "timestamp"
            }
          }
        },
        Sw: {
          type: "list",
          member: {}
        },
        S10: {
          type: "map",
          key: {},
          value: {}
        },
        S1c: {
          type: "map",
          key: {},
          value: {}
        },
        S1e: {
          type: "map",
          key: {},
          value: {
            type: "structure",
            required: ["Type"],
            members: {
              Type: {},
              AmbiguousRoleResolution: {},
              RulesConfiguration: {
                type: "structure",
                required: ["Rules"],
                members: {
                  Rules: {
                    type: "list",
                    member: {
                      type: "structure",
                      required: ["Claim", "MatchType", "Value", "RoleARN"],
                      members: {
                        Claim: {},
                        MatchType: {},
                        Value: {},
                        RoleARN: {}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }, {}],
  2: [function (e, t, r) {
    t.exports = {
      pagination: {}
    };
  }, {}],
  3: [function (e, t, r) {
    t.exports = {
      version: "2.0",
      metadata: {
        apiVersion: "2018-09-07",
        endpointPrefix: "participant.connect",
        jsonVersion: "1.1",
        protocol: "rest-json",
        serviceAbbreviation: "Amazon Connect Participant",
        serviceFullName: "Amazon Connect Participant Service",
        serviceId: "ConnectParticipant",
        signatureVersion: "v4",
        signingName: "execute-api",
        uid: "connectparticipant-2018-09-07"
      },
      operations: {
        CompleteAttachmentUpload: {
          http: {
            requestUri: "/participant/complete-attachment-upload"
          },
          input: {
            type: "structure",
            required: ["AttachmentIds", "ClientToken", "ConnectionToken"],
            members: {
              AttachmentIds: {
                type: "list",
                member: {}
              },
              ClientToken: {
                idempotencyToken: !0
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {}
          }
        },
        CreateParticipantConnection: {
          http: {
            requestUri: "/participant/connection"
          },
          input: {
            type: "structure",
            required: ["ParticipantToken"],
            members: {
              Type: {
                type: "list",
                member: {}
              },
              ParticipantToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              },
              ConnectParticipant: {
                type: "boolean"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              Websocket: {
                type: "structure",
                members: {
                  Url: {},
                  ConnectionExpiry: {}
                }
              },
              ConnectionCredentials: {
                type: "structure",
                members: {
                  ConnectionToken: {},
                  Expiry: {}
                }
              }
            }
          }
        },
        DisconnectParticipant: {
          http: {
            requestUri: "/participant/disconnect"
          },
          input: {
            type: "structure",
            required: ["ConnectionToken"],
            members: {
              ClientToken: {
                idempotencyToken: !0
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {}
          }
        },
        GetAttachment: {
          http: {
            requestUri: "/participant/attachment"
          },
          input: {
            type: "structure",
            required: ["AttachmentId", "ConnectionToken"],
            members: {
              AttachmentId: {},
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              Url: {},
              UrlExpiry: {}
            }
          }
        },
        GetTranscript: {
          http: {
            requestUri: "/participant/transcript"
          },
          input: {
            type: "structure",
            required: ["ConnectionToken"],
            members: {
              ContactId: {},
              MaxResults: {
                type: "integer"
              },
              NextToken: {},
              ScanDirection: {},
              SortOrder: {},
              StartPosition: {
                type: "structure",
                members: {
                  Id: {},
                  AbsoluteTime: {},
                  MostRecent: {
                    type: "integer"
                  }
                }
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              InitialContactId: {},
              Transcript: {
                type: "list",
                member: {
                  type: "structure",
                  members: {
                    AbsoluteTime: {},
                    Content: {},
                    ContentType: {},
                    Id: {},
                    Type: {},
                    ParticipantId: {},
                    DisplayName: {},
                    ParticipantRole: {},
                    Attachments: {
                      type: "list",
                      member: {
                        type: "structure",
                        members: {
                          ContentType: {},
                          AttachmentId: {},
                          AttachmentName: {},
                          Status: {}
                        }
                      }
                    },
                    MessageMetadata: {
                      type: "structure",
                      members: {
                        MessageId: {},
                        Receipts: {
                          type: "list",
                          member: {
                            type: "structure",
                            members: {
                              DeliveredTimestamp: {},
                              ReadTimestamp: {},
                              RecipientParticipantId: {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              NextToken: {}
            }
          }
        },
        SendEvent: {
          http: {
            requestUri: "/participant/event"
          },
          input: {
            type: "structure",
            required: ["ContentType", "ConnectionToken"],
            members: {
              ContentType: {},
              Content: {},
              ClientToken: {
                idempotencyToken: !0
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              Id: {},
              AbsoluteTime: {}
            }
          }
        },
        SendMessage: {
          http: {
            requestUri: "/participant/message"
          },
          input: {
            type: "structure",
            required: ["ContentType", "Content", "ConnectionToken"],
            members: {
              ContentType: {},
              Content: {},
              ClientToken: {
                idempotencyToken: !0
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              Id: {},
              AbsoluteTime: {}
            }
          }
        },
        StartAttachmentUpload: {
          http: {
            requestUri: "/participant/start-attachment-upload"
          },
          input: {
            type: "structure",
            required: ["ContentType", "AttachmentSizeInBytes", "AttachmentName", "ClientToken", "ConnectionToken"],
            members: {
              ContentType: {},
              AttachmentSizeInBytes: {
                type: "long"
              },
              AttachmentName: {},
              ClientToken: {
                idempotencyToken: !0
              },
              ConnectionToken: {
                location: "header",
                locationName: "X-Amz-Bearer"
              }
            }
          },
          output: {
            type: "structure",
            members: {
              AttachmentId: {},
              UploadMetadata: {
                type: "structure",
                members: {
                  Url: {},
                  UrlExpiry: {},
                  HeadersToInclude: {
                    type: "map",
                    key: {},
                    value: {}
                  }
                }
              }
            }
          }
        }
      },
      shapes: {}
    };
  }, {}],
  4: [function (e, t, r) {
    t.exports = {
      pagination: {
        GetTranscript: {
          input_token: "NextToken",
          output_token: "NextToken",
          limit_key: "MaxResults"
        }
      }
    };
  }, {}],
  5: [function (e, t, r) {
    t.exports = {
      acm: {
        name: "ACM",
        cors: !0
      },
      apigateway: {
        name: "APIGateway",
        cors: !0
      },
      applicationautoscaling: {
        prefix: "application-autoscaling",
        name: "ApplicationAutoScaling",
        cors: !0
      },
      appstream: {
        name: "AppStream"
      },
      autoscaling: {
        name: "AutoScaling",
        cors: !0
      },
      batch: {
        name: "Batch"
      },
      budgets: {
        name: "Budgets"
      },
      clouddirectory: {
        name: "CloudDirectory",
        versions: ["2016-05-10*"]
      },
      cloudformation: {
        name: "CloudFormation",
        cors: !0
      },
      cloudfront: {
        name: "CloudFront",
        versions: ["2013-05-12*", "2013-11-11*", "2014-05-31*", "2014-10-21*", "2014-11-06*", "2015-04-17*", "2015-07-27*", "2015-09-17*", "2016-01-13*", "2016-01-28*", "2016-08-01*", "2016-08-20*", "2016-09-07*", "2016-09-29*", "2016-11-25*", "2017-03-25*", "2017-10-30*", "2018-06-18*", "2018-11-05*", "2019-03-26*"],
        cors: !0
      },
      cloudhsm: {
        name: "CloudHSM",
        cors: !0
      },
      cloudsearch: {
        name: "CloudSearch"
      },
      cloudsearchdomain: {
        name: "CloudSearchDomain"
      },
      cloudtrail: {
        name: "CloudTrail",
        cors: !0
      },
      cloudwatch: {
        prefix: "monitoring",
        name: "CloudWatch",
        cors: !0
      },
      cloudwatchevents: {
        prefix: "events",
        name: "CloudWatchEvents",
        versions: ["2014-02-03*"],
        cors: !0
      },
      cloudwatchlogs: {
        prefix: "logs",
        name: "CloudWatchLogs",
        cors: !0
      },
      codebuild: {
        name: "CodeBuild",
        cors: !0
      },
      codecommit: {
        name: "CodeCommit",
        cors: !0
      },
      codedeploy: {
        name: "CodeDeploy",
        cors: !0
      },
      codepipeline: {
        name: "CodePipeline",
        cors: !0
      },
      cognitoidentity: {
        prefix: "cognito-identity",
        name: "CognitoIdentity",
        cors: !0
      },
      cognitoidentityserviceprovider: {
        prefix: "cognito-idp",
        name: "CognitoIdentityServiceProvider",
        cors: !0
      },
      cognitosync: {
        prefix: "cognito-sync",
        name: "CognitoSync",
        cors: !0
      },
      configservice: {
        prefix: "config",
        name: "ConfigService",
        cors: !0
      },
      cur: {
        name: "CUR",
        cors: !0
      },
      datapipeline: {
        name: "DataPipeline"
      },
      devicefarm: {
        name: "DeviceFarm",
        cors: !0
      },
      directconnect: {
        name: "DirectConnect",
        cors: !0
      },
      directoryservice: {
        prefix: "ds",
        name: "DirectoryService"
      },
      discovery: {
        name: "Discovery"
      },
      dms: {
        name: "DMS"
      },
      dynamodb: {
        name: "DynamoDB",
        cors: !0
      },
      dynamodbstreams: {
        prefix: "streams.dynamodb",
        name: "DynamoDBStreams",
        cors: !0
      },
      ec2: {
        name: "EC2",
        versions: ["2013-06-15*", "2013-10-15*", "2014-02-01*", "2014-05-01*", "2014-06-15*", "2014-09-01*", "2014-10-01*", "2015-03-01*", "2015-04-15*", "2015-10-01*", "2016-04-01*", "2016-09-15*"],
        cors: !0
      },
      ecr: {
        name: "ECR",
        cors: !0
      },
      ecs: {
        name: "ECS",
        cors: !0
      },
      efs: {
        prefix: "elasticfilesystem",
        name: "EFS",
        cors: !0
      },
      elasticache: {
        name: "ElastiCache",
        versions: ["2012-11-15*", "2014-03-24*", "2014-07-15*", "2014-09-30*"],
        cors: !0
      },
      elasticbeanstalk: {
        name: "ElasticBeanstalk",
        cors: !0
      },
      elb: {
        prefix: "elasticloadbalancing",
        name: "ELB",
        cors: !0
      },
      elbv2: {
        prefix: "elasticloadbalancingv2",
        name: "ELBv2",
        cors: !0
      },
      emr: {
        prefix: "elasticmapreduce",
        name: "EMR",
        cors: !0
      },
      es: {
        name: "ES"
      },
      elastictranscoder: {
        name: "ElasticTranscoder",
        cors: !0
      },
      firehose: {
        name: "Firehose",
        cors: !0
      },
      gamelift: {
        name: "GameLift",
        cors: !0
      },
      glacier: {
        name: "Glacier"
      },
      health: {
        name: "Health"
      },
      iam: {
        name: "IAM",
        cors: !0
      },
      importexport: {
        name: "ImportExport"
      },
      inspector: {
        name: "Inspector",
        versions: ["2015-08-18*"],
        cors: !0
      },
      iot: {
        name: "Iot",
        cors: !0
      },
      iotdata: {
        prefix: "iot-data",
        name: "IotData",
        cors: !0
      },
      kinesis: {
        name: "Kinesis",
        cors: !0
      },
      kinesisanalytics: {
        name: "KinesisAnalytics"
      },
      kms: {
        name: "KMS",
        cors: !0
      },
      lambda: {
        name: "Lambda",
        cors: !0
      },
      lexruntime: {
        prefix: "runtime.lex",
        name: "LexRuntime",
        cors: !0
      },
      lightsail: {
        name: "Lightsail"
      },
      machinelearning: {
        name: "MachineLearning",
        cors: !0
      },
      marketplacecommerceanalytics: {
        name: "MarketplaceCommerceAnalytics",
        cors: !0
      },
      marketplacemetering: {
        prefix: "meteringmarketplace",
        name: "MarketplaceMetering"
      },
      mturk: {
        prefix: "mturk-requester",
        name: "MTurk",
        cors: !0
      },
      mobileanalytics: {
        name: "MobileAnalytics",
        cors: !0
      },
      opsworks: {
        name: "OpsWorks",
        cors: !0
      },
      opsworkscm: {
        name: "OpsWorksCM"
      },
      organizations: {
        name: "Organizations"
      },
      pinpoint: {
        name: "Pinpoint"
      },
      polly: {
        name: "Polly",
        cors: !0
      },
      rds: {
        name: "RDS",
        versions: ["2014-09-01*"],
        cors: !0
      },
      redshift: {
        name: "Redshift",
        cors: !0
      },
      rekognition: {
        name: "Rekognition",
        cors: !0
      },
      resourcegroupstaggingapi: {
        name: "ResourceGroupsTaggingAPI"
      },
      route53: {
        name: "Route53",
        cors: !0
      },
      route53domains: {
        name: "Route53Domains",
        cors: !0
      },
      s3: {
        name: "S3",
        dualstackAvailable: !0,
        cors: !0
      },
      s3control: {
        name: "S3Control",
        dualstackAvailable: !0,
        xmlNoDefaultLists: !0
      },
      servicecatalog: {
        name: "ServiceCatalog",
        cors: !0
      },
      ses: {
        prefix: "email",
        name: "SES",
        cors: !0
      },
      shield: {
        name: "Shield"
      },
      simpledb: {
        prefix: "sdb",
        name: "SimpleDB"
      },
      sms: {
        name: "SMS"
      },
      snowball: {
        name: "Snowball"
      },
      sns: {
        name: "SNS",
        cors: !0
      },
      sqs: {
        name: "SQS",
        cors: !0
      },
      ssm: {
        name: "SSM",
        cors: !0
      },
      storagegateway: {
        name: "StorageGateway",
        cors: !0
      },
      stepfunctions: {
        prefix: "states",
        name: "StepFunctions"
      },
      sts: {
        name: "STS",
        cors: !0
      },
      support: {
        name: "Support"
      },
      swf: {
        name: "SWF"
      },
      xray: {
        name: "XRay",
        cors: !0
      },
      waf: {
        name: "WAF",
        cors: !0
      },
      wafregional: {
        prefix: "waf-regional",
        name: "WAFRegional"
      },
      workdocs: {
        name: "WorkDocs",
        cors: !0
      },
      workspaces: {
        name: "WorkSpaces"
      },
      codestar: {
        name: "CodeStar"
      },
      lexmodelbuildingservice: {
        prefix: "lex-models",
        name: "LexModelBuildingService",
        cors: !0
      },
      marketplaceentitlementservice: {
        prefix: "entitlement.marketplace",
        name: "MarketplaceEntitlementService"
      },
      athena: {
        name: "Athena"
      },
      greengrass: {
        name: "Greengrass"
      },
      dax: {
        name: "DAX"
      },
      migrationhub: {
        prefix: "AWSMigrationHub",
        name: "MigrationHub"
      },
      cloudhsmv2: {
        name: "CloudHSMV2"
      },
      glue: {
        name: "Glue"
      },
      mobile: {
        name: "Mobile"
      },
      pricing: {
        name: "Pricing",
        cors: !0
      },
      costexplorer: {
        prefix: "ce",
        name: "CostExplorer",
        cors: !0
      },
      mediaconvert: {
        name: "MediaConvert"
      },
      medialive: {
        name: "MediaLive"
      },
      mediapackage: {
        name: "MediaPackage"
      },
      mediastore: {
        name: "MediaStore"
      },
      mediastoredata: {
        prefix: "mediastore-data",
        name: "MediaStoreData",
        cors: !0
      },
      appsync: {
        name: "AppSync"
      },
      guardduty: {
        name: "GuardDuty"
      },
      mq: {
        name: "MQ"
      },
      comprehend: {
        name: "Comprehend",
        cors: !0
      },
      iotjobsdataplane: {
        prefix: "iot-jobs-data",
        name: "IoTJobsDataPlane"
      },
      kinesisvideoarchivedmedia: {
        prefix: "kinesis-video-archived-media",
        name: "KinesisVideoArchivedMedia",
        cors: !0
      },
      kinesisvideomedia: {
        prefix: "kinesis-video-media",
        name: "KinesisVideoMedia",
        cors: !0
      },
      kinesisvideo: {
        name: "KinesisVideo",
        cors: !0
      },
      sagemakerruntime: {
        prefix: "runtime.sagemaker",
        name: "SageMakerRuntime"
      },
      sagemaker: {
        name: "SageMaker"
      },
      translate: {
        name: "Translate",
        cors: !0
      },
      resourcegroups: {
        prefix: "resource-groups",
        name: "ResourceGroups",
        cors: !0
      },
      alexaforbusiness: {
        name: "AlexaForBusiness"
      },
      cloud9: {
        name: "Cloud9"
      },
      serverlessapplicationrepository: {
        prefix: "serverlessrepo",
        name: "ServerlessApplicationRepository"
      },
      servicediscovery: {
        name: "ServiceDiscovery"
      },
      workmail: {
        name: "WorkMail"
      },
      autoscalingplans: {
        prefix: "autoscaling-plans",
        name: "AutoScalingPlans"
      },
      transcribeservice: {
        prefix: "transcribe",
        name: "TranscribeService"
      },
      connect: {
        name: "Connect",
        cors: !0
      },
      acmpca: {
        prefix: "acm-pca",
        name: "ACMPCA"
      },
      fms: {
        name: "FMS"
      },
      secretsmanager: {
        name: "SecretsManager",
        cors: !0
      },
      iotanalytics: {
        name: "IoTAnalytics",
        cors: !0
      },
      iot1clickdevicesservice: {
        prefix: "iot1click-devices",
        name: "IoT1ClickDevicesService"
      },
      iot1clickprojects: {
        prefix: "iot1click-projects",
        name: "IoT1ClickProjects"
      },
      pi: {
        name: "PI"
      },
      neptune: {
        name: "Neptune"
      },
      mediatailor: {
        name: "MediaTailor"
      },
      eks: {
        name: "EKS"
      },
      macie: {
        name: "Macie"
      },
      dlm: {
        name: "DLM"
      },
      signer: {
        name: "Signer"
      },
      chime: {
        name: "Chime"
      },
      pinpointemail: {
        prefix: "pinpoint-email",
        name: "PinpointEmail"
      },
      ram: {
        name: "RAM"
      },
      route53resolver: {
        name: "Route53Resolver"
      },
      pinpointsmsvoice: {
        prefix: "sms-voice",
        name: "PinpointSMSVoice"
      },
      quicksight: {
        name: "QuickSight"
      },
      rdsdataservice: {
        prefix: "rds-data",
        name: "RDSDataService"
      },
      amplify: {
        name: "Amplify"
      },
      datasync: {
        name: "DataSync"
      },
      robomaker: {
        name: "RoboMaker"
      },
      transfer: {
        name: "Transfer"
      },
      globalaccelerator: {
        name: "GlobalAccelerator"
      },
      comprehendmedical: {
        name: "ComprehendMedical",
        cors: !0
      },
      kinesisanalyticsv2: {
        name: "KinesisAnalyticsV2"
      },
      mediaconnect: {
        name: "MediaConnect"
      },
      fsx: {
        name: "FSx"
      },
      securityhub: {
        name: "SecurityHub"
      },
      appmesh: {
        name: "AppMesh",
        versions: ["2018-10-01*"]
      },
      licensemanager: {
        prefix: "license-manager",
        name: "LicenseManager"
      },
      kafka: {
        name: "Kafka"
      },
      apigatewaymanagementapi: {
        name: "ApiGatewayManagementApi"
      },
      apigatewayv2: {
        name: "ApiGatewayV2"
      },
      docdb: {
        name: "DocDB"
      },
      backup: {
        name: "Backup"
      },
      worklink: {
        name: "WorkLink"
      },
      textract: {
        name: "Textract"
      },
      managedblockchain: {
        name: "ManagedBlockchain"
      },
      mediapackagevod: {
        prefix: "mediapackage-vod",
        name: "MediaPackageVod"
      },
      groundstation: {
        name: "GroundStation"
      },
      iotthingsgraph: {
        name: "IoTThingsGraph"
      },
      iotevents: {
        name: "IoTEvents"
      },
      ioteventsdata: {
        prefix: "iotevents-data",
        name: "IoTEventsData"
      },
      personalize: {
        name: "Personalize",
        cors: !0
      },
      personalizeevents: {
        prefix: "personalize-events",
        name: "PersonalizeEvents",
        cors: !0
      },
      personalizeruntime: {
        prefix: "personalize-runtime",
        name: "PersonalizeRuntime",
        cors: !0
      },
      applicationinsights: {
        prefix: "application-insights",
        name: "ApplicationInsights"
      },
      servicequotas: {
        prefix: "service-quotas",
        name: "ServiceQuotas"
      },
      ec2instanceconnect: {
        prefix: "ec2-instance-connect",
        name: "EC2InstanceConnect"
      },
      eventbridge: {
        name: "EventBridge"
      },
      lakeformation: {
        name: "LakeFormation"
      },
      forecastservice: {
        prefix: "forecast",
        name: "ForecastService",
        cors: !0
      },
      forecastqueryservice: {
        prefix: "forecastquery",
        name: "ForecastQueryService",
        cors: !0
      },
      qldb: {
        name: "QLDB"
      },
      qldbsession: {
        prefix: "qldb-session",
        name: "QLDBSession"
      },
      workmailmessageflow: {
        name: "WorkMailMessageFlow"
      },
      codestarnotifications: {
        prefix: "codestar-notifications",
        name: "CodeStarNotifications"
      },
      savingsplans: {
        name: "SavingsPlans"
      },
      sso: {
        name: "SSO"
      },
      ssooidc: {
        prefix: "sso-oidc",
        name: "SSOOIDC"
      },
      marketplacecatalog: {
        prefix: "marketplace-catalog",
        name: "MarketplaceCatalog"
      },
      dataexchange: {
        name: "DataExchange"
      },
      sesv2: {
        name: "SESV2"
      },
      migrationhubconfig: {
        prefix: "migrationhub-config",
        name: "MigrationHubConfig"
      },
      connectparticipant: {
        name: "ConnectParticipant"
      },
      appconfig: {
        name: "AppConfig"
      },
      iotsecuretunneling: {
        name: "IoTSecureTunneling"
      },
      wafv2: {
        name: "WAFV2"
      },
      elasticinference: {
        prefix: "elastic-inference",
        name: "ElasticInference"
      },
      imagebuilder: {
        name: "Imagebuilder"
      },
      schemas: {
        name: "Schemas"
      },
      accessanalyzer: {
        name: "AccessAnalyzer"
      },
      codegurureviewer: {
        prefix: "codeguru-reviewer",
        name: "CodeGuruReviewer"
      },
      codeguruprofiler: {
        name: "CodeGuruProfiler"
      },
      computeoptimizer: {
        prefix: "compute-optimizer",
        name: "ComputeOptimizer"
      },
      frauddetector: {
        name: "FraudDetector"
      },
      kendra: {
        name: "Kendra"
      },
      networkmanager: {
        name: "NetworkManager"
      },
      outposts: {
        name: "Outposts"
      },
      augmentedairuntime: {
        prefix: "sagemaker-a2i-runtime",
        name: "AugmentedAIRuntime"
      },
      ebs: {
        name: "EBS"
      },
      kinesisvideosignalingchannels: {
        prefix: "kinesis-video-signaling",
        name: "KinesisVideoSignalingChannels",
        cors: !0
      },
      detective: {
        name: "Detective"
      },
      codestarconnections: {
        prefix: "codestar-connections",
        name: "CodeStarconnections"
      },
      synthetics: {
        name: "Synthetics"
      },
      iotsitewise: {
        name: "IoTSiteWise"
      },
      macie2: {
        name: "Macie2"
      },
      codeartifact: {
        name: "CodeArtifact"
      },
      honeycode: {
        name: "Honeycode"
      },
      ivs: {
        name: "IVS"
      },
      braket: {
        name: "Braket"
      },
      identitystore: {
        name: "IdentityStore"
      },
      appflow: {
        name: "Appflow"
      },
      redshiftdata: {
        prefix: "redshift-data",
        name: "RedshiftData"
      },
      ssoadmin: {
        prefix: "sso-admin",
        name: "SSOAdmin"
      },
      timestreamquery: {
        prefix: "timestream-query",
        name: "TimestreamQuery"
      },
      timestreamwrite: {
        prefix: "timestream-write",
        name: "TimestreamWrite"
      },
      s3outposts: {
        name: "S3Outposts"
      }
    };
  }, {}],
  6: [function (e, t, r) {
    t.exports = {
      version: "2.0",
      metadata: {
        apiVersion: "2011-06-15",
        endpointPrefix: "sts",
        globalEndpoint: "sts.amazonaws.com",
        protocol: "query",
        serviceAbbreviation: "AWS STS",
        serviceFullName: "AWS Security Token Service",
        serviceId: "STS",
        signatureVersion: "v4",
        uid: "sts-2011-06-15",
        xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/"
      },
      operations: {
        AssumeRole: {
          input: {
            type: "structure",
            required: ["RoleArn", "RoleSessionName"],
            members: {
              RoleArn: {},
              RoleSessionName: {},
              PolicyArns: {
                shape: "S4"
              },
              Policy: {},
              DurationSeconds: {
                type: "integer"
              },
              Tags: {
                shape: "S8"
              },
              TransitiveTagKeys: {
                type: "list",
                member: {}
              },
              ExternalId: {},
              SerialNumber: {},
              TokenCode: {}
            }
          },
          output: {
            resultWrapper: "AssumeRoleResult",
            type: "structure",
            members: {
              Credentials: {
                shape: "Sh"
              },
              AssumedRoleUser: {
                shape: "Sm"
              },
              PackedPolicySize: {
                type: "integer"
              }
            }
          }
        },
        AssumeRoleWithSAML: {
          input: {
            type: "structure",
            required: ["RoleArn", "PrincipalArn", "SAMLAssertion"],
            members: {
              RoleArn: {},
              PrincipalArn: {},
              SAMLAssertion: {},
              PolicyArns: {
                shape: "S4"
              },
              Policy: {},
              DurationSeconds: {
                type: "integer"
              }
            }
          },
          output: {
            resultWrapper: "AssumeRoleWithSAMLResult",
            type: "structure",
            members: {
              Credentials: {
                shape: "Sh"
              },
              AssumedRoleUser: {
                shape: "Sm"
              },
              PackedPolicySize: {
                type: "integer"
              },
              Subject: {},
              SubjectType: {},
              Issuer: {},
              Audience: {},
              NameQualifier: {}
            }
          }
        },
        AssumeRoleWithWebIdentity: {
          input: {
            type: "structure",
            required: ["RoleArn", "RoleSessionName", "WebIdentityToken"],
            members: {
              RoleArn: {},
              RoleSessionName: {},
              WebIdentityToken: {},
              ProviderId: {},
              PolicyArns: {
                shape: "S4"
              },
              Policy: {},
              DurationSeconds: {
                type: "integer"
              }
            }
          },
          output: {
            resultWrapper: "AssumeRoleWithWebIdentityResult",
            type: "structure",
            members: {
              Credentials: {
                shape: "Sh"
              },
              SubjectFromWebIdentityToken: {},
              AssumedRoleUser: {
                shape: "Sm"
              },
              PackedPolicySize: {
                type: "integer"
              },
              Provider: {},
              Audience: {}
            }
          }
        },
        DecodeAuthorizationMessage: {
          input: {
            type: "structure",
            required: ["EncodedMessage"],
            members: {
              EncodedMessage: {}
            }
          },
          output: {
            resultWrapper: "DecodeAuthorizationMessageResult",
            type: "structure",
            members: {
              DecodedMessage: {}
            }
          }
        },
        GetAccessKeyInfo: {
          input: {
            type: "structure",
            required: ["AccessKeyId"],
            members: {
              AccessKeyId: {}
            }
          },
          output: {
            resultWrapper: "GetAccessKeyInfoResult",
            type: "structure",
            members: {
              Account: {}
            }
          }
        },
        GetCallerIdentity: {
          input: {
            type: "structure",
            members: {}
          },
          output: {
            resultWrapper: "GetCallerIdentityResult",
            type: "structure",
            members: {
              UserId: {},
              Account: {},
              Arn: {}
            }
          }
        },
        GetFederationToken: {
          input: {
            type: "structure",
            required: ["Name"],
            members: {
              Name: {},
              Policy: {},
              PolicyArns: {
                shape: "S4"
              },
              DurationSeconds: {
                type: "integer"
              },
              Tags: {
                shape: "S8"
              }
            }
          },
          output: {
            resultWrapper: "GetFederationTokenResult",
            type: "structure",
            members: {
              Credentials: {
                shape: "Sh"
              },
              FederatedUser: {
                type: "structure",
                required: ["FederatedUserId", "Arn"],
                members: {
                  FederatedUserId: {},
                  Arn: {}
                }
              },
              PackedPolicySize: {
                type: "integer"
              }
            }
          }
        },
        GetSessionToken: {
          input: {
            type: "structure",
            members: {
              DurationSeconds: {
                type: "integer"
              },
              SerialNumber: {},
              TokenCode: {}
            }
          },
          output: {
            resultWrapper: "GetSessionTokenResult",
            type: "structure",
            members: {
              Credentials: {
                shape: "Sh"
              }
            }
          }
        }
      },
      shapes: {
        S4: {
          type: "list",
          member: {
            type: "structure",
            members: {
              arn: {}
            }
          }
        },
        S8: {
          type: "list",
          member: {
            type: "structure",
            required: ["Key", "Value"],
            members: {
              Key: {},
              Value: {}
            }
          }
        },
        Sh: {
          type: "structure",
          required: ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"],
          members: {
            AccessKeyId: {},
            SecretAccessKey: {},
            SessionToken: {},
            Expiration: {
              type: "timestamp"
            }
          }
        },
        Sm: {
          type: "structure",
          required: ["AssumedRoleId", "Arn"],
          members: {
            AssumedRoleId: {},
            Arn: {}
          }
        }
      }
    };
  }, {}],
  7: [function (e, t, r) {
    arguments[4][2][0].apply(r, arguments);
  }, {
    dup: 2
  }],
  8: [function (e, t, r) {
    e("../lib/node_loader");
    var n = e("../lib/core"),
      i = n.Service,
      o = n.apiLoader;
    o.services.cognitoidentity = {}, n.CognitoIdentity = i.defineService("cognitoidentity", ["2014-06-30"]), e("../lib/services/cognitoidentity"), Object.defineProperty(o.services.cognitoidentity, "2014-06-30", {
      get: function get() {
        var t = e("../apis/cognito-identity-2014-06-30.min.json");
        return t.paginators = e("../apis/cognito-identity-2014-06-30.paginators.json").pagination, t;
      },
      enumerable: !0,
      configurable: !0
    }), t.exports = n.CognitoIdentity;
  }, {
    "../apis/cognito-identity-2014-06-30.min.json": 1,
    "../apis/cognito-identity-2014-06-30.paginators.json": 2,
    "../lib/core": 20,
    "../lib/node_loader": 17,
    "../lib/services/cognitoidentity": 62
  }],
  9: [function (e, t, r) {
    e("../lib/node_loader");
    var n = e("../lib/core"),
      i = n.Service,
      o = n.apiLoader;
    o.services.sts = {}, n.STS = i.defineService("sts", ["2011-06-15"]), e("../lib/services/sts"), Object.defineProperty(o.services.sts, "2011-06-15", {
      get: function get() {
        var t = e("../apis/sts-2011-06-15.min.json");
        return t.paginators = e("../apis/sts-2011-06-15.paginators.json").pagination, t;
      },
      enumerable: !0,
      configurable: !0
    }), t.exports = n.STS;
  }, {
    "../apis/sts-2011-06-15.min.json": 6,
    "../apis/sts-2011-06-15.paginators.json": 7,
    "../lib/core": 20,
    "../lib/node_loader": 17,
    "../lib/services/sts": 63
  }],
  10: [function (e, t, r) {
    function n(e, t) {
      if (!n.services.hasOwnProperty(e)) throw new Error("InvalidService: Failed to load api for " + e);
      return n.services[e][t];
    }
    n.services = {}, t.exports = n;
  }, {}],
  11: [function (e, t, r) {
    var n = e("./browserHmac"),
      i = e("./browserMd5"),
      o = e("./browserSha1"),
      s = e("./browserSha256");
    t.exports = {
      createHash: function createHash(e) {
        if ("md5" === (e = e.toLowerCase())) return new i();
        if ("sha256" === e) return new s();
        if ("sha1" === e) return new o();
        throw new Error("Hash algorithm " + e + " is not supported in the browser SDK");
      },
      createHmac: function createHmac(e, t) {
        if ("md5" === (e = e.toLowerCase())) return new n(i, t);
        if ("sha256" === e) return new n(s, t);
        if ("sha1" === e) return new n(o, t);
        throw new Error("HMAC algorithm " + e + " is not supported in the browser SDK");
      },
      createSign: function createSign() {
        throw new Error("createSign is not implemented in the browser");
      }
    };
  }, {
    "./browserHmac": 13,
    "./browserMd5": 14,
    "./browserSha1": 15,
    "./browserSha256": 16
  }],
  12: [function (e, t, r) {
    function n(e) {
      return "string" == typeof e ? 0 === e.length : 0 === e.byteLength;
    }
    function i(e) {
      return "string" == typeof e && (e = new o(e, "utf8")), ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
    }
    var o = e("buffer/").Buffer;
    "undefined" != typeof ArrayBuffer && void 0 === ArrayBuffer.isView && (ArrayBuffer.isView = function (e) {
      return s.indexOf(Object.prototype.toString.call(e)) > -1;
    });
    var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]", "[object DataView]"];
    t.exports = {
      isEmptyData: n,
      convertToBuffer: i
    };
  }, {
    "buffer/": 82
  }],
  13: [function (e, t, r) {
    function n(e, t) {
      this.hash = new e(), this.outer = new e();
      var r = i(e, t),
        n = new Uint8Array(e.BLOCK_SIZE);
      n.set(r);
      for (var o = 0; o < e.BLOCK_SIZE; o++) r[o] ^= 54, n[o] ^= 92;
      this.hash.update(r), this.outer.update(n);
      for (var o = 0; o < r.byteLength; o++) r[o] = 0;
    }
    function i(e, t) {
      var r = o.convertToBuffer(t);
      if (r.byteLength > e.BLOCK_SIZE) {
        var n = new e();
        n.update(r), r = n.digest();
      }
      var i = new Uint8Array(e.BLOCK_SIZE);
      return i.set(r), i;
    }
    var o = e("./browserHashUtils");
    t.exports = n, n.prototype.update = function (e) {
      if (o.isEmptyData(e) || this.error) return this;
      try {
        this.hash.update(o.convertToBuffer(e));
      } catch (e) {
        this.error = e;
      }
      return this;
    }, n.prototype.digest = function (e) {
      return this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest(e);
    };
  }, {
    "./browserHashUtils": 12
  }],
  14: [function (e, t, r) {
    function n() {
      this.state = [1732584193, 4023233417, 2562383102, 271733878], this.buffer = new DataView(new ArrayBuffer(p)), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    function i(e, t, r, n, i, o) {
      return ((t = (t + e & 4294967295) + (n + o & 4294967295) & 4294967295) << i | t >>> 32 - i) + r & 4294967295;
    }
    function o(e, t, r, n, o, s, a) {
      return i(t & r | ~t & n, e, t, o, s, a);
    }
    function s(e, t, r, n, o, s, a) {
      return i(t & n | r & ~n, e, t, o, s, a);
    }
    function a(e, t, r, n, o, s, a) {
      return i(t ^ r ^ n, e, t, o, s, a);
    }
    function u(e, t, r, n, o, s, a) {
      return i(r ^ (t | ~n), e, t, o, s, a);
    }
    var c = e("./browserHashUtils"),
      l = e("buffer/").Buffer,
      p = 64;
    t.exports = n, n.BLOCK_SIZE = p, n.prototype.update = function (e) {
      if (c.isEmptyData(e)) return this;
      if (this.finished) throw new Error("Attempted to update an already finished hash.");
      var t = c.convertToBuffer(e),
        r = 0,
        n = t.byteLength;
      for (this.bytesHashed += n; n > 0;) this.buffer.setUint8(this.bufferLength++, t[r++]), n--, this.bufferLength === p && (this.hashBuffer(), this.bufferLength = 0);
      return this;
    }, n.prototype.digest = function (e) {
      if (!this.finished) {
        var t = this,
          r = t.buffer,
          n = t.bufferLength,
          i = t.bytesHashed,
          o = 8 * i;
        if (r.setUint8(this.bufferLength++, 128), n % p >= p - 8) {
          for (var s = this.bufferLength; s < p; s++) r.setUint8(s, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var s = this.bufferLength; s < p - 8; s++) r.setUint8(s, 0);
        r.setUint32(p - 8, o >>> 0, !0), r.setUint32(p - 4, Math.floor(o / 4294967296), !0), this.hashBuffer(), this.finished = !0;
      }
      for (var a = new DataView(new ArrayBuffer(16)), s = 0; s < 4; s++) a.setUint32(4 * s, this.state[s], !0);
      var u = new l(a.buffer, a.byteOffset, a.byteLength);
      return e ? u.toString(e) : u;
    }, n.prototype.hashBuffer = function () {
      var e = this,
        t = e.buffer,
        r = e.state,
        n = r[0],
        i = r[1],
        c = r[2],
        l = r[3];
      n = o(n, i, c, l, t.getUint32(0, !0), 7, 3614090360), l = o(l, n, i, c, t.getUint32(4, !0), 12, 3905402710), c = o(c, l, n, i, t.getUint32(8, !0), 17, 606105819), i = o(i, c, l, n, t.getUint32(12, !0), 22, 3250441966), n = o(n, i, c, l, t.getUint32(16, !0), 7, 4118548399), l = o(l, n, i, c, t.getUint32(20, !0), 12, 1200080426), c = o(c, l, n, i, t.getUint32(24, !0), 17, 2821735955), i = o(i, c, l, n, t.getUint32(28, !0), 22, 4249261313), n = o(n, i, c, l, t.getUint32(32, !0), 7, 1770035416), l = o(l, n, i, c, t.getUint32(36, !0), 12, 2336552879), c = o(c, l, n, i, t.getUint32(40, !0), 17, 4294925233), i = o(i, c, l, n, t.getUint32(44, !0), 22, 2304563134), n = o(n, i, c, l, t.getUint32(48, !0), 7, 1804603682), l = o(l, n, i, c, t.getUint32(52, !0), 12, 4254626195), c = o(c, l, n, i, t.getUint32(56, !0), 17, 2792965006), i = o(i, c, l, n, t.getUint32(60, !0), 22, 1236535329), n = s(n, i, c, l, t.getUint32(4, !0), 5, 4129170786), l = s(l, n, i, c, t.getUint32(24, !0), 9, 3225465664), c = s(c, l, n, i, t.getUint32(44, !0), 14, 643717713), i = s(i, c, l, n, t.getUint32(0, !0), 20, 3921069994), n = s(n, i, c, l, t.getUint32(20, !0), 5, 3593408605), l = s(l, n, i, c, t.getUint32(40, !0), 9, 38016083), c = s(c, l, n, i, t.getUint32(60, !0), 14, 3634488961), i = s(i, c, l, n, t.getUint32(16, !0), 20, 3889429448), n = s(n, i, c, l, t.getUint32(36, !0), 5, 568446438), l = s(l, n, i, c, t.getUint32(56, !0), 9, 3275163606), c = s(c, l, n, i, t.getUint32(12, !0), 14, 4107603335), i = s(i, c, l, n, t.getUint32(32, !0), 20, 1163531501), n = s(n, i, c, l, t.getUint32(52, !0), 5, 2850285829), l = s(l, n, i, c, t.getUint32(8, !0), 9, 4243563512), c = s(c, l, n, i, t.getUint32(28, !0), 14, 1735328473), i = s(i, c, l, n, t.getUint32(48, !0), 20, 2368359562), n = a(n, i, c, l, t.getUint32(20, !0), 4, 4294588738), l = a(l, n, i, c, t.getUint32(32, !0), 11, 2272392833), c = a(c, l, n, i, t.getUint32(44, !0), 16, 1839030562), i = a(i, c, l, n, t.getUint32(56, !0), 23, 4259657740), n = a(n, i, c, l, t.getUint32(4, !0), 4, 2763975236), l = a(l, n, i, c, t.getUint32(16, !0), 11, 1272893353), c = a(c, l, n, i, t.getUint32(28, !0), 16, 4139469664), i = a(i, c, l, n, t.getUint32(40, !0), 23, 3200236656), n = a(n, i, c, l, t.getUint32(52, !0), 4, 681279174), l = a(l, n, i, c, t.getUint32(0, !0), 11, 3936430074), c = a(c, l, n, i, t.getUint32(12, !0), 16, 3572445317), i = a(i, c, l, n, t.getUint32(24, !0), 23, 76029189), n = a(n, i, c, l, t.getUint32(36, !0), 4, 3654602809), l = a(l, n, i, c, t.getUint32(48, !0), 11, 3873151461), c = a(c, l, n, i, t.getUint32(60, !0), 16, 530742520), i = a(i, c, l, n, t.getUint32(8, !0), 23, 3299628645), n = u(n, i, c, l, t.getUint32(0, !0), 6, 4096336452), l = u(l, n, i, c, t.getUint32(28, !0), 10, 1126891415), c = u(c, l, n, i, t.getUint32(56, !0), 15, 2878612391), i = u(i, c, l, n, t.getUint32(20, !0), 21, 4237533241), n = u(n, i, c, l, t.getUint32(48, !0), 6, 1700485571), l = u(l, n, i, c, t.getUint32(12, !0), 10, 2399980690), c = u(c, l, n, i, t.getUint32(40, !0), 15, 4293915773), i = u(i, c, l, n, t.getUint32(4, !0), 21, 2240044497), n = u(n, i, c, l, t.getUint32(32, !0), 6, 1873313359), l = u(l, n, i, c, t.getUint32(60, !0), 10, 4264355552), c = u(c, l, n, i, t.getUint32(24, !0), 15, 2734768916), i = u(i, c, l, n, t.getUint32(52, !0), 21, 1309151649), n = u(n, i, c, l, t.getUint32(16, !0), 6, 4149444226), l = u(l, n, i, c, t.getUint32(44, !0), 10, 3174756917), c = u(c, l, n, i, t.getUint32(8, !0), 15, 718787259), i = u(i, c, l, n, t.getUint32(36, !0), 21, 3951481745), r[0] = n + r[0] & 4294967295, r[1] = i + r[1] & 4294967295, r[2] = c + r[2] & 4294967295, r[3] = l + r[3] & 4294967295;
    };
  }, {
    "./browserHashUtils": 12,
    "buffer/": 82
  }],
  15: [function (e, t, r) {
    function n() {
      this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = new Uint32Array(80), this.offset = 0, this.shift = 24, this.totalLength = 0;
    }
    var i = e("buffer/").Buffer,
      o = e("./browserHashUtils");
    new Uint32Array([1518500249, 1859775393, -1894007588, -899497514]), Math.pow(2, 53);
    t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update = function (e) {
      if (this.finished) throw new Error("Attempted to update an already finished hash.");
      if (o.isEmptyData(e)) return this;
      e = o.convertToBuffer(e);
      var t = e.length;
      this.totalLength += 8 * t;
      for (var r = 0; r < t; r++) this.write(e[r]);
      return this;
    }, n.prototype.write = function (e) {
      this.block[this.offset] |= (255 & e) << this.shift, this.shift ? this.shift -= 8 : (this.offset++, this.shift = 24), 16 === this.offset && this.processBlock();
    }, n.prototype.digest = function (e) {
      this.write(128), (this.offset > 14 || 14 === this.offset && this.shift < 24) && this.processBlock(), this.offset = 14, this.shift = 24, this.write(0), this.write(0), this.write(this.totalLength > 0xffffffffff ? this.totalLength / 1099511627776 : 0), this.write(this.totalLength > 4294967295 ? this.totalLength / 4294967296 : 0);
      for (var t = 24; t >= 0; t -= 8) this.write(this.totalLength >> t);
      var r = new i(20),
        n = new DataView(r.buffer);
      return n.setUint32(0, this.h0, !1), n.setUint32(4, this.h1, !1), n.setUint32(8, this.h2, !1), n.setUint32(12, this.h3, !1), n.setUint32(16, this.h4, !1), e ? r.toString(e) : r;
    }, n.prototype.processBlock = function () {
      for (var e = 16; e < 80; e++) {
        var t = this.block[e - 3] ^ this.block[e - 8] ^ this.block[e - 14] ^ this.block[e - 16];
        this.block[e] = t << 1 | t >>> 31;
      }
      var r,
        n,
        i = this.h0,
        o = this.h1,
        s = this.h2,
        a = this.h3,
        u = this.h4;
      for (e = 0; e < 80; e++) {
        e < 20 ? (r = a ^ o & (s ^ a), n = 1518500249) : e < 40 ? (r = o ^ s ^ a, n = 1859775393) : e < 60 ? (r = o & s | a & (o | s), n = 2400959708) : (r = o ^ s ^ a, n = 3395469782);
        var c = (i << 5 | i >>> 27) + r + u + n + (0 | this.block[e]);
        u = a, a = s, s = o << 30 | o >>> 2, o = i, i = c;
      }
      for (this.h0 = this.h0 + i | 0, this.h1 = this.h1 + o | 0, this.h2 = this.h2 + s | 0, this.h3 = this.h3 + a | 0, this.h4 = this.h4 + u | 0, this.offset = 0, e = 0; e < 16; e++) this.block[e] = 0;
    };
  }, {
    "./browserHashUtils": 12,
    "buffer/": 82
  }],
  16: [function (e, t, r) {
    function n() {
      this.state = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
    }
    var i = e("buffer/").Buffer,
      o = e("./browserHashUtils"),
      s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
      a = Math.pow(2, 53) - 1;
    t.exports = n, n.BLOCK_SIZE = 64, n.prototype.update = function (e) {
      if (this.finished) throw new Error("Attempted to update an already finished hash.");
      if (o.isEmptyData(e)) return this;
      e = o.convertToBuffer(e);
      var t = 0,
        r = e.byteLength;
      if (this.bytesHashed += r, 8 * this.bytesHashed > a) throw new Error("Cannot hash more than 2^53 - 1 bits");
      for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0);
      return this;
    }, n.prototype.digest = function (e) {
      if (!this.finished) {
        var t = 8 * this.bytesHashed,
          r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
          n = this.bufferLength;
        if (r.setUint8(this.bufferLength++, 128), n % 64 >= 56) {
          for (var o = this.bufferLength; o < 64; o++) r.setUint8(o, 0);
          this.hashBuffer(), this.bufferLength = 0;
        }
        for (var o = this.bufferLength; o < 56; o++) r.setUint8(o, 0);
        r.setUint32(56, Math.floor(t / 4294967296), !0), r.setUint32(60, t), this.hashBuffer(), this.finished = !0;
      }
      for (var s = new i(32), o = 0; o < 8; o++) s[4 * o] = this.state[o] >>> 24 & 255, s[4 * o + 1] = this.state[o] >>> 16 & 255, s[4 * o + 2] = this.state[o] >>> 8 & 255, s[4 * o + 3] = this.state[o] >>> 0 & 255;
      return e ? s.toString(e) : s;
    }, n.prototype.hashBuffer = function () {
      for (var e = this, t = e.buffer, r = e.state, n = r[0], i = r[1], o = r[2], a = r[3], u = r[4], c = r[5], l = r[6], p = r[7], h = 0; h < 64; h++) {
        if (h < 16) this.temp[h] = (255 & t[4 * h]) << 24 | (255 & t[4 * h + 1]) << 16 | (255 & t[4 * h + 2]) << 8 | 255 & t[4 * h + 3];else {
          var f = this.temp[h - 2],
            d = (f >>> 17 | f << 15) ^ (f >>> 19 | f << 13) ^ f >>> 10;
          f = this.temp[h - 15];
          var m = (f >>> 7 | f << 25) ^ (f >>> 18 | f << 14) ^ f >>> 3;
          this.temp[h] = (d + this.temp[h - 7] | 0) + (m + this.temp[h - 16] | 0);
        }
        var v = (((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) + (u & c ^ ~u & l) | 0) + (p + (s[h] + this.temp[h] | 0) | 0) | 0,
          g = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & i ^ n & o ^ i & o) | 0;
        p = l, l = c, c = u, u = a + v | 0, a = o, o = i, i = n, n = v + g | 0;
      }
      r[0] += n, r[1] += i, r[2] += o, r[3] += a, r[4] += u, r[5] += c, r[6] += l, r[7] += p;
    };
  }, {
    "./browserHashUtils": 12,
    "buffer/": 82
  }],
  17: [function (e, t, r) {
    (function (r) {
      (function () {
        var r = e("./util");
        r.crypto.lib = e("./browserCryptoLib"), r.Buffer = e("buffer/").Buffer, r.url = e("url/"), r.querystring = e("querystring/"), r.realClock = e("./realclock/browserClock"), r.environment = "js", r.createEventStream = e("./event-stream/buffered-create-event-stream").createEventStream, r.isBrowser = function () {
          return !0;
        }, r.isNode = function () {
          return !1;
        };
        var n = e("./core");
        if (t.exports = n, e("./credentials"), e("./credentials/credential_provider_chain"), e("./credentials/temporary_credentials"), e("./credentials/chainable_temporary_credentials"), e("./credentials/web_identity_credentials"), e("./credentials/cognito_identity_credentials"), e("./credentials/saml_credentials"), n.XML.Parser = e("./xml/browser_parser"), e("./http/xhr"), void 0 === i) var i = {
          browser: !0
        };
      }).call(this);
    }).call(this, e("_process"));
  }, {
    "./browserCryptoLib": 11,
    "./core": 20,
    "./credentials": 21,
    "./credentials/chainable_temporary_credentials": 22,
    "./credentials/cognito_identity_credentials": 23,
    "./credentials/credential_provider_chain": 24,
    "./credentials/saml_credentials": 25,
    "./credentials/temporary_credentials": 26,
    "./credentials/web_identity_credentials": 27,
    "./event-stream/buffered-create-event-stream": 29,
    "./http/xhr": 37,
    "./realclock/browserClock": 54,
    "./util": 73,
    "./xml/browser_parser": 74,
    _process: 87,
    "buffer/": 82,
    "querystring/": 94,
    "url/": 96
  }],
  18: [function (e, t, r) {
    var n = e("./core");
    e("./credentials"), e("./credentials/credential_provider_chain");
    var i;
    n.Config = n.util.inherit({
      constructor: function constructor(e) {
        void 0 === e && (e = {}), e = this.extractCredentials(e), n.util.each.call(this, this.keys, function (t, r) {
          this.set(t, e[t], r);
        });
      },
      getCredentials: function getCredentials(e) {
        function t(t) {
          e(t, t ? null : i.credentials);
        }
        function r(e, t) {
          return new n.util.error(t || new Error(), {
            code: "CredentialsError",
            message: e,
            name: "CredentialsError"
          });
        }
        var i = this;
        i.credentials ? "function" == typeof i.credentials.get ? function () {
          i.credentials.get(function (e) {
            e && (e = r("Could not load credentials from " + i.credentials.constructor.name, e)), t(e);
          });
        }() : function () {
          var e = null;
          i.credentials.accessKeyId && i.credentials.secretAccessKey || (e = r("Missing credentials")), t(e);
        }() : i.credentialProvider ? i.credentialProvider.resolve(function (e, n) {
          e && (e = r("Could not load credentials from any providers", e)), i.credentials = n, t(e);
        }) : t(r("No credentials to load"));
      },
      update: function update(e, t) {
        t = t || !1, e = this.extractCredentials(e), n.util.each.call(this, e, function (e, r) {
          (t || Object.prototype.hasOwnProperty.call(this.keys, e) || n.Service.hasService(e)) && this.set(e, r);
        });
      },
      loadFromPath: function loadFromPath(e) {
        this.clear();
        var t = JSON.parse(n.util.readFileSync(e)),
          r = new n.FileSystemCredentials(e),
          i = new n.CredentialProviderChain();
        return i.providers.unshift(r), i.resolve(function (e, r) {
          if (e) throw e;
          t.credentials = r;
        }), this.constructor(t), this;
      },
      clear: function clear() {
        n.util.each.call(this, this.keys, function (e) {
          delete this[e];
        }), this.set("credentials", void 0), this.set("credentialProvider", void 0);
      },
      set: function set(e, t, r) {
        void 0 === t ? (void 0 === r && (r = this.keys[e]), this[e] = "function" == typeof r ? r.call(this) : r) : "httpOptions" === e && this[e] ? this[e] = n.util.merge(this[e], t) : this[e] = t;
      },
      keys: {
        credentials: null,
        credentialProvider: null,
        region: null,
        logger: null,
        apiVersions: {},
        apiVersion: null,
        endpoint: void 0,
        httpOptions: {
          timeout: 12e4
        },
        maxRetries: void 0,
        maxRedirects: 10,
        paramValidation: !0,
        sslEnabled: !0,
        s3ForcePathStyle: !1,
        s3BucketEndpoint: !1,
        s3DisableBodySigning: !0,
        s3UsEast1RegionalEndpoint: "legacy",
        s3UseArnRegion: void 0,
        computeChecksums: !0,
        convertResponseTypes: !0,
        correctClockSkew: !1,
        customUserAgent: null,
        dynamoDbCrc32: !0,
        systemClockOffset: 0,
        signatureVersion: null,
        signatureCache: !0,
        retryDelayOptions: {},
        useAccelerateEndpoint: !1,
        clientSideMonitoring: !1,
        endpointDiscoveryEnabled: void 0,
        endpointCacheSize: 1e3,
        hostPrefixEnabled: !0,
        stsRegionalEndpoints: "legacy"
      },
      extractCredentials: function extractCredentials(e) {
        return e.accessKeyId && e.secretAccessKey && (e = n.util.copy(e), e.credentials = new n.Credentials(e)), e;
      },
      setPromisesDependency: function setPromisesDependency(e) {
        i = e, null === e && "function" == typeof Promise && (i = Promise);
        var t = [n.Request, n.Credentials, n.CredentialProviderChain];
        n.S3 && (t.push(n.S3), n.S3.ManagedUpload && t.push(n.S3.ManagedUpload)), n.util.addPromises(t, i);
      },
      getPromisesDependency: function getPromisesDependency() {
        return i;
      }
    }), n.config = new n.Config();
  }, {
    "./core": 20,
    "./credentials": 21,
    "./credentials/credential_provider_chain": 24
  }],
  19: [function (e, t, r) {
    (function (r) {
      (function () {
        function n(e, t) {
          if ("string" == typeof e) {
            if (["legacy", "regional"].indexOf(e.toLowerCase()) >= 0) return e.toLowerCase();
            throw o.util.error(new Error(), t);
          }
        }
        function i(e, t) {
          e = e || {};
          var i;
          if (e[t.clientConfig] && (i = n(e[t.clientConfig], {
            code: "InvalidConfiguration",
            message: 'invalid "' + t.clientConfig + '" configuration. Expect "legacy"  or "regional". Got "' + e[t.clientConfig] + '".'
          }))) return i;
          if (!o.util.isNode()) return i;
          if (Object.prototype.hasOwnProperty.call(r.env, t.env)) {
            if (i = n(r.env[t.env], {
              code: "InvalidEnvironmentalVariable",
              message: "invalid " + t.env + ' environmental variable. Expect "legacy"  or "regional". Got "' + r.env[t.env] + '".'
            })) return i;
          }
          var s = {};
          try {
            s = o.util.getProfilesFromSharedConfig(o.util.iniLoader)[r.env.AWS_PROFILE || o.util.defaultProfile];
          } catch (e) {}
          if (s && Object.prototype.hasOwnProperty.call(s, t.sharedConfig)) {
            if (i = n(s[t.sharedConfig], {
              code: "InvalidConfiguration",
              message: "invalid " + t.sharedConfig + ' profile config. Expect "legacy"  or "regional". Got "' + s[t.sharedConfig] + '".'
            })) return i;
          }
          return i;
        }
        var o = e("./core");
        t.exports = i;
      }).call(this);
    }).call(this, e("_process"));
  }, {
    "./core": 20,
    _process: 87
  }],
  20: [function (e, t, r) {
    var n = {
      util: e("./util")
    };
    ({}).toString(), t.exports = n, n.util.update(n, {
      VERSION: "2.772.0",
      Signers: {},
      Protocol: {
        Json: e("./protocol/json"),
        Query: e("./protocol/query"),
        Rest: e("./protocol/rest"),
        RestJson: e("./protocol/rest_json"),
        RestXml: e("./protocol/rest_xml")
      },
      XML: {
        Builder: e("./xml/builder"),
        Parser: null
      },
      JSON: {
        Builder: e("./json/builder"),
        Parser: e("./json/parser")
      },
      Model: {
        Api: e("./model/api"),
        Operation: e("./model/operation"),
        Shape: e("./model/shape"),
        Paginator: e("./model/paginator"),
        ResourceWaiter: e("./model/resource_waiter")
      },
      apiLoader: e("./api_loader"),
      EndpointCache: e("../vendor/endpoint-cache").EndpointCache
    }), e("./sequential_executor"), e("./service"), e("./config"), e("./http"), e("./event_listeners"), e("./request"), e("./response"), e("./resource_waiter"), e("./signers/request_signer"), e("./param_validator"), n.events = new n.SequentialExecutor(), n.util.memoizedProperty(n, "endpointCache", function () {
      return new n.EndpointCache(n.config.endpointCacheSize);
    }, !0);
  }, {
    "../vendor/endpoint-cache": 105,
    "./api_loader": 10,
    "./config": 18,
    "./event_listeners": 35,
    "./http": 36,
    "./json/builder": 38,
    "./json/parser": 39,
    "./model/api": 40,
    "./model/operation": 42,
    "./model/paginator": 43,
    "./model/resource_waiter": 44,
    "./model/shape": 45,
    "./param_validator": 46,
    "./protocol/json": 48,
    "./protocol/query": 49,
    "./protocol/rest": 50,
    "./protocol/rest_json": 51,
    "./protocol/rest_xml": 52,
    "./request": 57,
    "./resource_waiter": 58,
    "./response": 59,
    "./sequential_executor": 60,
    "./service": 61,
    "./signers/request_signer": 65,
    "./util": 73,
    "./xml/builder": 75
  }],
  21: [function (e, t, r) {
    var n = e("./core");
    n.Credentials = n.util.inherit({
      constructor: function constructor() {
        if (n.util.hideProperties(this, ["secretAccessKey"]), this.expired = !1, this.expireTime = null, this.refreshCallbacks = [], 1 === arguments.length && "object" == typeof arguments[0]) {
          var e = arguments[0].credentials || arguments[0];
          this.accessKeyId = e.accessKeyId, this.secretAccessKey = e.secretAccessKey, this.sessionToken = e.sessionToken;
        } else this.accessKeyId = arguments[0], this.secretAccessKey = arguments[1], this.sessionToken = arguments[2];
      },
      expiryWindow: 15,
      needsRefresh: function needsRefresh() {
        var e = n.util.date.getDate().getTime(),
          t = new Date(e + 1e3 * this.expiryWindow);
        return !!(this.expireTime && t > this.expireTime) || this.expired || !this.accessKeyId || !this.secretAccessKey;
      },
      get: function get(e) {
        var t = this;
        this.needsRefresh() ? this.refresh(function (r) {
          r || (t.expired = !1), e && e(r);
        }) : e && e();
      },
      refresh: function refresh(e) {
        this.expired = !1, e();
      },
      coalesceRefresh: function coalesceRefresh(e, t) {
        var r = this;
        1 === r.refreshCallbacks.push(e) && r.load(function (e) {
          n.util.arrayEach(r.refreshCallbacks, function (r) {
            t ? r(e) : n.util.defer(function () {
              r(e);
            });
          }), r.refreshCallbacks.length = 0;
        });
      },
      load: function load(e) {
        e();
      }
    }), n.Credentials.addPromisesToClass = function (e) {
      this.prototype.getPromise = n.util.promisifyMethod("get", e), this.prototype.refreshPromise = n.util.promisifyMethod("refresh", e);
    }, n.Credentials.deletePromisesFromClass = function () {
      delete this.prototype.getPromise, delete this.prototype.refreshPromise;
    }, n.util.addPromises(n.Credentials);
  }, {
    "./core": 20
  }],
  22: [function (e, t, r) {
    var n = e("../core"),
      i = e("../../clients/sts");
    n.ChainableTemporaryCredentials = n.util.inherit(n.Credentials, {
      constructor: function constructor(e) {
        n.Credentials.call(this), e = e || {}, this.errorCode = "ChainableTemporaryCredentialsProviderFailure", this.expired = !0, this.tokenCodeFn = null;
        var t = n.util.copy(e.params) || {};
        if (t.RoleArn && (t.RoleSessionName = t.RoleSessionName || "temporary-credentials"), t.SerialNumber) {
          if (!e.tokenCodeFn || "function" != typeof e.tokenCodeFn) throw new n.util.error(new Error("tokenCodeFn must be a function when params.SerialNumber is given"), {
            code: this.errorCode
          });
          this.tokenCodeFn = e.tokenCodeFn;
        }
        var r = n.util.merge({
          params: t,
          credentials: e.masterCredentials || n.config.credentials
        }, e.stsConfig || {});
        this.service = new i(r);
      },
      refresh: function refresh(e) {
        this.coalesceRefresh(e || n.util.fn.callback);
      },
      load: function load(e) {
        var t = this,
          r = t.service.config.params.RoleArn ? "assumeRole" : "getSessionToken";
        this.getTokenCode(function (n, i) {
          var o = {};
          if (n) return void e(n);
          i && (o.TokenCode = i), t.service[r](o, function (r, n) {
            r || t.service.credentialsFrom(n, t), e(r);
          });
        });
      },
      getTokenCode: function getTokenCode(e) {
        var t = this;
        this.tokenCodeFn ? this.tokenCodeFn(this.service.config.params.SerialNumber, function (r, i) {
          if (r) {
            var o = r;
            return r instanceof Error && (o = r.message), void e(n.util.error(new Error("Error fetching MFA token: " + o), {
              code: t.errorCode
            }));
          }
          e(null, i);
        }) : e(null);
      }
    });
  }, {
    "../../clients/sts": 9,
    "../core": 20
  }],
  23: [function (e, t, r) {
    var n = e("../core"),
      i = e("../../clients/cognitoidentity"),
      o = e("../../clients/sts");
    n.CognitoIdentityCredentials = n.util.inherit(n.Credentials, {
      localStorageKey: {
        id: "aws.cognito.identity-id.",
        providers: "aws.cognito.identity-providers."
      },
      constructor: function constructor(e, t) {
        n.Credentials.call(this), this.expired = !0, this.params = e, this.data = null, this._identityId = null, this._clientConfig = n.util.copy(t || {}), this.loadCachedId();
        var r = this;
        Object.defineProperty(this, "identityId", {
          get: function get() {
            return r.loadCachedId(), r._identityId || r.params.IdentityId;
          },
          set: function set(e) {
            r._identityId = e;
          }
        });
      },
      refresh: function refresh(e) {
        this.coalesceRefresh(e || n.util.fn.callback);
      },
      load: function load(e) {
        var t = this;
        t.createClients(), t.data = null, t._identityId = null, t.getId(function (r) {
          r ? (t.clearIdOnNotAuthorized(r), e(r)) : t.params.RoleArn ? t.getCredentialsFromSTS(e) : t.getCredentialsForIdentity(e);
        });
      },
      clearCachedId: function clearCachedId() {
        this._identityId = null, delete this.params.IdentityId;
        var e = this.params.IdentityPoolId,
          t = this.params.LoginId || "";
        delete this.storage[this.localStorageKey.id + e + t], delete this.storage[this.localStorageKey.providers + e + t];
      },
      clearIdOnNotAuthorized: function clearIdOnNotAuthorized(e) {
        var t = this;
        "NotAuthorizedException" == e.code && t.clearCachedId();
      },
      getId: function getId(e) {
        var t = this;
        if ("string" == typeof t.params.IdentityId) return e(null, t.params.IdentityId);
        t.cognito.getId(function (r, n) {
          !r && n.IdentityId ? (t.params.IdentityId = n.IdentityId, e(null, n.IdentityId)) : e(r);
        });
      },
      loadCredentials: function loadCredentials(e, t) {
        e && t && (t.expired = !1, t.accessKeyId = e.Credentials.AccessKeyId, t.secretAccessKey = e.Credentials.SecretKey, t.sessionToken = e.Credentials.SessionToken, t.expireTime = e.Credentials.Expiration);
      },
      getCredentialsForIdentity: function getCredentialsForIdentity(e) {
        var t = this;
        t.cognito.getCredentialsForIdentity(function (r, n) {
          r ? t.clearIdOnNotAuthorized(r) : (t.cacheId(n), t.data = n, t.loadCredentials(t.data, t)), e(r);
        });
      },
      getCredentialsFromSTS: function getCredentialsFromSTS(e) {
        var t = this;
        t.cognito.getOpenIdToken(function (r, n) {
          r ? (t.clearIdOnNotAuthorized(r), e(r)) : (t.cacheId(n), t.params.WebIdentityToken = n.Token, t.webIdentityCredentials.refresh(function (r) {
            r || (t.data = t.webIdentityCredentials.data, t.sts.credentialsFrom(t.data, t)), e(r);
          }));
        });
      },
      loadCachedId: function loadCachedId() {
        var e = this;
        if (n.util.isBrowser() && !e.params.IdentityId) {
          var t = e.getStorage("id");
          if (t && e.params.Logins) {
            var r = Object.keys(e.params.Logins);
            0 !== (e.getStorage("providers") || "").split(",").filter(function (e) {
              return -1 !== r.indexOf(e);
            }).length && (e.params.IdentityId = t);
          } else t && (e.params.IdentityId = t);
        }
      },
      createClients: function createClients() {
        var e = this._clientConfig;
        if (this.webIdentityCredentials = this.webIdentityCredentials || new n.WebIdentityCredentials(this.params, e), !this.cognito) {
          var t = n.util.merge({}, e);
          t.params = this.params, this.cognito = new i(t);
        }
        this.sts = this.sts || new o(e);
      },
      cacheId: function cacheId(e) {
        this._identityId = e.IdentityId, this.params.IdentityId = this._identityId, n.util.isBrowser() && (this.setStorage("id", e.IdentityId), this.params.Logins && this.setStorage("providers", Object.keys(this.params.Logins).join(",")));
      },
      getStorage: function getStorage(e) {
        return this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")];
      },
      setStorage: function setStorage(e, t) {
        try {
          this.storage[this.localStorageKey[e] + this.params.IdentityPoolId + (this.params.LoginId || "")] = t;
        } catch (e) {}
      },
      storage: function () {
        try {
          var e = n.util.isBrowser() && null !== window.localStorage && "object" == typeof window.localStorage ? window.localStorage : {};
          return e["aws.test-storage"] = "foobar", delete e["aws.test-storage"], e;
        } catch (e) {
          return {};
        }
      }()
    });
  }, {
    "../../clients/cognitoidentity": 8,
    "../../clients/sts": 9,
    "../core": 20
  }],
  24: [function (e, t, r) {
    var n = e("../core");
    n.CredentialProviderChain = n.util.inherit(n.Credentials, {
      constructor: function constructor(e) {
        this.providers = e || n.CredentialProviderChain.defaultProviders.slice(0), this.resolveCallbacks = [];
      },
      resolve: function resolve(e) {
        function t(e, s) {
          if (!e && s || i === o.length) return n.util.arrayEach(r.resolveCallbacks, function (t) {
            t(e, s);
          }), void (r.resolveCallbacks.length = 0);
          var a = o[i++];
          s = "function" == typeof a ? a.call() : a, s.get ? s.get(function (e) {
            t(e, e ? null : s);
          }) : t(null, s);
        }
        var r = this;
        if (0 === r.providers.length) return e(new Error("No providers")), r;
        if (1 === r.resolveCallbacks.push(e)) {
          var i = 0,
            o = r.providers.slice(0);
          t();
        }
        return r;
      }
    }), n.CredentialProviderChain.defaultProviders = [], n.CredentialProviderChain.addPromisesToClass = function (e) {
      this.prototype.resolvePromise = n.util.promisifyMethod("resolve", e);
    }, n.CredentialProviderChain.deletePromisesFromClass = function () {
      delete this.prototype.resolvePromise;
    }, n.util.addPromises(n.CredentialProviderChain);
  }, {
    "../core": 20
  }],
  25: [function (e, t, r) {
    var n = e("../core"),
      i = e("../../clients/sts");
    n.SAMLCredentials = n.util.inherit(n.Credentials, {
      constructor: function constructor(e) {
        n.Credentials.call(this), this.expired = !0, this.params = e;
      },
      refresh: function refresh(e) {
        this.coalesceRefresh(e || n.util.fn.callback);
      },
      load: function load(e) {
        var t = this;
        t.createClients(), t.service.assumeRoleWithSAML(function (r, n) {
          r || t.service.credentialsFrom(n, t), e(r);
        });
      },
      createClients: function createClients() {
        this.service = this.service || new i({
          params: this.params
        });
      }
    });
  }, {
    "../../clients/sts": 9,
    "../core": 20
  }],
  26: [function (e, t, r) {
    var n = e("../core"),
      i = e("../../clients/sts");
    n.TemporaryCredentials = n.util.inherit(n.Credentials, {
      constructor: function constructor(e, t) {
        n.Credentials.call(this), this.loadMasterCredentials(t), this.expired = !0, this.params = e || {}, this.params.RoleArn && (this.params.RoleSessionName = this.params.RoleSessionName || "temporary-credentials");
      },
      refresh: function refresh(e) {
        this.coalesceRefresh(e || n.util.fn.callback);
      },
      load: function load(e) {
        var t = this;
        t.createClients(), t.masterCredentials.get(function () {
          t.service.config.credentials = t.masterCredentials, (t.params.RoleArn ? t.service.assumeRole : t.service.getSessionToken).call(t.service, function (r, n) {
            r || t.service.credentialsFrom(n, t), e(r);
          });
        });
      },
      loadMasterCredentials: function loadMasterCredentials(e) {
        for (this.masterCredentials = e || n.config.credentials; this.masterCredentials.masterCredentials;) this.masterCredentials = this.masterCredentials.masterCredentials;
        "function" != typeof this.masterCredentials.get && (this.masterCredentials = new n.Credentials(this.masterCredentials));
      },
      createClients: function createClients() {
        this.service = this.service || new i({
          params: this.params
        });
      }
    });
  }, {
    "../../clients/sts": 9,
    "../core": 20
  }],
  27: [function (e, t, r) {
    var n = e("../core"),
      i = e("../../clients/sts");
    n.WebIdentityCredentials = n.util.inherit(n.Credentials, {
      constructor: function constructor(e, t) {
        n.Credentials.call(this), this.expired = !0, this.params = e, this.params.RoleSessionName = this.params.RoleSessionName || "web-identity", this.data = null, this._clientConfig = n.util.copy(t || {});
      },
      refresh: function refresh(e) {
        this.coalesceRefresh(e || n.util.fn.callback);
      },
      load: function load(e) {
        var t = this;
        t.createClients(), t.service.assumeRoleWithWebIdentity(function (r, n) {
          t.data = null, r || (t.data = n, t.service.credentialsFrom(n, t)), e(r);
        });
      },
      createClients: function createClients() {
        if (!this.service) {
          var e = n.util.merge({}, this._clientConfig);
          e.params = this.params, this.service = new i(e);
        }
      }
    });
  }, {
    "../../clients/sts": 9,
    "../core": 20
  }],
  28: [function (e, t, r) {
    (function (r) {
      (function () {
        function n(e) {
          var t = e.service,
            r = t.api || {},
            n = {};
          return t.config.region && (n.region = t.config.region), r.serviceId && (n.serviceId = r.serviceId), t.config.credentials.accessKeyId && (n.accessKeyId = t.config.credentials.accessKeyId), n;
        }
        function i(e, t, r) {
          r && void 0 !== t && null !== t && "structure" === r.type && r.required && r.required.length > 0 && m.arrayEach(r.required, function (n) {
            var o = r.members[n];
            if (!0 === o.endpointDiscoveryId) {
              var s = o.isLocationName ? o.name : n;
              e[s] = String(t[n]);
            } else i(e, t[n], o);
          });
        }
        function o(e, t) {
          var r = {};
          return i(r, e.params, t), r;
        }
        function s(e) {
          var t = e.service,
            r = t.api,
            i = r.operations ? r.operations[e.operation] : void 0,
            s = i ? i.input : void 0,
            a = o(e, s),
            c = n(e);
          Object.keys(a).length > 0 && (c = m.update(c, a), i && (c.operation = i.name));
          var l = d.endpointCache.get(c);
          if (!l || 1 !== l.length || "" !== l[0].Address) if (l && l.length > 0) e.httpRequest.updateEndpoint(l[0].Address);else {
            var p = t.makeRequest(r.endpointOperation, {
              Operation: i.name,
              Identifiers: a
            });
            u(p), p.removeListener("validate", d.EventListeners.Core.VALIDATE_PARAMETERS), p.removeListener("retry", d.EventListeners.Core.RETRY_CHECK), d.endpointCache.put(c, [{
              Address: "",
              CachePeriodInMinutes: 1
            }]), p.send(function (e, t) {
              t && t.Endpoints ? d.endpointCache.put(c, t.Endpoints) : e && d.endpointCache.put(c, [{
                Address: "",
                CachePeriodInMinutes: 1
              }]);
            });
          }
        }
        function a(e, t) {
          var r = e.service,
            i = r.api,
            s = i.operations ? i.operations[e.operation] : void 0,
            a = s ? s.input : void 0,
            c = o(e, a),
            l = n(e);
          Object.keys(c).length > 0 && (l = m.update(l, c), s && (l.operation = s.name));
          var p = d.EndpointCache.getKeyString(l),
            h = d.endpointCache.get(p);
          if (h && 1 === h.length && "" === h[0].Address) return g[p] || (g[p] = []), void g[p].push({
            request: e,
            callback: t
          });
          if (h && h.length > 0) e.httpRequest.updateEndpoint(h[0].Address), t();else {
            var f = r.makeRequest(i.endpointOperation, {
              Operation: s.name,
              Identifiers: c
            });
            f.removeListener("validate", d.EventListeners.Core.VALIDATE_PARAMETERS), u(f), d.endpointCache.put(p, [{
              Address: "",
              CachePeriodInMinutes: 60
            }]), f.send(function (r, n) {
              if (r) {
                if (e.response.error = m.error(r, {
                  retryable: !1
                }), d.endpointCache.remove(l), g[p]) {
                  var i = g[p];
                  m.arrayEach(i, function (e) {
                    e.request.response.error = m.error(r, {
                      retryable: !1
                    }), e.callback();
                  }), delete g[p];
                }
              } else if (n && (d.endpointCache.put(p, n.Endpoints), e.httpRequest.updateEndpoint(n.Endpoints[0].Address), g[p])) {
                var i = g[p];
                m.arrayEach(i, function (e) {
                  e.request.httpRequest.updateEndpoint(n.Endpoints[0].Address), e.callback();
                }), delete g[p];
              }
              t();
            });
          }
        }
        function u(e) {
          var t = e.service.api,
            r = t.apiVersion;
          r && !e.httpRequest.headers["x-amz-api-version"] && (e.httpRequest.headers["x-amz-api-version"] = r);
        }
        function c(e) {
          var t = e.error,
            r = e.httpResponse;
          if (t && ("InvalidEndpointException" === t.code || 421 === r.statusCode)) {
            var i = e.request,
              s = i.service.api.operations || {},
              a = s[i.operation] ? s[i.operation].input : void 0,
              u = o(i, a),
              c = n(i);
            Object.keys(u).length > 0 && (c = m.update(c, u), s[i.operation] && (c.operation = s[i.operation].name)), d.endpointCache.remove(c);
          }
        }
        function l(e) {
          if (e._originalConfig && e._originalConfig.endpoint && !0 === e._originalConfig.endpointDiscoveryEnabled) throw m.error(new Error(), {
            code: "ConfigurationException",
            message: "Custom endpoint is supplied; endpointDiscoveryEnabled must not be true."
          });
          var t = d.config[e.serviceIdentifier] || {};
          return Boolean(d.config.endpoint || t.endpoint || e._originalConfig && e._originalConfig.endpoint);
        }
        function p(e) {
          return ["false", "0"].indexOf(e) >= 0;
        }
        function h(e) {
          var t = e.service || {};
          if (void 0 !== t.config.endpointDiscoveryEnabled) return t.config.endpointDiscoveryEnabled;
          if (!m.isBrowser()) {
            for (var n = 0; n < v.length; n++) {
              var i = v[n];
              if (Object.prototype.hasOwnProperty.call(r.env, i)) {
                if ("" === r.env[i] || void 0 === r.env[i]) throw m.error(new Error(), {
                  code: "ConfigurationException",
                  message: "environmental variable " + i + " cannot be set to nothing"
                });
                return !p(r.env[i]);
              }
            }
            var o = {};
            try {
              o = d.util.iniLoader ? d.util.iniLoader.loadFrom({
                isConfig: !0,
                filename: r.env[d.util.sharedConfigFileEnv]
              }) : {};
            } catch (e) {}
            var s = o[r.env.AWS_PROFILE || d.util.defaultProfile] || {};
            if (Object.prototype.hasOwnProperty.call(s, "endpoint_discovery_enabled")) {
              if (void 0 === s.endpoint_discovery_enabled) throw m.error(new Error(), {
                code: "ConfigurationException",
                message: "config file entry 'endpoint_discovery_enabled' cannot be set to nothing"
              });
              return !p(s.endpoint_discovery_enabled);
            }
          }
        }
        function f(e, t) {
          var r = e.service || {};
          if (l(r) || e.isPresigned()) return t();
          var n = r.api.operations || {},
            i = n[e.operation],
            o = i ? i.endpointDiscoveryRequired : "NULL",
            u = h(e),
            p = r.api.hasRequiredEndpointDiscovery;
          switch ((u || p) && e.httpRequest.appendToUserAgent("endpoint-discovery"), o) {
            case "OPTIONAL":
              (u || p) && (s(e), e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", c)), t();
              break;
            case "REQUIRED":
              if (!1 === u) {
                e.response.error = m.error(new Error(), {
                  code: "ConfigurationException",
                  message: "Endpoint Discovery is disabled but " + r.api.className + "." + e.operation + "() requires it. Please check your configurations."
                }), t();
                break;
              }
              e.addNamedListener("INVALIDATE_CACHED_ENDPOINTS", "extractError", c), a(e, t);
              break;
            case "NULL":
            default:
              t();
          }
        }
        var d = e("./core"),
          m = e("./util"),
          v = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"],
          g = {};
        t.exports = {
          discoverEndpoint: f,
          requiredDiscoverEndpoint: a,
          optionalDiscoverEndpoint: s,
          marshallCustomIdentifiers: o,
          getCacheKey: n,
          invalidateCachedEndpoint: c
        };
      }).call(this);
    }).call(this, e("_process"));
  }, {
    "./core": 20,
    "./util": 73,
    _process: 87
  }],
  29: [function (e, t, r) {
    function n(e, t, r) {
      for (var n = i(e), s = [], a = 0; a < n.length; a++) s.push(o(t, n[a], r));
      return s;
    }
    var i = e("../event-stream/event-message-chunker").eventMessageChunker,
      o = e("./parse-event").parseEvent;
    t.exports = {
      createEventStream: n
    };
  }, {
    "../event-stream/event-message-chunker": 30,
    "./parse-event": 32
  }],
  30: [function (e, t, r) {
    function n(e) {
      for (var t = [], r = 0; r < e.length;) {
        var n = e.readInt32BE(r),
          i = e.slice(r, n + r);
        r += n, t.push(i);
      }
      return t;
    }
    t.exports = {
      eventMessageChunker: n
    };
  }, {}],
  31: [function (e, t, r) {
    function n(e) {
      if (8 !== e.length) throw new Error("Int64 buffers must be exactly 8 bytes");
      o.Buffer.isBuffer(e) || (e = s(e)), this.bytes = e;
    }
    function i(e) {
      for (var t = 0; t < 8; t++) e[t] ^= 255;
      for (var t = 7; t > -1 && 0 === ++e[t]; t--);
    }
    var o = e("../core").util,
      s = o.buffer.toBuffer;
    n.fromNumber = function (e) {
      if (e > 0x8000000000000000 || e < -0x8000000000000000) throw new Error(e + " is too large (or, if negative, too small) to represent as an Int64");
      for (var t = new Uint8Array(8), r = 7, o = Math.abs(Math.round(e)); r > -1 && o > 0; r--, o /= 256) t[r] = o;
      return e < 0 && i(t), new n(t);
    }, n.prototype.valueOf = function () {
      var e = this.bytes.slice(0),
        t = 128 & e[0];
      return t && i(e), parseInt(e.toString("hex"), 16) * (t ? -1 : 1);
    }, n.prototype.toString = function () {
      return String(this.valueOf());
    }, t.exports = {
      Int64: n
    };
  }, {
    "../core": 20
  }],
  32: [function (e, t, r) {
    function n(e, t, r) {
      var n = o(t),
        s = n.headers[":message-type"];
      if (s) {
        if ("error" === s.value) throw i(n);
        if ("event" !== s.value) return;
      }
      var a = n.headers[":event-type"],
        u = r.members[a.value];
      if (u) {
        var c = {},
          l = u.eventPayloadMemberName;
        if (l) {
          var p = u.members[l];
          "binary" === p.type ? c[l] = n.body : c[l] = e.parse(n.body.toString(), p);
        }
        for (var h = u.eventHeaderMemberNames, f = 0; f < h.length; f++) {
          var d = h[f];
          n.headers[d] && (c[d] = u.members[d].toType(n.headers[d].value));
        }
        var m = {};
        return m[a.value] = c, m;
      }
    }
    function i(e) {
      var t = e.headers[":error-code"],
        r = e.headers[":error-message"],
        n = new Error(r.value || r);
      return n.code = n.name = t.value || t, n;
    }
    var o = e("./parse-message").parseMessage;
    t.exports = {
      parseEvent: n
    };
  }, {
    "./parse-message": 33
  }],
  33: [function (e, t, r) {
    function n(e) {
      for (var t = {}, r = 0; r < e.length;) {
        var n = e.readUInt8(r++),
          i = e.slice(r, r + n).toString();
        switch (r += n, e.readUInt8(r++)) {
          case 0:
            t[i] = {
              type: a,
              value: !0
            };
            break;
          case 1:
            t[i] = {
              type: a,
              value: !1
            };
            break;
          case 2:
            t[i] = {
              type: u,
              value: e.readInt8(r++)
            };
            break;
          case 3:
            t[i] = {
              type: c,
              value: e.readInt16BE(r)
            }, r += 2;
            break;
          case 4:
            t[i] = {
              type: l,
              value: e.readInt32BE(r)
            }, r += 4;
            break;
          case 5:
            t[i] = {
              type: p,
              value: new o(e.slice(r, r + 8))
            }, r += 8;
            break;
          case 6:
            var s = e.readUInt16BE(r);
            r += 2, t[i] = {
              type: h,
              value: e.slice(r, r + s)
            }, r += s;
            break;
          case 7:
            var v = e.readUInt16BE(r);
            r += 2, t[i] = {
              type: f,
              value: e.slice(r, r + v).toString()
            }, r += v;
            break;
          case 8:
            t[i] = {
              type: d,
              value: new Date(new o(e.slice(r, r + 8)).valueOf())
            }, r += 8;
            break;
          case 9:
            var g = e.slice(r, r + 16).toString("hex");
            r += 16, t[i] = {
              type: m,
              value: g.substr(0, 8) + "-" + g.substr(8, 4) + "-" + g.substr(12, 4) + "-" + g.substr(16, 4) + "-" + g.substr(20)
            };
            break;
          default:
            throw new Error("Unrecognized header type tag");
        }
      }
      return t;
    }
    function i(e) {
      var t = s(e);
      return {
        headers: n(t.headers),
        body: t.body
      };
    }
    var o = e("./int64").Int64,
      s = e("./split-message").splitMessage,
      a = "boolean",
      u = "byte",
      c = "short",
      l = "integer",
      p = "long",
      h = "binary",
      f = "string",
      d = "timestamp",
      m = "uuid";
    t.exports = {
      parseMessage: i
    };
  }, {
    "./int64": 31,
    "./split-message": 34
  }],
  34: [function (e, t, r) {
    function n(e) {
      if (i.Buffer.isBuffer(e) || (e = o(e)), e.length < c) throw new Error("Provided message too short to accommodate event stream message overhead");
      if (e.length !== e.readUInt32BE(0)) throw new Error("Reported message length does not match received message length");
      var t = e.readUInt32BE(a);
      if (t !== i.crypto.crc32(e.slice(0, a))) throw new Error("The prelude checksum specified in the message (" + t + ") does not match the calculated CRC32 checksum.");
      var r = e.readUInt32BE(e.length - u);
      if (r !== i.crypto.crc32(e.slice(0, e.length - u))) throw new Error("The message checksum did not match the expected value of " + r);
      var n = a + u,
        l = n + e.readUInt32BE(s);
      return {
        headers: e.slice(n, l),
        body: e.slice(l, e.length - u)
      };
    }
    var i = e("../core").util,
      o = i.buffer.toBuffer,
      s = 4,
      a = 2 * s,
      u = 4,
      c = a + 2 * u;
    t.exports = {
      splitMessage: n
    };
  }, {
    "../core": 20
  }],
  35: [function (e, t, r) {
    function n(e) {
      if (!e.service.api.operations) return "";
      var t = e.service.api.operations[e.operation];
      return t ? t.authtype : "";
    }
    var i = e("./core"),
      o = e("./sequential_executor"),
      s = e("./discover_endpoint").discoverEndpoint;
    i.EventListeners = {
      Core: {}
    }, i.EventListeners = {
      Core: new o().addNamedListeners(function (e, t) {
        t("VALIDATE_CREDENTIALS", "validate", function (e, t) {
          if (!e.service.api.signatureVersion && !e.service.config.signatureVersion) return t();
          e.service.config.getCredentials(function (r) {
            r && (e.response.error = i.util.error(r, {
              code: "CredentialsError",
              message: "Missing credentials in config, if using AWS_CONFIG_FILE, set AWS_SDK_LOAD_CONFIG=1"
            })), t();
          });
        }), e("VALIDATE_REGION", "validate", function (e) {
          if (!e.service.isGlobalEndpoint) {
            var t = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
            e.service.config.region ? t.test(e.service.config.region) || (e.response.error = i.util.error(new Error(), {
              code: "ConfigError",
              message: "Invalid region in config"
            })) : e.response.error = i.util.error(new Error(), {
              code: "ConfigError",
              message: "Missing region in config"
            });
          }
        }), e("BUILD_IDEMPOTENCY_TOKENS", "validate", function (e) {
          if (e.service.api.operations) {
            var t = e.service.api.operations[e.operation];
            if (t) {
              var r = t.idempotentMembers;
              if (r.length) {
                for (var n = i.util.copy(e.params), o = 0, s = r.length; o < s; o++) n[r[o]] || (n[r[o]] = i.util.uuid.v4());
                e.params = n;
              }
            }
          }
        }), e("VALIDATE_PARAMETERS", "validate", function (e) {
          if (e.service.api.operations) {
            var t = e.service.api.operations[e.operation].input,
              r = e.service.config.paramValidation;
            new i.ParamValidator(r).validate(t, e.params);
          }
        }), t("COMPUTE_SHA256", "afterBuild", function (e, t) {
          if (e.haltHandlersOnError(), e.service.api.operations) {
            var r = e.service.api.operations[e.operation],
              n = r ? r.authtype : "";
            if (!e.service.api.signatureVersion && !n && !e.service.config.signatureVersion) return t();
            if (e.service.getSignerClass(e) === i.Signers.V4) {
              var o = e.httpRequest.body || "";
              if (n.indexOf("unsigned-body") >= 0) return e.httpRequest.headers["X-Amz-Content-Sha256"] = "UNSIGNED-PAYLOAD", t();
              i.util.computeSha256(o, function (r, n) {
                r ? t(r) : (e.httpRequest.headers["X-Amz-Content-Sha256"] = n, t());
              });
            } else t();
          }
        }), e("SET_CONTENT_LENGTH", "afterBuild", function (e) {
          var t = n(e),
            r = i.util.getRequestPayloadShape(e);
          if (void 0 === e.httpRequest.headers["Content-Length"]) try {
            var o = i.util.string.byteLength(e.httpRequest.body);
            e.httpRequest.headers["Content-Length"] = o;
          } catch (n) {
            if (r && r.isStreaming) {
              if (r.requiresLength) throw n;
              if (t.indexOf("unsigned-body") >= 0) return void (e.httpRequest.headers["Transfer-Encoding"] = "chunked");
              throw n;
            }
            throw n;
          }
        }), e("SET_HTTP_HOST", "afterBuild", function (e) {
          e.httpRequest.headers.Host = e.httpRequest.endpoint.host;
        }), e("RESTART", "restart", function () {
          var e = this.response.error;
          e && e.retryable && (this.httpRequest = new i.HttpRequest(this.service.endpoint, this.service.region), this.response.retryCount < this.service.config.maxRetries ? this.response.retryCount++ : this.response.error = null);
        });
        t("DISCOVER_ENDPOINT", "sign", s, !0), t("SIGN", "sign", function (e, t) {
          var r = e.service,
            n = e.service.api.operations || {},
            i = n[e.operation],
            o = i ? i.authtype : "";
          if (!r.api.signatureVersion && !o && !r.config.signatureVersion) return t();
          r.config.getCredentials(function (n, o) {
            if (n) return e.response.error = n, t();
            try {
              var s = r.getSkewCorrectedDate(),
                a = r.getSignerClass(e),
                u = new a(e.httpRequest, r.getSigningName(), {
                  signatureCache: r.config.signatureCache,
                  operation: i,
                  signatureVersion: r.api.signatureVersion
                });
              u.setServiceClientId(r._clientId), delete e.httpRequest.headers.Authorization, delete e.httpRequest.headers.Date, delete e.httpRequest.headers["X-Amz-Date"], u.addAuthorization(o, s), e.signedAt = s;
            } catch (t) {
              e.response.error = t;
            }
            t();
          });
        }), e("VALIDATE_RESPONSE", "validateResponse", function (e) {
          this.service.successfulResponse(e, this) ? (e.data = {}, e.error = null) : (e.data = null, e.error = i.util.error(new Error(), {
            code: "UnknownError",
            message: "An unknown error occurred."
          }));
        }), t("SEND", "send", function (e, t) {
          function r(r) {
            e.httpResponse.stream = r;
            var n = e.request.httpRequest.stream,
              o = e.request.service,
              s = o.api,
              a = e.request.operation,
              u = s.operations[a] || {};
            r.on("headers", function (n, s, a) {
              if (e.request.emit("httpHeaders", [n, s, e, a]), !e.httpResponse.streaming) if (2 === i.HttpClient.streamsApiVersion) {
                if (u.hasEventOutput && o.successfulResponse(e)) return e.request.emit("httpDone"), void t();
                r.on("readable", function () {
                  var t = r.read();
                  null !== t && e.request.emit("httpData", [t, e]);
                });
              } else r.on("data", function (t) {
                e.request.emit("httpData", [t, e]);
              });
            }), r.on("end", function () {
              if (!n || !n.didCallback) {
                if (2 === i.HttpClient.streamsApiVersion && u.hasEventOutput && o.successfulResponse(e)) return;
                e.request.emit("httpDone"), t();
              }
            });
          }
          function n(t) {
            t.on("sendProgress", function (t) {
              e.request.emit("httpUploadProgress", [t, e]);
            }), t.on("receiveProgress", function (t) {
              e.request.emit("httpDownloadProgress", [t, e]);
            });
          }
          function o(r) {
            if ("RequestAbortedError" !== r.code) {
              var n = "TimeoutError" === r.code ? r.code : "NetworkingError";
              r = i.util.error(r, {
                code: n,
                region: e.request.httpRequest.region,
                hostname: e.request.httpRequest.endpoint.hostname,
                retryable: !0
              });
            }
            e.error = r, e.request.emit("httpError", [e.error, e], function () {
              t();
            });
          }
          function s() {
            var t = i.HttpClient.getInstance(),
              s = e.request.service.config.httpOptions || {};
            try {
              n(t.handleRequest(e.request.httpRequest, s, r, o));
            } catch (e) {
              o(e);
            }
          }
          e.httpResponse._abortCallback = t, e.error = null, e.data = null, (e.request.service.getSkewCorrectedDate() - this.signedAt) / 1e3 >= 600 ? this.emit("sign", [this], function (e) {
            e ? t(e) : s();
          }) : s();
        }), e("HTTP_HEADERS", "httpHeaders", function (e, t, r, n) {
          r.httpResponse.statusCode = e, r.httpResponse.statusMessage = n, r.httpResponse.headers = t, r.httpResponse.body = i.util.buffer.toBuffer(""), r.httpResponse.buffers = [], r.httpResponse.numBytes = 0;
          var o = t.date || t.Date,
            s = r.request.service;
          if (o) {
            var a = Date.parse(o);
            s.config.correctClockSkew && s.isClockSkewed(a) && s.applyClockOffset(a);
          }
        }), e("HTTP_DATA", "httpData", function (e, t) {
          if (e) {
            if (i.util.isNode()) {
              t.httpResponse.numBytes += e.length;
              var r = t.httpResponse.headers["content-length"],
                n = {
                  loaded: t.httpResponse.numBytes,
                  total: r
                };
              t.request.emit("httpDownloadProgress", [n, t]);
            }
            t.httpResponse.buffers.push(i.util.buffer.toBuffer(e));
          }
        }), e("HTTP_DONE", "httpDone", function (e) {
          if (e.httpResponse.buffers && e.httpResponse.buffers.length > 0) {
            var t = i.util.buffer.concat(e.httpResponse.buffers);
            e.httpResponse.body = t;
          }
          delete e.httpResponse.numBytes, delete e.httpResponse.buffers;
        }), e("FINALIZE_ERROR", "retry", function (e) {
          e.httpResponse.statusCode && (e.error.statusCode = e.httpResponse.statusCode, void 0 === e.error.retryable && (e.error.retryable = this.service.retryableError(e.error, this)));
        }), e("INVALIDATE_CREDENTIALS", "retry", function (e) {
          if (e.error) switch (e.error.code) {
            case "RequestExpired":
            case "ExpiredTokenException":
            case "ExpiredToken":
              e.error.retryable = !0, e.request.service.config.credentials.expired = !0;
          }
        }), e("EXPIRED_SIGNATURE", "retry", function (e) {
          var t = e.error;
          t && "string" == typeof t.code && "string" == typeof t.message && t.code.match(/Signature/) && t.message.match(/expired/) && (e.error.retryable = !0);
        }), e("CLOCK_SKEWED", "retry", function (e) {
          e.error && this.service.clockSkewError(e.error) && this.service.config.correctClockSkew && (e.error.retryable = !0);
        }), e("REDIRECT", "retry", function (e) {
          e.error && e.error.statusCode >= 300 && e.error.statusCode < 400 && e.httpResponse.headers.location && (this.httpRequest.endpoint = new i.Endpoint(e.httpResponse.headers.location), this.httpRequest.headers.Host = this.httpRequest.endpoint.host, e.error.redirect = !0, e.error.retryable = !0);
        }), e("RETRY_CHECK", "retry", function (e) {
          e.error && (e.error.redirect && e.redirectCount < e.maxRedirects ? e.error.retryDelay = 0 : e.retryCount < e.maxRetries && (e.error.retryDelay = this.service.retryDelays(e.retryCount, e.error) || 0));
        }), t("RESET_RETRY_STATE", "afterRetry", function (e, t) {
          var r,
            n = !1;
          e.error && (r = e.error.retryDelay || 0, e.error.retryable && e.retryCount < e.maxRetries ? (e.retryCount++, n = !0) : e.error.redirect && e.redirectCount < e.maxRedirects && (e.redirectCount++, n = !0)), n && r >= 0 ? (e.error = null, setTimeout(t, r)) : t();
        });
      }),
      CorePost: new o().addNamedListeners(function (e) {
        e("EXTRACT_REQUEST_ID", "extractData", i.util.extractRequestId), e("EXTRACT_REQUEST_ID", "extractError", i.util.extractRequestId), e("ENOTFOUND_ERROR", "httpError", function (e) {
          if ("NetworkingError" === e.code && function (e) {
            return "ENOTFOUND" === e.errno || "number" == typeof e.errno && "function" == typeof i.util.getSystemErrorName && ["EAI_NONAME", "EAI_NODATA"].indexOf(i.util.getSystemErrorName(e.errno) >= 0);
          }(e)) {
            var t = "Inaccessible host: `" + e.hostname + "'. This service may not be available in the `" + e.region + "' region.";
            this.response.error = i.util.error(new Error(t), {
              code: "UnknownEndpoint",
              region: e.region,
              hostname: e.hostname,
              retryable: !0,
              originalError: e
            });
          }
        });
      }),
      Logger: new o().addNamedListeners(function (t) {
        t("LOG_REQUEST", "complete", function (t) {
          function r(e, t) {
            if (!t) return t;
            if (e.isSensitive) return "***SensitiveInformation***";
            switch (e.type) {
              case "structure":
                var n = {};
                return i.util.each(t, function (t, i) {
                  Object.prototype.hasOwnProperty.call(e.members, t) ? n[t] = r(e.members[t], i) : n[t] = i;
                }), n;
              case "list":
                var o = [];
                return i.util.arrayEach(t, function (t, n) {
                  o.push(r(e.member, t));
                }), o;
              case "map":
                var s = {};
                return i.util.each(t, function (t, n) {
                  s[t] = r(e.value, n);
                }), s;
              default:
                return t;
            }
          }
          var n = t.request,
            o = n.service.config.logger;
          if (o) {
            var s = function () {
              var s = t.request.service.getSkewCorrectedDate().getTime(),
                a = (s - n.startTime.getTime()) / 1e3,
                u = !!o.isTTY,
                c = t.httpResponse.statusCode,
                l = n.params;
              if (n.service.api.operations && n.service.api.operations[n.operation] && n.service.api.operations[n.operation].input) {
                l = r(n.service.api.operations[n.operation].input, n.params);
              }
              var p = e("util").inspect(l, !0, null),
                h = "";
              return u && (h += "[33m"), h += "[AWS " + n.service.serviceIdentifier + " " + c, h += " " + a.toString() + "s " + t.retryCount + " retries]", u && (h += "[0;1m"), h += " " + i.util.string.lowerFirst(n.operation), h += "(" + p + ")", u && (h += "[0m"), h;
            }();
            "function" == typeof o.log ? o.log(s) : "function" == typeof o.write && o.write(s + "\n");
          }
        });
      }),
      Json: new o().addNamedListeners(function (t) {
        var r = e("./protocol/json");
        t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError);
      }),
      Rest: new o().addNamedListeners(function (t) {
        var r = e("./protocol/rest");
        t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError);
      }),
      RestJson: new o().addNamedListeners(function (t) {
        var r = e("./protocol/rest_json");
        t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError);
      }),
      RestXml: new o().addNamedListeners(function (t) {
        var r = e("./protocol/rest_xml");
        t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError);
      }),
      Query: new o().addNamedListeners(function (t) {
        var r = e("./protocol/query");
        t("BUILD", "build", r.buildRequest), t("EXTRACT_DATA", "extractData", r.extractData), t("EXTRACT_ERROR", "extractError", r.extractError);
      })
    };
  }, {
    "./core": 20,
    "./discover_endpoint": 28,
    "./protocol/json": 48,
    "./protocol/query": 49,
    "./protocol/rest": 50,
    "./protocol/rest_json": 51,
    "./protocol/rest_xml": 52,
    "./sequential_executor": 60,
    util: 99
  }],
  36: [function (e, t, r) {
    var n = e("./core"),
      i = n.util.inherit;
    n.Endpoint = i({
      constructor: function constructor(e, t) {
        if (n.util.hideProperties(this, ["slashes", "auth", "hash", "search", "query"]), void 0 === e || null === e) throw new Error("Invalid endpoint: " + e);
        if ("string" != typeof e) return n.util.copy(e);
        if (!e.match(/^http/)) {
          e = ((t && void 0 !== t.sslEnabled ? t.sslEnabled : n.config.sslEnabled) ? "https" : "http") + "://" + e;
        }
        n.util.update(this, n.util.urlParse(e)), this.port ? this.port = parseInt(this.port, 10) : this.port = "https:" === this.protocol ? 443 : 80;
      }
    }), n.HttpRequest = i({
      constructor: function constructor(e, t) {
        e = new n.Endpoint(e), this.method = "POST", this.path = e.path || "/", this.headers = {}, this.body = "", this.endpoint = e, this.region = t, this._userAgent = "", this.setUserAgent();
      },
      setUserAgent: function setUserAgent() {
        this._userAgent = this.headers[this.getUserAgentHeaderName()] = n.util.userAgent();
      },
      getUserAgentHeaderName: function getUserAgentHeaderName() {
        return (n.util.isBrowser() ? "X-Amz-" : "") + "User-Agent";
      },
      appendToUserAgent: function appendToUserAgent(e) {
        "string" == typeof e && e && (this._userAgent += " " + e), this.headers[this.getUserAgentHeaderName()] = this._userAgent;
      },
      getUserAgent: function getUserAgent() {
        return this._userAgent;
      },
      pathname: function pathname() {
        return this.path.split("?", 1)[0];
      },
      search: function search() {
        var e = this.path.split("?", 2)[1];
        return e ? (e = n.util.queryStringParse(e), n.util.queryParamsToString(e)) : "";
      },
      updateEndpoint: function updateEndpoint(e) {
        var t = new n.Endpoint(e);
        this.endpoint = t, this.path = t.path || "/", this.headers.Host && (this.headers.Host = t.host);
      }
    }), n.HttpResponse = i({
      constructor: function constructor() {
        this.statusCode = void 0, this.headers = {}, this.body = void 0, this.streaming = !1, this.stream = null;
      },
      createUnbufferedStream: function createUnbufferedStream() {
        return this.streaming = !0, this.stream;
      }
    }), n.HttpClient = i({}), n.HttpClient.getInstance = function () {
      return void 0 === this.singleton && (this.singleton = new this()), this.singleton;
    };
  }, {
    "./core": 20
  }],
  37: [function (e, t, r) {
    var n = e("../core"),
      i = e("events").EventEmitter;
    e("../http"), n.XHRClient = n.util.inherit({
      handleRequest: function handleRequest(e, t, r, o) {
        var s = this,
          a = e.endpoint,
          u = new i(),
          c = a.protocol + "//" + a.hostname;
        80 !== a.port && 443 !== a.port && (c += ":" + a.port), c += e.path;
        var l = new XMLHttpRequest(),
          p = !1;
        e.stream = l, l.addEventListener("readystatechange", function () {
          try {
            if (0 === l.status) return;
          } catch (e) {
            return;
          }
          this.readyState >= this.HEADERS_RECEIVED && !p && (u.statusCode = l.status, u.headers = s.parseHeaders(l.getAllResponseHeaders()), u.emit("headers", u.statusCode, u.headers, l.statusText), p = !0), this.readyState === this.DONE && s.finishRequest(l, u);
        }, !1), l.upload.addEventListener("progress", function (e) {
          u.emit("sendProgress", e);
        }), l.addEventListener("progress", function (e) {
          u.emit("receiveProgress", e);
        }, !1), l.addEventListener("timeout", function () {
          o(n.util.error(new Error("Timeout"), {
            code: "TimeoutError"
          }));
        }, !1), l.addEventListener("error", function () {
          o(n.util.error(new Error("Network Failure"), {
            code: "NetworkingError"
          }));
        }, !1), l.addEventListener("abort", function () {
          o(n.util.error(new Error("Request aborted"), {
            code: "RequestAbortedError"
          }));
        }, !1), r(u), l.open(e.method, c, !1 !== t.xhrAsync), n.util.each(e.headers, function (e, t) {
          "Content-Length" !== e && "User-Agent" !== e && "Host" !== e && l.setRequestHeader(e, t);
        }), t.timeout && !1 !== t.xhrAsync && (l.timeout = t.timeout), t.xhrWithCredentials && (l.withCredentials = !0);
        try {
          l.responseType = "arraybuffer";
        } catch (e) {}
        try {
          e.body ? l.send(e.body) : l.send();
        } catch (t) {
          if (!e.body || "object" != typeof e.body.buffer) throw t;
          l.send(e.body.buffer);
        }
        return u;
      },
      parseHeaders: function parseHeaders(e) {
        var t = {};
        return n.util.arrayEach(e.split(/\r?\n/), function (e) {
          var r = e.split(":", 1)[0],
            n = e.substring(r.length + 2);
          r.length > 0 && (t[r.toLowerCase()] = n);
        }), t;
      },
      finishRequest: function finishRequest(e, t) {
        var r;
        if ("arraybuffer" === e.responseType && e.response) {
          var i = e.response;
          r = new n.util.Buffer(i.byteLength);
          for (var o = new Uint8Array(i), s = 0; s < r.length; ++s) r[s] = o[s];
        }
        try {
          r || "string" != typeof e.responseText || (r = new n.util.Buffer(e.responseText));
        } catch (e) {}
        r && t.emit("data", r), t.emit("end");
      }
    }), n.HttpClient.prototype = n.XHRClient.prototype, n.HttpClient.streamsApiVersion = 1;
  }, {
    "../core": 20,
    "../http": 36,
    events: 83
  }],
  38: [function (e, t, r) {
    function n() {}
    function i(e, t) {
      if (t && void 0 !== e && null !== e) switch (t.type) {
        case "structure":
          return o(e, t);
        case "map":
          return a(e, t);
        case "list":
          return s(e, t);
        default:
          return u(e, t);
      }
    }
    function o(e, t) {
      var r = {};
      return c.each(e, function (e, n) {
        var o = t.members[e];
        if (o) {
          if ("body" !== o.location) return;
          var s = o.isLocationName ? o.name : e,
            a = i(n, o);
          void 0 !== a && (r[s] = a);
        }
      }), r;
    }
    function s(e, t) {
      var r = [];
      return c.arrayEach(e, function (e) {
        var n = i(e, t.member);
        void 0 !== n && r.push(n);
      }), r;
    }
    function a(e, t) {
      var r = {};
      return c.each(e, function (e, n) {
        var o = i(n, t.value);
        void 0 !== o && (r[e] = o);
      }), r;
    }
    function u(e, t) {
      return t.toWireFormat(e);
    }
    var c = e("../util");
    n.prototype.build = function (e, t) {
      return JSON.stringify(i(e, t));
    }, t.exports = n;
  }, {
    "../util": 73
  }],
  39: [function (e, t, r) {
    function n() {}
    function i(e, t) {
      if (t && void 0 !== e) switch (t.type) {
        case "structure":
          return o(e, t);
        case "map":
          return a(e, t);
        case "list":
          return s(e, t);
        default:
          return u(e, t);
      }
    }
    function o(e, t) {
      if (null != e) {
        var r = {},
          n = t.members;
        return c.each(n, function (t, n) {
          var o = n.isLocationName ? n.name : t;
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var s = e[o],
              a = i(s, n);
            void 0 !== a && (r[t] = a);
          }
        }), r;
      }
    }
    function s(e, t) {
      if (null != e) {
        var r = [];
        return c.arrayEach(e, function (e) {
          var n = i(e, t.member);
          void 0 === n ? r.push(null) : r.push(n);
        }), r;
      }
    }
    function a(e, t) {
      if (null != e) {
        var r = {};
        return c.each(e, function (e, n) {
          var o = i(n, t.value);
          r[e] = void 0 === o ? null : o;
        }), r;
      }
    }
    function u(e, t) {
      return t.toType(e);
    }
    var c = e("../util");
    n.prototype.parse = function (e, t) {
      return i(JSON.parse(e), t);
    }, t.exports = n;
  }, {
    "../util": 73
  }],
  40: [function (e, t, r) {
    function n(e, t) {
      function r(e, t) {
        !0 === t.endpointoperation && p(n, "endpointOperation", l.string.lowerFirst(e)), t.endpointdiscovery && !n.hasRequiredEndpointDiscovery && p(n, "hasRequiredEndpointDiscovery", !0 === t.endpointdiscovery.required);
      }
      var n = this;
      e = e || {}, t = t || {}, t.api = this, e.metadata = e.metadata || {};
      var f = t.serviceIdentifier;
      delete t.serviceIdentifier, p(this, "isApi", !0, !1), p(this, "apiVersion", e.metadata.apiVersion), p(this, "endpointPrefix", e.metadata.endpointPrefix), p(this, "signingName", e.metadata.signingName), p(this, "globalEndpoint", e.metadata.globalEndpoint), p(this, "signatureVersion", e.metadata.signatureVersion), p(this, "jsonVersion", e.metadata.jsonVersion), p(this, "targetPrefix", e.metadata.targetPrefix), p(this, "protocol", e.metadata.protocol), p(this, "timestampFormat", e.metadata.timestampFormat), p(this, "xmlNamespaceUri", e.metadata.xmlNamespace), p(this, "abbreviation", e.metadata.serviceAbbreviation), p(this, "fullName", e.metadata.serviceFullName), p(this, "serviceId", e.metadata.serviceId), f && c[f] && p(this, "xmlNoDefaultLists", c[f].xmlNoDefaultLists, !1), h(this, "className", function () {
        var t = e.metadata.serviceAbbreviation || e.metadata.serviceFullName;
        return t ? (t = t.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, ""), "ElasticLoadBalancing" === t && (t = "ELB"), t) : null;
      }), p(this, "operations", new i(e.operations, t, function (e, r) {
        return new o(e, r, t);
      }, l.string.lowerFirst, r)), p(this, "shapes", new i(e.shapes, t, function (e, r) {
        return s.create(r, t);
      })), p(this, "paginators", new i(e.paginators, t, function (e, r) {
        return new a(e, r, t);
      })), p(this, "waiters", new i(e.waiters, t, function (e, r) {
        return new u(e, r, t);
      }, l.string.lowerFirst)), t.documentation && (p(this, "documentation", e.documentation), p(this, "documentationUrl", e.documentationUrl));
    }
    var i = e("./collection"),
      o = e("./operation"),
      s = e("./shape"),
      a = e("./paginator"),
      u = e("./resource_waiter"),
      c = e("../../apis/metadata.json"),
      l = e("../util"),
      p = l.property,
      h = l.memoizedProperty;
    t.exports = n;
  }, {
    "../../apis/metadata.json": 5,
    "../util": 73,
    "./collection": 41,
    "./operation": 42,
    "./paginator": 43,
    "./resource_waiter": 44,
    "./shape": 45
  }],
  41: [function (e, t, r) {
    function n(e, t, r, n) {
      o(this, n(e), function () {
        return r(e, t);
      });
    }
    function i(e, t, r, i, o) {
      i = i || String;
      var s = this;
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (n.call(s, a, e[a], r, i), o && o(a, e[a]));
    }
    var o = e("../util").memoizedProperty;
    t.exports = i;
  }, {
    "../util": 73
  }],
  42: [function (e, t, r) {
    function n(e, t, r) {
      var n = this;
      r = r || {}, a(this, "name", t.name || e), a(this, "api", r.api, !1), t.http = t.http || {}, a(this, "endpoint", t.endpoint), a(this, "httpMethod", t.http.method || "POST"), a(this, "httpPath", t.http.requestUri || "/"), a(this, "authtype", t.authtype || ""), a(this, "endpointDiscoveryRequired", t.endpointdiscovery ? t.endpointdiscovery.required ? "REQUIRED" : "OPTIONAL" : "NULL"), u(this, "input", function () {
        return t.input ? o.create(t.input, r) : new o.create({
          type: "structure"
        }, r);
      }), u(this, "output", function () {
        return t.output ? o.create(t.output, r) : new o.create({
          type: "structure"
        }, r);
      }), u(this, "errors", function () {
        var e = [];
        if (!t.errors) return null;
        for (var n = 0; n < t.errors.length; n++) e.push(o.create(t.errors[n], r));
        return e;
      }), u(this, "paginator", function () {
        return r.api.paginators[e];
      }), r.documentation && (a(this, "documentation", t.documentation), a(this, "documentationUrl", t.documentationUrl)), u(this, "idempotentMembers", function () {
        var e = [],
          t = n.input,
          r = t.members;
        if (!t.members) return e;
        for (var i in r) r.hasOwnProperty(i) && !0 === r[i].isIdempotent && e.push(i);
        return e;
      }), u(this, "hasEventOutput", function () {
        return i(n.output);
      });
    }
    function i(e) {
      var t = e.members,
        r = e.payload;
      if (!e.members) return !1;
      if (r) {
        return t[r].isEventStream;
      }
      for (var n in t) if (!t.hasOwnProperty(n) && !0 === t[n].isEventStream) return !0;
      return !1;
    }
    var o = e("./shape"),
      s = e("../util"),
      a = s.property,
      u = s.memoizedProperty;
    t.exports = n;
  }, {
    "../util": 73,
    "./shape": 45
  }],
  43: [function (e, t, r) {
    function n(e, t) {
      i(this, "inputToken", t.input_token), i(this, "limitKey", t.limit_key), i(this, "moreResults", t.more_results), i(this, "outputToken", t.output_token), i(this, "resultKey", t.result_key);
    }
    var i = e("../util").property;
    t.exports = n;
  }, {
    "../util": 73
  }],
  44: [function (e, t, r) {
    function n(e, t, r) {
      r = r || {}, o(this, "name", e), o(this, "api", r.api, !1), t.operation && o(this, "operation", i.string.lowerFirst(t.operation));
      var n = this;
      ["type", "description", "delay", "maxAttempts", "acceptors"].forEach(function (e) {
        var r = t[e];
        r && o(n, e, r);
      });
    }
    var i = e("../util"),
      o = i.property;
    t.exports = n;
  }, {
    "../util": 73
  }],
  45: [function (e, t, r) {
    function n(e, t, r) {
      null !== r && void 0 !== r && y.property.apply(this, arguments);
    }
    function i(e, t) {
      e.constructor.prototype[t] || y.memoizedProperty.apply(this, arguments);
    }
    function o(e, t, r) {
      t = t || {}, n(this, "shape", e.shape), n(this, "api", t.api, !1), n(this, "type", e.type), n(this, "enum", e.enum), n(this, "min", e.min), n(this, "max", e.max), n(this, "pattern", e.pattern), n(this, "location", e.location || this.location || "body"), n(this, "name", this.name || e.xmlName || e.queryName || e.locationName || r), n(this, "isStreaming", e.streaming || this.isStreaming || !1), n(this, "requiresLength", e.requiresLength, !1), n(this, "isComposite", e.isComposite || !1), n(this, "isShape", !0, !1), n(this, "isQueryName", Boolean(e.queryName), !1), n(this, "isLocationName", Boolean(e.locationName), !1), n(this, "isIdempotent", !0 === e.idempotencyToken), n(this, "isJsonValue", !0 === e.jsonvalue), n(this, "isSensitive", !0 === e.sensitive || e.prototype && !0 === e.prototype.sensitive), n(this, "isEventStream", Boolean(e.eventstream), !1), n(this, "isEvent", Boolean(e.event), !1), n(this, "isEventPayload", Boolean(e.eventpayload), !1), n(this, "isEventHeader", Boolean(e.eventheader), !1), n(this, "isTimestampFormatSet", Boolean(e.timestampFormat) || e.prototype && !0 === e.prototype.isTimestampFormatSet, !1), n(this, "endpointDiscoveryId", Boolean(e.endpointdiscoveryid), !1), n(this, "hostLabel", Boolean(e.hostLabel), !1), t.documentation && (n(this, "documentation", e.documentation), n(this, "documentationUrl", e.documentationUrl)), e.xmlAttribute && n(this, "isXmlAttribute", e.xmlAttribute || !1), n(this, "defaultValue", null), this.toWireFormat = function (e) {
        return null === e || void 0 === e ? "" : e;
      }, this.toType = function (e) {
        return e;
      };
    }
    function s(e) {
      o.apply(this, arguments), n(this, "isComposite", !0), e.flattened && n(this, "flattened", e.flattened || !1);
    }
    function a(e, t) {
      var r = this,
        a = null,
        u = !this.isShape;
      s.apply(this, arguments), u && (n(this, "defaultValue", function () {
        return {};
      }), n(this, "members", {}), n(this, "memberNames", []), n(this, "required", []), n(this, "isRequired", function () {
        return !1;
      })), e.members && (n(this, "members", new g(e.members, t, function (e, r) {
        return o.create(r, t, e);
      })), i(this, "memberNames", function () {
        return e.xmlOrder || Object.keys(e.members);
      }), e.event && (i(this, "eventPayloadMemberName", function () {
        for (var e = r.members, t = r.memberNames, n = 0, i = t.length; n < i; n++) if (e[t[n]].isEventPayload) return t[n];
      }), i(this, "eventHeaderMemberNames", function () {
        for (var e = r.members, t = r.memberNames, n = [], i = 0, o = t.length; i < o; i++) e[t[i]].isEventHeader && n.push(t[i]);
        return n;
      }))), e.required && (n(this, "required", e.required), n(this, "isRequired", function (t) {
        if (!a) {
          a = {};
          for (var r = 0; r < e.required.length; r++) a[e.required[r]] = !0;
        }
        return a[t];
      }, !1, !0)), n(this, "resultWrapper", e.resultWrapper || null), e.payload && n(this, "payload", e.payload), "string" == typeof e.xmlNamespace ? n(this, "xmlNamespaceUri", e.xmlNamespace) : "object" == typeof e.xmlNamespace && (n(this, "xmlNamespacePrefix", e.xmlNamespace.prefix), n(this, "xmlNamespaceUri", e.xmlNamespace.uri));
    }
    function u(e, t) {
      var r = this,
        a = !this.isShape;
      if (s.apply(this, arguments), a && n(this, "defaultValue", function () {
        return [];
      }), e.member && i(this, "member", function () {
        return o.create(e.member, t);
      }), this.flattened) {
        var u = this.name;
        i(this, "name", function () {
          return r.member.name || u;
        });
      }
    }
    function c(e, t) {
      var r = !this.isShape;
      s.apply(this, arguments), r && (n(this, "defaultValue", function () {
        return {};
      }), n(this, "key", o.create({
        type: "string"
      }, t)), n(this, "value", o.create({
        type: "string"
      }, t))), e.key && i(this, "key", function () {
        return o.create(e.key, t);
      }), e.value && i(this, "value", function () {
        return o.create(e.value, t);
      });
    }
    function l(e) {
      var t = this;
      if (o.apply(this, arguments), e.timestampFormat) n(this, "timestampFormat", e.timestampFormat);else if (t.isTimestampFormatSet && this.timestampFormat) n(this, "timestampFormat", this.timestampFormat);else if ("header" === this.location) n(this, "timestampFormat", "rfc822");else if ("querystring" === this.location) n(this, "timestampFormat", "iso8601");else if (this.api) switch (this.api.protocol) {
        case "json":
        case "rest-json":
          n(this, "timestampFormat", "unixTimestamp");
          break;
        case "rest-xml":
        case "query":
        case "ec2":
          n(this, "timestampFormat", "iso8601");
      }
      this.toType = function (e) {
        return null === e || void 0 === e ? null : "function" == typeof e.toUTCString ? e : "string" == typeof e || "number" == typeof e ? y.date.parseTimestamp(e) : null;
      }, this.toWireFormat = function (e) {
        return y.date.format(e, t.timestampFormat);
      };
    }
    function p() {
      o.apply(this, arguments);
      var e = ["rest-xml", "query", "ec2"];
      this.toType = function (t) {
        return t = this.api && e.indexOf(this.api.protocol) > -1 ? t || "" : t, this.isJsonValue ? JSON.parse(t) : t && "function" == typeof t.toString ? t.toString() : t;
      }, this.toWireFormat = function (e) {
        return this.isJsonValue ? JSON.stringify(e) : e;
      };
    }
    function h() {
      o.apply(this, arguments), this.toType = function (e) {
        return null === e || void 0 === e ? null : parseFloat(e);
      }, this.toWireFormat = this.toType;
    }
    function f() {
      o.apply(this, arguments), this.toType = function (e) {
        return null === e || void 0 === e ? null : parseInt(e, 10);
      }, this.toWireFormat = this.toType;
    }
    function d() {
      o.apply(this, arguments), this.toType = function (e) {
        var t = y.base64.decode(e);
        if (this.isSensitive && y.isNode() && "function" == typeof y.Buffer.alloc) {
          var r = y.Buffer.alloc(t.length, t);
          t.fill(0), t = r;
        }
        return t;
      }, this.toWireFormat = y.base64.encode;
    }
    function m() {
      d.apply(this, arguments);
    }
    function v() {
      o.apply(this, arguments), this.toType = function (e) {
        return "boolean" == typeof e ? e : null === e || void 0 === e ? null : "true" === e;
      };
    }
    var g = e("./collection"),
      y = e("../util");
    o.normalizedTypes = {
      character: "string",
      double: "float",
      long: "integer",
      short: "integer",
      biginteger: "integer",
      bigdecimal: "float",
      blob: "binary"
    }, o.types = {
      structure: a,
      list: u,
      map: c,
      boolean: v,
      timestamp: l,
      float: h,
      integer: f,
      string: p,
      base64: m,
      binary: d
    }, o.resolve = function (e, t) {
      if (e.shape) {
        var r = t.api.shapes[e.shape];
        if (!r) throw new Error("Cannot find shape reference: " + e.shape);
        return r;
      }
      return null;
    }, o.create = function (e, t, r) {
      if (e.isShape) return e;
      var n = o.resolve(e, t);
      if (n) {
        var i = Object.keys(e);
        t.documentation || (i = i.filter(function (e) {
          return !e.match(/documentation/);
        }));
        var s = function s() {
          n.constructor.call(this, e, t, r);
        };
        return s.prototype = n, new s();
      }
      e.type || (e.members ? e.type = "structure" : e.member ? e.type = "list" : e.key ? e.type = "map" : e.type = "string");
      var a = e.type;
      if (o.normalizedTypes[e.type] && (e.type = o.normalizedTypes[e.type]), o.types[e.type]) return new o.types[e.type](e, t, r);
      throw new Error("Unrecognized shape type: " + a);
    }, o.shapes = {
      StructureShape: a,
      ListShape: u,
      MapShape: c,
      StringShape: p,
      BooleanShape: v,
      Base64Shape: m
    }, t.exports = o;
  }, {
    "../util": 73,
    "./collection": 41
  }],
  46: [function (e, t, r) {
    var n = e("./core");
    n.ParamValidator = n.util.inherit({
      constructor: function constructor(e) {
        !0 !== e && void 0 !== e || (e = {
          min: !0
        }), this.validation = e;
      },
      validate: function validate(e, t, r) {
        if (this.errors = [], this.validateMember(e, t || {}, r || "params"), this.errors.length > 1) {
          var i = this.errors.join("\n* ");
          throw i = "There were " + this.errors.length + " validation errors:\n* " + i, n.util.error(new Error(i), {
            code: "MultipleValidationErrors",
            errors: this.errors
          });
        }
        if (1 === this.errors.length) throw this.errors[0];
        return !0;
      },
      fail: function fail(e, t) {
        this.errors.push(n.util.error(new Error(t), {
          code: e
        }));
      },
      validateStructure: function validateStructure(e, t, r) {
        this.validateType(t, r, ["object"], "structure");
        for (var n, i = 0; e.required && i < e.required.length; i++) {
          n = e.required[i];
          var o = t[n];
          void 0 !== o && null !== o || this.fail("MissingRequiredParameter", "Missing required key '" + n + "' in " + r);
        }
        for (n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
          var s = t[n],
            a = e.members[n];
          if (void 0 !== a) {
            var u = [r, n].join(".");
            this.validateMember(a, s, u);
          } else this.fail("UnexpectedParameter", "Unexpected key '" + n + "' found in " + r);
        }
        return !0;
      },
      validateMember: function validateMember(e, t, r) {
        switch (e.type) {
          case "structure":
            return this.validateStructure(e, t, r);
          case "list":
            return this.validateList(e, t, r);
          case "map":
            return this.validateMap(e, t, r);
          default:
            return this.validateScalar(e, t, r);
        }
      },
      validateList: function validateList(e, t, r) {
        if (this.validateType(t, r, [Array])) {
          this.validateRange(e, t.length, r, "list member count");
          for (var n = 0; n < t.length; n++) this.validateMember(e.member, t[n], r + "[" + n + "]");
        }
      },
      validateMap: function validateMap(e, t, r) {
        if (this.validateType(t, r, ["object"], "map")) {
          var n = 0;
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (this.validateMember(e.key, i, r + "[key='" + i + "']"), this.validateMember(e.value, t[i], r + "['" + i + "']"), n++);
          this.validateRange(e, n, r, "map member count");
        }
      },
      validateScalar: function validateScalar(e, t, r) {
        switch (e.type) {
          case null:
          case void 0:
          case "string":
            return this.validateString(e, t, r);
          case "base64":
          case "binary":
            return this.validatePayload(t, r);
          case "integer":
          case "float":
            return this.validateNumber(e, t, r);
          case "boolean":
            return this.validateType(t, r, ["boolean"]);
          case "timestamp":
            return this.validateType(t, r, [Date, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, "number"], "Date object, ISO-8601 string, or a UNIX timestamp");
          default:
            return this.fail("UnkownType", "Unhandled type " + e.type + " for " + r);
        }
      },
      validateString: function validateString(e, t, r) {
        var n = ["string"];
        e.isJsonValue && (n = n.concat(["number", "object", "boolean"])), null !== t && this.validateType(t, r, n) && (this.validateEnum(e, t, r), this.validateRange(e, t.length, r, "string length"), this.validatePattern(e, t, r), this.validateUri(e, t, r));
      },
      validateUri: function validateUri(e, t, r) {
        "uri" === e.location && 0 === t.length && this.fail("UriParameterError", 'Expected uri parameter to have length >= 1, but found "' + t + '" for ' + r);
      },
      validatePattern: function validatePattern(e, t, r) {
        this.validation.pattern && void 0 !== e.pattern && (new RegExp(e.pattern).test(t) || this.fail("PatternMatchError", 'Provided value "' + t + '" does not match regex pattern /' + e.pattern + "/ for " + r));
      },
      validateRange: function validateRange(e, t, r, n) {
        this.validation.min && void 0 !== e.min && t < e.min && this.fail("MinRangeError", "Expected " + n + " >= " + e.min + ", but found " + t + " for " + r), this.validation.max && void 0 !== e.max && t > e.max && this.fail("MaxRangeError", "Expected " + n + " <= " + e.max + ", but found " + t + " for " + r);
      },
      validateEnum: function validateEnum(e, t, r) {
        this.validation.enum && void 0 !== e.enum && -1 === e.enum.indexOf(t) && this.fail("EnumError", "Found string value of " + t + ", but expected " + e.enum.join("|") + " for " + r);
      },
      validateType: function validateType(e, t, r, i) {
        if (null === e || void 0 === e) return !1;
        for (var o = !1, s = 0; s < r.length; s++) {
          if ("string" == typeof r[s]) {
            if (typeof e === r[s]) return !0;
          } else if (r[s] instanceof RegExp) {
            if ((e || "").toString().match(r[s])) return !0;
          } else {
            if (e instanceof r[s]) return !0;
            if (n.util.isType(e, r[s])) return !0;
            i || o || (r = r.slice()), r[s] = n.util.typeName(r[s]);
          }
          o = !0;
        }
        var a = i;
        a || (a = r.join(", ").replace(/,([^,]+)$/, ", or$1"));
        var u = a.match(/^[aeiou]/i) ? "n" : "";
        return this.fail("InvalidParameterType", "Expected " + t + " to be a" + u + " " + a), !1;
      },
      validateNumber: function validateNumber(e, t, r) {
        if (null !== t && void 0 !== t) {
          if ("string" == typeof t) {
            var n = parseFloat(t);
            n.toString() === t && (t = n);
          }
          this.validateType(t, r, ["number"]) && this.validateRange(e, t, r, "numeric value");
        }
      },
      validatePayload: function validatePayload(e, t) {
        if (null !== e && void 0 !== e && "string" != typeof e && (!e || "number" != typeof e.byteLength)) {
          if (n.util.isNode()) {
            var r = n.util.stream.Stream;
            if (n.util.Buffer.isBuffer(e) || e instanceof r) return;
          } else if (void 0 !== typeof Blob && e instanceof Blob) return;
          var i = ["Buffer", "Stream", "File", "Blob", "ArrayBuffer", "DataView"];
          if (e) for (var o = 0; o < i.length; o++) {
            if (n.util.isType(e, i[o])) return;
            if (n.util.typeName(e.constructor) === i[o]) return;
          }
          this.fail("InvalidParameterType", "Expected " + t + " to be a string, Buffer, Stream, Blob, or typed array object");
        }
      }
    });
  }, {
    "./core": 20
  }],
  47: [function (e, t, r) {
    function n(e) {
      if (!e.service.config.hostPrefixEnabled) return e;
      var t = e.service.api.operations[e.operation];
      if (i(e)) return e;
      if (t.endpoint && t.endpoint.hostPrefix) {
        var r = t.endpoint.hostPrefix,
          n = o(r, e.params, t.input);
        s(e.httpRequest.endpoint, n), a(e.httpRequest.endpoint.hostname);
      }
      return e;
    }
    function i(e) {
      var t = e.service.api,
        r = t.operations[e.operation],
        n = t.endpointOperation && t.endpointOperation === u.string.lowerFirst(r.name);
      return "NULL" !== r.endpointDiscoveryRequired || !0 === n;
    }
    function o(e, t, r) {
      return u.each(r.members, function (r, n) {
        if (!0 === n.hostLabel) {
          if ("string" != typeof t[r] || "" === t[r]) throw u.error(new Error(), {
            message: "Parameter " + r + " should be a non-empty string.",
            code: "InvalidParameter"
          });
          var i = new RegExp("\\{" + r + "\\}", "g");
          e = e.replace(i, t[r]);
        }
      }), e;
    }
    function s(e, t) {
      e.host && (e.host = t + e.host), e.hostname && (e.hostname = t + e.hostname);
    }
    function a(e) {
      var t = e.split("."),
        r = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
      u.arrayEach(t, function (e) {
        if (!e.length || e.length < 1 || e.length > 63) throw u.error(new Error(), {
          code: "ValidationError",
          message: "Hostname label length should be between 1 to 63 characters, inclusive."
        });
        if (!r.test(e)) throw c.util.error(new Error(), {
          code: "ValidationError",
          message: e + " is not hostname compatible."
        });
      });
    }
    var u = e("../util"),
      c = e("../core");
    t.exports = {
      populateHostPrefix: n
    };
  }, {
    "../core": 20,
    "../util": 73
  }],
  48: [function (e, t, r) {
    function n(e) {
      var t = e.httpRequest,
        r = e.service.api,
        n = r.targetPrefix + "." + r.operations[e.operation].name,
        i = r.jsonVersion || "1.0",
        o = r.operations[e.operation].input,
        s = new a();
      1 === i && (i = "1.0"), t.body = s.build(e.params || {}, o), t.headers["Content-Type"] = "application/x-amz-json-" + i, t.headers["X-Amz-Target"] = n, c(e);
    }
    function i(e) {
      var t = {},
        r = e.httpResponse;
      if (t.code = r.headers["x-amzn-errortype"] || "UnknownError", "string" == typeof t.code && (t.code = t.code.split(":")[0]), r.body.length > 0) try {
        var n = JSON.parse(r.body.toString()),
          i = n.__type || n.code || n.Code;
        i && (t.code = i.split("#").pop()), "RequestEntityTooLarge" === t.code ? t.message = "Request body must be less than 1 MB" : t.message = n.message || n.Message || null;
      } catch (n) {
        t.statusCode = r.statusCode, t.message = r.statusMessage;
      } else t.statusCode = r.statusCode, t.message = r.statusCode.toString();
      e.error = s.error(new Error(), t);
    }
    function o(e) {
      var t = e.httpResponse.body.toString() || "{}";
      if (!1 === e.request.service.config.convertResponseTypes) e.data = JSON.parse(t);else {
        var r = e.request.service.api.operations[e.request.operation],
          n = r.output || {},
          i = new u();
        e.data = i.parse(t, n);
      }
    }
    var s = e("../util"),
      a = e("../json/builder"),
      u = e("../json/parser"),
      c = e("./helpers").populateHostPrefix;
    t.exports = {
      buildRequest: n,
      extractError: i,
      extractData: o
    };
  }, {
    "../json/builder": 38,
    "../json/parser": 39,
    "../util": 73,
    "./helpers": 47
  }],
  49: [function (e, t, r) {
    function n(e) {
      var t = e.service.api.operations[e.operation],
        r = e.httpRequest;
      r.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=utf-8", r.params = {
        Version: e.service.api.apiVersion,
        Action: t.name
      }, new u().serialize(e.params, t.input, function (e, t) {
        r.params[e] = t;
      }), r.body = a.queryParamsToString(r.params), l(e);
    }
    function i(e) {
      var t,
        r = e.httpResponse.body.toString();
      if (r.match("<UnknownOperationException")) t = {
        Code: "UnknownOperation",
        Message: "Unknown operation " + e.request.operation
      };else try {
        t = new s.XML.Parser().parse(r);
      } catch (r) {
        t = {
          Code: e.httpResponse.statusCode,
          Message: e.httpResponse.statusMessage
        };
      }
      t.requestId && !e.requestId && (e.requestId = t.requestId), t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = a.error(new Error(), {
        code: t.Code,
        message: t.Message
      }) : e.error = a.error(new Error(), {
        code: e.httpResponse.statusCode,
        message: null
      });
    }
    function o(e) {
      var t = e.request,
        r = t.service.api.operations[t.operation],
        n = r.output || {},
        i = n;
      if (i.resultWrapper) {
        var o = c.create({
          type: "structure"
        });
        o.members[i.resultWrapper] = n, o.memberNames = [i.resultWrapper], a.property(n, "name", n.resultWrapper), n = o;
      }
      var u = new s.XML.Parser();
      if (n && n.members && !n.members._XAMZRequestId) {
        var l = c.create({
          type: "string"
        }, {
          api: {
            protocol: "query"
          }
        }, "requestId");
        n.members._XAMZRequestId = l;
      }
      var p = u.parse(e.httpResponse.body.toString(), n);
      e.requestId = p._XAMZRequestId || p.requestId, p._XAMZRequestId && delete p._XAMZRequestId, i.resultWrapper && p[i.resultWrapper] && (a.update(p, p[i.resultWrapper]), delete p[i.resultWrapper]), e.data = p;
    }
    var s = e("../core"),
      a = e("../util"),
      u = e("../query/query_param_serializer"),
      c = e("../model/shape"),
      l = e("./helpers").populateHostPrefix;
    t.exports = {
      buildRequest: n,
      extractError: i,
      extractData: o
    };
  }, {
    "../core": 20,
    "../model/shape": 45,
    "../query/query_param_serializer": 53,
    "../util": 73,
    "./helpers": 47
  }],
  50: [function (e, t, r) {
    function n(e) {
      e.httpRequest.method = e.service.api.operations[e.operation].httpMethod;
    }
    function i(e, t, r, n) {
      var i = [e, t].join("/");
      i = i.replace(/\/+/g, "/");
      var o = {},
        s = !1;
      if (l.each(r.members, function (e, t) {
        var r = n[e];
        if (null !== r && void 0 !== r) if ("uri" === t.location) {
          var a = new RegExp("\\{" + t.name + "(\\+)?\\}");
          i = i.replace(a, function (e, t) {
            return (t ? l.uriEscapePath : l.uriEscape)(String(r));
          });
        } else "querystring" === t.location && (s = !0, "list" === t.type ? o[t.name] = r.map(function (e) {
          return l.uriEscape(t.member.toWireFormat(e).toString());
        }) : "map" === t.type ? l.each(r, function (e, t) {
          Array.isArray(t) ? o[e] = t.map(function (e) {
            return l.uriEscape(String(e));
          }) : o[e] = l.uriEscape(String(t));
        }) : o[t.name] = l.uriEscape(t.toWireFormat(r).toString()));
      }), s) {
        i += i.indexOf("?") >= 0 ? "&" : "?";
        var a = [];
        l.arrayEach(Object.keys(o).sort(), function (e) {
          Array.isArray(o[e]) || (o[e] = [o[e]]);
          for (var t = 0; t < o[e].length; t++) a.push(l.uriEscape(String(e)) + "=" + o[e][t]);
        }), i += a.join("&");
      }
      return i;
    }
    function o(e) {
      var t = e.service.api.operations[e.operation],
        r = t.input,
        n = i(e.httpRequest.endpoint.path, t.httpPath, r, e.params);
      e.httpRequest.path = n;
    }
    function s(e) {
      var t = e.service.api.operations[e.operation];
      l.each(t.input.members, function (t, r) {
        var n = e.params[t];
        null !== n && void 0 !== n && ("headers" === r.location && "map" === r.type ? l.each(n, function (t, n) {
          e.httpRequest.headers[r.name + t] = n;
        }) : "header" === r.location && (n = r.toWireFormat(n).toString(), r.isJsonValue && (n = l.base64.encode(n)), e.httpRequest.headers[r.name] = n));
      });
    }
    function a(e) {
      n(e), o(e), s(e), p(e);
    }
    function u() {}
    function c(e) {
      var t = e.request,
        r = {},
        n = e.httpResponse,
        i = t.service.api.operations[t.operation],
        o = i.output,
        s = {};
      l.each(n.headers, function (e, t) {
        s[e.toLowerCase()] = t;
      }), l.each(o.members, function (e, t) {
        var i = (t.name || e).toLowerCase();
        if ("headers" === t.location && "map" === t.type) {
          r[e] = {};
          var o = t.isLocationName ? t.name : "",
            a = new RegExp("^" + o + "(.+)", "i");
          l.each(n.headers, function (t, n) {
            var i = t.match(a);
            null !== i && (r[e][i[1]] = n);
          });
        } else if ("header" === t.location) {
          if (void 0 !== s[i]) {
            var u = t.isJsonValue ? l.base64.decode(s[i]) : s[i];
            r[e] = t.toType(u);
          }
        } else "statusCode" === t.location && (r[e] = parseInt(n.statusCode, 10));
      }), e.data = r;
    }
    var l = e("../util"),
      p = e("./helpers").populateHostPrefix;
    t.exports = {
      buildRequest: a,
      extractError: u,
      extractData: c,
      generateURI: i
    };
  }, {
    "../util": 73,
    "./helpers": 47
  }],
  51: [function (e, t, r) {
    function n(e) {
      var t = new p(),
        r = e.service.api.operations[e.operation].input;
      if (r.payload) {
        var n = {},
          o = r.members[r.payload];
        if (void 0 === (n = e.params[r.payload])) return;
        "structure" === o.type ? (e.httpRequest.body = t.build(n, o), i(e)) : (e.httpRequest.body = n, ("binary" === o.type || o.isStreaming) && i(e, !0));
      } else {
        var s = t.build(e.params, r);
        "{}" === s && "GET" === e.httpRequest.method || (e.httpRequest.body = s), i(e);
      }
    }
    function i(e, t) {
      var r = e.service.api.operations[e.operation];
      r.input;
      if (!e.httpRequest.headers["Content-Type"]) {
        var n = t ? "binary/octet-stream" : "application/json";
        e.httpRequest.headers["Content-Type"] = n;
      }
    }
    function o(e) {
      c.buildRequest(e), ["HEAD", "DELETE"].indexOf(e.httpRequest.method) < 0 && n(e);
    }
    function s(e) {
      l.extractError(e);
    }
    function a(e) {
      c.extractData(e);
      var t,
        r = e.request,
        n = r.service.api.operations[r.operation],
        i = r.service.api.operations[r.operation].output || {};
      n.hasEventOutput;
      if (i.payload) {
        var o = i.members[i.payload],
          s = e.httpResponse.body;
        if (o.isEventStream) t = new h(), e.data[payload] = u.createEventStream(2 === AWS.HttpClient.streamsApiVersion ? e.httpResponse.stream : s, t, o);else if ("structure" === o.type || "list" === o.type) {
          var t = new h();
          e.data[i.payload] = t.parse(s, o);
        } else "binary" === o.type || o.isStreaming ? e.data[i.payload] = s : e.data[i.payload] = o.toType(s);
      } else {
        var a = e.data;
        l.extractData(e), e.data = u.merge(a, e.data);
      }
    }
    var u = e("../util"),
      c = e("./rest"),
      l = e("./json"),
      p = e("../json/builder"),
      h = e("../json/parser");
    t.exports = {
      buildRequest: o,
      extractError: s,
      extractData: a
    };
  }, {
    "../json/builder": 38,
    "../json/parser": 39,
    "../util": 73,
    "./json": 48,
    "./rest": 50
  }],
  52: [function (e, t, r) {
    function n(e) {
      var t = e.service.api.operations[e.operation].input,
        r = new a.XML.Builder(),
        n = e.params,
        i = t.payload;
      if (i) {
        var o = t.members[i];
        if (void 0 === (n = n[i])) return;
        if ("structure" === o.type) {
          var s = o.name;
          e.httpRequest.body = r.toXML(n, o, s, !0);
        } else e.httpRequest.body = n;
      } else e.httpRequest.body = r.toXML(n, t, t.name || t.shape || u.string.upperFirst(e.operation) + "Request");
    }
    function i(e) {
      c.buildRequest(e), ["GET", "HEAD"].indexOf(e.httpRequest.method) < 0 && n(e);
    }
    function o(e) {
      c.extractError(e);
      var t;
      try {
        t = new a.XML.Parser().parse(e.httpResponse.body.toString());
      } catch (r) {
        t = {
          Code: e.httpResponse.statusCode,
          Message: e.httpResponse.statusMessage
        };
      }
      t.Errors && (t = t.Errors), t.Error && (t = t.Error), t.Code ? e.error = u.error(new Error(), {
        code: t.Code,
        message: t.Message
      }) : e.error = u.error(new Error(), {
        code: e.httpResponse.statusCode,
        message: null
      });
    }
    function s(e) {
      c.extractData(e);
      var t,
        r = e.request,
        n = e.httpResponse.body,
        i = r.service.api.operations[r.operation],
        o = i.output,
        s = (i.hasEventOutput, o.payload);
      if (s) {
        var l = o.members[s];
        l.isEventStream ? (t = new a.XML.Parser(), e.data[s] = u.createEventStream(2 === a.HttpClient.streamsApiVersion ? e.httpResponse.stream : e.httpResponse.body, t, l)) : "structure" === l.type ? (t = new a.XML.Parser(), e.data[s] = t.parse(n.toString(), l)) : "binary" === l.type || l.isStreaming ? e.data[s] = n : e.data[s] = l.toType(n);
      } else if (n.length > 0) {
        t = new a.XML.Parser();
        var p = t.parse(n.toString(), o);
        u.update(e.data, p);
      }
    }
    var a = e("../core"),
      u = e("../util"),
      c = e("./rest");
    t.exports = {
      buildRequest: i,
      extractError: o,
      extractData: s
    };
  }, {
    "../core": 20,
    "../util": 73,
    "./rest": 50
  }],
  53: [function (e, t, r) {
    function n() {}
    function i(e) {
      return e.isQueryName || "ec2" !== e.api.protocol ? e.name : e.name[0].toUpperCase() + e.name.substr(1);
    }
    function o(e, t, r, n) {
      c.each(r.members, function (r, o) {
        var s = t[r];
        if (null !== s && void 0 !== s) {
          var a = i(o);
          a = e ? e + "." + a : a, u(a, s, o, n);
        }
      });
    }
    function s(e, t, r, n) {
      var i = 1;
      c.each(t, function (t, o) {
        var s = r.flattened ? "." : ".entry.",
          a = s + i++ + ".",
          c = a + (r.key.name || "key"),
          l = a + (r.value.name || "value");
        u(e + c, t, r.key, n), u(e + l, o, r.value, n);
      });
    }
    function a(e, t, r, n) {
      var o = r.member || {};
      if (0 === t.length) return void n.call(this, e, null);
      c.arrayEach(t, function (t, s) {
        var a = "." + (s + 1);
        if ("ec2" === r.api.protocol) a += "";else if (r.flattened) {
          if (o.name) {
            var c = e.split(".");
            c.pop(), c.push(i(o)), e = c.join(".");
          }
        } else a = "." + (o.name ? o.name : "member") + a;
        u(e + a, t, o, n);
      });
    }
    function u(e, t, r, n) {
      null !== t && void 0 !== t && ("structure" === r.type ? o(e, t, r, n) : "list" === r.type ? a(e, t, r, n) : "map" === r.type ? s(e, t, r, n) : n(e, r.toWireFormat(t).toString()));
    }
    var c = e("../util");
    n.prototype.serialize = function (e, t, r) {
      o("", e, t, r);
    }, t.exports = n;
  }, {
    "../util": 73
  }],
  54: [function (e, t, r) {
    t.exports = {
      now: function now() {
        return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : Date.now();
      }
    };
  }, {}],
  55: [function (e, t, r) {
    function n(e) {
      if (!e) return null;
      var t = e.split("-");
      return t.length < 3 ? null : t.slice(0, t.length - 2).join("-") + "-*";
    }
    function i(e) {
      var t = e.config.region,
        r = n(t),
        i = e.api.endpointPrefix;
      return [[t, i], [r, i], [t, "*"], [r, "*"], ["*", i], ["*", "*"]].map(function (e) {
        return e[0] && e[1] ? e.join("/") : null;
      });
    }
    function o(e, t) {
      u.each(t, function (t, r) {
        "globalEndpoint" !== t && (void 0 !== e.config[t] && null !== e.config[t] || (e.config[t] = r));
      });
    }
    function s(e) {
      for (var t = i(e), r = 0; r < t.length; r++) {
        var n = t[r];
        if (n && Object.prototype.hasOwnProperty.call(c.rules, n)) {
          var s = c.rules[n];
          return "string" == typeof s && (s = c.patterns[s]), e.config.useDualstack && u.isDualstackAvailable(e) && (s = u.copy(s), s.endpoint = s.endpoint.replace(/{service}\.({region}\.)?/, "{service}.dualstack.{region}.")), e.isGlobalEndpoint = !!s.globalEndpoint, s.signingRegion && (e.signingRegion = s.signingRegion), s.signatureVersion || (s.signatureVersion = "v4"), void o(e, s);
        }
      }
    }
    function a(e) {
      for (var t = {
          "^(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+$": "amazonaws.com",
          "^cn\\-\\w+\\-\\d+$": "amazonaws.com.cn",
          "^us\\-gov\\-\\w+\\-\\d+$": "amazonaws.com",
          "^us\\-iso\\-\\w+\\-\\d+$": "c2s.ic.gov",
          "^us\\-isob\\-\\w+\\-\\d+$": "sc2s.sgov.gov"
        }, r = Object.keys(t), n = 0; n < r.length; n++) {
        var i = RegExp(r[n]),
          o = t[r[n]];
        if (i.test(e)) return o;
      }
      return "amazonaws.com";
    }
    var u = e("./util"),
      c = e("./region_config_data.json");
    t.exports = {
      configureEndpoint: s,
      getEndpointSuffix: a
    };
  }, {
    "./region_config_data.json": 56,
    "./util": 73
  }],
  56: [function (e, t, r) {
    t.exports = {
      rules: {
        "*/*": {
          endpoint: "{service}.{region}.amazonaws.com"
        },
        "cn-*/*": {
          endpoint: "{service}.{region}.amazonaws.com.cn"
        },
        "us-iso-*/*": {
          endpoint: "{service}.{region}.c2s.ic.gov"
        },
        "us-isob-*/*": {
          endpoint: "{service}.{region}.sc2s.sgov.gov"
        },
        "*/budgets": "globalSSL",
        "*/cloudfront": "globalSSL",
        "*/sts": "globalSSL",
        "*/importexport": {
          endpoint: "{service}.amazonaws.com",
          signatureVersion: "v2",
          globalEndpoint: !0
        },
        "*/route53": "globalSSL",
        "cn-*/route53": {
          endpoint: "{service}.amazonaws.com.cn",
          globalEndpoint: !0,
          signingRegion: "cn-northwest-1"
        },
        "us-gov-*/route53": "globalGovCloud",
        "*/waf": "globalSSL",
        "*/iam": "globalSSL",
        "cn-*/iam": {
          endpoint: "{service}.cn-north-1.amazonaws.com.cn",
          globalEndpoint: !0,
          signingRegion: "cn-north-1"
        },
        "us-gov-*/iam": "globalGovCloud",
        "us-gov-*/sts": {
          endpoint: "{service}.{region}.amazonaws.com"
        },
        "us-gov-west-1/s3": "s3signature",
        "us-west-1/s3": "s3signature",
        "us-west-2/s3": "s3signature",
        "eu-west-1/s3": "s3signature",
        "ap-southeast-1/s3": "s3signature",
        "ap-southeast-2/s3": "s3signature",
        "ap-northeast-1/s3": "s3signature",
        "sa-east-1/s3": "s3signature",
        "us-east-1/s3": {
          endpoint: "{service}.amazonaws.com",
          signatureVersion: "s3"
        },
        "us-east-1/sdb": {
          endpoint: "{service}.amazonaws.com",
          signatureVersion: "v2"
        },
        "*/sdb": {
          endpoint: "{service}.{region}.amazonaws.com",
          signatureVersion: "v2"
        }
      },
      patterns: {
        globalSSL: {
          endpoint: "https://{service}.amazonaws.com",
          globalEndpoint: !0,
          signingRegion: "us-east-1"
        },
        globalGovCloud: {
          endpoint: "{service}.us-gov.amazonaws.com",
          globalEndpoint: !0,
          signingRegion: "us-gov-west-1"
        },
        s3signature: {
          endpoint: "{service}.{region}.amazonaws.com",
          signatureVersion: "s3"
        }
      }
    };
  }, {}],
  57: [function (e, t, r) {
    (function (t) {
      (function () {
        function r(e) {
          return Object.prototype.hasOwnProperty.call(u, e._asm.currentState);
        }
        var n = e("./core"),
          i = e("./state_machine"),
          o = n.util.inherit,
          s = n.util.domain,
          a = e("jmespath"),
          u = {
            success: 1,
            error: 1,
            complete: 1
          },
          c = new i();
        c.setupStates = function () {
          var e = function e(_e, t) {
            var n = this;
            n._haltHandlersOnError = !1, n.emit(n._asm.currentState, function (e) {
              if (e) {
                if (r(n)) {
                  if (!(s && n.domain instanceof s.Domain)) throw e;
                  e.domainEmitter = n, e.domain = n.domain, e.domainThrown = !1, n.domain.emit("error", e);
                } else n.response.error = e, t(e);
              } else t(n.response.error);
            });
          };
          this.addState("validate", "build", "error", e), this.addState("build", "afterBuild", "restart", e), this.addState("afterBuild", "sign", "restart", e), this.addState("sign", "send", "retry", e), this.addState("retry", "afterRetry", "afterRetry", e), this.addState("afterRetry", "sign", "error", e), this.addState("send", "validateResponse", "retry", e), this.addState("validateResponse", "extractData", "extractError", e), this.addState("extractError", "extractData", "retry", e), this.addState("extractData", "success", "retry", e), this.addState("restart", "build", "error", e), this.addState("success", "complete", "complete", e), this.addState("error", "complete", "complete", e), this.addState("complete", null, null, e);
        }, c.setupStates(), n.Request = o({
          constructor: function constructor(e, t, r) {
            var o = e.endpoint,
              a = e.config.region,
              u = e.config.customUserAgent;
            e.isGlobalEndpoint && (a = e.signingRegion ? e.signingRegion : "us-east-1"), this.domain = s && s.active, this.service = e, this.operation = t, this.params = r || {}, this.httpRequest = new n.HttpRequest(o, a), this.httpRequest.appendToUserAgent(u), this.startTime = e.getSkewCorrectedDate(), this.response = new n.Response(this), this._asm = new i(c.states, "validate"), this._haltHandlersOnError = !1, n.SequentialExecutor.call(this), this.emit = this.emitEvent;
          },
          send: function send(e) {
            return e && (this.httpRequest.appendToUserAgent("callback"), this.on("complete", function (t) {
              e.call(t, t.error, t.data);
            })), this.runTo(), this.response;
          },
          build: function build(e) {
            return this.runTo("send", e);
          },
          runTo: function runTo(e, t) {
            return this._asm.runTo(e, t, this), this;
          },
          abort: function abort() {
            return this.removeAllListeners("validateResponse"), this.removeAllListeners("extractError"), this.on("validateResponse", function (e) {
              e.error = n.util.error(new Error("Request aborted by user"), {
                code: "RequestAbortedError",
                retryable: !1
              });
            }), this.httpRequest.stream && !this.httpRequest.stream.didCallback && (this.httpRequest.stream.abort(), this.httpRequest._abortCallback ? this.httpRequest._abortCallback() : this.removeAllListeners("send")), this;
          },
          eachPage: function eachPage(e) {
            function t(r) {
              e.call(r, r.error, r.data, function (i) {
                !1 !== i && (r.hasNextPage() ? r.nextPage().on("complete", t).send() : e.call(r, null, null, n.util.fn.noop));
              });
            }
            e = n.util.fn.makeAsync(e, 3), this.on("complete", t).send();
          },
          eachItem: function eachItem(e) {
            function t(t, i) {
              if (t) return e(t, null);
              if (null === i) return e(null, null);
              var o = r.service.paginationConfig(r.operation),
                s = o.resultKey;
              Array.isArray(s) && (s = s[0]);
              var u = a.search(i, s),
                c = !0;
              return n.util.arrayEach(u, function (t) {
                if (!1 === (c = e(null, t))) return n.util.abort;
              }), c;
            }
            var r = this;
            this.eachPage(t);
          },
          isPageable: function isPageable() {
            return !!this.service.paginationConfig(this.operation);
          },
          createReadStream: function createReadStream() {
            var e = n.util.stream,
              r = this,
              i = null;
            return 2 === n.HttpClient.streamsApiVersion ? (i = new e.PassThrough(), t.nextTick(function () {
              r.send();
            })) : (i = new e.Stream(), i.readable = !0, i.sent = !1, i.on("newListener", function (e) {
              i.sent || "data" !== e || (i.sent = !0, t.nextTick(function () {
                r.send();
              }));
            })), this.on("error", function (e) {
              i.emit("error", e);
            }), this.on("httpHeaders", function (t, o, s) {
              if (t < 300) {
                r.removeListener("httpData", n.EventListeners.Core.HTTP_DATA), r.removeListener("httpError", n.EventListeners.Core.HTTP_ERROR), r.on("httpError", function (e) {
                  s.error = e, s.error.retryable = !1;
                });
                var a,
                  u = !1;
                if ("HEAD" !== r.httpRequest.method && (a = parseInt(o["content-length"], 10)), void 0 !== a && !isNaN(a) && a >= 0) {
                  u = !0;
                  var c = 0;
                }
                var l = function l() {
                    u && c !== a ? i.emit("error", n.util.error(new Error("Stream content length mismatch. Received " + c + " of " + a + " bytes."), {
                      code: "StreamContentLengthMismatch"
                    })) : 2 === n.HttpClient.streamsApiVersion ? i.end() : i.emit("end");
                  },
                  p = s.httpResponse.createUnbufferedStream();
                if (2 === n.HttpClient.streamsApiVersion) {
                  if (u) {
                    var h = new e.PassThrough();
                    h._write = function (t) {
                      return t && t.length && (c += t.length), e.PassThrough.prototype._write.apply(this, arguments);
                    }, h.on("end", l), i.on("error", function (e) {
                      u = !1, p.unpipe(h), h.emit("end"), h.end();
                    }), p.pipe(h).pipe(i, {
                      end: !1
                    });
                  } else p.pipe(i);
                } else u && p.on("data", function (e) {
                  e && e.length && (c += e.length);
                }), p.on("data", function (e) {
                  i.emit("data", e);
                }), p.on("end", l);
                p.on("error", function (e) {
                  u = !1, i.emit("error", e);
                });
              }
            }), i;
          },
          emitEvent: function emitEvent(e, t, r) {
            "function" == typeof t && (r = t, t = null), r || (r = function r() {}), t || (t = this.eventParameters(e, this.response)), n.SequentialExecutor.prototype.emit.call(this, e, t, function (e) {
              e && (this.response.error = e), r.call(this, e);
            });
          },
          eventParameters: function eventParameters(e) {
            switch (e) {
              case "restart":
              case "validate":
              case "sign":
              case "build":
              case "afterValidate":
              case "afterBuild":
                return [this];
              case "error":
                return [this.response.error, this.response];
              default:
                return [this.response];
            }
          },
          presign: function presign(e, t) {
            return t || "function" != typeof e || (t = e, e = null), new n.Signers.Presign().sign(this.toGet(), e, t);
          },
          isPresigned: function isPresigned() {
            return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, "presigned-expires");
          },
          toUnauthenticated: function toUnauthenticated() {
            return this._unAuthenticated = !0, this.removeListener("validate", n.EventListeners.Core.VALIDATE_CREDENTIALS), this.removeListener("sign", n.EventListeners.Core.SIGN), this;
          },
          toGet: function toGet() {
            return "query" !== this.service.api.protocol && "ec2" !== this.service.api.protocol || (this.removeListener("build", this.buildAsGet), this.addListener("build", this.buildAsGet)), this;
          },
          buildAsGet: function buildAsGet(e) {
            e.httpRequest.method = "GET", e.httpRequest.path = e.service.endpoint.path + "?" + e.httpRequest.body, e.httpRequest.body = "", delete e.httpRequest.headers["Content-Length"], delete e.httpRequest.headers["Content-Type"];
          },
          haltHandlersOnError: function haltHandlersOnError() {
            this._haltHandlersOnError = !0;
          }
        }), n.Request.addPromisesToClass = function (e) {
          this.prototype.promise = function () {
            var t = this;
            return this.httpRequest.appendToUserAgent("promise"), new e(function (e, r) {
              t.on("complete", function (t) {
                t.error ? r(t.error) : e(Object.defineProperty(t.data || {}, "$response", {
                  value: t
                }));
              }), t.runTo();
            });
          };
        }, n.Request.deletePromisesFromClass = function () {
          delete this.prototype.promise;
        }, n.util.addPromises(n.Request), n.util.mixin(n.Request, n.SequentialExecutor);
      }).call(this);
    }).call(this, e("_process"));
  }, {
    "./core": 20,
    "./state_machine": 72,
    _process: 87,
    jmespath: 86
  }],
  58: [function (e, t, r) {
    function n(e) {
      var t = e.request._waiter,
        r = t.config.acceptors,
        n = !1,
        i = "retry";
      r.forEach(function (r) {
        if (!n) {
          var o = t.matchers[r.matcher];
          o && o(e, r.expected, r.argument) && (n = !0, i = r.state);
        }
      }), !n && e.error && (i = "failure"), "success" === i ? t.setSuccess(e) : t.setError(e, "retry" === i);
    }
    var i = e("./core"),
      o = i.util.inherit,
      s = e("jmespath");
    i.ResourceWaiter = o({
      constructor: function constructor(e, t) {
        this.service = e, this.state = t, this.loadWaiterConfig(this.state);
      },
      service: null,
      state: null,
      config: null,
      matchers: {
        path: function path(e, t, r) {
          try {
            var n = s.search(e.data, r);
          } catch (e) {
            return !1;
          }
          return s.strictDeepEqual(n, t);
        },
        pathAll: function pathAll(e, t, r) {
          try {
            var n = s.search(e.data, r);
          } catch (e) {
            return !1;
          }
          Array.isArray(n) || (n = [n]);
          var i = n.length;
          if (!i) return !1;
          for (var o = 0; o < i; o++) if (!s.strictDeepEqual(n[o], t)) return !1;
          return !0;
        },
        pathAny: function pathAny(e, t, r) {
          try {
            var n = s.search(e.data, r);
          } catch (e) {
            return !1;
          }
          Array.isArray(n) || (n = [n]);
          for (var i = n.length, o = 0; o < i; o++) if (s.strictDeepEqual(n[o], t)) return !0;
          return !1;
        },
        status: function status(e, t) {
          var r = e.httpResponse.statusCode;
          return "number" == typeof r && r === t;
        },
        error: function error(e, t) {
          return "string" == typeof t && e.error ? t === e.error.code : t === !!e.error;
        }
      },
      listeners: new i.SequentialExecutor().addNamedListeners(function (e) {
        e("RETRY_CHECK", "retry", function (e) {
          var t = e.request._waiter;
          e.error && "ResourceNotReady" === e.error.code && (e.error.retryDelay = 1e3 * (t.config.delay || 0));
        }), e("CHECK_OUTPUT", "extractData", n), e("CHECK_ERROR", "extractError", n);
      }),
      wait: function wait(e, t) {
        "function" == typeof e && (t = e, e = void 0), e && e.$waiter && (e = i.util.copy(e), "number" == typeof e.$waiter.delay && (this.config.delay = e.$waiter.delay), "number" == typeof e.$waiter.maxAttempts && (this.config.maxAttempts = e.$waiter.maxAttempts), delete e.$waiter);
        var r = this.service.makeRequest(this.config.operation, e);
        return r._waiter = this, r.response.maxRetries = this.config.maxAttempts, r.addListeners(this.listeners), t && r.send(t), r;
      },
      setSuccess: function setSuccess(e) {
        e.error = null, e.data = e.data || {}, e.request.removeAllListeners("extractData");
      },
      setError: function setError(e, t) {
        e.data = null, e.error = i.util.error(e.error || new Error(), {
          code: "ResourceNotReady",
          message: "Resource is not in the state " + this.state,
          retryable: t
        });
      },
      loadWaiterConfig: function loadWaiterConfig(e) {
        if (!this.service.api.waiters[e]) throw new i.util.error(new Error(), {
          code: "StateNotFoundError",
          message: "State " + e + " not found."
        });
        this.config = i.util.copy(this.service.api.waiters[e]);
      }
    });
  }, {
    "./core": 20,
    jmespath: 86
  }],
  59: [function (e, t, r) {
    var n = e("./core"),
      i = n.util.inherit,
      o = e("jmespath");
    n.Response = i({
      constructor: function constructor(e) {
        this.request = e, this.data = null, this.error = null, this.retryCount = 0, this.redirectCount = 0, this.httpResponse = new n.HttpResponse(), e && (this.maxRetries = e.service.numRetries(), this.maxRedirects = e.service.config.maxRedirects);
      },
      nextPage: function nextPage(e) {
        var t,
          r = this.request.service,
          i = this.request.operation;
        try {
          t = r.paginationConfig(i, !0);
        } catch (e) {
          this.error = e;
        }
        if (!this.hasNextPage()) {
          if (e) e(this.error, null);else if (this.error) throw this.error;
          return null;
        }
        var o = n.util.copy(this.request.params);
        if (this.nextPageTokens) {
          var s = t.inputToken;
          "string" == typeof s && (s = [s]);
          for (var a = 0; a < s.length; a++) o[s[a]] = this.nextPageTokens[a];
          return r.makeRequest(this.request.operation, o, e);
        }
        return e ? e(null, null) : null;
      },
      hasNextPage: function hasNextPage() {
        return this.cacheNextPageTokens(), !!this.nextPageTokens || void 0 === this.nextPageTokens && void 0;
      },
      cacheNextPageTokens: function cacheNextPageTokens() {
        if (Object.prototype.hasOwnProperty.call(this, "nextPageTokens")) return this.nextPageTokens;
        this.nextPageTokens = void 0;
        var e = this.request.service.paginationConfig(this.request.operation);
        if (!e) return this.nextPageTokens;
        if (this.nextPageTokens = null, e.moreResults && !o.search(this.data, e.moreResults)) return this.nextPageTokens;
        var t = e.outputToken;
        return "string" == typeof t && (t = [t]), n.util.arrayEach.call(this, t, function (e) {
          var t = o.search(this.data, e);
          t && (this.nextPageTokens = this.nextPageTokens || [], this.nextPageTokens.push(t));
        }), this.nextPageTokens;
      }
    });
  }, {
    "./core": 20,
    jmespath: 86
  }],
  60: [function (e, t, r) {
    var n = e("./core");
    n.SequentialExecutor = n.util.inherit({
      constructor: function constructor() {
        this._events = {};
      },
      listeners: function listeners(e) {
        return this._events[e] ? this._events[e].slice(0) : [];
      },
      on: function on(e, t, r) {
        return this._events[e] ? r ? this._events[e].unshift(t) : this._events[e].push(t) : this._events[e] = [t], this;
      },
      onAsync: function onAsync(e, t, r) {
        return t._isAsync = !0, this.on(e, t, r);
      },
      removeListener: function removeListener(e, t) {
        var r = this._events[e];
        if (r) {
          for (var n = r.length, i = -1, o = 0; o < n; ++o) r[o] === t && (i = o);
          i > -1 && r.splice(i, 1);
        }
        return this;
      },
      removeAllListeners: function removeAllListeners(e) {
        return e ? delete this._events[e] : this._events = {}, this;
      },
      emit: function emit(e, t, r) {
        r || (r = function r() {});
        var n = this.listeners(e),
          i = n.length;
        return this.callListeners(n, t, r), i > 0;
      },
      callListeners: function callListeners(e, t, r, i) {
        function o(i) {
          if (i && (a = n.util.error(a || new Error(), i), s._haltHandlersOnError)) return r.call(s, a);
          s.callListeners(e, t, r, a);
        }
        for (var s = this, a = i || null; e.length > 0;) {
          var u = e.shift();
          if (u._isAsync) return void u.apply(s, t.concat([o]));
          try {
            u.apply(s, t);
          } catch (e) {
            a = n.util.error(a || new Error(), e);
          }
          if (a && s._haltHandlersOnError) return void r.call(s, a);
        }
        r.call(s, a);
      },
      addListeners: function addListeners(e) {
        var t = this;
        return e._events && (e = e._events), n.util.each(e, function (e, r) {
          "function" == typeof r && (r = [r]), n.util.arrayEach(r, function (r) {
            t.on(e, r);
          });
        }), t;
      },
      addNamedListener: function addNamedListener(e, t, r, n) {
        return this[e] = r, this.addListener(t, r, n), this;
      },
      addNamedAsyncListener: function addNamedAsyncListener(e, t, r, n) {
        return r._isAsync = !0, this.addNamedListener(e, t, r, n);
      },
      addNamedListeners: function addNamedListeners(e) {
        var t = this;
        return e(function () {
          t.addNamedListener.apply(t, arguments);
        }, function () {
          t.addNamedAsyncListener.apply(t, arguments);
        }), this;
      }
    }), n.SequentialExecutor.prototype.addListener = n.SequentialExecutor.prototype.on, t.exports = n.SequentialExecutor;
  }, {
    "./core": 20
  }],
  61: [function (e, t, r) {
    (function (r) {
      (function () {
        var n = e("./core"),
          i = e("./model/api"),
          o = e("./region_config"),
          s = n.util.inherit,
          a = 0;
        n.Service = s({
          constructor: function constructor(e) {
            if (!this.loadServiceClass) throw n.util.error(new Error(), "Service must be constructed with `new' operator");
            var t = this.loadServiceClass(e || {});
            if (t) {
              var r = n.util.copy(e),
                i = new t(e);
              return Object.defineProperty(i, "_originalConfig", {
                get: function get() {
                  return r;
                },
                enumerable: !1,
                configurable: !0
              }), i._clientId = ++a, i;
            }
            this.initialize(e);
          },
          initialize: function initialize(e) {
            var t = n.config[this.serviceIdentifier];
            if (this.config = new n.Config(n.config), t && this.config.update(t, !0), e && this.config.update(e, !0), this.validateService(), this.config.endpoint || o.configureEndpoint(this), this.config.endpoint = this.endpointFromTemplate(this.config.endpoint), this.setEndpoint(this.config.endpoint), n.SequentialExecutor.call(this), n.Service.addDefaultMonitoringListeners(this), (this.config.clientSideMonitoring || n.Service._clientSideMonitoring) && this.publisher) {
              var i = this.publisher;
              this.addNamedListener("PUBLISH_API_CALL", "apiCall", function (e) {
                r.nextTick(function () {
                  i.eventHandler(e);
                });
              }), this.addNamedListener("PUBLISH_API_ATTEMPT", "apiCallAttempt", function (e) {
                r.nextTick(function () {
                  i.eventHandler(e);
                });
              });
            }
          },
          validateService: function validateService() {},
          loadServiceClass: function loadServiceClass(e) {
            var t = e;
            if (n.util.isEmpty(this.api)) {
              if (t.apiConfig) return n.Service.defineServiceApi(this.constructor, t.apiConfig);
              if (this.constructor.services) {
                t = new n.Config(n.config), t.update(e, !0);
                var r = t.apiVersions[this.constructor.serviceIdentifier];
                return r = r || t.apiVersion, this.getLatestServiceClass(r);
              }
              return null;
            }
            return null;
          },
          getLatestServiceClass: function getLatestServiceClass(e) {
            return e = this.getLatestServiceVersion(e), null === this.constructor.services[e] && n.Service.defineServiceApi(this.constructor, e), this.constructor.services[e];
          },
          getLatestServiceVersion: function getLatestServiceVersion(e) {
            if (!this.constructor.services || 0 === this.constructor.services.length) throw new Error("No services defined on " + this.constructor.serviceIdentifier);
            if (e ? n.util.isType(e, Date) && (e = n.util.date.iso8601(e).split("T")[0]) : e = "latest", Object.hasOwnProperty(this.constructor.services, e)) return e;
            for (var t = Object.keys(this.constructor.services).sort(), r = null, i = t.length - 1; i >= 0; i--) if ("*" !== t[i][t[i].length - 1] && (r = t[i]), t[i].substr(0, 10) <= e) return r;
            throw new Error("Could not find " + this.constructor.serviceIdentifier + " API to satisfy version constraint `" + e + "'");
          },
          api: {},
          defaultRetryCount: 3,
          customizeRequests: function customizeRequests(e) {
            if (e) {
              if ("function" != typeof e) throw new Error("Invalid callback type '" + typeof e + "' provided in customizeRequests");
              this.customRequestHandler = e;
            } else this.customRequestHandler = null;
          },
          makeRequest: function makeRequest(e, t, r) {
            if ("function" == typeof t && (r = t, t = null), t = t || {}, this.config.params) {
              var i = this.api.operations[e];
              i && (t = n.util.copy(t), n.util.each(this.config.params, function (e, r) {
                i.input.members[e] && (void 0 !== t[e] && null !== t[e] || (t[e] = r));
              }));
            }
            var o = new n.Request(this, e, t);
            return this.addAllRequestListeners(o), this.attachMonitoringEmitter(o), r && o.send(r), o;
          },
          makeUnauthenticatedRequest: function makeUnauthenticatedRequest(e, t, r) {
            "function" == typeof t && (r = t, t = {});
            var n = this.makeRequest(e, t).toUnauthenticated();
            return r ? n.send(r) : n;
          },
          waitFor: function waitFor(e, t, r) {
            return new n.ResourceWaiter(this, e).wait(t, r);
          },
          addAllRequestListeners: function addAllRequestListeners(e) {
            for (var t = [n.events, n.EventListeners.Core, this.serviceInterface(), n.EventListeners.CorePost], r = 0; r < t.length; r++) t[r] && e.addListeners(t[r]);
            this.config.paramValidation || e.removeListener("validate", n.EventListeners.Core.VALIDATE_PARAMETERS), this.config.logger && e.addListeners(n.EventListeners.Logger), this.setupRequestListeners(e), "function" == typeof this.constructor.prototype.customRequestHandler && this.constructor.prototype.customRequestHandler(e), Object.prototype.hasOwnProperty.call(this, "customRequestHandler") && "function" == typeof this.customRequestHandler && this.customRequestHandler(e);
          },
          apiCallEvent: function apiCallEvent(e) {
            var t = e.service.api.operations[e.operation],
              r = {
                Type: "ApiCall",
                Api: t ? t.name : e.operation,
                Version: 1,
                Service: e.service.api.serviceId || e.service.api.endpointPrefix,
                Region: e.httpRequest.region,
                MaxRetriesExceeded: 0,
                UserAgent: e.httpRequest.getUserAgent()
              },
              n = e.response;
            if (n.httpResponse.statusCode && (r.FinalHttpStatusCode = n.httpResponse.statusCode), n.error) {
              var i = n.error;
              n.httpResponse.statusCode > 299 ? (i.code && (r.FinalAwsException = i.code), i.message && (r.FinalAwsExceptionMessage = i.message)) : ((i.code || i.name) && (r.FinalSdkException = i.code || i.name), i.message && (r.FinalSdkExceptionMessage = i.message));
            }
            return r;
          },
          apiAttemptEvent: function apiAttemptEvent(e) {
            var t = e.service.api.operations[e.operation],
              r = {
                Type: "ApiCallAttempt",
                Api: t ? t.name : e.operation,
                Version: 1,
                Service: e.service.api.serviceId || e.service.api.endpointPrefix,
                Fqdn: e.httpRequest.endpoint.hostname,
                UserAgent: e.httpRequest.getUserAgent()
              },
              n = e.response;
            return n.httpResponse.statusCode && (r.HttpStatusCode = n.httpResponse.statusCode), !e._unAuthenticated && e.service.config.credentials && e.service.config.credentials.accessKeyId && (r.AccessKey = e.service.config.credentials.accessKeyId), n.httpResponse.headers ? (e.httpRequest.headers["x-amz-security-token"] && (r.SessionToken = e.httpRequest.headers["x-amz-security-token"]), n.httpResponse.headers["x-amzn-requestid"] && (r.XAmznRequestId = n.httpResponse.headers["x-amzn-requestid"]), n.httpResponse.headers["x-amz-request-id"] && (r.XAmzRequestId = n.httpResponse.headers["x-amz-request-id"]), n.httpResponse.headers["x-amz-id-2"] && (r.XAmzId2 = n.httpResponse.headers["x-amz-id-2"]), r) : r;
          },
          attemptFailEvent: function attemptFailEvent(e) {
            var t = this.apiAttemptEvent(e),
              r = e.response,
              n = r.error;
            return r.httpResponse.statusCode > 299 ? (n.code && (t.AwsException = n.code), n.message && (t.AwsExceptionMessage = n.message)) : ((n.code || n.name) && (t.SdkException = n.code || n.name), n.message && (t.SdkExceptionMessage = n.message)), t;
          },
          attachMonitoringEmitter: function attachMonitoringEmitter(e) {
            var t,
              r,
              i,
              o,
              s,
              a,
              u = 0,
              c = this;
            e.on("validate", function () {
              o = n.util.realClock.now(), a = Date.now();
            }, !0), e.on("sign", function () {
              r = n.util.realClock.now(), t = Date.now(), s = e.httpRequest.region, u++;
            }, !0), e.on("validateResponse", function () {
              i = Math.round(n.util.realClock.now() - r);
            }), e.addNamedListener("API_CALL_ATTEMPT", "success", function () {
              var r = c.apiAttemptEvent(e);
              r.Timestamp = t, r.AttemptLatency = i >= 0 ? i : 0, r.Region = s, c.emit("apiCallAttempt", [r]);
            }), e.addNamedListener("API_CALL_ATTEMPT_RETRY", "retry", function () {
              var o = c.attemptFailEvent(e);
              o.Timestamp = t, i = i || Math.round(n.util.realClock.now() - r), o.AttemptLatency = i >= 0 ? i : 0, o.Region = s, c.emit("apiCallAttempt", [o]);
            }), e.addNamedListener("API_CALL", "complete", function () {
              var t = c.apiCallEvent(e);
              if (t.AttemptCount = u, !(t.AttemptCount <= 0)) {
                t.Timestamp = a;
                var r = Math.round(n.util.realClock.now() - o);
                t.Latency = r >= 0 ? r : 0;
                var i = e.response;
                i.error && i.error.retryable && "number" == typeof i.retryCount && "number" == typeof i.maxRetries && i.retryCount >= i.maxRetries && (t.MaxRetriesExceeded = 1), c.emit("apiCall", [t]);
              }
            });
          },
          setupRequestListeners: function setupRequestListeners(e) {},
          getSigningName: function getSigningName() {
            return this.api.signingName || this.api.endpointPrefix;
          },
          getSignerClass: function getSignerClass(e) {
            var t,
              r = null,
              i = "";
            if (e) {
              r = (e.service.api.operations || {})[e.operation] || null, i = r ? r.authtype : "";
            }
            return t = this.config.signatureVersion ? this.config.signatureVersion : "v4" === i || "v4-unsigned-body" === i ? "v4" : this.api.signatureVersion, n.Signers.RequestSigner.getVersion(t);
          },
          serviceInterface: function serviceInterface() {
            switch (this.api.protocol) {
              case "ec2":
              case "query":
                return n.EventListeners.Query;
              case "json":
                return n.EventListeners.Json;
              case "rest-json":
                return n.EventListeners.RestJson;
              case "rest-xml":
                return n.EventListeners.RestXml;
            }
            if (this.api.protocol) throw new Error("Invalid service `protocol' " + this.api.protocol + " in API config");
          },
          successfulResponse: function successfulResponse(e) {
            return e.httpResponse.statusCode < 300;
          },
          numRetries: function numRetries() {
            return void 0 !== this.config.maxRetries ? this.config.maxRetries : this.defaultRetryCount;
          },
          retryDelays: function retryDelays(e, t) {
            return n.util.calculateRetryDelay(e, this.config.retryDelayOptions, t);
          },
          retryableError: function retryableError(e) {
            return !!this.timeoutError(e) || !!this.networkingError(e) || !!this.expiredCredentialsError(e) || !!this.throttledError(e) || e.statusCode >= 500;
          },
          networkingError: function networkingError(e) {
            return "NetworkingError" === e.code;
          },
          timeoutError: function timeoutError(e) {
            return "TimeoutError" === e.code;
          },
          expiredCredentialsError: function expiredCredentialsError(e) {
            return "ExpiredTokenException" === e.code;
          },
          clockSkewError: function clockSkewError(e) {
            switch (e.code) {
              case "RequestTimeTooSkewed":
              case "RequestExpired":
              case "InvalidSignatureException":
              case "SignatureDoesNotMatch":
              case "AuthFailure":
              case "RequestInTheFuture":
                return !0;
              default:
                return !1;
            }
          },
          getSkewCorrectedDate: function getSkewCorrectedDate() {
            return new Date(Date.now() + this.config.systemClockOffset);
          },
          applyClockOffset: function applyClockOffset(e) {
            e && (this.config.systemClockOffset = e - Date.now());
          },
          isClockSkewed: function isClockSkewed(e) {
            if (e) return Math.abs(this.getSkewCorrectedDate().getTime() - e) >= 3e5;
          },
          throttledError: function throttledError(e) {
            if (429 === e.statusCode) return !0;
            switch (e.code) {
              case "ProvisionedThroughputExceededException":
              case "Throttling":
              case "ThrottlingException":
              case "RequestLimitExceeded":
              case "RequestThrottled":
              case "RequestThrottledException":
              case "TooManyRequestsException":
              case "TransactionInProgressException":
              case "EC2ThrottledException":
                return !0;
              default:
                return !1;
            }
          },
          endpointFromTemplate: function endpointFromTemplate(e) {
            if ("string" != typeof e) return e;
            var t = e;
            return t = t.replace(/\{service\}/g, this.api.endpointPrefix), t = t.replace(/\{region\}/g, this.config.region), t = t.replace(/\{scheme\}/g, this.config.sslEnabled ? "https" : "http");
          },
          setEndpoint: function setEndpoint(e) {
            this.endpoint = new n.Endpoint(e, this.config);
          },
          paginationConfig: function paginationConfig(e, t) {
            var r = this.api.operations[e].paginator;
            if (!r) {
              if (t) {
                var i = new Error();
                throw n.util.error(i, "No pagination configuration for " + e);
              }
              return null;
            }
            return r;
          }
        }), n.util.update(n.Service, {
          defineMethods: function defineMethods(e) {
            n.util.each(e.prototype.api.operations, function (t) {
              if (!e.prototype[t]) {
                "none" === e.prototype.api.operations[t].authtype ? e.prototype[t] = function (e, r) {
                  return this.makeUnauthenticatedRequest(t, e, r);
                } : e.prototype[t] = function (e, r) {
                  return this.makeRequest(t, e, r);
                };
              }
            });
          },
          defineService: function defineService(e, t, r) {
            n.Service._serviceMap[e] = !0, Array.isArray(t) || (r = t, t = []);
            var i = s(n.Service, r || {});
            if ("string" == typeof e) {
              n.Service.addVersions(i, t);
              var o = i.serviceIdentifier || e;
              i.serviceIdentifier = o;
            } else i.prototype.api = e, n.Service.defineMethods(i);
            if (n.SequentialExecutor.call(this.prototype), !this.prototype.publisher && n.util.clientSideMonitoring) {
              var a = n.util.clientSideMonitoring.Publisher,
                u = n.util.clientSideMonitoring.configProvider,
                c = u();
              this.prototype.publisher = new a(c), c.enabled && (n.Service._clientSideMonitoring = !0);
            }
            return n.SequentialExecutor.call(i.prototype), n.Service.addDefaultMonitoringListeners(i.prototype), i;
          },
          addVersions: function addVersions(e, t) {
            Array.isArray(t) || (t = [t]), e.services = e.services || {};
            for (var r = 0; r < t.length; r++) void 0 === e.services[t[r]] && (e.services[t[r]] = null);
            e.apiVersions = Object.keys(e.services).sort();
          },
          defineServiceApi: function defineServiceApi(e, t, r) {
            function o(t) {
              t.isApi ? a.prototype.api = t : a.prototype.api = new i(t, {
                serviceIdentifier: e.serviceIdentifier
              });
            }
            var a = s(e, {
              serviceIdentifier: e.serviceIdentifier
            });
            if ("string" == typeof t) {
              if (r) o(r);else try {
                o(n.apiLoader(e.serviceIdentifier, t));
              } catch (r) {
                throw n.util.error(r, {
                  message: "Could not find API configuration " + e.serviceIdentifier + "-" + t
                });
              }
              Object.prototype.hasOwnProperty.call(e.services, t) || (e.apiVersions = e.apiVersions.concat(t).sort()), e.services[t] = a;
            } else o(t);
            return n.Service.defineMethods(a), a;
          },
          hasService: function hasService(e) {
            return Object.prototype.hasOwnProperty.call(n.Service._serviceMap, e);
          },
          addDefaultMonitoringListeners: function addDefaultMonitoringListeners(e) {
            e.addNamedListener("MONITOR_EVENTS_BUBBLE", "apiCallAttempt", function (t) {
              var r = Object.getPrototypeOf(e);
              r._events && r.emit("apiCallAttempt", [t]);
            }), e.addNamedListener("CALL_EVENTS_BUBBLE", "apiCall", function (t) {
              var r = Object.getPrototypeOf(e);
              r._events && r.emit("apiCall", [t]);
            });
          },
          _serviceMap: {}
        }), n.util.mixin(n.Service, n.SequentialExecutor), t.exports = n.Service;
      }).call(this);
    }).call(this, e("_process"));
  }, {
    "./core": 20,
    "./model/api": 40,
    "./region_config": 55,
    _process: 87
  }],
  62: [function (e, t, r) {
    var n = e("../core");
    n.util.update(n.CognitoIdentity.prototype, {
      getOpenIdToken: function getOpenIdToken(e, t) {
        return this.makeUnauthenticatedRequest("getOpenIdToken", e, t);
      },
      getId: function getId(e, t) {
        return this.makeUnauthenticatedRequest("getId", e, t);
      },
      getCredentialsForIdentity: function getCredentialsForIdentity(e, t) {
        return this.makeUnauthenticatedRequest("getCredentialsForIdentity", e, t);
      }
    });
  }, {
    "../core": 20
  }],
  63: [function (e, t, r) {
    var n = e("../core"),
      i = e("../config_regional_endpoint");
    n.util.update(n.STS.prototype, {
      credentialsFrom: function credentialsFrom(e, t) {
        return e ? (t || (t = new n.TemporaryCredentials()), t.expired = !1, t.accessKeyId = e.Credentials.AccessKeyId, t.secretAccessKey = e.Credentials.SecretAccessKey, t.sessionToken = e.Credentials.SessionToken, t.expireTime = e.Credentials.Expiration, t) : null;
      },
      assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(e, t) {
        return this.makeUnauthenticatedRequest("assumeRoleWithWebIdentity", e, t);
      },
      assumeRoleWithSAML: function assumeRoleWithSAML(e, t) {
        return this.makeUnauthenticatedRequest("assumeRoleWithSAML", e, t);
      },
      setupRequestListeners: function setupRequestListeners(e) {
        e.addListener("validate", this.optInRegionalEndpoint, !0);
      },
      optInRegionalEndpoint: function optInRegionalEndpoint(e) {
        var t = e.service,
          r = t.config;
        if (r.stsRegionalEndpoints = i(t._originalConfig, {
          env: "AWS_STS_REGIONAL_ENDPOINTS",
          sharedConfig: "sts_regional_endpoints",
          clientConfig: "stsRegionalEndpoints"
        }), "regional" === r.stsRegionalEndpoints && t.isGlobalEndpoint) {
          if (!r.region) throw n.util.error(new Error(), {
            code: "ConfigError",
            message: "Missing region in config"
          });
          var o = r.endpoint.indexOf(".amazonaws.com"),
            s = r.endpoint.substring(0, o) + "." + r.region + r.endpoint.substring(o);
          e.httpRequest.updateEndpoint(s), e.httpRequest.region = r.region;
        }
      }
    });
  }, {
    "../config_regional_endpoint": 19,
    "../core": 20
  }],
  64: [function (e, t, r) {
    function n(e) {
      var t = e.httpRequest.headers[a],
        r = e.service.getSignerClass(e);
      if (delete e.httpRequest.headers["User-Agent"], delete e.httpRequest.headers["X-Amz-User-Agent"], r === o.Signers.V4) {
        if (t > 604800) {
          throw o.util.error(new Error(), {
            code: "InvalidExpiryTime",
            message: "Presigning does not support expiry time greater than a week with SigV4 signing.",
            retryable: !1
          });
        }
        e.httpRequest.headers[a] = t;
      } else {
        if (r !== o.Signers.S3) throw o.util.error(new Error(), {
          message: "Presigning only supports S3 or SigV4 signing.",
          code: "UnsupportedSigner",
          retryable: !1
        });
        var n = e.service ? e.service.getSkewCorrectedDate() : o.util.date.getDate();
        e.httpRequest.headers[a] = parseInt(o.util.date.unixTimestamp(n) + t, 10).toString();
      }
    }
    function i(e) {
      var t = e.httpRequest.endpoint,
        r = o.util.urlParse(e.httpRequest.path),
        n = {};
      r.search && (n = o.util.queryStringParse(r.search.substr(1)));
      var i = e.httpRequest.headers.Authorization.split(" ");
      if ("AWS" === i[0]) i = i[1].split(":"), n.Signature = i.pop(), n.AWSAccessKeyId = i.join(":"), o.util.each(e.httpRequest.headers, function (e, t) {
        e === a && (e = "Expires"), 0 === e.indexOf("x-amz-meta-") && (delete n[e], e = e.toLowerCase()), n[e] = t;
      }), delete e.httpRequest.headers[a], delete n.Authorization, delete n.Host;else if ("AWS4-HMAC-SHA256" === i[0]) {
        i.shift();
        var s = i.join(" "),
          u = s.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
        n["X-Amz-Signature"] = u, delete n.Expires;
      }
      t.pathname = r.pathname, t.search = o.util.queryParamsToString(n);
    }
    var o = e("../core"),
      s = o.util.inherit,
      a = "presigned-expires";
    o.Signers.Presign = s({
      sign: function sign(e, t, r) {
        if (e.httpRequest.headers[a] = t || 3600, e.on("build", n), e.on("sign", i), e.removeListener("afterBuild", o.EventListeners.Core.SET_CONTENT_LENGTH), e.removeListener("afterBuild", o.EventListeners.Core.COMPUTE_SHA256), e.emit("beforePresign", [e]), !r) {
          if (e.build(), e.response.error) throw e.response.error;
          return o.util.urlFormat(e.httpRequest.endpoint);
        }
        e.build(function () {
          this.response.error ? r(this.response.error) : r(null, o.util.urlFormat(e.httpRequest.endpoint));
        });
      }
    }), t.exports = o.Signers.Presign;
  }, {
    "../core": 20
  }],
  65: [function (e, t, r) {
    var n = e("../core"),
      i = n.util.inherit;
    n.Signers.RequestSigner = i({
      constructor: function constructor(e) {
        this.request = e;
      },
      setServiceClientId: function setServiceClientId(e) {
        this.serviceClientId = e;
      },
      getServiceClientId: function getServiceClientId() {
        return this.serviceClientId;
      }
    }), n.Signers.RequestSigner.getVersion = function (e) {
      switch (e) {
        case "v2":
          return n.Signers.V2;
        case "v3":
          return n.Signers.V3;
        case "s3v4":
        case "v4":
          return n.Signers.V4;
        case "s3":
          return n.Signers.S3;
        case "v3https":
          return n.Signers.V3Https;
      }
      throw new Error("Unknown signing version " + e);
    }, e("./v2"), e("./v3"), e("./v3https"), e("./v4"), e("./s3"), e("./presign");
  }, {
    "../core": 20,
    "./presign": 64,
    "./s3": 66,
    "./v2": 67,
    "./v3": 68,
    "./v3https": 69,
    "./v4": 70
  }],
  66: [function (e, t, r) {
    var n = e("../core"),
      i = n.util.inherit;
    n.Signers.S3 = i(n.Signers.RequestSigner, {
      subResources: {
        acl: 1,
        accelerate: 1,
        analytics: 1,
        cors: 1,
        lifecycle: 1,
        delete: 1,
        inventory: 1,
        location: 1,
        logging: 1,
        metrics: 1,
        notification: 1,
        partNumber: 1,
        policy: 1,
        requestPayment: 1,
        replication: 1,
        restore: 1,
        tagging: 1,
        torrent: 1,
        uploadId: 1,
        uploads: 1,
        versionId: 1,
        versioning: 1,
        versions: 1,
        website: 1
      },
      responseHeaders: {
        "response-content-type": 1,
        "response-content-language": 1,
        "response-expires": 1,
        "response-cache-control": 1,
        "response-content-disposition": 1,
        "response-content-encoding": 1
      },
      addAuthorization: function addAuthorization(e, t) {
        this.request.headers["presigned-expires"] || (this.request.headers["X-Amz-Date"] = n.util.date.rfc822(t)), e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken);
        var r = this.sign(e.secretAccessKey, this.stringToSign()),
          i = "AWS " + e.accessKeyId + ":" + r;
        this.request.headers.Authorization = i;
      },
      stringToSign: function stringToSign() {
        var e = this.request,
          t = [];
        t.push(e.method), t.push(e.headers["Content-MD5"] || ""), t.push(e.headers["Content-Type"] || ""), t.push(e.headers["presigned-expires"] || "");
        var r = this.canonicalizedAmzHeaders();
        return r && t.push(r), t.push(this.canonicalizedResource()), t.join("\n");
      },
      canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {
        var e = [];
        n.util.each(this.request.headers, function (t) {
          t.match(/^x-amz-/i) && e.push(t);
        }), e.sort(function (e, t) {
          return e.toLowerCase() < t.toLowerCase() ? -1 : 1;
        });
        var t = [];
        return n.util.arrayEach.call(this, e, function (e) {
          t.push(e.toLowerCase() + ":" + String(this.request.headers[e]));
        }), t.join("\n");
      },
      canonicalizedResource: function canonicalizedResource() {
        var e = this.request,
          t = e.path.split("?"),
          r = t[0],
          i = t[1],
          o = "";
        if (e.virtualHostedBucket && (o += "/" + e.virtualHostedBucket), o += r, i) {
          var s = [];
          n.util.arrayEach.call(this, i.split("&"), function (e) {
            var t = e.split("=")[0],
              r = e.split("=")[1];
            if (this.subResources[t] || this.responseHeaders[t]) {
              var n = {
                name: t
              };
              void 0 !== r && (this.subResources[t] ? n.value = r : n.value = decodeURIComponent(r)), s.push(n);
            }
          }), s.sort(function (e, t) {
            return e.name < t.name ? -1 : 1;
          }), s.length && (i = [], n.util.arrayEach(s, function (e) {
            void 0 === e.value ? i.push(e.name) : i.push(e.name + "=" + e.value);
          }), o += "?" + i.join("&"));
        }
        return o;
      },
      sign: function sign(e, t) {
        return n.util.crypto.hmac(e, t, "base64", "sha1");
      }
    }), t.exports = n.Signers.S3;
  }, {
    "../core": 20
  }],
  67: [function (e, t, r) {
    var n = e("../core"),
      i = n.util.inherit;
    n.Signers.V2 = i(n.Signers.RequestSigner, {
      addAuthorization: function addAuthorization(e, t) {
        t || (t = n.util.date.getDate());
        var r = this.request;
        r.params.Timestamp = n.util.date.iso8601(t), r.params.SignatureVersion = "2", r.params.SignatureMethod = "HmacSHA256", r.params.AWSAccessKeyId = e.accessKeyId, e.sessionToken && (r.params.SecurityToken = e.sessionToken), delete r.params.Signature, r.params.Signature = this.signature(e), r.body = n.util.queryParamsToString(r.params), r.headers["Content-Length"] = r.body.length;
      },
      signature: function signature(e) {
        return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64");
      },
      stringToSign: function stringToSign() {
        var e = [];
        return e.push(this.request.method), e.push(this.request.endpoint.host.toLowerCase()), e.push(this.request.pathname()), e.push(n.util.queryParamsToString(this.request.params)), e.join("\n");
      }
    }), t.exports = n.Signers.V2;
  }, {
    "../core": 20
  }],
  68: [function (e, t, r) {
    var n = e("../core"),
      i = n.util.inherit;
    n.Signers.V3 = i(n.Signers.RequestSigner, {
      addAuthorization: function addAuthorization(e, t) {
        var r = n.util.date.rfc822(t);
        this.request.headers["X-Amz-Date"] = r, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken), this.request.headers["X-Amzn-Authorization"] = this.authorization(e, r);
      },
      authorization: function authorization(e) {
        return "AWS3 AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,SignedHeaders=" + this.signedHeaders() + ",Signature=" + this.signature(e);
      },
      signedHeaders: function signedHeaders() {
        var e = [];
        return n.util.arrayEach(this.headersToSign(), function (t) {
          e.push(t.toLowerCase());
        }), e.sort().join(";");
      },
      canonicalHeaders: function canonicalHeaders() {
        var e = this.request.headers,
          t = [];
        return n.util.arrayEach(this.headersToSign(), function (r) {
          t.push(r.toLowerCase().trim() + ":" + String(e[r]).trim());
        }), t.sort().join("\n") + "\n";
      },
      headersToSign: function headersToSign() {
        var e = [];
        return n.util.each(this.request.headers, function (t) {
          ("Host" === t || "Content-Encoding" === t || t.match(/^X-Amz/i)) && e.push(t);
        }), e;
      },
      signature: function signature(e) {
        return n.util.crypto.hmac(e.secretAccessKey, this.stringToSign(), "base64");
      },
      stringToSign: function stringToSign() {
        var e = [];
        return e.push(this.request.method), e.push("/"), e.push(""), e.push(this.canonicalHeaders()), e.push(this.request.body), n.util.crypto.sha256(e.join("\n"));
      }
    }), t.exports = n.Signers.V3;
  }, {
    "../core": 20
  }],
  69: [function (e, t, r) {
    var n = e("../core"),
      i = n.util.inherit;
    e("./v3"), n.Signers.V3Https = i(n.Signers.V3, {
      authorization: function authorization(e) {
        return "AWS3-HTTPS AWSAccessKeyId=" + e.accessKeyId + ",Algorithm=HmacSHA256,Signature=" + this.signature(e);
      },
      stringToSign: function stringToSign() {
        return this.request.headers["X-Amz-Date"];
      }
    }), t.exports = n.Signers.V3Https;
  }, {
    "../core": 20,
    "./v3": 68
  }],
  70: [function (e, t, r) {
    var n = e("../core"),
      i = e("./v4_credentials"),
      o = n.util.inherit;
    n.Signers.V4 = o(n.Signers.RequestSigner, {
      constructor: function constructor(e, t, r) {
        n.Signers.RequestSigner.call(this, e), this.serviceName = t, r = r || {}, this.signatureCache = "boolean" != typeof r.signatureCache || r.signatureCache, this.operation = r.operation, this.signatureVersion = r.signatureVersion;
      },
      algorithm: "AWS4-HMAC-SHA256",
      addAuthorization: function addAuthorization(e, t) {
        var r = n.util.date.iso8601(t).replace(/[:\-]|\.\d{3}/g, "");
        this.isPresigned() ? this.updateForPresigned(e, r) : this.addHeaders(e, r), this.request.headers.Authorization = this.authorization(e, r);
      },
      addHeaders: function addHeaders(e, t) {
        this.request.headers["X-Amz-Date"] = t, e.sessionToken && (this.request.headers["x-amz-security-token"] = e.sessionToken);
      },
      updateForPresigned: function updateForPresigned(e, t) {
        var r = this.credentialString(t),
          i = {
            "X-Amz-Date": t,
            "X-Amz-Algorithm": this.algorithm,
            "X-Amz-Credential": e.accessKeyId + "/" + r,
            "X-Amz-Expires": this.request.headers["presigned-expires"],
            "X-Amz-SignedHeaders": this.signedHeaders()
          };
        e.sessionToken && (i["X-Amz-Security-Token"] = e.sessionToken), this.request.headers["Content-Type"] && (i["Content-Type"] = this.request.headers["Content-Type"]), this.request.headers["Content-MD5"] && (i["Content-MD5"] = this.request.headers["Content-MD5"]), this.request.headers["Cache-Control"] && (i["Cache-Control"] = this.request.headers["Cache-Control"]), n.util.each.call(this, this.request.headers, function (e, t) {
          if ("presigned-expires" !== e && this.isSignableHeader(e)) {
            var r = e.toLowerCase();
            0 === r.indexOf("x-amz-meta-") ? i[r] = t : 0 === r.indexOf("x-amz-") && (i[e] = t);
          }
        });
        var o = this.request.path.indexOf("?") >= 0 ? "&" : "?";
        this.request.path += o + n.util.queryParamsToString(i);
      },
      authorization: function authorization(e, t) {
        var r = [],
          n = this.credentialString(t);
        return r.push(this.algorithm + " Credential=" + e.accessKeyId + "/" + n), r.push("SignedHeaders=" + this.signedHeaders()), r.push("Signature=" + this.signature(e, t)), r.join(", ");
      },
      signature: function signature(e, t) {
        var r = i.getSigningKey(e, t.substr(0, 8), this.request.region, this.serviceName, this.signatureCache);
        return n.util.crypto.hmac(r, this.stringToSign(t), "hex");
      },
      stringToSign: function stringToSign(e) {
        var t = [];
        return t.push("AWS4-HMAC-SHA256"), t.push(e), t.push(this.credentialString(e)), t.push(this.hexEncodedHash(this.canonicalString())), t.join("\n");
      },
      canonicalString: function canonicalString() {
        var e = [],
          t = this.request.pathname();
        return "s3" !== this.serviceName && "s3v4" !== this.signatureVersion && (t = n.util.uriEscapePath(t)), e.push(this.request.method), e.push(t), e.push(this.request.search()), e.push(this.canonicalHeaders() + "\n"), e.push(this.signedHeaders()), e.push(this.hexEncodedBodyHash()), e.join("\n");
      },
      canonicalHeaders: function canonicalHeaders() {
        var e = [];
        n.util.each.call(this, this.request.headers, function (t, r) {
          e.push([t, r]);
        }), e.sort(function (e, t) {
          return e[0].toLowerCase() < t[0].toLowerCase() ? -1 : 1;
        });
        var t = [];
        return n.util.arrayEach.call(this, e, function (e) {
          var r = e[0].toLowerCase();
          if (this.isSignableHeader(r)) {
            var i = e[1];
            if (void 0 === i || null === i || "function" != typeof i.toString) throw n.util.error(new Error("Header " + r + " contains invalid value"), {
              code: "InvalidHeader"
            });
            t.push(r + ":" + this.canonicalHeaderValues(i.toString()));
          }
        }), t.join("\n");
      },
      canonicalHeaderValues: function canonicalHeaderValues(e) {
        return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
      },
      signedHeaders: function signedHeaders() {
        var e = [];
        return n.util.each.call(this, this.request.headers, function (t) {
          t = t.toLowerCase(), this.isSignableHeader(t) && e.push(t);
        }), e.sort().join(";");
      },
      credentialString: function credentialString(e) {
        return i.createScope(e.substr(0, 8), this.request.region, this.serviceName);
      },
      hexEncodedHash: function hexEncodedHash(e) {
        return n.util.crypto.sha256(e, "hex");
      },
      hexEncodedBodyHash: function hexEncodedBodyHash() {
        var e = this.request;
        return this.isPresigned() && "s3" === this.serviceName && !e.body ? "UNSIGNED-PAYLOAD" : e.headers["X-Amz-Content-Sha256"] ? e.headers["X-Amz-Content-Sha256"] : this.hexEncodedHash(this.request.body || "");
      },
      unsignableHeaders: ["authorization", "content-type", "content-length", "user-agent", "presigned-expires", "expect", "x-amzn-trace-id"],
      isSignableHeader: function isSignableHeader(e) {
        return 0 === e.toLowerCase().indexOf("x-amz-") || this.unsignableHeaders.indexOf(e) < 0;
      },
      isPresigned: function isPresigned() {
        return !!this.request.headers["presigned-expires"];
      }
    }), t.exports = n.Signers.V4;
  }, {
    "../core": 20,
    "./v4_credentials": 71
  }],
  71: [function (e, t, r) {
    var n = e("../core"),
      i = {},
      o = [];
    t.exports = {
      createScope: function createScope(e, t, r) {
        return [e.substr(0, 8), t, r, "aws4_request"].join("/");
      },
      getSigningKey: function getSigningKey(e, t, r, s, a) {
        var u = n.util.crypto.hmac(e.secretAccessKey, e.accessKeyId, "base64"),
          c = [u, t, r, s].join("_");
        if ((a = !1 !== a) && c in i) return i[c];
        var l = n.util.crypto.hmac("AWS4" + e.secretAccessKey, t, "buffer"),
          p = n.util.crypto.hmac(l, r, "buffer"),
          h = n.util.crypto.hmac(p, s, "buffer"),
          f = n.util.crypto.hmac(h, "aws4_request", "buffer");
        return a && (i[c] = f, o.push(c), o.length > 50 && delete i[o.shift()]), f;
      },
      emptyCache: function emptyCache() {
        i = {}, o = [];
      }
    };
  }, {
    "../core": 20
  }],
  72: [function (e, t, r) {
    function n(e, t) {
      this.currentState = t || null, this.states = e || {};
    }
    n.prototype.runTo = function (e, t, r, n) {
      "function" == typeof e && (n = r, r = t, t = e, e = null);
      var i = this,
        o = i.states[i.currentState];
      o.fn.call(r || i, n, function (n) {
        if (n) {
          if (!o.fail) return t ? t.call(r, n) : null;
          i.currentState = o.fail;
        } else {
          if (!o.accept) return t ? t.call(r) : null;
          i.currentState = o.accept;
        }
        if (i.currentState === e) return t ? t.call(r, n) : null;
        i.runTo(e, t, r, n);
      });
    }, n.prototype.addState = function (e, t, r, n) {
      return "function" == typeof t ? (n = t, t = null, r = null) : "function" == typeof r && (n = r, r = null), this.currentState || (this.currentState = e), this.states[e] = {
        accept: t,
        fail: r,
        fn: n
      }, this;
    }, t.exports = n;
  }, {}],
  73: [function (e, t, r) {
    (function (r, n) {
      (function () {
        var i,
          o = {
            environment: "nodejs",
            engine: function engine() {
              if (o.isBrowser() && "undefined" != typeof navigator) return navigator.userAgent;
              var e = r.platform + "/" + r.version;
              return r.env.AWS_EXECUTION_ENV && (e += " exec-env/" + r.env.AWS_EXECUTION_ENV), e;
            },
            userAgent: function userAgent() {
              var t = o.environment,
                r = "aws-sdk-" + t + "/" + e("./core").VERSION;
              return "nodejs" === t && (r += " " + o.engine()), r;
            },
            uriEscape: function uriEscape(e) {
              var t = encodeURIComponent(e);
              return t = t.replace(/[^A-Za-z0-9_.~\-%]+/g, escape), t = t.replace(/[*]/g, function (e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase();
              });
            },
            uriEscapePath: function uriEscapePath(e) {
              var t = [];
              return o.arrayEach(e.split("/"), function (e) {
                t.push(o.uriEscape(e));
              }), t.join("/");
            },
            urlParse: function urlParse(e) {
              return o.url.parse(e);
            },
            urlFormat: function urlFormat(e) {
              return o.url.format(e);
            },
            queryStringParse: function queryStringParse(e) {
              return o.querystring.parse(e);
            },
            queryParamsToString: function queryParamsToString(e) {
              var t = [],
                r = o.uriEscape,
                n = Object.keys(e).sort();
              return o.arrayEach(n, function (n) {
                var i = e[n],
                  s = r(n),
                  a = s + "=";
                if (Array.isArray(i)) {
                  var u = [];
                  o.arrayEach(i, function (e) {
                    u.push(r(e));
                  }), a = s + "=" + u.sort().join("&" + s + "=");
                } else void 0 !== i && null !== i && (a = s + "=" + r(i));
                t.push(a);
              }), t.join("&");
            },
            readFileSync: function readFileSync(t) {
              return o.isBrowser() ? null : e("fs").readFileSync(t, "utf-8");
            },
            base64: {
              encode: function encode(e) {
                if ("number" == typeof e) throw o.error(new Error("Cannot base64 encode number " + e));
                return null === e || void 0 === e ? e : o.buffer.toBuffer(e).toString("base64");
              },
              decode: function decode(e) {
                if ("number" == typeof e) throw o.error(new Error("Cannot base64 decode number " + e));
                return null === e || void 0 === e ? e : o.buffer.toBuffer(e, "base64");
              }
            },
            buffer: {
              toBuffer: function toBuffer(e, t) {
                return "function" == typeof o.Buffer.from && o.Buffer.from !== Uint8Array.from ? o.Buffer.from(e, t) : new o.Buffer(e, t);
              },
              alloc: function alloc(e, t, r) {
                if ("number" != typeof e) throw new Error("size passed to alloc must be a number.");
                if ("function" == typeof o.Buffer.alloc) return o.Buffer.alloc(e, t, r);
                var n = new o.Buffer(e);
                return void 0 !== t && "function" == typeof n.fill && n.fill(t, void 0, void 0, r), n;
              },
              toStream: function toStream(e) {
                o.Buffer.isBuffer(e) || (e = o.buffer.toBuffer(e));
                var t = new o.stream.Readable(),
                  r = 0;
                return t._read = function (n) {
                  if (r >= e.length) return t.push(null);
                  var i = r + n;
                  i > e.length && (i = e.length), t.push(e.slice(r, i)), r = i;
                }, t;
              },
              concat: function concat(e) {
                var t,
                  r = 0,
                  n = 0,
                  i = null;
                for (t = 0; t < e.length; t++) r += e[t].length;
                for (i = o.buffer.alloc(r), t = 0; t < e.length; t++) e[t].copy(i, n), n += e[t].length;
                return i;
              }
            },
            string: {
              byteLength: function byteLength(t) {
                if (null === t || void 0 === t) return 0;
                if ("string" == typeof t && (t = o.buffer.toBuffer(t)), "number" == typeof t.byteLength) return t.byteLength;
                if ("number" == typeof t.length) return t.length;
                if ("number" == typeof t.size) return t.size;
                if ("string" == typeof t.path) return e("fs").lstatSync(t.path).size;
                throw o.error(new Error("Cannot determine length of " + t), {
                  object: t
                });
              },
              upperFirst: function upperFirst(e) {
                return e[0].toUpperCase() + e.substr(1);
              },
              lowerFirst: function lowerFirst(e) {
                return e[0].toLowerCase() + e.substr(1);
              }
            },
            ini: {
              parse: function parse(e) {
                var t,
                  r = {};
                return o.arrayEach(e.split(/\r?\n/), function (e) {
                  e = e.split(/(^|\s)[;#]/)[0];
                  var n = e.match(/^\s*\[([^\[\]]+)\]\s*$/);
                  if (n) t = n[1];else if (t) {
                    var i = e.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
                    i && (r[t] = r[t] || {}, r[t][i[1]] = i[2]);
                  }
                }), r;
              }
            },
            fn: {
              noop: function noop() {},
              callback: function callback(e) {
                if (e) throw e;
              },
              makeAsync: function makeAsync(e, t) {
                return t && t <= e.length ? e : function () {
                  var t = Array.prototype.slice.call(arguments, 0);
                  t.pop()(e.apply(null, t));
                };
              }
            },
            date: {
              getDate: function getDate() {
                return i || (i = e("./core")), i.config.systemClockOffset ? new Date(new Date().getTime() + i.config.systemClockOffset) : new Date();
              },
              iso8601: function iso8601(e) {
                return void 0 === e && (e = o.date.getDate()), e.toISOString().replace(/\.\d{3}Z$/, "Z");
              },
              rfc822: function rfc822(e) {
                return void 0 === e && (e = o.date.getDate()), e.toUTCString();
              },
              unixTimestamp: function unixTimestamp(e) {
                return void 0 === e && (e = o.date.getDate()), e.getTime() / 1e3;
              },
              from: function from(e) {
                return "number" == typeof e ? new Date(1e3 * e) : new Date(e);
              },
              format: function format(e, t) {
                return t || (t = "iso8601"), o.date[t](o.date.from(e));
              },
              parseTimestamp: function parseTimestamp(e) {
                if ("number" == typeof e) return new Date(1e3 * e);
                if (e.match(/^\d+$/)) return new Date(1e3 * e);
                if (e.match(/^\d{4}/)) return new Date(e);
                if (e.match(/^\w{3},/)) return new Date(e);
                throw o.error(new Error("unhandled timestamp format: " + e), {
                  code: "TimestampParserError"
                });
              }
            },
            crypto: {
              crc32Table: [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
              crc32: function crc32(e) {
                var t = o.crypto.crc32Table,
                  r = -1;
                "string" == typeof e && (e = o.buffer.toBuffer(e));
                for (var n = 0; n < e.length; n++) {
                  r = r >>> 8 ^ t[255 & (r ^ e.readUInt8(n))];
                }
                return (-1 ^ r) >>> 0;
              },
              hmac: function hmac(e, t, r, n) {
                return r || (r = "binary"), "buffer" === r && (r = void 0), n || (n = "sha256"), "string" == typeof t && (t = o.buffer.toBuffer(t)), o.crypto.lib.createHmac(n, e).update(t).digest(r);
              },
              md5: function md5(e, t, r) {
                return o.crypto.hash("md5", e, t, r);
              },
              sha256: function sha256(e, t, r) {
                return o.crypto.hash("sha256", e, t, r);
              },
              hash: function hash(e, t, r, n) {
                var i = o.crypto.createHash(e);
                r || (r = "binary"), "buffer" === r && (r = void 0), "string" == typeof t && (t = o.buffer.toBuffer(t));
                var s = o.arraySliceFn(t),
                  a = o.Buffer.isBuffer(t);
                if (o.isBrowser() && "undefined" != typeof ArrayBuffer && t && t.buffer instanceof ArrayBuffer && (a = !0), n && "object" == typeof t && "function" == typeof t.on && !a) t.on("data", function (e) {
                  i.update(e);
                }), t.on("error", function (e) {
                  n(e);
                }), t.on("end", function () {
                  n(null, i.digest(r));
                });else {
                  if (!n || !s || a || "undefined" == typeof FileReader) {
                    o.isBrowser() && "object" == typeof t && !a && (t = new o.Buffer(new Uint8Array(t)));
                    var u = i.update(t).digest(r);
                    return n && n(null, u), u;
                  }
                  var c = 0,
                    l = new FileReader();
                  l.onerror = function () {
                    n(new Error("Failed to read data."));
                  }, l.onload = function () {
                    var e = new o.Buffer(new Uint8Array(l.result));
                    i.update(e), c += e.length, l._continueReading();
                  }, l._continueReading = function () {
                    if (c >= t.size) return void n(null, i.digest(r));
                    var e = c + 524288;
                    e > t.size && (e = t.size), l.readAsArrayBuffer(s.call(t, c, e));
                  }, l._continueReading();
                }
              },
              toHex: function toHex(e) {
                for (var t = [], r = 0; r < e.length; r++) t.push(("0" + e.charCodeAt(r).toString(16)).substr(-2, 2));
                return t.join("");
              },
              createHash: function createHash(e) {
                return o.crypto.lib.createHash(e);
              }
            },
            abort: {},
            each: function each(e, t) {
              for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = t.call(this, r, e[r]);
                if (n === o.abort) break;
              }
            },
            arrayEach: function arrayEach(e, t) {
              for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n = t.call(this, e[r], parseInt(r, 10));
                if (n === o.abort) break;
              }
            },
            update: function update(e, t) {
              return o.each(t, function (t, r) {
                e[t] = r;
              }), e;
            },
            merge: function merge(e, t) {
              return o.update(o.copy(e), t);
            },
            copy: function copy(e) {
              if (null === e || void 0 === e) return e;
              var t = {};
              for (var r in e) t[r] = e[r];
              return t;
            },
            isEmpty: function isEmpty(e) {
              for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
              return !0;
            },
            arraySliceFn: function arraySliceFn(e) {
              var t = e.slice || e.webkitSlice || e.mozSlice;
              return "function" == typeof t ? t : null;
            },
            isType: function isType(e, t) {
              return "function" == typeof t && (t = o.typeName(t)), Object.prototype.toString.call(e) === "[object " + t + "]";
            },
            typeName: function typeName(e) {
              if (Object.prototype.hasOwnProperty.call(e, "name")) return e.name;
              var t = e.toString(),
                r = t.match(/^\s*function (.+)\(/);
              return r ? r[1] : t;
            },
            error: function error(e, t) {
              var r = null;
              return "string" == typeof e.message && "" !== e.message && ("string" == typeof t || t && t.message) && (r = o.copy(e), r.message = e.message), e.message = e.message || null, "string" == typeof t ? e.message = t : "object" == typeof t && null !== t && (o.update(e, t), t.message && (e.message = t.message), (t.code || t.name) && (e.code = t.code || t.name), t.stack && (e.stack = t.stack)), "function" == typeof Object.defineProperty && (Object.defineProperty(e, "name", {
                writable: !0,
                enumerable: !1
              }), Object.defineProperty(e, "message", {
                enumerable: !0
              })), e.name = String(t && t.name || e.name || e.code || "Error"), e.time = new Date(), r && (e.originalError = r), e;
            },
            inherit: function inherit(e, t) {
              var r = null;
              if (void 0 === t) t = e, e = Object, r = {};else {
                var n = function n() {};
                n.prototype = e.prototype, r = new n();
              }
              return t.constructor === Object && (t.constructor = function () {
                if (e !== Object) return e.apply(this, arguments);
              }), t.constructor.prototype = r, o.update(t.constructor.prototype, t), t.constructor.__super__ = e, t.constructor;
            },
            mixin: function mixin() {
              for (var e = arguments[0], t = 1; t < arguments.length; t++) for (var r in arguments[t].prototype) {
                var n = arguments[t].prototype[r];
                "constructor" !== r && (e.prototype[r] = n);
              }
              return e;
            },
            hideProperties: function hideProperties(e, t) {
              "function" == typeof Object.defineProperty && o.arrayEach(t, function (t) {
                Object.defineProperty(e, t, {
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                });
              });
            },
            property: function property(e, t, r, n, i) {
              var o = {
                configurable: !0,
                enumerable: void 0 === n || n
              };
              "function" != typeof r || i ? (o.value = r, o.writable = !0) : o.get = r, Object.defineProperty(e, t, o);
            },
            memoizedProperty: function memoizedProperty(e, t, r, n) {
              var i = null;
              o.property(e, t, function () {
                return null === i && (i = r()), i;
              }, n);
            },
            hoistPayloadMember: function hoistPayloadMember(e) {
              var t = e.request,
                r = t.operation,
                n = t.service.api.operations[r],
                i = n.output;
              if (i.payload && !n.hasEventOutput) {
                var s = i.members[i.payload],
                  a = e.data[i.payload];
                "structure" === s.type && o.each(a, function (t, r) {
                  o.property(e.data, t, r, !1);
                });
              }
            },
            computeSha256: function computeSha256(t, r) {
              if (o.isNode()) {
                var n = o.stream.Stream,
                  i = e("fs");
                if ("function" == typeof n && t instanceof n) {
                  if ("string" != typeof t.path) return r(new Error("Non-file stream objects are not supported with SigV4"));
                  var s = {};
                  "number" == typeof t.start && (s.start = t.start), "number" == typeof t.end && (s.end = t.end), t = i.createReadStream(t.path, s);
                }
              }
              o.crypto.sha256(t, "hex", function (e, t) {
                e ? r(e) : r(null, t);
              });
            },
            isClockSkewed: function isClockSkewed(e) {
              if (e) return o.property(i.config, "isClockSkewed", Math.abs(new Date().getTime() - e) >= 3e5, !1), i.config.isClockSkewed;
            },
            applyClockOffset: function applyClockOffset(e) {
              e && (i.config.systemClockOffset = e - new Date().getTime());
            },
            extractRequestId: function extractRequestId(e) {
              var t = e.httpResponse.headers["x-amz-request-id"] || e.httpResponse.headers["x-amzn-requestid"];
              !t && e.data && e.data.ResponseMetadata && (t = e.data.ResponseMetadata.RequestId), t && (e.requestId = t), e.error && (e.error.requestId = t);
            },
            addPromises: function addPromises(e, t) {
              var r = !1;
              void 0 === t && i && i.config && (t = i.config.getPromisesDependency()), void 0 === t && "undefined" != typeof Promise && (t = Promise), "function" != typeof t && (r = !0), Array.isArray(e) || (e = [e]);
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                r ? o.deletePromisesFromClass && o.deletePromisesFromClass() : o.addPromisesToClass && o.addPromisesToClass(t);
              }
            },
            promisifyMethod: function promisifyMethod(e, t) {
              return function () {
                var r = this,
                  n = Array.prototype.slice.call(arguments);
                return new t(function (t, i) {
                  n.push(function (e, r) {
                    e ? i(e) : t(r);
                  }), r[e].apply(r, n);
                });
              };
            },
            isDualstackAvailable: function isDualstackAvailable(t) {
              if (!t) return !1;
              var r = e("../apis/metadata.json");
              return "string" != typeof t && (t = t.serviceIdentifier), !("string" != typeof t || !r.hasOwnProperty(t)) && !!r[t].dualstackAvailable;
            },
            calculateRetryDelay: function calculateRetryDelay(e, t, r) {
              t || (t = {});
              var n = t.customBackoff || null;
              if ("function" == typeof n) return n(e, r);
              var i = "number" == typeof t.base ? t.base : 100;
              return Math.random() * (Math.pow(2, e) * i);
            },
            handleRequestWithRetries: function handleRequestWithRetries(e, t, r) {
              t || (t = {});
              var n = i.HttpClient.getInstance(),
                s = t.httpOptions || {},
                a = 0,
                u = function u(e) {
                  var n = t.maxRetries || 0;
                  if (e && "TimeoutError" === e.code && (e.retryable = !0), e && e.retryable && a < n) {
                    var i = o.calculateRetryDelay(a, t.retryDelayOptions, e);
                    if (i >= 0) return a++, void setTimeout(c, i + (e.retryAfter || 0));
                  }
                  r(e);
                },
                c = function c() {
                  var t = "";
                  n.handleRequest(e, s, function (e) {
                    e.on("data", function (e) {
                      t += e.toString();
                    }), e.on("end", function () {
                      var n = e.statusCode;
                      if (n < 300) r(null, t);else {
                        var i = 1e3 * parseInt(e.headers["retry-after"], 10) || 0,
                          s = o.error(new Error(), {
                            statusCode: n,
                            retryable: n >= 500 || 429 === n
                          });
                        i && s.retryable && (s.retryAfter = i), u(s);
                      }
                    });
                  }, u);
                };
              i.util.defer(c);
            },
            uuid: {
              v4: function v4() {
                return e("uuid").v4();
              }
            },
            convertPayloadToString: function convertPayloadToString(e) {
              var t = e.request,
                r = t.operation,
                n = t.service.api.operations[r].output || {};
              n.payload && e.data[n.payload] && (e.data[n.payload] = e.data[n.payload].toString());
            },
            defer: function defer(e) {
              "object" == typeof r && "function" == typeof r.nextTick ? r.nextTick(e) : "function" == typeof n ? n(e) : setTimeout(e, 0);
            },
            getRequestPayloadShape: function getRequestPayloadShape(e) {
              var t = e.service.api.operations;
              if (t) {
                var r = (t || {})[e.operation];
                if (r && r.input && r.input.payload) return r.input.members[r.input.payload];
              }
            },
            getProfilesFromSharedConfig: function getProfilesFromSharedConfig(e, t) {
              function n(e, t) {
                for (var r = 0, n = Object.keys(t); r < n.length; r++) e[n[r]] = t[n[r]];
                return e;
              }
              var i = {},
                s = {};
              if (r.env[o.configOptInEnv]) var s = e.loadFrom({
                isConfig: !0,
                filename: r.env[o.sharedConfigFileEnv]
              });
              for (var a = e.loadFrom({
                  filename: t || r.env[o.configOptInEnv] && r.env[o.sharedCredentialsFileEnv]
                }), u = 0, c = Object.keys(s); u < c.length; u++) i[c[u]] = n(i[c[u]] || {}, s[c[u]]);
              for (var u = 0, c = Object.keys(a); u < c.length; u++) i[c[u]] = n(i[c[u]] || {}, a[c[u]]);
              return i;
            },
            ARN: {
              validate: function validate(e) {
                return e && 0 === e.indexOf("arn:") && e.split(":").length >= 6;
              },
              parse: function parse(e) {
                var t = e.split(":");
                return {
                  partition: t[1],
                  service: t[2],
                  region: t[3],
                  accountId: t[4],
                  resource: t.slice(5).join(":")
                };
              },
              build: function build(e) {
                if (void 0 === e.service || void 0 === e.region || void 0 === e.accountId || void 0 === e.resource) throw o.error(new Error("Input ARN object is invalid"));
                return "arn:" + (e.partition || "aws") + ":" + e.service + ":" + e.region + ":" + e.accountId + ":" + e.resource;
              }
            },
            defaultProfile: "default",
            configOptInEnv: "AWS_SDK_LOAD_CONFIG",
            sharedCredentialsFileEnv: "AWS_SHARED_CREDENTIALS_FILE",
            sharedConfigFileEnv: "AWS_CONFIG_FILE",
            imdsDisabledEnv: "AWS_EC2_METADATA_DISABLED"
          };
        t.exports = o;
      }).call(this);
    }).call(this, e("_process"), e("timers").setImmediate);
  }, {
    "../apis/metadata.json": 5,
    "./core": 20,
    _process: 87,
    fs: 81,
    timers: 95,
    uuid: 100
  }],
  74: [function (e, t, r) {
    function n() {}
    function i(e, t) {
      for (var r = e.getElementsByTagName(t), n = 0, i = r.length; n < i; n++) if (r[n].parentNode === e) return r[n];
    }
    function o(e, t) {
      switch (t || (t = {}), t.type) {
        case "structure":
          return s(e, t);
        case "map":
          return a(e, t);
        case "list":
          return u(e, t);
        case void 0:
        case null:
          return l(e);
        default:
          return c(e, t);
      }
    }
    function s(e, t) {
      var r = {};
      return null === e ? r : (p.each(t.members, function (n, s) {
        if (s.isXmlAttribute) {
          if (Object.prototype.hasOwnProperty.call(e.attributes, s.name)) {
            var a = e.attributes[s.name].value;
            r[n] = o({
              textContent: a
            }, s);
          }
        } else {
          var u = s.flattened ? e : i(e, s.name);
          u ? r[n] = o(u, s) : s.flattened || "list" !== s.type || t.api.xmlNoDefaultLists || (r[n] = s.defaultValue);
        }
      }), r);
    }
    function a(e, t) {
      for (var r = {}, n = t.key.name || "key", s = t.value.name || "value", a = t.flattened ? t.name : "entry", u = e.firstElementChild; u;) {
        if (u.nodeName === a) {
          var c = i(u, n).textContent,
            l = i(u, s);
          r[c] = o(l, t.value);
        }
        u = u.nextElementSibling;
      }
      return r;
    }
    function u(e, t) {
      for (var r = [], n = t.flattened ? t.name : t.member.name || "member", i = e.firstElementChild; i;) i.nodeName === n && r.push(o(i, t.member)), i = i.nextElementSibling;
      return r;
    }
    function c(e, t) {
      if (e.getAttribute) {
        var r = e.getAttribute("encoding");
        "base64" === r && (t = new h.create({
          type: r
        }));
      }
      var n = e.textContent;
      return "" === n && (n = null), "function" == typeof t.toType ? t.toType(n) : n;
    }
    function l(e) {
      if (void 0 === e || null === e) return "";
      if (!e.firstElementChild) return null === e.parentNode.parentNode ? {} : 0 === e.childNodes.length ? "" : e.textContent;
      for (var t = {
          type: "structure",
          members: {}
        }, r = e.firstElementChild; r;) {
        var n = r.nodeName;
        Object.prototype.hasOwnProperty.call(t.members, n) ? t.members[n].type = "list" : t.members[n] = {
          name: n
        }, r = r.nextElementSibling;
      }
      return s(e, t);
    }
    var p = e("../util"),
      h = e("../model/shape");
    n.prototype.parse = function (e, t) {
      if ("" === e.replace(/^\s+/, "")) return {};
      var r, n;
      try {
        if (window.DOMParser) {
          try {
            r = new DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            throw p.error(new Error("Parse error in document"), {
              originalError: e,
              code: "XMLParserError",
              retryable: !0
            });
          }
          if (null === r.documentElement) throw p.error(new Error("Cannot parse empty document."), {
            code: "XMLParserError",
            retryable: !0
          });
          var s = r.getElementsByTagName("parsererror")[0];
          if (s && (s.parentNode === r || "body" === s.parentNode.nodeName || s.parentNode.parentNode === r || "body" === s.parentNode.parentNode.nodeName)) {
            var a = s.getElementsByTagName("div")[0] || s;
            throw p.error(new Error(a.textContent || "Parser error in document"), {
              code: "XMLParserError",
              retryable: !0
            });
          }
        } else {
          if (!window.ActiveXObject) throw new Error("Cannot load XML parser");
          if (r = new window.ActiveXObject("Microsoft.XMLDOM"), r.async = !1, !r.loadXML(e)) throw p.error(new Error("Parse error in document"), {
            code: "XMLParserError",
            retryable: !0
          });
        }
      } catch (e) {
        n = e;
      }
      if (r && r.documentElement && !n) {
        var u = o(r.documentElement, t),
          c = i(r.documentElement, "ResponseMetadata");
        return c && (u.ResponseMetadata = o(c, {})), u;
      }
      if (n) throw p.error(n || new Error(), {
        code: "XMLParserError",
        retryable: !0
      });
      return {};
    }, t.exports = n;
  }, {
    "../model/shape": 45,
    "../util": 73
  }],
  75: [function (e, t, r) {
    function n() {}
    function i(e, t, r) {
      switch (r.type) {
        case "structure":
          return o(e, t, r);
        case "map":
          return s(e, t, r);
        case "list":
          return a(e, t, r);
        default:
          return u(e, t, r);
      }
    }
    function o(e, t, r) {
      l.arrayEach(r.memberNames, function (n) {
        var o = r.members[n];
        if ("body" === o.location) {
          var s = t[n],
            a = o.name;
          if (void 0 !== s && null !== s) if (o.isXmlAttribute) e.addAttribute(a, s);else if (o.flattened) i(e, s, o);else {
            var u = new p(a);
            e.addChildNode(u), c(u, o), i(u, s, o);
          }
        }
      });
    }
    function s(e, t, r) {
      var n = r.key.name || "key",
        o = r.value.name || "value";
      l.each(t, function (t, s) {
        var a = new p(r.flattened ? r.name : "entry");
        e.addChildNode(a);
        var u = new p(n),
          c = new p(o);
        a.addChildNode(u), a.addChildNode(c), i(u, t, r.key), i(c, s, r.value);
      });
    }
    function a(e, t, r) {
      r.flattened ? l.arrayEach(t, function (t) {
        var n = r.member.name || r.name,
          o = new p(n);
        e.addChildNode(o), i(o, t, r.member);
      }) : l.arrayEach(t, function (t) {
        var n = r.member.name || "member",
          o = new p(n);
        e.addChildNode(o), i(o, t, r.member);
      });
    }
    function u(e, t, r) {
      e.addChildNode(new h(r.toWireFormat(t)));
    }
    function c(e, t, r) {
      var n,
        i = "xmlns";
      t.xmlNamespaceUri ? (n = t.xmlNamespaceUri, t.xmlNamespacePrefix && (i += ":" + t.xmlNamespacePrefix)) : r && t.api.xmlNamespaceUri && (n = t.api.xmlNamespaceUri), n && e.addAttribute(i, n);
    }
    var l = e("../util"),
      p = e("./xml-node").XmlNode,
      h = e("./xml-text").XmlText;
    n.prototype.toXML = function (e, t, r, n) {
      var o = new p(r);
      return c(o, t, !0), i(o, e, t), o.children.length > 0 || n ? o.toString() : "";
    }, t.exports = n;
  }, {
    "../util": 73,
    "./xml-node": 78,
    "./xml-text": 79
  }],
  76: [function (e, t, r) {
    function n(e) {
      return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    t.exports = {
      escapeAttribute: n
    };
  }, {}],
  77: [function (e, t, r) {
    function n(e) {
      return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    t.exports = {
      escapeElement: n
    };
  }, {}],
  78: [function (e, t, r) {
    function n(e, t) {
      void 0 === t && (t = []), this.name = e, this.children = t, this.attributes = {};
    }
    var i = e("./escape-attribute").escapeAttribute;
    n.prototype.addAttribute = function (e, t) {
      return this.attributes[e] = t, this;
    }, n.prototype.addChildNode = function (e) {
      return this.children.push(e), this;
    }, n.prototype.removeAttribute = function (e) {
      return delete this.attributes[e], this;
    }, n.prototype.toString = function () {
      for (var e = Boolean(this.children.length), t = "<" + this.name, r = this.attributes, n = 0, o = Object.keys(r); n < o.length; n++) {
        var s = o[n],
          a = r[s];
        void 0 !== a && null !== a && (t += " " + s + '="' + i("" + a) + '"');
      }
      return t += e ? ">" + this.children.map(function (e) {
        return e.toString();
      }).join("") + "</" + this.name + ">" : "/>";
    }, t.exports = {
      XmlNode: n
    };
  }, {
    "./escape-attribute": 76
  }],
  79: [function (e, t, r) {
    function n(e) {
      this.value = e;
    }
    var i = e("./escape-element").escapeElement;
    n.prototype.toString = function () {
      return i("" + this.value);
    }, t.exports = {
      XmlText: n
    };
  }, {
    "./escape-element": 77
  }],
  80: [function (e, t, r) {
    "use strict";

    function n(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
    }
    function i(e) {
      var t = n(e),
        r = t[0],
        i = t[1];
      return 3 * (r + i) / 4 - i;
    }
    function o(e, t, r) {
      return 3 * (t + r) / 4 - r;
    }
    function s(e) {
      var t,
        r,
        i = n(e),
        s = i[0],
        a = i[1],
        u = new h(o(e, s, a)),
        c = 0,
        l = a > 0 ? s - 4 : s;
      for (r = 0; r < l; r += 4) t = p[e.charCodeAt(r)] << 18 | p[e.charCodeAt(r + 1)] << 12 | p[e.charCodeAt(r + 2)] << 6 | p[e.charCodeAt(r + 3)], u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
      return 2 === a && (t = p[e.charCodeAt(r)] << 2 | p[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & t), 1 === a && (t = p[e.charCodeAt(r)] << 10 | p[e.charCodeAt(r + 1)] << 4 | p[e.charCodeAt(r + 2)] >> 2, u[c++] = t >> 8 & 255, u[c++] = 255 & t), u;
    }
    function a(e) {
      return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e];
    }
    function u(e, t, r) {
      for (var n, i = [], o = t; o < r; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(a(n));
      return i.join("");
    }
    function c(e) {
      for (var t, r = e.length, n = r % 3, i = [], o = 0, s = r - n; o < s; o += 16383) i.push(u(e, o, o + 16383 > s ? s : o + 16383));
      return 1 === n ? (t = e[r - 1], i.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), i.join("");
    }
    r.byteLength = i, r.toByteArray = s, r.fromByteArray = c;
    for (var l = [], p = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, m = f.length; d < m; ++d) l[d] = f[d], p[f.charCodeAt(d)] = d;
    p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63;
  }, {}],
  81: [function (e, t, r) {}, {}],
  82: [function (e, t, r) {
    (function (t, n) {
      (function () {
        "use strict";

        function n() {
          return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function i(e, t) {
          if (n() < t) throw new RangeError("Invalid typed array length");
          return o.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = o.prototype) : (null === e && (e = new o(t)), e.length = t), e;
        }
        function o(e, t, r) {
          if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(e, t, r);
          if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return c(this, e);
          }
          return s(this, e, t, r);
        }
        function s(e, t, r, n) {
          if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? h(e, t, r, n) : "string" == typeof t ? l(e, t, r) : f(e, t);
        }
        function a(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
          if (e < 0) throw new RangeError('"size" argument must not be negative');
        }
        function u(e, t, r, n) {
          return a(t), t <= 0 ? i(e, t) : void 0 !== r ? "string" == typeof n ? i(e, t).fill(r, n) : i(e, t).fill(r) : i(e, t);
        }
        function c(e, t) {
          if (a(t), e = i(e, t < 0 ? 0 : 0 | d(t)), !o.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
          return e;
        }
        function l(e, t, r) {
          if ("string" == typeof r && "" !== r || (r = "utf8"), !o.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
          var n = 0 | v(t, r);
          e = i(e, n);
          var s = e.write(t, r);
          return s !== n && (e = e.slice(0, s)), e;
        }
        function p(e, t) {
          var r = t.length < 0 ? 0 : 0 | d(t.length);
          e = i(e, r);
          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
          return e;
        }
        function h(e, t, r, n) {
          if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
          if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
          return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), o.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = o.prototype) : e = p(e, t), e;
        }
        function f(e, t) {
          if (o.isBuffer(t)) {
            var r = 0 | d(t.length);
            return e = i(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e);
          }
          if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || Y(t.length) ? i(e, 0) : p(e, t);
            if ("Buffer" === t.type && $(t.data)) return p(e, t.data);
          }
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        function d(e) {
          if (e >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
          return 0 | e;
        }
        function m(e) {
          return +e != e && (e = 0), o.alloc(+e);
        }
        function v(e, t) {
          if (o.isBuffer(e)) return e.length;
          if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
          "string" != typeof e && (e = "" + e);
          var r = e.length;
          if (0 === r) return 0;
          for (var n = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return V(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return X(e).length;
            default:
              if (n) return V(e).length;
              t = ("" + t).toLowerCase(), n = !0;
          }
        }
        function g(e, t, r) {
          var n = !1;
          if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
          if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
          if (r >>>= 0, t >>>= 0, r <= t) return "";
          for (e || (e = "utf8");;) switch (e) {
            case "hex":
              return q(this, t, r);
            case "utf8":
            case "utf-8":
              return T(this, t, r);
            case "ascii":
              return k(this, t, r);
            case "latin1":
            case "binary":
              return P(this, t, r);
            case "base64":
              return x(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return L(this, t, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = !0;
          }
        }
        function y(e, t, r) {
          var n = e[t];
          e[t] = e[r], e[r] = n;
        }
        function b(e, t, r, n, i) {
          if (0 === e.length) return -1;
          if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (i) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!i) return -1;
            r = 0;
          }
          if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, n, i);
          if ("number" == typeof t) return t &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : w(e, [t], r, n, i);
          throw new TypeError("val must be string, number or Buffer");
        }
        function w(e, t, r, n, i) {
          function o(e, t) {
            return 1 === s ? e[t] : e.readUInt16BE(t * s);
          }
          var s = 1,
            a = e.length,
            u = t.length;
          if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            s = 2, a /= 2, u /= 2, r /= 2;
          }
          var c;
          if (i) {
            var l = -1;
            for (c = r; c < a; c++) if (o(e, c) === o(t, -1 === l ? 0 : c - l)) {
              if (-1 === l && (l = c), c - l + 1 === u) return l * s;
            } else -1 !== l && (c -= c - l), l = -1;
          } else for (r + u > a && (r = a - u), c = r; c >= 0; c--) {
            for (var p = !0, h = 0; h < u; h++) if (o(e, c + h) !== o(t, h)) {
              p = !1;
              break;
            }
            if (p) return c;
          }
          return -1;
        }
        function E(e, t, r, n) {
          r = Number(r) || 0;
          var i = e.length - r;
          n ? (n = Number(n)) > i && (n = i) : n = i;
          var o = t.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          n > o / 2 && (n = o / 2);
          for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(2 * s, 2), 16);
            if (isNaN(a)) return s;
            e[r + s] = a;
          }
          return s;
        }
        function S(e, t, r, n) {
          return G(V(t, e.length - r), e, r, n);
        }
        function _(e, t, r, n) {
          return G(W(t), e, r, n);
        }
        function C(e, t, r, n) {
          return _(e, t, r, n);
        }
        function A(e, t, r, n) {
          return G(X(t), e, r, n);
        }
        function R(e, t, r, n) {
          return G(K(t, e.length - r), e, r, n);
        }
        function x(e, t, r) {
          return 0 === t && r === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, r));
        }
        function T(e, t, r) {
          r = Math.min(e.length, r);
          for (var n = [], i = t; i < r;) {
            var o = e[i],
              s = null,
              a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + a <= r) {
              var u, c, l, p;
              switch (a) {
                case 1:
                  o < 128 && (s = o);
                  break;
                case 2:
                  u = e[i + 1], 128 == (192 & u) && (p = (31 & o) << 6 | 63 & u) > 127 && (s = p);
                  break;
                case 3:
                  u = e[i + 1], c = e[i + 2], 128 == (192 & u) && 128 == (192 & c) && (p = (15 & o) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (p < 55296 || p > 57343) && (s = p);
                  break;
                case 4:
                  u = e[i + 1], c = e[i + 2], l = e[i + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & l) && (p = (15 & o) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & l) > 65535 && p < 1114112 && (s = p);
              }
            }
            null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n.push(s), i += a;
          }
          return I(n);
        }
        function I(e) {
          var t = e.length;
          if (t <= Q) return String.fromCharCode.apply(String, e);
          for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Q));
          return r;
        }
        function k(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
          return n;
        }
        function P(e, t, r) {
          var n = "";
          r = Math.min(e.length, r);
          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
          return n;
        }
        function q(e, t, r) {
          var n = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
          for (var i = "", o = t; o < r; ++o) i += H(e[o]);
          return i;
        }
        function L(e, t, r) {
          for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
          return i;
        }
        function O(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
        }
        function N(e, t, r, n, i, s) {
          if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < s) throw new RangeError('"value" argument is out of bounds');
          if (r + n > e.length) throw new RangeError("Index out of range");
        }
        function U(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
        }
        function D(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255;
        }
        function M(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }
        function j(e, t, r, n, i) {
          return i || M(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(e, t, r, n, 23, 4), r + 4;
        }
        function B(e, t, r, n, i) {
          return i || M(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(e, t, r, n, 52, 8), r + 8;
        }
        function F(e) {
          if (e = z(e).replace(ee, ""), e.length < 2) return "";
          for (; e.length % 4 != 0;) e += "=";
          return e;
        }
        function z(e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        }
        function H(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function V(e, t) {
          t = t || 1 / 0;
          for (var r, n = e.length, i = null, o = [], s = 0; s < n; ++s) {
            if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
              if (!i) {
                if (r > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (s + 1 === n) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = r;
                continue;
              }
              if (r < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                continue;
              }
              r = 65536 + (i - 55296 << 10 | r - 56320);
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, r < 128) {
              if ((t -= 1) < 0) break;
              o.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              o.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }
          return o;
        }
        function W(e) {
          for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
          return t;
        }
        function K(e, t) {
          for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
          return o;
        }
        function X(e) {
          return J.toByteArray(F(e));
        }
        function G(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
          return i;
        }
        function Y(e) {
          return e !== e;
        }
        var J = e("base64-js"),
          Z = e("ieee754"),
          $ = e("isarray");
        r.Buffer = o, r.SlowBuffer = m, r.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
          try {
            var e = new Uint8Array(1);
            return e.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function foo() {
                return 42;
              }
            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
          } catch (e) {
            return !1;
          }
        }(), r.kMaxLength = n(), o.poolSize = 8192, o._augment = function (e) {
          return e.__proto__ = o.prototype, e;
        }, o.from = function (e, t, r) {
          return s(null, e, t, r);
        }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
          value: null,
          configurable: !0
        })), o.alloc = function (e, t, r) {
          return u(null, e, t, r);
        }, o.allocUnsafe = function (e) {
          return c(null, e);
        }, o.allocUnsafeSlow = function (e) {
          return c(null, e);
        }, o.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }, o.compare = function (e, t) {
          if (!o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i) if (e[i] !== t[i]) {
            r = e[i], n = t[i];
            break;
          }
          return r < n ? -1 : n < r ? 1 : 0;
        }, o.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }, o.concat = function (e, t) {
          if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return o.alloc(0);
          var r;
          if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = o.allocUnsafe(t),
            i = 0;
          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
            s.copy(n, i), i += s.length;
          }
          return n;
        }, o.byteLength = v, o.prototype._isBuffer = !0, o.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) y(this, t, t + 1);
          return this;
        }, o.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
          return this;
        }, o.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
          return this;
        }, o.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : g.apply(this, arguments);
        }, o.prototype.equals = function (e) {
          if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === o.compare(this, e);
        }, o.prototype.inspect = function () {
          var e = "",
            t = r.INSPECT_MAX_BYTES;
          return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
        }, o.prototype.compare = function (e, t, r, n, i) {
          if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
          if (n >= i && t >= r) return 0;
          if (n >= i) return -1;
          if (t >= r) return 1;
          if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
          for (var s = i - n, a = r - t, u = Math.min(s, a), c = this.slice(n, i), l = e.slice(t, r), p = 0; p < u; ++p) if (c[p] !== l[p]) {
            s = c[p], a = l[p];
            break;
          }
          return s < a ? -1 : a < s ? 1 : 0;
        }, o.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }, o.prototype.indexOf = function (e, t, r) {
          return b(this, e, t, r, !0);
        }, o.prototype.lastIndexOf = function (e, t, r) {
          return b(this, e, t, r, !1);
        }, o.prototype.write = function (e, t, r, n) {
          if (void 0 === t) n = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
          }
          var i = this.length - t;
          if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var o = !1;;) switch (n) {
            case "hex":
              return E(this, e, t, r);
            case "utf8":
            case "utf-8":
              return S(this, e, t, r);
            case "ascii":
              return _(this, e, t, r);
            case "latin1":
            case "binary":
              return C(this, e, t, r);
            case "base64":
              return A(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return R(this, e, t, r);
            default:
              if (o) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = !0;
          }
        }, o.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var Q = 4096;
        o.prototype.slice = function (e, t) {
          var r = this.length;
          e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
          var n;
          if (o.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = o.prototype;else {
            var i = t - e;
            n = new o(i, void 0);
            for (var s = 0; s < i; ++s) n[s] = this[s + e];
          }
          return n;
        }, o.prototype.readUIntLE = function (e, t, r) {
          e |= 0, t |= 0, r || O(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
          return n;
        }, o.prototype.readUIntBE = function (e, t, r) {
          e |= 0, t |= 0, r || O(e, t, this.length);
          for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
          return n;
        }, o.prototype.readUInt8 = function (e, t) {
          return t || O(e, 1, this.length), this[e];
        }, o.prototype.readUInt16LE = function (e, t) {
          return t || O(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, o.prototype.readUInt16BE = function (e, t) {
          return t || O(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, o.prototype.readUInt32LE = function (e, t) {
          return t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, o.prototype.readUInt32BE = function (e, t) {
          return t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, o.prototype.readIntLE = function (e, t, r) {
          e |= 0, t |= 0, r || O(e, t, this.length);
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
          return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
        }, o.prototype.readIntBE = function (e, t, r) {
          e |= 0, t |= 0, r || O(e, t, this.length);
          for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
          return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
        }, o.prototype.readInt8 = function (e, t) {
          return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, o.prototype.readInt16LE = function (e, t) {
          t || O(e, 2, this.length);
          var r = this[e] | this[e + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, o.prototype.readInt16BE = function (e, t) {
          t || O(e, 2, this.length);
          var r = this[e + 1] | this[e] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, o.prototype.readInt32LE = function (e, t) {
          return t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, o.prototype.readInt32BE = function (e, t) {
          return t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, o.prototype.readFloatLE = function (e, t) {
          return t || O(e, 4, this.length), Z.read(this, e, !0, 23, 4);
        }, o.prototype.readFloatBE = function (e, t) {
          return t || O(e, 4, this.length), Z.read(this, e, !1, 23, 4);
        }, o.prototype.readDoubleLE = function (e, t) {
          return t || O(e, 8, this.length), Z.read(this, e, !0, 52, 8);
        }, o.prototype.readDoubleBE = function (e, t) {
          return t || O(e, 8, this.length), Z.read(this, e, !1, 52, 8);
        }, o.prototype.writeUIntLE = function (e, t, r, n) {
          if (e = +e, t |= 0, r |= 0, !n) {
            N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          }
          var i = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
          return t + r;
        }, o.prototype.writeUIntBE = function (e, t, r, n) {
          if (e = +e, t |= 0, r |= 0, !n) {
            N(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          }
          var i = r - 1,
            o = 1;
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
          return t + r;
        }, o.prototype.writeUInt8 = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1;
        }, o.prototype.writeUInt16LE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2;
        }, o.prototype.writeUInt16BE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2;
        }, o.prototype.writeUInt32LE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : D(this, e, t, !0), t + 4;
        }, o.prototype.writeUInt32BE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4;
        }, o.prototype.writeIntLE = function (e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            N(this, e, t, r, i - 1, -i);
          }
          var o = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
          return t + r;
        }, o.prototype.writeIntBE = function (e, t, r, n) {
          if (e = +e, t |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            N(this, e, t, r, i - 1, -i);
          }
          var o = r - 1,
            s = 1,
            a = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
          return t + r;
        }, o.prototype.writeInt8 = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, o.prototype.writeInt16LE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2;
        }, o.prototype.writeInt16BE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2;
        }, o.prototype.writeInt32LE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : D(this, e, t, !0), t + 4;
        }, o.prototype.writeInt32BE = function (e, t, r) {
          return e = +e, t |= 0, r || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), o.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : D(this, e, t, !1), t + 4;
        }, o.prototype.writeFloatLE = function (e, t, r) {
          return j(this, e, t, !0, r);
        }, o.prototype.writeFloatBE = function (e, t, r) {
          return j(this, e, t, !1, r);
        }, o.prototype.writeDoubleLE = function (e, t, r) {
          return B(this, e, t, !0, r);
        }, o.prototype.writeDoubleBE = function (e, t, r) {
          return B(this, e, t, !1, r);
        }, o.prototype.copy = function (e, t, r, n) {
          if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
          var i,
            s = n - r;
          if (this === e && r < t && t < n) for (i = s - 1; i >= 0; --i) e[i + t] = this[i + r];else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (i = 0; i < s; ++i) e[i + t] = this[i + r];else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
          return s;
        }, o.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
          if (r <= t) return this;
          t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
          var s;
          if ("number" == typeof e) for (s = t; s < r; ++s) this[s] = e;else {
            var a = o.isBuffer(e) ? e : V(new o(e, n).toString()),
              u = a.length;
            for (s = 0; s < r - t; ++s) this[s + t] = a[s % u];
          }
          return this;
        };
        var ee = /[^+\/0-9A-Za-z-_]/g;
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer);
  }, {
    "base64-js": 80,
    buffer: 82,
    ieee754: 84,
    isarray: 85
  }],
  83: [function (e, t, r) {
    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function i(e) {
      return "function" == typeof e;
    }
    function o(e) {
      return "number" == typeof e;
    }
    function s(e) {
      return "object" == typeof e && null !== e;
    }
    function a(e) {
      return void 0 === e;
    }
    t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
      if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
      return this._maxListeners = e, this;
    }, n.prototype.emit = function (e) {
      var t, r, n, o, u, c;
      if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
        if ((t = arguments[1]) instanceof Error) throw t;
        var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
        throw l.context = t, l;
      }
      if (r = this._events[e], a(r)) return !1;
      if (i(r)) switch (arguments.length) {
        case 1:
          r.call(this);
          break;
        case 2:
          r.call(this, arguments[1]);
          break;
        case 3:
          r.call(this, arguments[1], arguments[2]);
          break;
        default:
          o = Array.prototype.slice.call(arguments, 1), r.apply(this, o);
      } else if (s(r)) for (o = Array.prototype.slice.call(arguments, 1), c = r.slice(), n = c.length, u = 0; u < n; u++) c[u].apply(this, o);
      return !0;
    }, n.prototype.addListener = function (e, t) {
      var r;
      if (!i(t)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
      function r() {
        this.removeListener(e, r), n || (n = !0, t.apply(this, arguments));
      }
      if (!i(t)) throw TypeError("listener must be a function");
      var n = !1;
      return r.listener = t, this.on(e, r), this;
    }, n.prototype.removeListener = function (e, t) {
      var r, n, o, a;
      if (!i(t)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;
      if (r = this._events[e], o = r.length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (s(r)) {
        for (a = o; a-- > 0;) if (r[a] === t || r[a].listener && r[a].listener === t) {
          n = a;
          break;
        }
        if (n < 0) return this;
        1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t);
      }
      return this;
    }, n.prototype.removeAllListeners = function (e) {
      var t, r;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
      if (0 === arguments.length) {
        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }
      if (r = this._events[e], i(r)) this.removeListener(e, r);else if (r) for (; r.length;) this.removeListener(e, r[r.length - 1]);
      return delete this._events[e], this;
    }, n.prototype.listeners = function (e) {
      return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
    }, n.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (i(t)) return 1;
        if (t) return t.length;
      }
      return 0;
    }, n.listenerCount = function (e, t) {
      return e.listenerCount(t);
    };
  }, {}],
  84: [function (e, t, r) {
    r.read = function (e, t, r, n, i) {
      var o,
        s,
        a = 8 * i - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        l = -7,
        p = r ? i - 1 : 0,
        h = r ? -1 : 1,
        f = e[t + p];
      for (p += h, o = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; o = 256 * o + e[t + p], p += h, l -= 8);
      for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e[t + p], p += h, l -= 8);
      if (0 === o) o = 1 - c;else {
        if (o === u) return s ? NaN : 1 / 0 * (f ? -1 : 1);
        s += Math.pow(2, n), o -= c;
      }
      return (f ? -1 : 1) * s * Math.pow(2, o - n);
    }, r.write = function (e, t, r, n, i, o) {
      var s,
        a,
        u,
        c = 8 * o - i - 1,
        l = (1 << c) - 1,
        p = l >> 1,
        h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        f = n ? 0 : o - 1,
        d = n ? 1 : -1,
        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + p >= 1 ? h / u : h * Math.pow(2, 1 - p), t * u >= 2 && (s++, u /= 2), s + p >= l ? (a = 0, s = l) : s + p >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + f] = 255 & a, f += d, a /= 256, i -= 8);
      for (s = s << i | a, c += i; c > 0; e[r + f] = 255 & s, f += d, s /= 256, c -= 8);
      e[r + f - d] |= 128 * m;
    };
  }, {}],
  85: [function (e, t, r) {
    var n = {}.toString;
    t.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e);
    };
  }, {}],
  86: [function (e, t, r) {
    !function (e) {
      "use strict";

      function t(e) {
        return null !== e && "[object Array]" === Object.prototype.toString.call(e);
      }
      function r(e) {
        return null !== e && "[object Object]" === Object.prototype.toString.call(e);
      }
      function n(e, i) {
        if (e === i) return !0;
        if (Object.prototype.toString.call(e) !== Object.prototype.toString.call(i)) return !1;
        if (!0 === t(e)) {
          if (e.length !== i.length) return !1;
          for (var o = 0; o < e.length; o++) if (!1 === n(e[o], i[o])) return !1;
          return !0;
        }
        if (!0 === r(e)) {
          var s = {};
          for (var a in e) if (hasOwnProperty.call(e, a)) {
            if (!1 === n(e[a], i[a])) return !1;
            s[a] = !0;
          }
          for (var u in i) if (hasOwnProperty.call(i, u) && !0 !== s[u]) return !1;
          return !0;
        }
        return !1;
      }
      function i(e) {
        if ("" === e || !1 === e || null === e) return !0;
        if (t(e) && 0 === e.length) return !0;
        if (r(e)) {
          for (var n in e) if (e.hasOwnProperty(n)) return !1;
          return !0;
        }
        return !1;
      }
      function o(e) {
        for (var t = Object.keys(e), r = [], n = 0; n < t.length; n++) r.push(e[t[n]]);
        return r;
      }
      function s(e) {
        return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || "_" === e;
      }
      function a(e) {
        return e >= "0" && e <= "9" || "-" === e;
      }
      function u(e) {
        return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || "_" === e;
      }
      function c() {}
      function l() {}
      function p(e) {
        this.runtime = e;
      }
      function h(e) {
        this._interpreter = e, this.functionTable = {
          abs: {
            _func: this._functionAbs,
            _signature: [{
              types: [g]
            }]
          },
          avg: {
            _func: this._functionAvg,
            _signature: [{
              types: [_]
            }]
          },
          ceil: {
            _func: this._functionCeil,
            _signature: [{
              types: [g]
            }]
          },
          contains: {
            _func: this._functionContains,
            _signature: [{
              types: [b, w]
            }, {
              types: [y]
            }]
          },
          ends_with: {
            _func: this._functionEndsWith,
            _signature: [{
              types: [b]
            }, {
              types: [b]
            }]
          },
          floor: {
            _func: this._functionFloor,
            _signature: [{
              types: [g]
            }]
          },
          length: {
            _func: this._functionLength,
            _signature: [{
              types: [b, w, E]
            }]
          },
          map: {
            _func: this._functionMap,
            _signature: [{
              types: [S]
            }, {
              types: [w]
            }]
          },
          max: {
            _func: this._functionMax,
            _signature: [{
              types: [_, C]
            }]
          },
          merge: {
            _func: this._functionMerge,
            _signature: [{
              types: [E],
              variadic: !0
            }]
          },
          max_by: {
            _func: this._functionMaxBy,
            _signature: [{
              types: [w]
            }, {
              types: [S]
            }]
          },
          sum: {
            _func: this._functionSum,
            _signature: [{
              types: [_]
            }]
          },
          starts_with: {
            _func: this._functionStartsWith,
            _signature: [{
              types: [b]
            }, {
              types: [b]
            }]
          },
          min: {
            _func: this._functionMin,
            _signature: [{
              types: [_, C]
            }]
          },
          min_by: {
            _func: this._functionMinBy,
            _signature: [{
              types: [w]
            }, {
              types: [S]
            }]
          },
          type: {
            _func: this._functionType,
            _signature: [{
              types: [y]
            }]
          },
          keys: {
            _func: this._functionKeys,
            _signature: [{
              types: [E]
            }]
          },
          values: {
            _func: this._functionValues,
            _signature: [{
              types: [E]
            }]
          },
          sort: {
            _func: this._functionSort,
            _signature: [{
              types: [C, _]
            }]
          },
          sort_by: {
            _func: this._functionSortBy,
            _signature: [{
              types: [w]
            }, {
              types: [S]
            }]
          },
          join: {
            _func: this._functionJoin,
            _signature: [{
              types: [b]
            }, {
              types: [C]
            }]
          },
          reverse: {
            _func: this._functionReverse,
            _signature: [{
              types: [b, w]
            }]
          },
          to_array: {
            _func: this._functionToArray,
            _signature: [{
              types: [y]
            }]
          },
          to_string: {
            _func: this._functionToString,
            _signature: [{
              types: [y]
            }]
          },
          to_number: {
            _func: this._functionToNumber,
            _signature: [{
              types: [y]
            }]
          },
          not_null: {
            _func: this._functionNotNull,
            _signature: [{
              types: [y],
              variadic: !0
            }]
          }
        };
      }
      function f(e) {
        return new l().parse(e);
      }
      function d(e) {
        return new c().tokenize(e);
      }
      function m(e, t) {
        var r = new l(),
          n = new h(),
          i = new p(n);
        n._interpreter = i;
        var o = r.parse(t);
        return i.search(o, e);
      }
      var v;
      v = "function" == typeof String.prototype.trimLeft ? function (e) {
        return e.trimLeft();
      } : function (e) {
        return e.match(/^\s*(.*)/)[1];
      };
      var g = 0,
        y = 1,
        b = 2,
        w = 3,
        E = 4,
        S = 6,
        _ = 8,
        C = 9,
        A = {
          ".": "Dot",
          "*": "Star",
          ",": "Comma",
          ":": "Colon",
          "{": "Lbrace",
          "}": "Rbrace",
          "]": "Rbracket",
          "(": "Lparen",
          ")": "Rparen",
          "@": "Current"
        },
        R = {
          "<": !0,
          ">": !0,
          "=": !0,
          "!": !0
        },
        x = {
          " ": !0,
          "\t": !0,
          "\n": !0
        };
      c.prototype = {
        tokenize: function tokenize(e) {
          var t = [];
          this._current = 0;
          for (var r, n, i; this._current < e.length;) if (s(e[this._current])) r = this._current, n = this._consumeUnquotedIdentifier(e), t.push({
            type: "UnquotedIdentifier",
            value: n,
            start: r
          });else if (void 0 !== A[e[this._current]]) t.push({
            type: A[e[this._current]],
            value: e[this._current],
            start: this._current
          }), this._current++;else if (a(e[this._current])) i = this._consumeNumber(e), t.push(i);else if ("[" === e[this._current]) i = this._consumeLBracket(e), t.push(i);else if ('"' === e[this._current]) r = this._current, n = this._consumeQuotedIdentifier(e), t.push({
            type: "QuotedIdentifier",
            value: n,
            start: r
          });else if ("'" === e[this._current]) r = this._current, n = this._consumeRawStringLiteral(e), t.push({
            type: "Literal",
            value: n,
            start: r
          });else if ("`" === e[this._current]) {
            r = this._current;
            var o = this._consumeLiteral(e);
            t.push({
              type: "Literal",
              value: o,
              start: r
            });
          } else if (void 0 !== R[e[this._current]]) t.push(this._consumeOperator(e));else if (void 0 !== x[e[this._current]]) this._current++;else if ("&" === e[this._current]) r = this._current, this._current++, "&" === e[this._current] ? (this._current++, t.push({
            type: "And",
            value: "&&",
            start: r
          })) : t.push({
            type: "Expref",
            value: "&",
            start: r
          });else {
            if ("|" !== e[this._current]) {
              var u = new Error("Unknown character:" + e[this._current]);
              throw u.name = "LexerError", u;
            }
            r = this._current, this._current++, "|" === e[this._current] ? (this._current++, t.push({
              type: "Or",
              value: "||",
              start: r
            })) : t.push({
              type: "Pipe",
              value: "|",
              start: r
            });
          }
          return t;
        },
        _consumeUnquotedIdentifier: function _consumeUnquotedIdentifier(e) {
          var t = this._current;
          for (this._current++; this._current < e.length && u(e[this._current]);) this._current++;
          return e.slice(t, this._current);
        },
        _consumeQuotedIdentifier: function _consumeQuotedIdentifier(e) {
          var t = this._current;
          this._current++;
          for (var r = e.length; '"' !== e[this._current] && this._current < r;) {
            var n = this._current;
            "\\" !== e[n] || "\\" !== e[n + 1] && '"' !== e[n + 1] ? n++ : n += 2, this._current = n;
          }
          return this._current++, JSON.parse(e.slice(t, this._current));
        },
        _consumeRawStringLiteral: function _consumeRawStringLiteral(e) {
          var t = this._current;
          this._current++;
          for (var r = e.length; "'" !== e[this._current] && this._current < r;) {
            var n = this._current;
            "\\" !== e[n] || "\\" !== e[n + 1] && "'" !== e[n + 1] ? n++ : n += 2, this._current = n;
          }
          return this._current++, e.slice(t + 1, this._current - 1).replace("\\'", "'");
        },
        _consumeNumber: function _consumeNumber(e) {
          var t = this._current;
          this._current++;
          for (var r = e.length; a(e[this._current]) && this._current < r;) this._current++;
          return {
            type: "Number",
            value: parseInt(e.slice(t, this._current)),
            start: t
          };
        },
        _consumeLBracket: function _consumeLBracket(e) {
          var t = this._current;
          return this._current++, "?" === e[this._current] ? (this._current++, {
            type: "Filter",
            value: "[?",
            start: t
          }) : "]" === e[this._current] ? (this._current++, {
            type: "Flatten",
            value: "[]",
            start: t
          }) : {
            type: "Lbracket",
            value: "[",
            start: t
          };
        },
        _consumeOperator: function _consumeOperator(e) {
          var t = this._current,
            r = e[t];
          return this._current++, "!" === r ? "=" === e[this._current] ? (this._current++, {
            type: "NE",
            value: "!=",
            start: t
          }) : {
            type: "Not",
            value: "!",
            start: t
          } : "<" === r ? "=" === e[this._current] ? (this._current++, {
            type: "LTE",
            value: "<=",
            start: t
          }) : {
            type: "LT",
            value: "<",
            start: t
          } : ">" === r ? "=" === e[this._current] ? (this._current++, {
            type: "GTE",
            value: ">=",
            start: t
          }) : {
            type: "GT",
            value: ">",
            start: t
          } : "=" === r && "=" === e[this._current] ? (this._current++, {
            type: "EQ",
            value: "==",
            start: t
          }) : void 0;
        },
        _consumeLiteral: function _consumeLiteral(e) {
          this._current++;
          for (var t, r = this._current, n = e.length; "`" !== e[this._current] && this._current < n;) {
            var i = this._current;
            "\\" !== e[i] || "\\" !== e[i + 1] && "`" !== e[i + 1] ? i++ : i += 2, this._current = i;
          }
          var o = v(e.slice(r, this._current));
          return o = o.replace("\\`", "`"), t = this._looksLikeJSON(o) ? JSON.parse(o) : JSON.parse('"' + o + '"'), this._current++, t;
        },
        _looksLikeJSON: function _looksLikeJSON(e) {
          var t = '[{"',
            r = ["true", "false", "null"],
            n = "-0123456789";
          if ("" === e) return !1;
          if (t.indexOf(e[0]) >= 0) return !0;
          if (r.indexOf(e) >= 0) return !0;
          if (!(n.indexOf(e[0]) >= 0)) return !1;
          try {
            return JSON.parse(e), !0;
          } catch (e) {
            return !1;
          }
        }
      };
      var T = {};
      T.EOF = 0, T.UnquotedIdentifier = 0, T.QuotedIdentifier = 0, T.Rbracket = 0, T.Rparen = 0, T.Comma = 0, T.Rbrace = 0, T.Number = 0, T.Current = 0, T.Expref = 0, T.Pipe = 1, T.Or = 2, T.And = 3, T.EQ = 5, T.GT = 5, T.LT = 5, T.GTE = 5, T.LTE = 5, T.NE = 5, T.Flatten = 9, T.Star = 20, T.Filter = 21, T.Dot = 40, T.Not = 45, T.Lbrace = 50, T.Lbracket = 55, T.Lparen = 60, l.prototype = {
        parse: function parse(e) {
          this._loadTokens(e), this.index = 0;
          var t = this.expression(0);
          if ("EOF" !== this._lookahead(0)) {
            var r = this._lookaheadToken(0),
              n = new Error("Unexpected token type: " + r.type + ", value: " + r.value);
            throw n.name = "ParserError", n;
          }
          return t;
        },
        _loadTokens: function _loadTokens(e) {
          var t = new c(),
            r = t.tokenize(e);
          r.push({
            type: "EOF",
            value: "",
            start: e.length
          }), this.tokens = r;
        },
        expression: function expression(e) {
          var t = this._lookaheadToken(0);
          this._advance();
          for (var r = this.nud(t), n = this._lookahead(0); e < T[n];) this._advance(), r = this.led(n, r), n = this._lookahead(0);
          return r;
        },
        _lookahead: function _lookahead(e) {
          return this.tokens[this.index + e].type;
        },
        _lookaheadToken: function _lookaheadToken(e) {
          return this.tokens[this.index + e];
        },
        _advance: function _advance() {
          this.index++;
        },
        nud: function nud(e) {
          var t, r, n;
          switch (e.type) {
            case "Literal":
              return {
                type: "Literal",
                value: e.value
              };
            case "UnquotedIdentifier":
              return {
                type: "Field",
                name: e.value
              };
            case "QuotedIdentifier":
              var i = {
                type: "Field",
                name: e.value
              };
              if ("Lparen" === this._lookahead(0)) throw new Error("Quoted identifier not allowed for function names.");
              return i;
            case "Not":
              return r = this.expression(T.Not), {
                type: "NotExpression",
                children: [r]
              };
            case "Star":
              return t = {
                type: "Identity"
              }, r = null, r = "Rbracket" === this._lookahead(0) ? {
                type: "Identity"
              } : this._parseProjectionRHS(T.Star), {
                type: "ValueProjection",
                children: [t, r]
              };
            case "Filter":
              return this.led(e.type, {
                type: "Identity"
              });
            case "Lbrace":
              return this._parseMultiselectHash();
            case "Flatten":
              return t = {
                type: "Flatten",
                children: [{
                  type: "Identity"
                }]
              }, r = this._parseProjectionRHS(T.Flatten), {
                type: "Projection",
                children: [t, r]
              };
            case "Lbracket":
              return "Number" === this._lookahead(0) || "Colon" === this._lookahead(0) ? (r = this._parseIndexExpression(), this._projectIfSlice({
                type: "Identity"
              }, r)) : "Star" === this._lookahead(0) && "Rbracket" === this._lookahead(1) ? (this._advance(), this._advance(), r = this._parseProjectionRHS(T.Star), {
                type: "Projection",
                children: [{
                  type: "Identity"
                }, r]
              }) : this._parseMultiselectList();
            case "Current":
              return {
                type: "Current"
              };
            case "Expref":
              return n = this.expression(T.Expref), {
                type: "ExpressionReference",
                children: [n]
              };
            case "Lparen":
              for (var o = []; "Rparen" !== this._lookahead(0);) "Current" === this._lookahead(0) ? (n = {
                type: "Current"
              }, this._advance()) : n = this.expression(0), o.push(n);
              return this._match("Rparen"), o[0];
            default:
              this._errorToken(e);
          }
        },
        led: function led(e, t) {
          var r;
          switch (e) {
            case "Dot":
              var n = T.Dot;
              return "Star" !== this._lookahead(0) ? (r = this._parseDotRHS(n), {
                type: "Subexpression",
                children: [t, r]
              }) : (this._advance(), r = this._parseProjectionRHS(n), {
                type: "ValueProjection",
                children: [t, r]
              });
            case "Pipe":
              return r = this.expression(T.Pipe), {
                type: "Pipe",
                children: [t, r]
              };
            case "Or":
              return r = this.expression(T.Or), {
                type: "OrExpression",
                children: [t, r]
              };
            case "And":
              return r = this.expression(T.And), {
                type: "AndExpression",
                children: [t, r]
              };
            case "Lparen":
              for (var i, o = t.name, s = []; "Rparen" !== this._lookahead(0);) "Current" === this._lookahead(0) ? (i = {
                type: "Current"
              }, this._advance()) : i = this.expression(0), "Comma" === this._lookahead(0) && this._match("Comma"), s.push(i);
              return this._match("Rparen"), {
                type: "Function",
                name: o,
                children: s
              };
            case "Filter":
              var a = this.expression(0);
              return this._match("Rbracket"), r = "Flatten" === this._lookahead(0) ? {
                type: "Identity"
              } : this._parseProjectionRHS(T.Filter), {
                type: "FilterProjection",
                children: [t, r, a]
              };
            case "Flatten":
              return {
                type: "Projection",
                children: [{
                  type: "Flatten",
                  children: [t]
                }, this._parseProjectionRHS(T.Flatten)]
              };
            case "EQ":
            case "NE":
            case "GT":
            case "GTE":
            case "LT":
            case "LTE":
              return this._parseComparator(t, e);
            case "Lbracket":
              var u = this._lookaheadToken(0);
              return "Number" === u.type || "Colon" === u.type ? (r = this._parseIndexExpression(), this._projectIfSlice(t, r)) : (this._match("Star"), this._match("Rbracket"), r = this._parseProjectionRHS(T.Star), {
                type: "Projection",
                children: [t, r]
              });
            default:
              this._errorToken(this._lookaheadToken(0));
          }
        },
        _match: function _match(e) {
          if (this._lookahead(0) !== e) {
            var t = this._lookaheadToken(0),
              r = new Error("Expected " + e + ", got: " + t.type);
            throw r.name = "ParserError", r;
          }
          this._advance();
        },
        _errorToken: function _errorToken(e) {
          var t = new Error("Invalid token (" + e.type + '): "' + e.value + '"');
          throw t.name = "ParserError", t;
        },
        _parseIndexExpression: function _parseIndexExpression() {
          if ("Colon" === this._lookahead(0) || "Colon" === this._lookahead(1)) return this._parseSliceExpression();
          var e = {
            type: "Index",
            value: this._lookaheadToken(0).value
          };
          return this._advance(), this._match("Rbracket"), e;
        },
        _projectIfSlice: function _projectIfSlice(e, t) {
          var r = {
            type: "IndexExpression",
            children: [e, t]
          };
          return "Slice" === t.type ? {
            type: "Projection",
            children: [r, this._parseProjectionRHS(T.Star)]
          } : r;
        },
        _parseSliceExpression: function _parseSliceExpression() {
          for (var e = [null, null, null], t = 0, r = this._lookahead(0); "Rbracket" !== r && t < 3;) {
            if ("Colon" === r) t++, this._advance();else {
              if ("Number" !== r) {
                var n = this._lookahead(0),
                  i = new Error("Syntax error, unexpected token: " + n.value + "(" + n.type + ")");
                throw i.name = "Parsererror", i;
              }
              e[t] = this._lookaheadToken(0).value, this._advance();
            }
            r = this._lookahead(0);
          }
          return this._match("Rbracket"), {
            type: "Slice",
            children: e
          };
        },
        _parseComparator: function _parseComparator(e, t) {
          return {
            type: "Comparator",
            name: t,
            children: [e, this.expression(T[t])]
          };
        },
        _parseDotRHS: function _parseDotRHS(e) {
          var t = this._lookahead(0);
          return ["UnquotedIdentifier", "QuotedIdentifier", "Star"].indexOf(t) >= 0 ? this.expression(e) : "Lbracket" === t ? (this._match("Lbracket"), this._parseMultiselectList()) : "Lbrace" === t ? (this._match("Lbrace"), this._parseMultiselectHash()) : void 0;
        },
        _parseProjectionRHS: function _parseProjectionRHS(e) {
          var t;
          if (T[this._lookahead(0)] < 10) t = {
            type: "Identity"
          };else if ("Lbracket" === this._lookahead(0)) t = this.expression(e);else if ("Filter" === this._lookahead(0)) t = this.expression(e);else {
            if ("Dot" !== this._lookahead(0)) {
              var r = this._lookaheadToken(0),
                n = new Error("Sytanx error, unexpected token: " + r.value + "(" + r.type + ")");
              throw n.name = "ParserError", n;
            }
            this._match("Dot"), t = this._parseDotRHS(e);
          }
          return t;
        },
        _parseMultiselectList: function _parseMultiselectList() {
          for (var e = []; "Rbracket" !== this._lookahead(0);) {
            var t = this.expression(0);
            if (e.push(t), "Comma" === this._lookahead(0) && (this._match("Comma"), "Rbracket" === this._lookahead(0))) throw new Error("Unexpected token Rbracket");
          }
          return this._match("Rbracket"), {
            type: "MultiSelectList",
            children: e
          };
        },
        _parseMultiselectHash: function _parseMultiselectHash() {
          for (var e, t, r, n, i = [], o = ["UnquotedIdentifier", "QuotedIdentifier"];;) {
            if (e = this._lookaheadToken(0), o.indexOf(e.type) < 0) throw new Error("Expecting an identifier token, got: " + e.type);
            if (t = e.value, this._advance(), this._match("Colon"), r = this.expression(0), n = {
              type: "KeyValuePair",
              name: t,
              value: r
            }, i.push(n), "Comma" === this._lookahead(0)) this._match("Comma");else if ("Rbrace" === this._lookahead(0)) {
              this._match("Rbrace");
              break;
            }
          }
          return {
            type: "MultiSelectHash",
            children: i
          };
        }
      }, p.prototype = {
        search: function search(e, t) {
          return this.visit(e, t);
        },
        visit: function visit(e, s) {
          var a, u, c, l, p, h, f, d, m;
          switch (e.type) {
            case "Field":
              return null === s ? null : r(s) ? (h = s[e.name], void 0 === h ? null : h) : null;
            case "Subexpression":
              for (c = this.visit(e.children[0], s), m = 1; m < e.children.length; m++) if (null === (c = this.visit(e.children[1], c))) return null;
              return c;
            case "IndexExpression":
              return f = this.visit(e.children[0], s), this.visit(e.children[1], f);
            case "Index":
              if (!t(s)) return null;
              var v = e.value;
              return v < 0 && (v = s.length + v), c = s[v], void 0 === c && (c = null), c;
            case "Slice":
              if (!t(s)) return null;
              var g = e.children.slice(0),
                y = this.computeSliceParams(s.length, g),
                b = y[0],
                w = y[1],
                E = y[2];
              if (c = [], E > 0) for (m = b; m < w; m += E) c.push(s[m]);else for (m = b; m > w; m += E) c.push(s[m]);
              return c;
            case "Projection":
              var S = this.visit(e.children[0], s);
              if (!t(S)) return null;
              for (d = [], m = 0; m < S.length; m++) null !== (u = this.visit(e.children[1], S[m])) && d.push(u);
              return d;
            case "ValueProjection":
              if (S = this.visit(e.children[0], s), !r(S)) return null;
              d = [];
              var _ = o(S);
              for (m = 0; m < _.length; m++) null !== (u = this.visit(e.children[1], _[m])) && d.push(u);
              return d;
            case "FilterProjection":
              if (S = this.visit(e.children[0], s), !t(S)) return null;
              var C = [],
                A = [];
              for (m = 0; m < S.length; m++) a = this.visit(e.children[2], S[m]), i(a) || C.push(S[m]);
              for (var R = 0; R < C.length; R++) null !== (u = this.visit(e.children[1], C[R])) && A.push(u);
              return A;
            case "Comparator":
              switch (l = this.visit(e.children[0], s), p = this.visit(e.children[1], s), e.name) {
                case "EQ":
                  c = n(l, p);
                  break;
                case "NE":
                  c = !n(l, p);
                  break;
                case "GT":
                  c = l > p;
                  break;
                case "GTE":
                  c = l >= p;
                  break;
                case "LT":
                  c = l < p;
                  break;
                case "LTE":
                  c = l <= p;
                  break;
                default:
                  throw new Error("Unknown comparator: " + e.name);
              }
              return c;
            case "Flatten":
              var x = this.visit(e.children[0], s);
              if (!t(x)) return null;
              var T = [];
              for (m = 0; m < x.length; m++) u = x[m], t(u) ? T.push.apply(T, u) : T.push(u);
              return T;
            case "Identity":
              return s;
            case "MultiSelectList":
              if (null === s) return null;
              for (d = [], m = 0; m < e.children.length; m++) d.push(this.visit(e.children[m], s));
              return d;
            case "MultiSelectHash":
              if (null === s) return null;
              d = {};
              var I;
              for (m = 0; m < e.children.length; m++) I = e.children[m], d[I.name] = this.visit(I.value, s);
              return d;
            case "OrExpression":
              return a = this.visit(e.children[0], s), i(a) && (a = this.visit(e.children[1], s)), a;
            case "AndExpression":
              return l = this.visit(e.children[0], s), !0 === i(l) ? l : this.visit(e.children[1], s);
            case "NotExpression":
              return l = this.visit(e.children[0], s), i(l);
            case "Literal":
              return e.value;
            case "Pipe":
              return f = this.visit(e.children[0], s), this.visit(e.children[1], f);
            case "Current":
              return s;
            case "Function":
              var k = [];
              for (m = 0; m < e.children.length; m++) k.push(this.visit(e.children[m], s));
              return this.runtime.callFunction(e.name, k);
            case "ExpressionReference":
              var P = e.children[0];
              return P.jmespathType = "Expref", P;
            default:
              throw new Error("Unknown node type: " + e.type);
          }
        },
        computeSliceParams: function computeSliceParams(e, t) {
          var r = t[0],
            n = t[1],
            i = t[2],
            o = [null, null, null];
          if (null === i) i = 1;else if (0 === i) {
            var s = new Error("Invalid slice, step cannot be 0");
            throw s.name = "RuntimeError", s;
          }
          var a = i < 0;
          return r = null === r ? a ? e - 1 : 0 : this.capSliceRange(e, r, i), n = null === n ? a ? -1 : e : this.capSliceRange(e, n, i), o[0] = r, o[1] = n, o[2] = i, o;
        },
        capSliceRange: function capSliceRange(e, t, r) {
          return t < 0 ? (t += e) < 0 && (t = r < 0 ? -1 : 0) : t >= e && (t = r < 0 ? e - 1 : e), t;
        }
      }, h.prototype = {
        callFunction: function callFunction(e, t) {
          var r = this.functionTable[e];
          if (void 0 === r) throw new Error("Unknown function: " + e + "()");
          return this._validateArgs(e, t, r._signature), r._func.call(this, t);
        },
        _validateArgs: function _validateArgs(e, t, r) {
          var n;
          if (r[r.length - 1].variadic) {
            if (t.length < r.length) throw n = 1 === r.length ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes at least" + r.length + n + " but received " + t.length);
          } else if (t.length !== r.length) throw n = 1 === r.length ? " argument" : " arguments", new Error("ArgumentError: " + e + "() takes " + r.length + n + " but received " + t.length);
          for (var i, o, s, a = 0; a < r.length; a++) {
            s = !1, i = r[a].types, o = this._getTypeName(t[a]);
            for (var u = 0; u < i.length; u++) if (this._typeMatches(o, i[u], t[a])) {
              s = !0;
              break;
            }
            if (!s) throw new Error("TypeError: " + e + "() expected argument " + (a + 1) + " to be type " + i + " but received type " + o + " instead.");
          }
        },
        _typeMatches: function _typeMatches(e, t, r) {
          if (t === y) return !0;
          if (t !== C && t !== _ && t !== w) return e === t;
          if (t === w) return e === w;
          if (e === w) {
            var n;
            t === _ ? n = g : t === C && (n = b);
            for (var i = 0; i < r.length; i++) if (!this._typeMatches(this._getTypeName(r[i]), n, r[i])) return !1;
            return !0;
          }
        },
        _getTypeName: function _getTypeName(e) {
          switch (Object.prototype.toString.call(e)) {
            case "[object String]":
              return b;
            case "[object Number]":
              return g;
            case "[object Array]":
              return w;
            case "[object Boolean]":
              return 5;
            case "[object Null]":
              return 7;
            case "[object Object]":
              return "Expref" === e.jmespathType ? S : E;
          }
        },
        _functionStartsWith: function _functionStartsWith(e) {
          return 0 === e[0].lastIndexOf(e[1]);
        },
        _functionEndsWith: function _functionEndsWith(e) {
          var t = e[0],
            r = e[1];
          return -1 !== t.indexOf(r, t.length - r.length);
        },
        _functionReverse: function _functionReverse(e) {
          if (this._getTypeName(e[0]) === b) {
            for (var t = e[0], r = "", n = t.length - 1; n >= 0; n--) r += t[n];
            return r;
          }
          var i = e[0].slice(0);
          return i.reverse(), i;
        },
        _functionAbs: function _functionAbs(e) {
          return Math.abs(e[0]);
        },
        _functionCeil: function _functionCeil(e) {
          return Math.ceil(e[0]);
        },
        _functionAvg: function _functionAvg(e) {
          for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
          return t / r.length;
        },
        _functionContains: function _functionContains(e) {
          return e[0].indexOf(e[1]) >= 0;
        },
        _functionFloor: function _functionFloor(e) {
          return Math.floor(e[0]);
        },
        _functionLength: function _functionLength(e) {
          return r(e[0]) ? Object.keys(e[0]).length : e[0].length;
        },
        _functionMap: function _functionMap(e) {
          for (var t = [], r = this._interpreter, n = e[0], i = e[1], o = 0; o < i.length; o++) t.push(r.visit(n, i[o]));
          return t;
        },
        _functionMerge: function _functionMerge(e) {
          for (var t = {}, r = 0; r < e.length; r++) {
            var n = e[r];
            for (var i in n) t[i] = n[i];
          }
          return t;
        },
        _functionMax: function _functionMax(e) {
          if (e[0].length > 0) {
            if (this._getTypeName(e[0][0]) === g) return Math.max.apply(Math, e[0]);
            for (var t = e[0], r = t[0], n = 1; n < t.length; n++) r.localeCompare(t[n]) < 0 && (r = t[n]);
            return r;
          }
          return null;
        },
        _functionMin: function _functionMin(e) {
          if (e[0].length > 0) {
            if (this._getTypeName(e[0][0]) === g) return Math.min.apply(Math, e[0]);
            for (var t = e[0], r = t[0], n = 1; n < t.length; n++) t[n].localeCompare(r) < 0 && (r = t[n]);
            return r;
          }
          return null;
        },
        _functionSum: function _functionSum(e) {
          for (var t = 0, r = e[0], n = 0; n < r.length; n++) t += r[n];
          return t;
        },
        _functionType: function _functionType(e) {
          switch (this._getTypeName(e[0])) {
            case g:
              return "number";
            case b:
              return "string";
            case w:
              return "array";
            case E:
              return "object";
            case 5:
              return "boolean";
            case S:
              return "expref";
            case 7:
              return "null";
          }
        },
        _functionKeys: function _functionKeys(e) {
          return Object.keys(e[0]);
        },
        _functionValues: function _functionValues(e) {
          for (var t = e[0], r = Object.keys(t), n = [], i = 0; i < r.length; i++) n.push(t[r[i]]);
          return n;
        },
        _functionJoin: function _functionJoin(e) {
          var t = e[0];
          return e[1].join(t);
        },
        _functionToArray: function _functionToArray(e) {
          return this._getTypeName(e[0]) === w ? e[0] : [e[0]];
        },
        _functionToString: function _functionToString(e) {
          return this._getTypeName(e[0]) === b ? e[0] : JSON.stringify(e[0]);
        },
        _functionToNumber: function _functionToNumber(e) {
          var t,
            r = this._getTypeName(e[0]);
          return r === g ? e[0] : r !== b || (t = +e[0], isNaN(t)) ? null : t;
        },
        _functionNotNull: function _functionNotNull(e) {
          for (var t = 0; t < e.length; t++) if (7 !== this._getTypeName(e[t])) return e[t];
          return null;
        },
        _functionSort: function _functionSort(e) {
          var t = e[0].slice(0);
          return t.sort(), t;
        },
        _functionSortBy: function _functionSortBy(e) {
          var t = e[0].slice(0);
          if (0 === t.length) return t;
          var r = this._interpreter,
            n = e[1],
            i = this._getTypeName(r.visit(n, t[0]));
          if ([g, b].indexOf(i) < 0) throw new Error("TypeError");
          for (var o = this, s = [], a = 0; a < t.length; a++) s.push([a, t[a]]);
          s.sort(function (e, t) {
            var s = r.visit(n, e[1]),
              a = r.visit(n, t[1]);
            if (o._getTypeName(s) !== i) throw new Error("TypeError: expected " + i + ", received " + o._getTypeName(s));
            if (o._getTypeName(a) !== i) throw new Error("TypeError: expected " + i + ", received " + o._getTypeName(a));
            return s > a ? 1 : s < a ? -1 : e[0] - t[0];
          });
          for (var u = 0; u < s.length; u++) t[u] = s[u][1];
          return t;
        },
        _functionMaxBy: function _functionMaxBy(e) {
          for (var t, r, n = e[1], i = e[0], o = this.createKeyFunction(n, [g, b]), s = -1 / 0, a = 0; a < i.length; a++) (r = o(i[a])) > s && (s = r, t = i[a]);
          return t;
        },
        _functionMinBy: function _functionMinBy(e) {
          for (var t, r, n = e[1], i = e[0], o = this.createKeyFunction(n, [g, b]), s = 1 / 0, a = 0; a < i.length; a++) (r = o(i[a])) < s && (s = r, t = i[a]);
          return t;
        },
        createKeyFunction: function createKeyFunction(e, t) {
          var r = this,
            n = this._interpreter;
          return function (i) {
            var o = n.visit(e, i);
            if (t.indexOf(r._getTypeName(o)) < 0) {
              var s = "TypeError: expected one of " + t + ", received " + r._getTypeName(o);
              throw new Error(s);
            }
            return o;
          };
        }
      }, e.tokenize = d, e.compile = f, e.search = m, e.strictDeepEqual = n;
    }(void 0 === r ? this.jmespath = {} : r);
  }, {}],
  87: [function (e, t, r) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (p === setTimeout) return setTimeout(e, 0);
      if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(e, 0);
      try {
        return p(e, 0);
      } catch (t) {
        try {
          return p.call(null, e, 0);
        } catch (t) {
          return p.call(this, e, 0);
        }
      }
    }
    function s(e) {
      if (h === clearTimeout) return clearTimeout(e);
      if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
      try {
        return h(e);
      } catch (t) {
        try {
          return h.call(null, e);
        } catch (t) {
          return h.call(this, e);
        }
      }
    }
    function a() {
      v && d && (v = !1, d.length ? m = d.concat(m) : g = -1, m.length && u());
    }
    function u() {
      if (!v) {
        var e = o(a);
        v = !0;
        for (var t = m.length; t;) {
          for (d = m, m = []; ++g < t;) d && d[g].run();
          g = -1, t = m.length;
        }
        d = null, v = !1, s(e);
      }
    }
    function c(e, t) {
      this.fun = e, this.array = t;
    }
    function l() {}
    var p,
      h,
      f = t.exports = {};
    !function () {
      try {
        p = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        p = n;
      }
      try {
        h = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        h = i;
      }
    }();
    var d,
      m = [],
      v = !1,
      g = -1;
    f.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      m.push(new c(e, t)), 1 !== m.length || v || o(u);
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function (e) {
      return [];
    }, f.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, f.cwd = function () {
      return "/";
    }, f.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, f.umask = function () {
      return 0;
    };
  }, {}],
  88: [function (e, t, r) {
    (function (e) {
      (function () {
        !function (n) {
          function i(e) {
            throw RangeError(L[e]);
          }
          function o(e, t) {
            for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
            return n;
          }
          function s(e, t) {
            var r = e.split("@"),
              n = "";
            return r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(q, "."), n + o(e.split("."), t).join(".");
          }
          function a(e) {
            for (var t, r, n = [], i = 0, o = e.length; i < o;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < o ? (r = e.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--)) : n.push(t);
            return n;
          }
          function u(e) {
            return o(e, function (e) {
              var t = "";
              return e > 65535 && (e -= 65536, t += U(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += U(e);
            }).join("");
          }
          function c(e) {
            return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : S;
          }
          function l(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
          }
          function p(e, t, r) {
            var n = 0;
            for (e = r ? N(e / R) : e >> 1, e += N(e / t); e > O * C >> 1; n += S) e = N(e / O);
            return N(n + (O + 1) * e / (e + A));
          }
          function h(e) {
            var t,
              r,
              n,
              o,
              s,
              a,
              l,
              h,
              f,
              d,
              m = [],
              v = e.length,
              g = 0,
              y = T,
              b = x;
            for (r = e.lastIndexOf(I), r < 0 && (r = 0), n = 0; n < r; ++n) e.charCodeAt(n) >= 128 && i("not-basic"), m.push(e.charCodeAt(n));
            for (o = r > 0 ? r + 1 : 0; o < v;) {
              for (s = g, a = 1, l = S; o >= v && i("invalid-input"), h = c(e.charCodeAt(o++)), (h >= S || h > N((E - g) / a)) && i("overflow"), g += h * a, f = l <= b ? _ : l >= b + C ? C : l - b, !(h < f); l += S) d = S - f, a > N(E / d) && i("overflow"), a *= d;
              t = m.length + 1, b = p(g - s, t, 0 == s), N(g / t) > E - y && i("overflow"), y += N(g / t), g %= t, m.splice(g++, 0, y);
            }
            return u(m);
          }
          function f(e) {
            var t,
              r,
              n,
              o,
              s,
              u,
              c,
              h,
              f,
              d,
              m,
              v,
              g,
              y,
              b,
              w = [];
            for (e = a(e), v = e.length, t = T, r = 0, s = x, u = 0; u < v; ++u) (m = e[u]) < 128 && w.push(U(m));
            for (n = o = w.length, o && w.push(I); n < v;) {
              for (c = E, u = 0; u < v; ++u) (m = e[u]) >= t && m < c && (c = m);
              for (g = n + 1, c - t > N((E - r) / g) && i("overflow"), r += (c - t) * g, t = c, u = 0; u < v; ++u) if (m = e[u], m < t && ++r > E && i("overflow"), m == t) {
                for (h = r, f = S; d = f <= s ? _ : f >= s + C ? C : f - s, !(h < d); f += S) b = h - d, y = S - d, w.push(U(l(d + b % y, 0))), h = N(b / y);
                w.push(U(l(h, 0))), s = p(r, g, n == o), r = 0, ++n;
              }
              ++r, ++t;
            }
            return w.join("");
          }
          function d(e) {
            return s(e, function (e) {
              return k.test(e) ? h(e.slice(4).toLowerCase()) : e;
            });
          }
          function m(e) {
            return s(e, function (e) {
              return P.test(e) ? "xn--" + f(e) : e;
            });
          }
          var v = "object" == typeof r && r && !r.nodeType && r,
            g = "object" == typeof t && t && !t.nodeType && t,
            y = "object" == typeof e && e;
          y.global !== y && y.window !== y && y.self !== y || (n = y);
          var b,
            w,
            E = 2147483647,
            S = 36,
            _ = 1,
            C = 26,
            A = 38,
            R = 700,
            x = 72,
            T = 128,
            I = "-",
            k = /^xn--/,
            P = /[^\x20-\x7E]/,
            q = /[\x2E\u3002\uFF0E\uFF61]/g,
            L = {
              overflow: "Overflow: input needs wider integers to process",
              "not-basic": "Illegal input >= 0x80 (not a basic code point)",
              "invalid-input": "Invalid input"
            },
            O = S - _,
            N = Math.floor,
            U = String.fromCharCode;
          if (b = {
            version: "1.3.2",
            ucs2: {
              decode: a,
              encode: u
            },
            decode: h,
            encode: f,
            toASCII: m,
            toUnicode: d
          },  true && __webpack_require__.amdO) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return b;
          }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (v && g) {
            if (t.exports == v) g.exports = b;else for (w in b) b.hasOwnProperty(w) && (v[w] = b[w]);
          } else n.punycode = b;
        }(this);
      }).call(this);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}],
  89: [function (e, t, r) {
    "use strict";

    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    t.exports = function (e, t, r, o) {
      t = t || "&", r = r || "=";
      var s = {};
      if ("string" != typeof e || 0 === e.length) return s;
      var a = /\+/g;
      e = e.split(t);
      var u = 1e3;
      o && "number" == typeof o.maxKeys && (u = o.maxKeys);
      var c = e.length;
      u > 0 && c > u && (c = u);
      for (var l = 0; l < c; ++l) {
        var p,
          h,
          f,
          d,
          m = e[l].replace(a, "%20"),
          v = m.indexOf(r);
        v >= 0 ? (p = m.substr(0, v), h = m.substr(v + 1)) : (p = m, h = ""), f = decodeURIComponent(p), d = decodeURIComponent(h), n(s, f) ? i(s[f]) ? s[f].push(d) : s[f] = [s[f], d] : s[f] = d;
      }
      return s;
    };
    var i = Array.isArray || function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    };
  }, {}],
  90: [function (e, t, r) {
    "use strict";

    function n(e, t) {
      if (e.map) return e.map(t);
      for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
      return r;
    }
    var i = function i(e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    t.exports = function (e, t, r, a) {
      return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? n(s(e), function (s) {
        var a = encodeURIComponent(i(s)) + r;
        return o(e[s]) ? n(e[s], function (e) {
          return a + encodeURIComponent(i(e));
        }).join(t) : a + encodeURIComponent(i(e[s]));
      }).join(t) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(e)) : "";
    };
    var o = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
      s = Object.keys || function (e) {
        var t = [];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        return t;
      };
  }, {}],
  91: [function (e, t, r) {
    "use strict";

    r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode");
  }, {
    "./decode": 89,
    "./encode": 90
  }],
  92: [function (e, t, r) {
    "use strict";

    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    t.exports = function (e, t, r, i) {
      t = t || "&", r = r || "=";
      var o = {};
      if ("string" != typeof e || 0 === e.length) return o;
      var s = /\+/g;
      e = e.split(t);
      var a = 1e3;
      i && "number" == typeof i.maxKeys && (a = i.maxKeys);
      var u = e.length;
      a > 0 && u > a && (u = a);
      for (var c = 0; c < u; ++c) {
        var l,
          p,
          h,
          f,
          d = e[c].replace(s, "%20"),
          m = d.indexOf(r);
        m >= 0 ? (l = d.substr(0, m), p = d.substr(m + 1)) : (l = d, p = ""), h = decodeURIComponent(l), f = decodeURIComponent(p), n(o, h) ? Array.isArray(o[h]) ? o[h].push(f) : o[h] = [o[h], f] : o[h] = f;
      }
      return o;
    };
  }, {}],
  93: [function (e, t, r) {
    "use strict";

    var n = function n(e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    t.exports = function (e, t, r, i) {
      return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (i) {
        var o = encodeURIComponent(n(i)) + r;
        return Array.isArray(e[i]) ? e[i].map(function (e) {
          return o + encodeURIComponent(n(e));
        }).join(t) : o + encodeURIComponent(n(e[i]));
      }).join(t) : i ? encodeURIComponent(n(i)) + r + encodeURIComponent(n(e)) : "";
    };
  }, {}],
  94: [function (e, t, r) {
    arguments[4][91][0].apply(r, arguments);
  }, {
    "./decode": 92,
    "./encode": 93,
    dup: 91
  }],
  95: [function (e, t, r) {
    (function (t, n) {
      (function () {
        function i(e, t) {
          this._id = e, this._clearFn = t;
        }
        var o = e("process/browser.js").nextTick,
          s = Function.prototype.apply,
          a = Array.prototype.slice,
          u = {},
          c = 0;
        r.setTimeout = function () {
          return new i(s.call(setTimeout, window, arguments), clearTimeout);
        }, r.setInterval = function () {
          return new i(s.call(setInterval, window, arguments), clearInterval);
        }, r.clearTimeout = r.clearInterval = function (e) {
          e.close();
        }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
          this._clearFn.call(window, this._id);
        }, r.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
        }, r.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
        }, r._unrefActive = r.active = function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout();
          }, t));
        }, r.setImmediate = "function" == typeof t ? t : function (e) {
          var t = c++,
            n = !(arguments.length < 2) && a.call(arguments, 1);
          return u[t] = !0, o(function () {
            u[t] && (n ? e.apply(null, n) : e.call(null), r.clearImmediate(t));
          }), t;
        }, r.clearImmediate = "function" == typeof n ? n : function (e) {
          delete u[e];
        };
      }).call(this);
    }).call(this, e("timers").setImmediate, e("timers").clearImmediate);
  }, {
    "process/browser.js": 87,
    timers: 95
  }],
  96: [function (e, t, r) {
    function n() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }
    function i(e, t, r) {
      if (e && c(e) && e instanceof n) return e;
      var i = new n();
      return i.parse(e, t, r), i;
    }
    function o(e) {
      return u(e) && (e = i(e)), e instanceof n ? e.format() : n.prototype.format.call(e);
    }
    function s(e, t) {
      return i(e, !1, !0).resolve(t);
    }
    function a(e, t) {
      return e ? i(e, !1, !0).resolveObject(t) : t;
    }
    function u(e) {
      return "string" == typeof e;
    }
    function c(e) {
      return "object" == typeof e && null !== e;
    }
    function l(e) {
      return null === e;
    }
    function p(e) {
      return null == e;
    }
    var h = e("punycode");
    r.parse = i, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = n;
    var f = /^([a-z0-9.+-]+:)/i,
      d = /:[0-9]*$/,
      m = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
      v = ["{", "}", "|", "\\", "^", "`"].concat(m),
      g = ["'"].concat(v),
      y = ["%", "/", "?", ";", "#"].concat(g),
      b = ["/", "?", "#"],
      w = /^[a-z0-9A-Z_-]{0,63}$/,
      E = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
      S = {
        javascript: !0,
        "javascript:": !0
      },
      _ = {
        javascript: !0,
        "javascript:": !0
      },
      C = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      },
      A = e("querystring");
    n.prototype.parse = function (e, t, r) {
      if (!u(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
      var n = e;
      n = n.trim();
      var i = f.exec(n);
      if (i) {
        i = i[0];
        var o = i.toLowerCase();
        this.protocol = o, n = n.substr(i.length);
      }
      if (r || i || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var s = "//" === n.substr(0, 2);
        !s || i && _[i] || (n = n.substr(2), this.slashes = !0);
      }
      if (!_[i] && (s || i && !C[i])) {
        for (var a = -1, c = 0; c < b.length; c++) {
          var l = n.indexOf(b[c]);
          -1 !== l && (-1 === a || l < a) && (a = l);
        }
        var p, d;
        d = -1 === a ? n.lastIndexOf("@") : n.lastIndexOf("@", a), -1 !== d && (p = n.slice(0, d), n = n.slice(d + 1), this.auth = decodeURIComponent(p)), a = -1;
        for (var c = 0; c < y.length; c++) {
          var l = n.indexOf(y[c]);
          -1 !== l && (-1 === a || l < a) && (a = l);
        }
        -1 === a && (a = n.length), this.host = n.slice(0, a), n = n.slice(a), this.parseHost(), this.hostname = this.hostname || "";
        var m = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!m) for (var v = this.hostname.split(/\./), c = 0, R = v.length; c < R; c++) {
          var x = v[c];
          if (x && !x.match(w)) {
            for (var T = "", I = 0, k = x.length; I < k; I++) x.charCodeAt(I) > 127 ? T += "x" : T += x[I];
            if (!T.match(w)) {
              var P = v.slice(0, c),
                q = v.slice(c + 1),
                L = x.match(E);
              L && (P.push(L[1]), q.unshift(L[2])), q.length && (n = "/" + q.join(".") + n), this.hostname = P.join(".");
              break;
            }
          }
        }
        if (this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !m) {
          for (var O = this.hostname.split("."), N = [], c = 0; c < O.length; ++c) {
            var U = O[c];
            N.push(U.match(/[^A-Za-z0-9_-]/) ? "xn--" + h.encode(U) : U);
          }
          this.hostname = N.join(".");
        }
        var D = this.port ? ":" + this.port : "",
          M = this.hostname || "";
        this.host = M + D, this.href += this.host, m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n));
      }
      if (!S[o]) for (var c = 0, R = g.length; c < R; c++) {
        var j = g[c],
          B = encodeURIComponent(j);
        B === j && (B = escape(j)), n = n.split(j).join(B);
      }
      var F = n.indexOf("#");
      -1 !== F && (this.hash = n.substr(F), n = n.slice(0, F));
      var z = n.indexOf("?");
      if (-1 !== z ? (this.search = n.substr(z), this.query = n.substr(z + 1), t && (this.query = A.parse(this.query)), n = n.slice(0, z)) : t && (this.search = "", this.query = {}), n && (this.pathname = n), C[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var D = this.pathname || "",
          U = this.search || "";
        this.path = D + U;
      }
      return this.href = this.format(), this;
    }, n.prototype.format = function () {
      var e = this.auth || "";
      e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
      var t = this.protocol || "",
        r = this.pathname || "",
        n = this.hash || "",
        i = !1,
        o = "";
      this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c(this.query) && Object.keys(this.query).length && (o = A.stringify(this.query));
      var s = this.search || o && "?" + o || "";
      return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || C[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function (e) {
        return encodeURIComponent(e);
      }), s = s.replace("#", "%23"), t + i + r + s + n;
    }, n.prototype.resolve = function (e) {
      return this.resolveObject(i(e, !1, !0)).format();
    }, n.prototype.resolveObject = function (e) {
      if (u(e)) {
        var t = new n();
        t.parse(e, !1, !0), e = t;
      }
      var r = new n();
      if (Object.keys(this).forEach(function (e) {
        r[e] = this[e];
      }, this), r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
      if (e.slashes && !e.protocol) return Object.keys(e).forEach(function (t) {
        "protocol" !== t && (r[t] = e[t]);
      }), C[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
      if (e.protocol && e.protocol !== r.protocol) {
        if (!C[e.protocol]) return Object.keys(e).forEach(function (t) {
          r[t] = e[t];
        }), r.href = r.format(), r;
        if (r.protocol = e.protocol, e.host || _[e.protocol]) r.pathname = e.pathname;else {
          for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift()););
          e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== i[0] && i.unshift(""), i.length < 2 && i.unshift(""), r.pathname = i.join("/");
        }
        if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
          var o = r.pathname || "",
            s = r.search || "";
          r.path = o + s;
        }
        return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
      }
      var a = r.pathname && "/" === r.pathname.charAt(0),
        c = e.host || e.pathname && "/" === e.pathname.charAt(0),
        h = c || a || r.host && e.pathname,
        f = h,
        d = r.pathname && r.pathname.split("/") || [],
        i = e.pathname && e.pathname.split("/") || [],
        m = r.protocol && !C[r.protocol];
      if (m && (r.hostname = "", r.port = null, r.host && ("" === d[0] ? d[0] = r.host : d.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)), e.host = null), h = h && ("" === i[0] || "" === d[0])), c) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, d = i;else if (i.length) d || (d = []), d.pop(), d = d.concat(i), r.search = e.search, r.query = e.query;else if (!p(e.search)) {
        if (m) {
          r.hostname = r.host = d.shift();
          var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
          v && (r.auth = v.shift(), r.host = r.hostname = v.shift());
        }
        return r.search = e.search, r.query = e.query, l(r.pathname) && l(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
      }
      if (!d.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
      for (var g = d.slice(-1)[0], y = (r.host || e.host) && ("." === g || ".." === g) || "" === g, b = 0, w = d.length; w >= 0; w--) g = d[w], "." == g ? d.splice(w, 1) : ".." === g ? (d.splice(w, 1), b++) : b && (d.splice(w, 1), b--);
      if (!h && !f) for (; b--; b) d.unshift("..");
      !h || "" === d[0] || d[0] && "/" === d[0].charAt(0) || d.unshift(""), y && "/" !== d.join("/").substr(-1) && d.push("");
      var E = "" === d[0] || d[0] && "/" === d[0].charAt(0);
      if (m) {
        r.hostname = r.host = E ? "" : d.length ? d.shift() : "";
        var v = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
        v && (r.auth = v.shift(), r.host = r.hostname = v.shift());
      }
      return h = h || r.host && d.length, h && !E && d.unshift(""), d.length ? r.pathname = d.join("/") : (r.pathname = null, r.path = null), l(r.pathname) && l(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
    }, n.prototype.parseHost = function () {
      var e = this.host,
        t = d.exec(e);
      t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
    };
  }, {
    punycode: 88,
    querystring: 91
  }],
  97: [function (e, t, r) {
    "function" == typeof Object.create ? t.exports = function (e, t) {
      e.super_ = t, e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : t.exports = function (e, t) {
      e.super_ = t;
      var r = function r() {};
      r.prototype = t.prototype, e.prototype = new r(), e.prototype.constructor = e;
    };
  }, {}],
  98: [function (e, t, r) {
    t.exports = function (e) {
      return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
    };
  }, {}],
  99: [function (e, t, r) {
    (function (t, n) {
      (function () {
        function i(e, t) {
          var n = {
            seen: [],
            stylize: s
          };
          return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), m(t) ? n.showHidden = t : t && r._extend(n, t), E(n.showHidden) && (n.showHidden = !1), E(n.depth) && (n.depth = 2), E(n.colors) && (n.colors = !1), E(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = o), u(n, e, n.depth);
        }
        function o(e, t) {
          var r = i.styles[t];
          return r ? "[" + i.colors[r][0] + "m" + e + "[" + i.colors[r][1] + "m" : e;
        }
        function s(e, t) {
          return e;
        }
        function a(e) {
          var t = {};
          return e.forEach(function (e, r) {
            t[e] = !0;
          }), t;
        }
        function u(e, t, n) {
          if (e.customInspect && t && R(t.inspect) && t.inspect !== r.inspect && (!t.constructor || t.constructor.prototype !== t)) {
            var i = t.inspect(n, e);
            return b(i) || (i = u(e, i, n)), i;
          }
          var o = c(e, t);
          if (o) return o;
          var s = Object.keys(t),
            m = a(s);
          if (e.showHidden && (s = Object.getOwnPropertyNames(t)), A(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return l(t);
          if (0 === s.length) {
            if (R(t)) {
              var v = t.name ? ": " + t.name : "";
              return e.stylize("[Function" + v + "]", "special");
            }
            if (S(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
            if (C(t)) return e.stylize(Date.prototype.toString.call(t), "date");
            if (A(t)) return l(t);
          }
          var g = "",
            y = !1,
            w = ["{", "}"];
          if (d(t) && (y = !0, w = ["[", "]"]), R(t)) {
            g = " [Function" + (t.name ? ": " + t.name : "") + "]";
          }
          if (S(t) && (g = " " + RegExp.prototype.toString.call(t)), C(t) && (g = " " + Date.prototype.toUTCString.call(t)), A(t) && (g = " " + l(t)), 0 === s.length && (!y || 0 == t.length)) return w[0] + g + w[1];
          if (n < 0) return S(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
          e.seen.push(t);
          var E;
          return E = y ? p(e, t, n, m, s) : s.map(function (r) {
            return h(e, t, n, m, r, y);
          }), e.seen.pop(), f(E, g, w);
        }
        function c(e, t) {
          if (E(t)) return e.stylize("undefined", "undefined");
          if (b(t)) {
            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(r, "string");
          }
          return y(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0;
        }
        function l(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }
        function p(e, t, r, n, i) {
          for (var o = [], s = 0, a = t.length; s < a; ++s) P(t, String(s)) ? o.push(h(e, t, r, n, String(s), !0)) : o.push("");
          return i.forEach(function (i) {
            i.match(/^\d+$/) || o.push(h(e, t, r, n, i, !0));
          }), o;
        }
        function h(e, t, r, n, i, o) {
          var s, a, c;
          if (c = Object.getOwnPropertyDescriptor(t, i) || {
            value: t[i]
          }, c.get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), P(n, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = v(r) ? u(e, c.value, null) : u(e, c.value, r - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function (e) {
            return "  " + e;
          }).join("\n").substr(2) : "\n" + a.split("\n").map(function (e) {
            return "   " + e;
          }).join("\n"))) : a = e.stylize("[Circular]", "special")), E(s)) {
            if (o && i.match(/^\d+$/)) return a;
            s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"));
          }
          return s + ": " + a;
        }
        function f(e, t, r) {
          var n = 0;
          return e.reduce(function (e, t) {
            return n++, t.indexOf("\n") >= 0 && n++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0) > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1];
        }
        function d(e) {
          return Array.isArray(e);
        }
        function m(e) {
          return "boolean" == typeof e;
        }
        function v(e) {
          return null === e;
        }
        function g(e) {
          return null == e;
        }
        function y(e) {
          return "number" == typeof e;
        }
        function b(e) {
          return "string" == typeof e;
        }
        function w(e) {
          return "symbol" == typeof e;
        }
        function E(e) {
          return void 0 === e;
        }
        function S(e) {
          return _(e) && "[object RegExp]" === T(e);
        }
        function _(e) {
          return "object" == typeof e && null !== e;
        }
        function C(e) {
          return _(e) && "[object Date]" === T(e);
        }
        function A(e) {
          return _(e) && ("[object Error]" === T(e) || e instanceof Error);
        }
        function R(e) {
          return "function" == typeof e;
        }
        function x(e) {
          return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
        }
        function T(e) {
          return Object.prototype.toString.call(e);
        }
        function I(e) {
          return e < 10 ? "0" + e.toString(10) : e.toString(10);
        }
        function k() {
          var e = new Date(),
            t = [I(e.getHours()), I(e.getMinutes()), I(e.getSeconds())].join(":");
          return [e.getDate(), N[e.getMonth()], t].join(" ");
        }
        function P(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        var q = /%[sdj%]/g;
        r.format = function (e) {
          if (!b(e)) {
            for (var t = [], r = 0; r < arguments.length; r++) t.push(i(arguments[r]));
            return t.join(" ");
          }
          for (var r = 1, n = arguments, o = n.length, s = String(e).replace(q, function (e) {
              if ("%%" === e) return "%";
              if (r >= o) return e;
              switch (e) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (e) {
                    return "[Circular]";
                  }
                default:
                  return e;
              }
            }), a = n[r]; r < o; a = n[++r]) v(a) || !_(a) ? s += " " + a : s += " " + i(a);
          return s;
        }, r.deprecate = function (e, i) {
          function o() {
            if (!s) {
              if (t.throwDeprecation) throw new Error(i);
              t.traceDeprecation ? console.trace(i) : console.error(i), s = !0;
            }
            return e.apply(this, arguments);
          }
          if (E(n.process)) return function () {
            return r.deprecate(e, i).apply(this, arguments);
          };
          if (!0 === t.noDeprecation) return e;
          var s = !1;
          return o;
        };
        var L,
          O = {};
        r.debuglog = function (e) {
          if (E(L) && (L = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !O[e]) if (new RegExp("\\b" + e + "\\b", "i").test(L)) {
            var n = t.pid;
            O[e] = function () {
              var t = r.format.apply(r, arguments);
              console.error("%s %d: %s", e, n, t);
            };
          } else O[e] = function () {};
          return O[e];
        }, r.inspect = i, i.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }, i.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }, r.isArray = d, r.isBoolean = m, r.isNull = v, r.isNullOrUndefined = g, r.isNumber = y, r.isString = b, r.isSymbol = w, r.isUndefined = E, r.isRegExp = S, r.isObject = _, r.isDate = C, r.isError = A, r.isFunction = R, r.isPrimitive = x, r.isBuffer = e("./support/isBuffer");
        var N = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        r.log = function () {
          console.log("%s - %s", k(), r.format.apply(r, arguments));
        }, r.inherits = e("inherits"), r._extend = function (e, t) {
          if (!t || !_(t)) return e;
          for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
          return e;
        };
      }).call(this);
    }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {
    "./support/isBuffer": 98,
    _process: 87,
    inherits: 97
  }],
  100: [function (e, t, r) {
    var n = e("./v1"),
      i = e("./v4"),
      o = i;
    o.v1 = n, o.v4 = i, t.exports = o;
  }, {
    "./v1": 103,
    "./v4": 104
  }],
  101: [function (e, t, r) {
    function n(e, t) {
      var r = t || 0,
        n = i;
      return [n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], "-", n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]], n[e[r++]]].join("");
    }
    for (var i = [], o = 0; o < 256; ++o) i[o] = (o + 256).toString(16).substr(1);
    t.exports = n;
  }, {}],
  102: [function (e, t, r) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var i = new Uint8Array(16);
      t.exports = function () {
        return n(i), i;
      };
    } else {
      var o = new Array(16);
      t.exports = function () {
        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), o[t] = e >>> ((3 & t) << 3) & 255;
        return o;
      };
    }
  }, {}],
  103: [function (e, t, r) {
    function n(e, t, r) {
      var n = t && r || 0,
        l = t || [];
      e = e || {};
      var p = e.node || i,
        h = void 0 !== e.clockseq ? e.clockseq : o;
      if (null == p || null == h) {
        var f = s();
        null == p && (p = i = [1 | f[0], f[1], f[2], f[3], f[4], f[5]]), null == h && (h = o = 16383 & (f[6] << 8 | f[7]));
      }
      var d = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        m = void 0 !== e.nsecs ? e.nsecs : c + 1,
        v = d - u + (m - c) / 1e4;
      if (v < 0 && void 0 === e.clockseq && (h = h + 1 & 16383), (v < 0 || d > u) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      u = d, c = m, o = h, d += 122192928e5;
      var g = (1e4 * (268435455 & d) + m) % 4294967296;
      l[n++] = g >>> 24 & 255, l[n++] = g >>> 16 & 255, l[n++] = g >>> 8 & 255, l[n++] = 255 & g;
      var y = d / 4294967296 * 1e4 & 268435455;
      l[n++] = y >>> 8 & 255, l[n++] = 255 & y, l[n++] = y >>> 24 & 15 | 16, l[n++] = y >>> 16 & 255, l[n++] = h >>> 8 | 128, l[n++] = 255 & h;
      for (var b = 0; b < 6; ++b) l[n + b] = p[b];
      return t || a(l);
    }
    var i,
      o,
      s = e("./lib/rng"),
      a = e("./lib/bytesToUuid"),
      u = 0,
      c = 0;
    t.exports = n;
  }, {
    "./lib/bytesToUuid": 101,
    "./lib/rng": 102
  }],
  104: [function (e, t, r) {
    function n(e, t, r) {
      var n = t && r || 0;
      "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null), e = e || {};
      var s = e.random || (e.rng || i)();
      if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) for (var a = 0; a < 16; ++a) t[n + a] = s[a];
      return t || o(s);
    }
    var i = e("./lib/rng"),
      o = e("./lib/bytesToUuid");
    t.exports = n;
  }, {
    "./lib/bytesToUuid": 101,
    "./lib/rng": 102
  }],
  105: [function (e, t, r) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var n = e("./utils/LRU"),
      i = 1e3,
      o = function () {
        function e(e) {
          void 0 === e && (e = i), this.maxSize = e, this.cache = new n.LRUCache(e);
        }
        return Object.defineProperty(e.prototype, "size", {
          get: function get() {
            return this.cache.length;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.put = function (t, r) {
          var n = "string" != typeof t ? e.getKeyString(t) : t,
            i = this.populateValue(r);
          this.cache.put(n, i);
        }, e.prototype.get = function (t) {
          var r = "string" != typeof t ? e.getKeyString(t) : t,
            n = Date.now(),
            i = this.cache.get(r);
          if (i) for (var o = 0; o < i.length; o++) {
            var s = i[o];
            if (s.Expire < n) return void this.cache.remove(r);
          }
          return i;
        }, e.getKeyString = function (e) {
          for (var t = [], r = Object.keys(e).sort(), n = 0; n < r.length; n++) {
            var i = r[n];
            void 0 !== e[i] && t.push(e[i]);
          }
          return t.join(" ");
        }, e.prototype.populateValue = function (e) {
          var t = Date.now();
          return e.map(function (e) {
            return {
              Address: e.Address || "",
              Expire: t + 60 * (e.CachePeriodInMinutes || 1) * 1e3
            };
          });
        }, e.prototype.empty = function () {
          this.cache.empty();
        }, e.prototype.remove = function (t) {
          var r = "string" != typeof t ? e.getKeyString(t) : t;
          this.cache.remove(r);
        }, e;
      }();
    r.EndpointCache = o;
  }, {
    "./utils/LRU": 106
  }],
  106: [function (e, t, r) {
    "use strict";

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var n = function () {
        function e(e, t) {
          this.key = e, this.value = t;
        }
        return e;
      }(),
      i = function () {
        function e(e) {
          if (this.nodeMap = {}, this.size = 0, "number" != typeof e || e < 1) throw new Error("Cache size can only be positive number");
          this.sizeLimit = e;
        }
        return Object.defineProperty(e.prototype, "length", {
          get: function get() {
            return this.size;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.prependToList = function (e) {
          this.headerNode ? (this.headerNode.prev = e, e.next = this.headerNode) : this.tailNode = e, this.headerNode = e, this.size++;
        }, e.prototype.removeFromTail = function () {
          if (this.tailNode) {
            var e = this.tailNode,
              t = e.prev;
            return t && (t.next = void 0), e.prev = void 0, this.tailNode = t, this.size--, e;
          }
        }, e.prototype.detachFromList = function (e) {
          this.headerNode === e && (this.headerNode = e.next), this.tailNode === e && (this.tailNode = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.next = void 0, e.prev = void 0, this.size--;
        }, e.prototype.get = function (e) {
          if (this.nodeMap[e]) {
            var t = this.nodeMap[e];
            return this.detachFromList(t), this.prependToList(t), t.value;
          }
        }, e.prototype.remove = function (e) {
          if (this.nodeMap[e]) {
            var t = this.nodeMap[e];
            this.detachFromList(t), delete this.nodeMap[e];
          }
        }, e.prototype.put = function (e, t) {
          if (this.nodeMap[e]) this.remove(e);else if (this.size === this.sizeLimit) {
            var r = this.removeFromTail(),
              i = r.key;
            delete this.nodeMap[i];
          }
          var o = new n(e, t);
          this.nodeMap[e] = o, this.prependToList(o);
        }, e.prototype.empty = function () {
          for (var e = Object.keys(this.nodeMap), t = 0; t < e.length; t++) {
            var r = e[t],
              n = this.nodeMap[r];
            this.detachFromList(n), delete this.nodeMap[r];
          }
        }, e;
      }();
    r.LRUCache = i;
  }, {}],
  107: [function (e, t, r) {
    e("./browser_loader");
    var n = e("./core");
    "undefined" != typeof window && (window.AWS = n), void 0 !== t && (t.exports = n), "undefined" != typeof self && (self.AWS = n), Object.prototype.hasOwnProperty.call(n, "ConnectParticipant") || (n.apiLoader.services.connectparticipant = {}, n.ConnectParticipant = n.Service.defineService("connectparticipant", ["2018-09-07"])), n.apiLoader.services.connectparticipant["2018-09-07"] = e("../apis/connectparticipant-2018-09-07.min"), n.apiLoader.services.connectparticipant["2018-09-07"].paginators = e("../apis/connectparticipant-2018-09-07.paginators").pagination, Object.prototype.hasOwnProperty.call(n, "STS") || (n.apiLoader.services.sts = {}, n.STS = n.Service.defineService("sts", ["2011-06-15"]), e("./services/sts"));
  }, {
    "../apis/connectparticipant-2018-09-07.min": 3,
    "../apis/connectparticipant-2018-09-07.paginators": 4,
    "../apis/sts-2011-06-15.min": 6,
    "./browser_loader": 17,
    "./core": 20,
    "./services/sts": 63
  }]
}, {}, [107]);

/***/ }),

/***/ "./src/client/client.js":
/*!******************************!*\
  !*** ./src/client/client.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatClientFactory": () => (/* binding */ ChatClientFactory)
/* harmony export */ });
/* harmony import */ var _core_exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/exceptions */ "./src/core/exceptions.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalConfig */ "./src/globalConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../log */ "./src/log.js");
/* harmony import */ var _aws_sdk_connectparticipant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aws-sdk-connectparticipant */ "./src/client/aws-sdk-connectparticipant.js");
/* harmony import */ var _aws_sdk_connectparticipant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_connectparticipant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




//Note: this imports AWS instead from aws-sdk npm package - details in ReadMe



var DEFAULT_PREFIX = "Amazon-Connect-ChatJS-ChatClient";
class ChatClientFactoryImpl {
  constructor() {
    this.clientCache = {};
  }
  getCachedClient(optionsInput, logMetaData) {
    var options = Object.assign({}, optionsInput);
    var region = optionsInput.region || _globalConfig__WEBPACK_IMPORTED_MODULE_1__.GlobalConfig.getRegion() || _constants__WEBPACK_IMPORTED_MODULE_2__.REGIONS.pdx;
    options.region = region;
    logMetaData.region = region;
    if (this.clientCache[region]) {
      return this.clientCache[region];
    }
    var client = this._createAwsClient(options, logMetaData);
    this.clientCache[region] = client;
    return client;
  }
  _createAwsClient(options, logMetaData) {
    var region = options.region;
    var endpointOverride = _globalConfig__WEBPACK_IMPORTED_MODULE_1__.GlobalConfig.getEndpointOverride();
    var endpointUrl = "https://participant.connect.".concat(region, ".amazonaws.com");
    if (endpointOverride) {
      endpointUrl = endpointOverride;
    }
    return new AWSChatClient({
      endpoint: endpointUrl,
      region: region,
      logMetaData
    });
  }
}

/*eslint-disable*/
class ChatClient {
  sendMessage(participantToken, message, type) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("sendTextMessage in ChatClient");
  }
  sendAttachment(participantToken, attachment, metadata) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("sendAttachment in ChatClient");
  }
  downloadAttachment(participantToken, attachmentId) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("downloadAttachment in ChatClient");
  }
  disconnectParticipant(participantToken) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("disconnectParticipant in ChatClient");
  }
  sendEvent(connectionToken, contentType, content) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("sendEvent in ChatClient");
  }
  createParticipantConnection(participantToken, type) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("createParticipantConnection in ChatClient");
  }
}
/*eslint-enable*/

class AWSChatClient extends ChatClient {
  constructor(args) {
    super();
    _defineProperty(this, "throttleEvent", lodash_throttle__WEBPACK_IMPORTED_MODULE_5___default()((connectionToken, contentType, content) => {
      return this._submitEvent(connectionToken, contentType, content);
    }, _constants__WEBPACK_IMPORTED_MODULE_2__.TYPING_VALIDITY_TIME, {
      trailing: false,
      leading: true
    }));
    var creds = new AWS.Credentials('', '');
    var config = new AWS.Config({
      region: args.region,
      endpoint: args.endpoint,
      credentials: creds
    });
    this.chatClient = new AWS.ConnectParticipant(config);
    this.invokeUrl = args.endpoint;
    this.logger = _log__WEBPACK_IMPORTED_MODULE_3__.LogManager.getLogger({
      prefix: DEFAULT_PREFIX,
      logMetaData: args.logMetaData
    });
  }
  createParticipantConnection(participantToken, type, acknowledgeConnection) {
    var self = this;
    var params = {
      ParticipantToken: participantToken,
      Type: type,
      ConnectParticipant: acknowledgeConnection
    };
    var createParticipantConnectionRequest = self.chatClient.createParticipantConnection(params);
    return self._sendRequest(createParticipantConnectionRequest).then(res => {
      var _self$logger$info, _self$logger$info$sen;
      (_self$logger$info = self.logger.info("Successfully create connection request")) === null || _self$logger$info === void 0 ? void 0 : (_self$logger$info$sen = _self$logger$info.sendInternalLogToServer) === null || _self$logger$info$sen === void 0 ? void 0 : _self$logger$info$sen.call(_self$logger$info);
      return res;
    }).catch(err => {
      var _self$logger$error, _self$logger$error$se;
      (_self$logger$error = self.logger.error("Error when creating connection request ", err)) === null || _self$logger$error === void 0 ? void 0 : (_self$logger$error$se = _self$logger$error.sendInternalLogToServer) === null || _self$logger$error$se === void 0 ? void 0 : _self$logger$error$se.call(_self$logger$error);
      return Promise.reject(err);
    });
  }
  disconnectParticipant(connectionToken) {
    var self = this;
    var params = {
      ConnectionToken: connectionToken
    };
    var disconnectParticipantRequest = self.chatClient.disconnectParticipant(params);
    return self._sendRequest(disconnectParticipantRequest).then(res => {
      var _self$logger$info2, _self$logger$info2$se;
      (_self$logger$info2 = self.logger.info("Successfully disconnect participant")) === null || _self$logger$info2 === void 0 ? void 0 : (_self$logger$info2$se = _self$logger$info2.sendInternalLogToServer) === null || _self$logger$info2$se === void 0 ? void 0 : _self$logger$info2$se.call(_self$logger$info2);
      return res;
    }).catch(err => {
      var _self$logger$error2, _self$logger$error2$s;
      (_self$logger$error2 = self.logger.error("Error when disconnecting participant ", err)) === null || _self$logger$error2 === void 0 ? void 0 : (_self$logger$error2$s = _self$logger$error2.sendInternalLogToServer) === null || _self$logger$error2$s === void 0 ? void 0 : _self$logger$error2$s.call(_self$logger$error2);
      return Promise.reject(err);
    });
  }
  getTranscript(connectionToken, args) {
    var self = this;
    var params = {
      MaxResults: args.maxResults,
      NextToken: args.nextToken,
      ScanDirection: args.scanDirection,
      SortOrder: args.sortOrder,
      StartPosition: {
        Id: args.startPosition.id,
        AbsoluteTime: args.startPosition.absoluteTime,
        MostRecent: args.startPosition.mostRecent
      },
      ConnectionToken: connectionToken
    };
    if (args.contactId) {
      params.ContactId = args.contactId;
    }
    var getTranscriptRequest = self.chatClient.getTranscript(params);
    return self._sendRequest(getTranscriptRequest).then(res => {
      this.logger.info("Successfully get transcript");
      return res;
    }).catch(err => {
      this.logger.error("Get transcript error", err);
      return Promise.reject(err);
    });
  }
  sendMessage(connectionToken, content, contentType) {
    var self = this;
    var params = {
      Content: content,
      ContentType: contentType,
      ConnectionToken: connectionToken
    };
    var sendMessageRequest = self.chatClient.sendMessage(params);
    return self._sendRequest(sendMessageRequest).then(res => {
      var _res$data;
      var logContent = {
        id: (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.Id,
        contentType: params.ContentType
      };
      this.logger.debug("Successfully send message", logContent);
      return res;
    }).catch(err => {
      this.logger.error("Send message error", err, {
        contentType: params.ContentType
      });
      return Promise.reject(err);
    });
  }
  sendAttachment(connectionToken, attachment, metadata) {
    var self = this;
    var startUploadRequestParams = {
      ContentType: attachment.type,
      AttachmentName: attachment.name,
      AttachmentSizeInBytes: attachment.size,
      ConnectionToken: connectionToken
    };
    var startUploadRequest = self.chatClient.startAttachmentUpload(startUploadRequestParams);
    var logContent = {
      contentType: attachment.type,
      size: attachment.size
    };
    return self._sendRequest(startUploadRequest).then(startUploadResponse => {
      return self._uploadToS3(attachment, startUploadResponse.data.UploadMetadata).then(() => {
        var _startUploadResponse$;
        var completeUploadRequestParams = {
          AttachmentIds: [startUploadResponse.data.AttachmentId],
          ConnectionToken: connectionToken
        };
        this.logger.debug("Successfully upload attachment", _objectSpread(_objectSpread({}, logContent), {}, {
          attachmentId: (_startUploadResponse$ = startUploadResponse.data) === null || _startUploadResponse$ === void 0 ? void 0 : _startUploadResponse$.AttachmentId
        }));
        var completeUploadRequest = self.chatClient.completeAttachmentUpload(completeUploadRequestParams);
        return self._sendRequest(completeUploadRequest);
      });
    }).catch(err => {
      this.logger.error("Upload attachment error", err, logContent);
      return Promise.reject(err);
    });
  }
  _uploadToS3(file, metadata) {
    return fetch(metadata.Url, {
      method: "PUT",
      headers: metadata.HeadersToInclude,
      body: file
    });
  }
  downloadAttachment(connectionToken, attachmentId) {
    var self = this;
    var params = {
      AttachmentId: attachmentId,
      ConnectionToken: connectionToken
    };
    var logContent = {
      attachmentId
    };
    var getAttachmentRequest = self.chatClient.getAttachment(params);
    return self._sendRequest(getAttachmentRequest).then(response => {
      this.logger.debug("Successfully download attachment", logContent);
      return self._downloadUrl(response.data.Url);
    }).catch(err => {
      this.logger.error("Download attachment error", err, logContent);
      return Promise.reject(err);
    });
  }
  _downloadUrl(url) {
    return fetch(url).then(t => t.blob()).catch(err => {
      return Promise.reject(err);
    });
  }
  sendEvent(connectionToken, contentType, content) {
    var self = this;
    if (contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.typing) {
      return self.throttleEvent(connectionToken, contentType, content);
    }
    return self._submitEvent(connectionToken, contentType, content);
  }
  _submitEvent(connectionToken, contentType, content) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var self = _this;
      var params = {
        ConnectionToken: connectionToken,
        ContentType: contentType,
        Content: content
      };
      var sendEventRequest = self.chatClient.sendEvent(params);
      var logContent = {
        contentType
      };
      try {
        var _res$data2;
        var res = yield self._sendRequest(sendEventRequest);
        _this.logger.debug("Successfully send event", _objectSpread(_objectSpread({}, logContent), {}, {
          id: (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.Id
        }));
        return res;
      } catch (err) {
        return yield Promise.reject(err);
      }
    })();
  }
  _sendRequest(request) {
    return new Promise((resolve, reject) => {
      request.on("success", function (res) {
        resolve(res);
      }).on("error", function (err) {
        var errObj = {
          type: err.code,
          message: err.message,
          stack: err.stack ? err.stack.split('\n') : [],
          statusCode: err.statusCode
        };
        reject(errObj);
      }).send();
    });
  }
}
var ChatClientFactory = new ChatClientFactoryImpl();


/***/ }),

/***/ "./src/configs/csmConfig.js":
/*!**********************************!*\
  !*** ./src/configs/csmConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAT_WIDGET_METRIC_NAME_SPACE": () => (/* binding */ CHAT_WIDGET_METRIC_NAME_SPACE),
/* harmony export */   "DEFAULT_WIDGET_TYPE": () => (/* binding */ DEFAULT_WIDGET_TYPE),
/* harmony export */   "getLdasEndpointUrl": () => (/* binding */ getLdasEndpointUrl)
/* harmony export */ });
var CHAT_WIDGET_METRIC_NAME_SPACE = "chat-widget";
var DEFAULT_WIDGET_TYPE = "CustomChatWidget";
var getLdasEndpointUrl = region => {
  return "https://ieluqbvv.telemetry.connect.".concat(region, ".amazonaws.com/prod");
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACPS_METHODS": () => (/* binding */ ACPS_METHODS),
/* harmony export */   "AGENT_RECONNECT_CONFIG": () => (/* binding */ AGENT_RECONNECT_CONFIG),
/* harmony export */   "AUTH_HEADER": () => (/* binding */ AUTH_HEADER),
/* harmony export */   "CHAT_CONFIGURATIONS": () => (/* binding */ CHAT_CONFIGURATIONS),
/* harmony export */   "CHAT_EVENTS": () => (/* binding */ CHAT_EVENTS),
/* harmony export */   "CHAT_EVENT_TYPE_MAPPING": () => (/* binding */ CHAT_EVENT_TYPE_MAPPING),
/* harmony export */   "CONNECTION_TOKEN_EXPIRY_BUFFER_IN_MS": () => (/* binding */ CONNECTION_TOKEN_EXPIRY_BUFFER_IN_MS),
/* harmony export */   "CONNECTION_TOKEN_POLLING_INTERVAL_IN_MS": () => (/* binding */ CONNECTION_TOKEN_POLLING_INTERVAL_IN_MS),
/* harmony export */   "CONN_ACK_FAILED": () => (/* binding */ CONN_ACK_FAILED),
/* harmony export */   "CONTENT_TYPE": () => (/* binding */ CONTENT_TYPE),
/* harmony export */   "CREATE_PARTICIPANT_CONACK_API_CALL_COUNT": () => (/* binding */ CREATE_PARTICIPANT_CONACK_API_CALL_COUNT),
/* harmony export */   "CREATE_PARTICIPANT_CONACK_FAILURE": () => (/* binding */ CREATE_PARTICIPANT_CONACK_FAILURE),
/* harmony export */   "CSM_CATEGORY": () => (/* binding */ CSM_CATEGORY),
/* harmony export */   "CUSTOMER_RECONNECT_CONFIG": () => (/* binding */ CUSTOMER_RECONNECT_CONFIG),
/* harmony export */   "EVENT": () => (/* binding */ EVENT),
/* harmony export */   "FEATURES": () => (/* binding */ FEATURES),
/* harmony export */   "LOGS_DESTINATION": () => (/* binding */ LOGS_DESTINATION),
/* harmony export */   "MESSAGE": () => (/* binding */ MESSAGE),
/* harmony export */   "MOCK_USER_AGENT": () => (/* binding */ MOCK_USER_AGENT),
/* harmony export */   "PARTICIPANT_TOKEN_HEADER": () => (/* binding */ PARTICIPANT_TOKEN_HEADER),
/* harmony export */   "REGIONS": () => (/* binding */ REGIONS),
/* harmony export */   "RESOURCE_PATH": () => (/* binding */ RESOURCE_PATH),
/* harmony export */   "SEND_EVENT_CONACK_FAILURE": () => (/* binding */ SEND_EVENT_CONACK_FAILURE),
/* harmony export */   "SEND_EVENT_CONACK_THROTTLED": () => (/* binding */ SEND_EVENT_CONACK_THROTTLED),
/* harmony export */   "SESSION_TYPES": () => (/* binding */ SESSION_TYPES),
/* harmony export */   "START_CHAT_SESSION": () => (/* binding */ START_CHAT_SESSION),
/* harmony export */   "TRANSCRIPT_DEFAULT_PARAMS": () => (/* binding */ TRANSCRIPT_DEFAULT_PARAMS),
/* harmony export */   "TRANSPORT_LIFETIME_IN_SECONDS": () => (/* binding */ TRANSPORT_LIFETIME_IN_SECONDS),
/* harmony export */   "TYPING_VALIDITY_TIME": () => (/* binding */ TYPING_VALIDITY_TIME),
/* harmony export */   "WEBSOCKET_EVENTS": () => (/* binding */ WEBSOCKET_EVENTS)
/* harmony export */ });
//Placeholder
var CHAT_CONFIGURATIONS = {
  CONCURRENT_CHATS: 10
};
var PARTICIPANT_TOKEN_HEADER = "x-amzn-connect-participant-token";
var AUTH_HEADER = "X-Amz-Bearer";
var FEATURES = {
  MESSAGE_RECEIPTS_ENABLED: "MESSAGE_RECEIPTS_ENABLED"
};
var RESOURCE_PATH = {
  CONNECTION_DETAILS: "/contact/chat/participant/connection-details",
  MESSAGE: "/participant/message",
  TRANSCRIPT: "/participant/transcript",
  EVENT: "/participant/event",
  DISCONNECT: "/participant/disconnect",
  PARTICIPANT_CONNECTION: "/participant/connection",
  ATTACHMENT: "/participant/attachment"
};
var SESSION_TYPES = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER"
};
var CSM_CATEGORY = {
  API: "API",
  UI: "UI"
};
var ACPS_METHODS = {
  SEND_MESSAGE: "SendMessage",
  SEND_ATTACHMENT: "SendAttachment",
  DOWNLOAD_ATTACHMENT: "DownloadAttachment",
  SEND_EVENT: "SendEvent",
  GET_TRANSCRIPT: "GetTranscript",
  DISCONNECT_PARTICIPANT: "DisconnectParticipant",
  CREATE_PARTICIPANT_CONNECTION: "CreateParticipantConnection"
};
var WEBSOCKET_EVENTS = {
  ConnectionLost: "WebsocketConnectionLost",
  ConnectionGained: "WebsocketConnectionGained",
  Ended: "WebsocketEnded",
  IncomingMessage: "WebsocketIncomingMessage",
  InitWebsocket: "InitWebsocket"
};
var CHAT_EVENTS = {
  INCOMING_MESSAGE: "INCOMING_MESSAGE",
  INCOMING_TYPING: "INCOMING_TYPING",
  INCOMING_READ_RECEIPT: "INCOMING_READ_RECEIPT",
  INCOMING_DELIVERED_RECEIPT: "INCOMING_DELIVERED_RECEIPT",
  CONNECTION_ESTABLISHED: "CONNECTION_ESTABLISHED",
  CONNECTION_LOST: "CONNECTION_LOST",
  CONNECTION_BROKEN: "CONNECTION_BROKEN",
  CONNECTION_ACK: "CONNECTION_ACK",
  CHAT_ENDED: "CHAT_ENDED",
  MESSAGE_METADATA: "MESSAGEMETADATA",
  PARTICIPANT_IDLE: "PARTICIPANT_IDLE",
  PARTICIPANT_RETURNED: "PARTICIPANT_RETURNED",
  AUTODISCONNECTION: "AUTODISCONNECTION"
};
var CONTENT_TYPE = {
  textPlain: "text/plain",
  textMarkdown: "text/markdown",
  textCsv: "text/csv",
  applicationDoc: "application/msword",
  applicationDocx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  applicationJson: "application/json",
  applicationPdf: "application/pdf",
  applicationPpt: "application/vnd.ms-powerpoint",
  applicationPptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  applicationXls: "application/vnd.ms-excel",
  applicationXlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  imageJpg: "image/jpeg",
  imagePng: "image/png",
  audioWav: "audio/wav",
  audioXWav: "audio/x-wav",
  //Firefox
  audioVndWave: "audio/vnd.wave",
  //IE
  connectionAcknowledged: "application/vnd.amazonaws.connect.event.connection.acknowledged",
  typing: "application/vnd.amazonaws.connect.event.typing",
  participantJoined: "application/vnd.amazonaws.connect.event.participant.joined",
  participantLeft: "application/vnd.amazonaws.connect.event.participant.left",
  participantActive: "application/vnd.amazonaws.connect.event.participant.active",
  participantInactive: "application/vnd.amazonaws.connect.event.participant.inactive",
  transferSucceeded: "application/vnd.amazonaws.connect.event.transfer.succeeded",
  transferFailed: "application/vnd.amazonaws.connect.event.transfer.failed",
  chatEnded: "application/vnd.amazonaws.connect.event.chat.ended",
  interactiveMessage: "application/vnd.amazonaws.connect.message.interactive",
  interactiveMessageResponse: "application/vnd.amazonaws.connect.message.interactive.response",
  readReceipt: "application/vnd.amazonaws.connect.event.message.read",
  deliveredReceipt: "application/vnd.amazonaws.connect.event.message.delivered",
  participantIdle: "application/vnd.amazonaws.connect.event.participant.idle",
  participantReturned: "application/vnd.amazonaws.connect.event.participant.returned",
  autoDisconnection: "application/vnd.amazonaws.connect.event.participant.autodisconnection"
};
var CHAT_EVENT_TYPE_MAPPING = {
  [CONTENT_TYPE.typing]: CHAT_EVENTS.INCOMING_TYPING,
  [CONTENT_TYPE.readReceipt]: CHAT_EVENTS.INCOMING_READ_RECEIPT,
  [CONTENT_TYPE.deliveredReceipt]: CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT,
  [CONTENT_TYPE.participantIdle]: CHAT_EVENTS.PARTICIPANT_IDLE,
  [CONTENT_TYPE.participantReturned]: CHAT_EVENTS.PARTICIPANT_RETURNED,
  [CONTENT_TYPE.autoDisconnection]: CHAT_EVENTS.AUTODISCONNECTION,
  default: CHAT_EVENTS.INCOMING_MESSAGE
};
var EVENT = "EVENT";
var MESSAGE = "MESSAGE";
var CONN_ACK_FAILED = "CONN_ACK_FAILED";
var TRANSCRIPT_DEFAULT_PARAMS = {
  MAX_RESULTS: 15,
  SORT_ORDER: "ASCENDING",
  SCAN_DIRECTION: "BACKWARD"
};
var LOGS_DESTINATION = {
  NULL: "NULL",
  CLIENT_LOGGER: "CLIENT_LOGGER",
  DEBUG: "DEBUG"
};
var REGIONS = {
  pdx: "us-west-2",
  iad: "us-east-1",
  syd: "ap-southeast-2",
  nrt: "ap-northeast-1",
  fra: "eu-central-1",
  pdt: "us-gov-west-1",
  yul: "ca-central-1",
  icn: "ap-northeast-2",
  cpt: "af-south-1"
};
var AGENT_RECONNECT_CONFIG = {
  interval: 3000,
  maxRetries: 5
};
var CUSTOMER_RECONNECT_CONFIG = {
  interval: 3000,
  maxRetries: 5
};
var CONNECTION_TOKEN_POLLING_INTERVAL_IN_MS = 1000 * 60 * 60 * 12; // 12 hours

var CONNECTION_TOKEN_EXPIRY_BUFFER_IN_MS = 60 * 1000; //1 min

var TRANSPORT_LIFETIME_IN_SECONDS = 3540; // 59 mins

var START_CHAT_SESSION = "StartChatSession";
var MOCK_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36';
var SEND_EVENT_CONACK_THROTTLED = "SEND_EVENT_CONACK_THROTTLED";
var CREATE_PARTICIPANT_CONACK_FAILURE = "CREATE_PARTICIPANT_CONACK_FAILURE";
var SEND_EVENT_CONACK_FAILURE = "SEND_EVENT_CONACK_FAILURE";
var CREATE_PARTICIPANT_CONACK_API_CALL_COUNT = "CREATE_PARTICIPANT_CONACK_CALL_COUNT";
var TYPING_VALIDITY_TIME = 10000;

/***/ }),

/***/ "./src/core/MessageReceiptsUtil.js":
/*!*****************************************!*\
  !*** ./src/core/MessageReceiptsUtil.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageReceiptsUtil)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globalConfig */ "./src/globalConfig.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log */ "./src/log.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class MessageReceiptsUtil {
  constructor(logMetaData) {
    this.logger = _log__WEBPACK_IMPORTED_MODULE_2__.LogManager.getLogger({
      prefix: 'ChatJS-MessageReceiptUtil',
      logMetaData
    });
    this.timeout = null;
    this.timeoutId = null;
    this.readSet = new Set();
    this.deliveredSet = new Set();
    this.readPromiseMap = new Map();
    this.deliveredPromiseMap = new Map();
    this.lastReadArgs = null;
    this.throttleInitialEventsToPrioritizeRead = null;
    this.throttleSendEventApiCall = null;
  }

  /**
   * check if message is of type read or delivered event
   *
   * @param {string} eventType either INCOMING_READ_RECEIPT or INCOMING_DELIVERED_RECEIPT.
   * @param {Object} incomingData object contains messageDetails
   * @return {boolean} returns true if read or delivered event else false
  */
  isMessageReceipt(eventType, incomingData) {
    return [_constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT, _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT].indexOf(eventType) !== -1 || incomingData.Type === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.MESSAGE_METADATA;
  }

  /** 
   * check if message is for currentParticipantId 
   * 
   * @param {string} currentParticipantId of the contact
   * @param {Object} incomingData object contains messageDetails
   * @return {boolean} returns true if we need to display messageReceipt for the currentParticipantId
   * 
  */
  getEventTypeFromMessageMetaData(messageMetadata) {
    return Array.isArray(messageMetadata.Receipts) && messageMetadata.Receipts[0] && messageMetadata.Receipts[0].ReadTimestamp ? _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT : messageMetadata.Receipts[0].DeliveredTimestamp ? _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT : null;
  }

  /** 
   * check if message is for currentParticipantId 
   * 
   * @param {string} currentParticipantId of the contact
   * @param {Object} incomingData object contains messageDetails
   * @return {boolean} returns true if we need to display messageReceipt for the currentParticipantId
   * 
  */
  shouldShowMessageReceiptForCurrentParticipantId(currentParticipantId, incomingData) {
    var recipientParticipantId = incomingData.MessageMetadata && Array.isArray(incomingData.MessageMetadata.Receipts) && incomingData.MessageMetadata.Receipts[0] && incomingData.MessageMetadata.Receipts[0].RecipientParticipantId;
    return currentParticipantId !== recipientParticipantId;
  }

  /**
   * Assumption: sendMessageReceipts are called in correct order of time the messages are Delivered or Read
   * Prioritize Read Event by Throttling Delivered events for 300ms but firing Read events immediately!
   *
   * @param {function} callback The callback fn to throttle and invoke.
   * @param {Array} args array of params [connectionToken, contentType, content, eventType, throttleTime]
   * @return {promise} returnPromise for Read and Delivered events
  */
  prioritizeAndSendMessageReceipt(ChatClientContext, callback) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    try {
      var self = this;
      var deliverEventThrottleTime = 300;
      var eventType = args[3];
      var content = typeof args[2] === "string" ? JSON.parse(args[2]) : args[2];
      var messageId = typeof content === "object" ? content.messageId : "";

      //ignore repeat events - do not make sendEvent API call.
      if (self.readSet.has(messageId) || eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT && self.deliveredSet.has(messageId) || !messageId) {
        this.logger.info("Event already fired ".concat(messageId, ": sending messageReceipt ").concat(eventType));
        return Promise.resolve({
          message: 'Event already fired'
        });
      }
      var resolve, reject;
      var returnPromise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });
      if (eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT) {
        self.deliveredPromiseMap.set(messageId, [resolve, reject]);
      } else {
        self.readPromiseMap.set(messageId, [resolve, reject]);
      }
      self.throttleInitialEventsToPrioritizeRead = function () {
        // ignore Delivered event if Read event has been triggered for the current messageId
        if (eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT) {
          self.deliveredSet.add(messageId);
          if (self.readSet.has(messageId)) {
            self.resolveDeliveredPromises(messageId, 'Event already fired');
            return resolve({
              message: 'Event already fired'
            });
          }
        }
        if (self.readSet.has(messageId)) {
          self.resolveReadPromises(messageId, 'Event already fired');
          return resolve({
            message: 'Event already fired'
          });
        }
        if (eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT) {
          self.readSet.add(messageId);
        }
        if (content.disableThrottle) {
          this.logger.info("throttleFn disabled for ".concat(messageId, ": sending messageReceipt ").concat(eventType));
          return resolve(callback.call(ChatClientContext, ...args));
        }
        self.logger.debug('call next throttleFn sendMessageReceipts', args);
        self.sendMessageReceipts.call(self, ChatClientContext, callback, ...args);
      };
      if (!self.timeout) {
        self.timeout = setTimeout(function () {
          self.timeout = null;
          self.throttleInitialEventsToPrioritizeRead();
        }, deliverEventThrottleTime);
      }

      //prevent multiple Read events for same messageId - call readEvent without delay
      if (eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT && !self.readSet.has(messageId)) {
        clearTimeout(self.timeout);
        self.timeout = null;
        self.throttleInitialEventsToPrioritizeRead();
      }
      return returnPromise;
    } catch (Err) {
      return Promise.reject(_objectSpread({
        message: "Failed to send messageReceipt",
        args
      }, Err));
    }
  }

  /**
   * Throttle for ${GlobalConfig.getMessageReceiptsThrottleTime()} and then fire Read and Delivered events
   *
   * @param {function} callback The callback fn to throttle and invoke.
   * @param {Array} args array of params [connectionToken, contentType, content, eventType, throttleTime]
  */
  sendMessageReceipts(ChatClientContext, callback) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }
    var self = this;
    var throttleTime = args[4] || _globalConfig__WEBPACK_IMPORTED_MODULE_1__.GlobalConfig.getMessageReceiptsThrottleTime();
    var eventType = args[3];
    var content = typeof args[2] === "string" ? JSON.parse(args[2]) : args[2];
    var messageId = content.messageId;
    this.lastReadArgs = eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT ? args : this.lastReadArgs;
    self.throttleSendEventApiCall = function () {
      try {
        if (eventType === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.INCOMING_READ_RECEIPT) {
          var sendEventPromise = callback.call(ChatClientContext, ...args);
          self.resolveReadPromises(messageId, sendEventPromise);
          self.logger.debug('send Read event:', callback, args);
        } else {
          //delivered event is the last event fired
          //fire delivered for latest messageId
          //fire read for latest messageId
          var PromiseArr = [callback.call(ChatClientContext, ...args)];
          if (this.lastReadArgs) {
            var contentVal = typeof this.lastReadArgs[2] === "string" ? JSON.parse(this.lastReadArgs[2]) : this.lastReadArgs[2];
            var readEventMessageId = contentVal.messageId;
            // if readPromise has been resolved for readEventMessageId; readPromiseMap should not contain readEventMessageId
            // if readPromiseMap contains readEventMessageId; read event has not been called!
            if (self.readPromiseMap.has(readEventMessageId)) {
              PromiseArr.push(callback.call(ChatClientContext, ...this.lastReadArgs));
            }
          }
          self.logger.debug('send Delivered event:', args, 'read event:', this.lastReadArgs);
          Promise.all(PromiseArr).then(res => {
            self.resolveReadPromises(contentVal.messageId, res[0]);
            self.resolveDeliveredPromises(messageId, res[0]);
          });
        }
      } catch (err) {
        self.logger.error('send message receipt failed', err);
        self.resolveReadPromises(messageId, err, true);
        self.resolveDeliveredPromises(messageId, err, true);
      }
    };
    if (!self.timeoutId) {
      self.timeoutId = setTimeout(function () {
        self.timeoutId = null;
        self.throttleSendEventApiCall();
      }, throttleTime);
    }
  }

  /**
   * resolve All Delivered promises till messageId
   *
   * @param {string} messageId of the latest message receipt event
   * @param {Object} result of the latest message receipt event
  */
  resolveDeliveredPromises(messageId, result, isError) {
    return this.resolvePromises(this.deliveredPromiseMap, messageId, result, isError);
  }

  /**
   * resolve All Read promises till messageId
   *
   * @param {string} messageId of the latest message receipt event
   * @param {Object} result of the latest message receipt event
  */
  resolveReadPromises(messageId, result, isError) {
    return this.resolvePromises(this.readPromiseMap, messageId, result, isError);
  }

  /**
   * resolve All promises till messageId
   *
   * @param {Map} promiseMap of either send or delivered promises
   * @param {string} messageId of the latest message receipt event
   * @param {Object} result of the latest message receipt event
  */
  resolvePromises(promiseMap, messageId, result, isError) {
    var arr = Array.from(promiseMap.keys());
    var indexToResolve = arr.indexOf(messageId);
    if (indexToResolve !== -1) {
      for (var i = 0; i <= indexToResolve; i++) {
        var _promiseMap$get;
        var callbackFn = (_promiseMap$get = promiseMap.get(arr[i])) === null || _promiseMap$get === void 0 ? void 0 : _promiseMap$get[isError ? 1 : 0];
        if (typeof callbackFn === 'function') {
          promiseMap.delete(arr[i]);
          callbackFn(result);
        }
      }
    } else {
      this.logger.debug("Promise for messageId: ".concat(messageId, " already resolved"));
    }
  }

  /**
   * getTranscript API call should hydrate readSet and deliveredSet
   *
   * @param {function} callback to call with getTranscript response object.
   * @param {boolean} shouldSendMessageReceipts decides whether to hydrate mappers or not
   * @return {function} function which takes in input response from API call and calls callback with response.
  */
  rehydrateReceiptMappers(callback, shouldSendMessageReceipts) {
    var self = this;
    return response => {
      self.logger.debug('rehydrate chat', response === null || response === void 0 ? void 0 : response.data);
      if (shouldSendMessageReceipts) {
        var {
          Transcript = []
        } = (response === null || response === void 0 ? void 0 : response.data) || {};
        Transcript.forEach(transcript => {
          if ((transcript === null || transcript === void 0 ? void 0 : transcript.Type) === _constants__WEBPACK_IMPORTED_MODULE_0__.CHAT_EVENTS.MESSAGE_METADATA) {
            var _transcript$MessageMe, _transcript$MessageMe2, _transcript$MessageMe3;
            var Receipt = transcript === null || transcript === void 0 ? void 0 : (_transcript$MessageMe = transcript.MessageMetadata) === null || _transcript$MessageMe === void 0 ? void 0 : (_transcript$MessageMe2 = _transcript$MessageMe.Receipts) === null || _transcript$MessageMe2 === void 0 ? void 0 : _transcript$MessageMe2[0];
            var messageId = transcript === null || transcript === void 0 ? void 0 : (_transcript$MessageMe3 = transcript.MessageMetadata) === null || _transcript$MessageMe3 === void 0 ? void 0 : _transcript$MessageMe3.MessageId;
            if (Receipt !== null && Receipt !== void 0 && Receipt.ReadTimestamp) {
              this.readSet.add(messageId);
            }
            if (Receipt !== null && Receipt !== void 0 && Receipt.DeliveredTimestamp) {
              this.deliveredSet.add(messageId);
            }
          }
        });
      }
      // send MessageReceipt for latest message is done by ChatInterface
      // UI will send Read receipt for the latest message displayed in the UI.
      return callback(response);
    };
  }
}

/***/ }),

/***/ "./src/core/chatArgsValidator.js":
/*!***************************************!*\
  !*** ./src/core/chatArgsValidator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatServiceArgsValidator": () => (/* binding */ ChatServiceArgsValidator)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exceptions */ "./src/core/exceptions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



class ChatControllerArgsValidator {
  /*eslint-disable no-unused-vars*/
  validateNewControllerDetails(chatDetails) {
    return true;
  }
  /*eslint-enable no-unused-vars*/

  validateSendMessage(args) {
    if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(args.message)) {
      throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.IllegalArgumentException(args.message + "is not a valid message");
    }
    this.validateContentType(args.contentType);
  }
  validateContentType(contentType) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsEnum(contentType, Object.values(_constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE), "contentType");
  }

  /*eslint-disable no-unused-vars*/
  validateConnectChat(args) {
    return true;
  }
  /*eslint-enable no-unused-vars*/

  validateLogger(logger) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsObject(logger, "logger");
    ["debug", "info", "warn", "error"].forEach(methodName => {
      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(logger[methodName])) {
        throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.IllegalArgumentException(methodName + " should be a valid function on the passed logger object!");
      }
    });
  }
  validateSendEvent(args) {
    this.validateContentType(args.contentType);
  }

  /*eslint-disable no-unused-vars*/
  validateGetMessages(args) {
    return true;
  }
  /*eslint-enable no-unused-vars*/
}

class ChatServiceArgsValidator extends ChatControllerArgsValidator {
  validateChatDetails(chatDetails, sessionType) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsObject(chatDetails, "chatDetails");
    if (sessionType === _constants__WEBPACK_IMPORTED_MODULE_2__.SESSION_TYPES.AGENT && !_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(chatDetails.getConnectionToken)) {
      throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.IllegalArgumentException("getConnectionToken was not a function", chatDetails.getConnectionToken);
    }
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsNonEmptyString(chatDetails.contactId, "chatDetails.contactId");
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsNonEmptyString(chatDetails.participantId, "chatDetails.participantId");
    if (sessionType === _constants__WEBPACK_IMPORTED_MODULE_2__.SESSION_TYPES.CUSTOMER) {
      if (chatDetails.participantToken) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertIsNonEmptyString(chatDetails.participantToken, "chatDetails.participantToken");
      } else {
        throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.IllegalArgumentException("participantToken was not provided for a customer session type", chatDetails.participantToken);
      }
    }
  }
  validateInitiateChatResponse() {
    return true;
  }
  normalizeChatDetails(chatDetailsInput) {
    var chatDetails = {};
    chatDetails.contactId = chatDetailsInput.ContactId || chatDetailsInput.contactId;
    chatDetails.participantId = chatDetailsInput.ParticipantId || chatDetailsInput.participantId;
    chatDetails.initialContactId = chatDetailsInput.InitialContactId || chatDetailsInput.initialContactId || chatDetails.contactId || chatDetails.ContactId;
    chatDetails.getConnectionToken = chatDetailsInput.getConnectionToken || chatDetailsInput.GetConnectionToken;
    if (chatDetailsInput.participantToken || chatDetailsInput.ParticipantToken) {
      chatDetails.participantToken = chatDetailsInput.ParticipantToken || chatDetailsInput.participantToken;
    }
    this.validateChatDetails(chatDetails);
    return chatDetails;
  }
}


/***/ }),

/***/ "./src/core/chatController.js":
/*!************************************!*\
  !*** ./src/core/chatController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatController": () => (/* binding */ ChatController),
/* harmony export */   "NetworkLinkStatus": () => (/* binding */ NetworkLinkStatus),
/* harmony export */   "getEventTypeFromContentType": () => (/* binding */ getEventTypeFromContentType)
/* harmony export */ });
/* harmony import */ var _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectionHelpers/baseConnectionHelper */ "./src/core/connectionHelpers/baseConnectionHelper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log */ "./src/log.js");
/* harmony import */ var _eventbus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventbus */ "./src/core/eventbus.js");
/* harmony import */ var _chatArgsValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chatArgsValidator */ "./src/core/chatArgsValidator.js");
/* harmony import */ var _connectionHelpers_connectionDetailsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connectionHelpers/connectionDetailsProvider */ "./src/core/connectionHelpers/connectionDetailsProvider.js");
/* harmony import */ var _connectionHelpers_LpcConnectionHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectionHelpers/LpcConnectionHelper */ "./src/core/connectionHelpers/LpcConnectionHelper.js");
/* harmony import */ var _MessageReceiptsUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MessageReceiptsUtil */ "./src/core/MessageReceiptsUtil.js");
/* harmony import */ var _service_csmService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/csmService */ "./src/service/csmService.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../globalConfig */ "./src/globalConfig.js");










var NetworkLinkStatus = {
  NeverEstablished: "NeverEstablished",
  Establishing: "Establishing",
  Established: "Established",
  Broken: "Broken"
};
class ChatController {
  constructor(args) {
    this.argsValidator = new _chatArgsValidator__WEBPACK_IMPORTED_MODULE_4__.ChatServiceArgsValidator();
    this.pubsub = new _eventbus__WEBPACK_IMPORTED_MODULE_3__.EventBus();
    this.sessionType = args.sessionType;
    this.getConnectionToken = args.chatDetails.getConnectionToken;
    this.connectionDetails = args.chatDetails.connectionDetails;
    this.initialContactId = args.chatDetails.initialContactId;
    this.contactId = args.chatDetails.contactId;
    this.participantId = args.chatDetails.participantId;
    this.chatClient = args.chatClient;
    this.participantToken = args.chatDetails.participantToken;
    this.websocketManager = args.websocketManager;
    this._participantDisconnected = false;
    this.sessionMetadata = {};
    this.logger = _log__WEBPACK_IMPORTED_MODULE_2__.LogManager.getLogger({
      prefix: "ChatJS-ChatController",
      logMetaData: args.logMetaData
    });
    this.logMetaData = args.logMetaData;
    this.messageReceiptUtil = new _MessageReceiptsUtil__WEBPACK_IMPORTED_MODULE_7__["default"](args.logMetaData);
    this.logger.info("Browser info:", window.navigator.userAgent);
  }
  subscribe(eventName, callback) {
    this.pubsub.subscribe(eventName, callback);
    this._sendInternalLogToServer(this.logger.info("Subscribed successfully to event:", eventName));
  }
  handleRequestSuccess(metadata, method, startTime, contentType) {
    return response => {
      var contentTypeDimension = contentType ? [{
        name: "ContentType",
        value: contentType
      }] : [];
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addLatencyMetricWithStartTime(method, startTime, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, contentTypeDimension);
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addCountAndErrorMetric(method, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, false, contentTypeDimension);
      response.metadata = metadata;
      return response;
    };
  }
  handleRequestFailure(metadata, method, startTime, contentType) {
    return error => {
      var contentTypeDimension = contentType ? [{
        name: "ContentType",
        value: contentType
      }] : [];
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addLatencyMetricWithStartTime(method, startTime, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, contentTypeDimension);
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addCountAndErrorMetric(method, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, true, contentTypeDimension);
      error.metadata = metadata;
      return Promise.reject(error);
    };
  }
  sendMessage(args) {
    var startTime = new Date().getTime();
    var metadata = args.metadata || null;
    this.argsValidator.validateSendMessage(args);
    var connectionToken = this.connectionHelper.getConnectionToken();
    return this.chatClient.sendMessage(connectionToken, args.message, args.contentType).then(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_MESSAGE, startTime, args.contentType)).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_MESSAGE, startTime, args.contentType));
  }
  sendAttachment(args) {
    var startTime = new Date().getTime();
    var metadata = args.metadata || null;
    //TODO: validation
    var connectionToken = this.connectionHelper.getConnectionToken();
    return this.chatClient.sendAttachment(connectionToken, args.attachment, args.metadata).then(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_ATTACHMENT, startTime, args.attachment.type)).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_ATTACHMENT, startTime, args.attachment.type));
  }
  downloadAttachment(args) {
    var startTime = new Date().getTime();
    var metadata = args.metadata || null;
    var connectionToken = this.connectionHelper.getConnectionToken();
    return this.chatClient.downloadAttachment(connectionToken, args.attachmentId).then(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DOWNLOAD_ATTACHMENT, startTime)).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DOWNLOAD_ATTACHMENT, startTime));
  }
  sendEvent(args) {
    var startTime = new Date().getTime();
    var metadata = args.metadata || null;
    this.argsValidator.validateSendEvent(args);
    var connectionToken = this.connectionHelper.getConnectionToken();
    var content = args.content || null;
    var eventType = getEventTypeFromContentType(args.contentType);
    var parsedContent = typeof content === "string" ? JSON.parse(content) : content;
    if (this.messageReceiptUtil.isMessageReceipt(eventType, args)) {
      // Ignore all MessageReceipt events
      if (!_globalConfig__WEBPACK_IMPORTED_MODULE_9__.GlobalConfig.isFeatureEnabled(_constants__WEBPACK_IMPORTED_MODULE_1__.FEATURES.MESSAGE_RECEIPTS_ENABLED) || !parsedContent.messageId) {
        this.logger.warn("Ignoring messageReceipt: ".concat(_globalConfig__WEBPACK_IMPORTED_MODULE_9__.GlobalConfig.isFeatureEnabled(_constants__WEBPACK_IMPORTED_MODULE_1__.FEATURES.MESSAGE_RECEIPTS_ENABLED) && "missing messageId"), args);
        return Promise.reject({
          errorMessage: "Ignoring messageReceipt: ".concat(_globalConfig__WEBPACK_IMPORTED_MODULE_9__.GlobalConfig.isFeatureEnabled(_constants__WEBPACK_IMPORTED_MODULE_1__.FEATURES.MESSAGE_RECEIPTS_ENABLED) && "missing messageId"),
          data: args
        });
      }
      // Prioritize and send selective message receipts
      return this.messageReceiptUtil.prioritizeAndSendMessageReceipt(this.chatClient, this.chatClient.sendEvent, connectionToken, args.contentType, content, eventType, _globalConfig__WEBPACK_IMPORTED_MODULE_9__.GlobalConfig.getMessageReceiptsThrottleTime()).then(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_EVENT, startTime, args.contentType)).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_EVENT, startTime, args.contentType));
    }
    return this.chatClient.sendEvent(connectionToken, args.contentType, content).then(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_EVENT, startTime, args.contentType)).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.SEND_EVENT, startTime, args.contentType));
  }
  getTranscript(inputArgs) {
    var startTime = new Date().getTime();
    var metadata = inputArgs.metadata || null;
    var args = {
      startPosition: inputArgs.startPosition || {},
      scanDirection: inputArgs.scanDirection || _constants__WEBPACK_IMPORTED_MODULE_1__.TRANSCRIPT_DEFAULT_PARAMS.SCAN_DIRECTION,
      sortOrder: inputArgs.sortOrder || _constants__WEBPACK_IMPORTED_MODULE_1__.TRANSCRIPT_DEFAULT_PARAMS.SORT_ORDER,
      maxResults: inputArgs.maxResults || _constants__WEBPACK_IMPORTED_MODULE_1__.TRANSCRIPT_DEFAULT_PARAMS.MAX_RESULTS
    };
    if (inputArgs.nextToken) {
      args.nextToken = inputArgs.nextToken;
    }
    if (inputArgs.contactId) {
      args.contactId = inputArgs.contactId;
    }
    var connectionToken = this.connectionHelper.getConnectionToken();
    return this.chatClient.getTranscript(connectionToken, args).then(this.messageReceiptUtil.rehydrateReceiptMappers(this.handleRequestSuccess(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.GET_TRANSCRIPT, startTime), _globalConfig__WEBPACK_IMPORTED_MODULE_9__.GlobalConfig.isFeatureEnabled(_constants__WEBPACK_IMPORTED_MODULE_1__.FEATURES.MESSAGE_RECEIPTS_ENABLED))).catch(this.handleRequestFailure(metadata, _constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.GET_TRANSCRIPT, startTime));
  }
  connect() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.sessionMetadata = args.metadata || null;
    this.argsValidator.validateConnectChat(args);
    var connectionDetailsProvider = this._getConnectionDetailsProvider();
    return connectionDetailsProvider.fetchConnectionDetails().then(connectionDetails => this._initConnectionHelper(connectionDetailsProvider, connectionDetails)).then(response => this._onConnectSuccess(response, connectionDetailsProvider)).catch(err => {
      return this._onConnectFailure(err);
    });
  }
  _initConnectionHelper(connectionDetailsProvider, connectionDetails) {
    this.connectionHelper = new _connectionHelpers_LpcConnectionHelper__WEBPACK_IMPORTED_MODULE_6__["default"](this.contactId, this.initialContactId, connectionDetailsProvider, this.websocketManager, this.logMetaData, connectionDetails);
    this.connectionHelper.onEnded(this._handleEndedConnection.bind(this));
    this.connectionHelper.onConnectionLost(this._handleLostConnection.bind(this));
    this.connectionHelper.onConnectionGain(this._handleGainedConnection.bind(this));
    this.connectionHelper.onMessage(this._handleIncomingMessage.bind(this));
    return this.connectionHelper.start();
  }
  _getConnectionDetailsProvider() {
    return new _connectionHelpers_connectionDetailsProvider__WEBPACK_IMPORTED_MODULE_5__["default"](this.participantToken, this.chatClient, this.sessionType, this.getConnectionToken);
  }
  _handleEndedConnection(eventData) {
    this._forwardChatEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENTS.CONNECTION_BROKEN, {
      data: eventData,
      chatDetails: this.getChatDetails()
    });
    this.breakConnection();
  }
  _handleLostConnection(eventData) {
    this._forwardChatEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENTS.CONNECTION_LOST, {
      data: eventData,
      chatDetails: this.getChatDetails()
    });
  }
  _handleGainedConnection(eventData) {
    this._forwardChatEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENTS.CONNECTION_ESTABLISHED, {
      data: eventData,
      chatDetails: this.getChatDetails()
    });
  }
  _handleIncomingMessage(incomingData) {
    try {
      var eventType = getEventTypeFromContentType(incomingData === null || incomingData === void 0 ? void 0 : incomingData.ContentType);
      if (this.messageReceiptUtil.isMessageReceipt(eventType, incomingData)) {
        eventType = this.messageReceiptUtil.getEventTypeFromMessageMetaData(incomingData === null || incomingData === void 0 ? void 0 : incomingData.MessageMetadata);
        if (!eventType || !this.messageReceiptUtil.shouldShowMessageReceiptForCurrentParticipantId(this.participantId, incomingData)) {
          //ignore bec we do not want to show messageReceipt to sender of receipt.
          //messageReceipt needs to be shown to the sender of message.
          return;
        }
      }
      this._forwardChatEvent(eventType, {
        data: incomingData,
        chatDetails: this.getChatDetails()
      });
      if (incomingData.ContentType === _constants__WEBPACK_IMPORTED_MODULE_1__.CONTENT_TYPE.chatEnded) {
        this._forwardChatEvent(_constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENTS.CHAT_ENDED, {
          data: null,
          chatDetails: this.getChatDetails()
        });
        this.breakConnection();
      }
    } catch (e) {
      this._sendInternalLogToServer(this.logger.error("Error occured while handling message from Connection. eventData:", incomingData, " Causing exception:", e));
    }
  }
  _forwardChatEvent(eventName, eventData) {
    this.pubsub.triggerAsync(eventName, eventData);
  }
  _onConnectSuccess(response, connectionDetailsProvider) {
    var _connectionDetailsPro;
    this._sendInternalLogToServer(this.logger.info("Connect successful!"));
    console.warn("onConnectionSuccess response", response);
    var responseObject = {
      _debug: response,
      connectSuccess: true,
      connectCalled: true,
      metadata: this.sessionMetadata
    };
    var eventData = Object.assign({
      chatDetails: this.getChatDetails()
    }, responseObject);
    this.pubsub.triggerAsync(_constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENTS.CONNECTION_ESTABLISHED, eventData);

    // TODO: Fix the floating promise issue: https://app.asana.com/0/1203611591691532/1203880194668408/f
    var connectionAcknowledged = (_connectionDetailsPro = connectionDetailsProvider.getConnectionDetails()) === null || _connectionDetailsPro === void 0 ? void 0 : _connectionDetailsPro.connectionAcknowledged;
    if (this._shouldAcknowledgeContact() && !connectionAcknowledged) {
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addAgentCountMetric(_constants__WEBPACK_IMPORTED_MODULE_1__.CREATE_PARTICIPANT_CONACK_API_CALL_COUNT, 1);
      connectionDetailsProvider.callCreateParticipantConnection({
        Type: false,
        ConnectParticipant: true
      }).catch(err => {
        this.logger.warn("ConnectParticipant failed to acknowledge Agent connection in CreateParticipantConnection: ", err);
        _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addAgentCountMetric(_constants__WEBPACK_IMPORTED_MODULE_1__.CREATE_PARTICIPANT_CONACK_FAILURE, 1);
      });
    }
    console.warn("onConnectionSuccess responseObject", responseObject);
    return responseObject;
  }
  _onConnectFailure(error) {
    var errorObject = {
      _debug: error,
      connectSuccess: false,
      connectCalled: true,
      metadata: this.sessionMetadata
    };
    this._sendInternalLogToServer(this.logger.error("Connect Failed. Error: ", errorObject));
    return Promise.reject(errorObject);
  }
  _shouldAcknowledgeContact() {
    return this.sessionType === _constants__WEBPACK_IMPORTED_MODULE_1__.SESSION_TYPES.AGENT;
  }
  breakConnection() {
    return this.connectionHelper ? this.connectionHelper.end() : Promise.resolve();
  }

  // Do any clean up that needs to be done upon the participant being disconnected from the chat -
  // disconnected here means that the participant is no longer part of ther chat.
  cleanUpOnParticipantDisconnect() {
    this.pubsub.unsubscribeAll();
  }
  disconnectParticipant() {
    var startTime = new Date().getTime();
    var connectionToken = this.connectionHelper.getConnectionToken();
    return this.chatClient.disconnectParticipant(connectionToken).then(response => {
      this._sendInternalLogToServer(this.logger.info("Disconnect participant successfully"));
      this._participantDisconnected = true;
      this.cleanUpOnParticipantDisconnect();
      this.breakConnection();
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addLatencyMetricWithStartTime(_constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DISCONNECT_PARTICIPANT, startTime, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API);
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addCountAndErrorMetric(_constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DISCONNECT_PARTICIPANT, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, false);
      return response;
    }, error => {
      this._sendInternalLogToServer(this.logger.error("Disconnect participant failed. Error:", error));
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addLatencyMetricWithStartTime(_constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DISCONNECT_PARTICIPANT, startTime, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API);
      _service_csmService__WEBPACK_IMPORTED_MODULE_8__.csmService.addCountAndErrorMetric(_constants__WEBPACK_IMPORTED_MODULE_1__.ACPS_METHODS.DISCONNECT_PARTICIPANT, _constants__WEBPACK_IMPORTED_MODULE_1__.CSM_CATEGORY.API, true);
      return Promise.reject(error);
    });
  }
  getChatDetails() {
    return {
      initialContactId: this.initialContactId,
      contactId: this.contactId,
      participantId: this.participantId,
      participantToken: this.participantToken,
      connectionDetails: this.connectionDetails
    };
  }
  _convertConnectionHelperStatus(connectionHelperStatus) {
    switch (connectionHelperStatus) {
      case _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.ConnectionHelperStatus.NeverStarted:
        return NetworkLinkStatus.NeverEstablished;
      case _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.ConnectionHelperStatus.Starting:
        return NetworkLinkStatus.Establishing;
      case _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.ConnectionHelperStatus.Ended:
        return NetworkLinkStatus.Broken;
      case _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.ConnectionHelperStatus.ConnectionLost:
        return NetworkLinkStatus.Broken;
      case _connectionHelpers_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_0__.ConnectionHelperStatus.Connected:
        return NetworkLinkStatus.Established;
    }
    this._sendInternalLogToServer(this.logger.error("Reached invalid state. Unknown connectionHelperStatus: ", connectionHelperStatus));
  }
  getConnectionStatus() {
    return this._convertConnectionHelperStatus(this.connectionHelper.getStatus());
  }
  _sendInternalLogToServer(logEntry) {
    if (logEntry && typeof logEntry.sendInternalLogToServer === "function") logEntry.sendInternalLogToServer();
    return logEntry;
  }
}
var getEventTypeFromContentType = contentType => {
  return _constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENT_TYPE_MAPPING[contentType] || _constants__WEBPACK_IMPORTED_MODULE_1__.CHAT_EVENT_TYPE_MAPPING["default"];
};


/***/ }),

/***/ "./src/core/chatSession.js":
/*!*********************************!*\
  !*** ./src/core/chatSession.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAT_SESSION_FACTORY": () => (/* binding */ CHAT_SESSION_FACTORY),
/* harmony export */   "ChatSession": () => (/* binding */ ChatSession),
/* harmony export */   "ChatSessionObject": () => (/* binding */ ChatSessionObject)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ "./src/core/exceptions.js");
/* harmony import */ var _client_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/client */ "./src/client/client.js");
/* harmony import */ var _chatArgsValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatArgsValidator */ "./src/core/chatArgsValidator.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalConfig */ "./src/globalConfig.js");
/* harmony import */ var _chatController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatController */ "./src/core/chatController.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../log */ "./src/log.js");
/* harmony import */ var _service_csmService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/csmService */ "./src/service/csmService.js");
/* harmony import */ var _lib_amazon_connect_websocket_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/amazon-connect-websocket-manager */ "./src/lib/amazon-connect-websocket-manager.js");









class ChatSessionFactory {
  /*eslint-disable no-unused-vars*/

  createAgentChatController(chatDetails, participantType) {
    throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("createAgentChatController in ChatControllerFactory.");
  }
  createCustomerChatController(chatDetails, participantType) {
    throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.UnImplementedMethodException("createCustomerChatController in ChatControllerFactory.");
  }
  /*eslint-enable no-unused-vars*/
}

class PersistentConnectionAndChatServiceSessionFactory extends ChatSessionFactory {
  constructor() {
    super();
    this.argsValidator = new _chatArgsValidator__WEBPACK_IMPORTED_MODULE_2__.ChatServiceArgsValidator();
  }
  createChatSession(sessionType, chatDetails, options, websocketManager) {
    var chatController = this._createChatController(sessionType, chatDetails, options, websocketManager);
    if (sessionType === _constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES.AGENT) {
      return new AgentChatSession(chatController);
    } else if (sessionType === _constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES.CUSTOMER) {
      return new CustomerChatSession(chatController);
    } else {
      throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException("Unkown value for session type, Allowed values are: " + Object.values(_constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES), sessionType);
    }
  }
  _createChatController(sessionType, chatDetailsInput, options, websocketManager) {
    var chatDetails = this.argsValidator.normalizeChatDetails(chatDetailsInput);
    var logMetaData = {
      contactId: chatDetails.contactId,
      participantId: chatDetails.participantId,
      sessionType
    };
    var chatClient = _client_client__WEBPACK_IMPORTED_MODULE_1__.ChatClientFactory.getCachedClient(options, logMetaData);
    var args = {
      sessionType: sessionType,
      chatDetails,
      chatClient,
      websocketManager: websocketManager,
      logMetaData
    };
    return new _chatController__WEBPACK_IMPORTED_MODULE_5__.ChatController(args);
  }
}
class ChatSession {
  constructor(controller) {
    this.controller = controller;
  }
  onMessage(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.INCOMING_MESSAGE, callback);
  }
  onTyping(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.INCOMING_TYPING, callback);
  }
  onReadReceipt(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.INCOMING_READ_RECEIPT, callback);
  }
  onDeliveredReceipt(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.INCOMING_DELIVERED_RECEIPT, callback);
  }
  onConnectionBroken(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.CONNECTION_BROKEN, callback);
  }
  onConnectionEstablished(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.CONNECTION_ESTABLISHED, callback);
  }
  onEnded(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.CHAT_ENDED, callback);
  }
  onParticipantIdle(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.PARTICIPANT_IDLE, callback);
  }
  onParticipantReturned(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.PARTICIPANT_RETURNED, callback);
  }
  onAutoDisconnection(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.AUTODISCONNECTION, callback);
  }
  onConnectionLost(callback) {
    this.controller.subscribe(_constants__WEBPACK_IMPORTED_MODULE_3__.CHAT_EVENTS.CONNECTION_LOST, callback);
  }
  sendMessage(args) {
    return this.controller.sendMessage(args);
  }
  sendAttachment(args) {
    return this.controller.sendAttachment(args);
  }
  downloadAttachment(args) {
    return this.controller.downloadAttachment(args);
  }
  connect(args) {
    return this.controller.connect(args);
  }
  sendEvent(args) {
    return this.controller.sendEvent(args);
  }
  getTranscript(args) {
    return this.controller.getTranscript(args);
  }
  getChatDetails() {
    return this.controller.getChatDetails();
  }
}
class AgentChatSession extends ChatSession {
  constructor(controller) {
    super(controller);
  }
  cleanUpOnParticipantDisconnect() {
    return this.controller.cleanUpOnParticipantDisconnect();
  }
}
class CustomerChatSession extends ChatSession {
  constructor(controller) {
    super(controller);
  }
  disconnectParticipant() {
    return this.controller.disconnectParticipant();
  }
}
var CHAT_SESSION_FACTORY = new PersistentConnectionAndChatServiceSessionFactory();
var setGlobalConfig = config => {
  var _config$features, _config$features$mess;
  var loggerConfig = config.loggerConfig;
  var csmConfig = config.csmConfig;
  _globalConfig__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.update(config);
  /**
  * if config.loggerConfig.logger is present - use it in websocketManager
  * if config.loggerConfig.customizedLogger is present - use it in websocketManager
  * if config.loggerConfig.useDefaultLogger is true - use default window.console + default level INFO
  * config.loggerConfig.advancedLogWriter to customize where you want to log advancedLog messages. Default is warn.
  * else no logs from websocketManager - DEFAULT
  *
  * if config.webSocketManagerConfig.isNetworkOnline is present - use it in websocketManager
  * else websocketManager uses "navigator.onLine" - DEFAULT
  */
  _lib_amazon_connect_websocket_manager__WEBPACK_IMPORTED_MODULE_8__["default"].setGlobalConfig(config);
  _log__WEBPACK_IMPORTED_MODULE_6__.LogManager.updateLoggerConfig(loggerConfig);
  if (csmConfig) {
    _service_csmService__WEBPACK_IMPORTED_MODULE_7__.csmService.updateCsmConfig(csmConfig);
  }
  //Message Receipts enabled by default
  if (!(((_config$features = config.features) === null || _config$features === void 0 ? void 0 : (_config$features$mess = _config$features.messageReceipts) === null || _config$features$mess === void 0 ? void 0 : _config$features$mess.shouldSendMessageReceipts) === false)) {
    var _config$features2, _config$features2$mes;
    console.warn("enabling message-receipts by default; to disable set config.features.messageReceipts.shouldSendMessageReceipts = false");
    setFeatureFlag(_constants__WEBPACK_IMPORTED_MODULE_3__.FEATURES.MESSAGE_RECEIPTS_ENABLED);
    _globalConfig__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.updateThrottleTime((_config$features2 = config.features) === null || _config$features2 === void 0 ? void 0 : (_config$features2$mes = _config$features2.messageReceipts) === null || _config$features2$mes === void 0 ? void 0 : _config$features2$mes.thorttleTime);
  }
};
var setFeatureFlag = feature => {
  _globalConfig__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.setFeatureFlag(feature);
};
var ChatSessionConstructor = args => {
  var options = args.options || {};
  var type = args.type || _constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES.AGENT;
  _globalConfig__WEBPACK_IMPORTED_MODULE_4__.GlobalConfig.updateStageRegion(options);
  // initialize CSM Service for only customer chat widget
  // Disable CSM service from canary test
  if (!args.disableCSM && type === _constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES.CUSTOMER) {
    _service_csmService__WEBPACK_IMPORTED_MODULE_7__.csmService.loadCsmScriptAndExecute();
  }
  return CHAT_SESSION_FACTORY.createChatSession(type, args.chatDetails, options,
  //options contain region 
  args.websocketManager);
};
var ChatSessionObject = {
  create: ChatSessionConstructor,
  setGlobalConfig: setGlobalConfig,
  LogLevel: _log__WEBPACK_IMPORTED_MODULE_6__.LogLevel,
  Logger: _log__WEBPACK_IMPORTED_MODULE_6__.Logger,
  SessionTypes: _constants__WEBPACK_IMPORTED_MODULE_3__.SESSION_TYPES,
  csmService: _service_csmService__WEBPACK_IMPORTED_MODULE_7__.csmService,
  setFeatureFlag: setFeatureFlag
};


/***/ }),

/***/ "./src/core/connectionHelpers/LpcConnectionHelper.js":
/*!***********************************************************!*\
  !*** ./src/core/connectionHelpers/LpcConnectionHelper.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventbus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventbus */ "./src/core/eventbus.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../log */ "./src/log.js");
/* harmony import */ var _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseConnectionHelper */ "./src/core/connectionHelpers/baseConnectionHelper.js");
/* harmony import */ var _lib_amazon_connect_websocket_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/amazon-connect-websocket-manager */ "./src/lib/amazon-connect-websocket-manager.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _service_csmService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/csmService */ "./src/service/csmService.js");







class LpcConnectionHelper extends _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(contactId, initialContactId, connectionDetailsProvider, websocketManager, logMetaData, connectionDetails) {
    super(connectionDetailsProvider, logMetaData);

    // WebsocketManager instance is only provided iff agent connections
    this.customerConnection = !websocketManager;
    if (this.customerConnection) {
      // ensure customer base instance exists for this contact ID
      if (!LpcConnectionHelper.customerBaseInstances[contactId]) {
        LpcConnectionHelper.customerBaseInstances[contactId] = new LpcConnectionHelperBase(connectionDetailsProvider, undefined, logMetaData, connectionDetails);
      }
      this.baseInstance = LpcConnectionHelper.customerBaseInstances[contactId];
    } else {
      // cleanup agent base instance if it exists for old websocket manager
      if (LpcConnectionHelper.agentBaseInstance) {
        if (LpcConnectionHelper.agentBaseInstance.getWebsocketManager() !== websocketManager) {
          LpcConnectionHelper.agentBaseInstance.end();
          LpcConnectionHelper.agentBaseInstance = null;
        }
      }
      // ensure agent base instance exists
      if (!LpcConnectionHelper.agentBaseInstance) {
        LpcConnectionHelper.agentBaseInstance = new LpcConnectionHelperBase(undefined, websocketManager, logMetaData);
      }
      this.baseInstance = LpcConnectionHelper.agentBaseInstance;
    }
    this.contactId = contactId;
    this.initialContactId = initialContactId;
    this.status = null;
    this.eventBus = new _eventbus__WEBPACK_IMPORTED_MODULE_0__.EventBus();
    this.subscriptions = [this.baseInstance.onEnded(this.handleEnded.bind(this)), this.baseInstance.onConnectionGain(this.handleConnectionGain.bind(this)), this.baseInstance.onConnectionLost(this.handleConnectionLost.bind(this)), this.baseInstance.onMessage(this.handleMessage.bind(this))];
  }
  start() {
    super.start();
    return this.baseInstance.start();
  }
  end() {
    super.end();
    this.eventBus.unsubscribeAll();
    this.subscriptions.forEach(unsubscribe => unsubscribe());
    this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.Ended;
    this.tryCleanup();
  }
  tryCleanup() {
    if (this.customerConnection && !this.baseInstance.hasMessageSubscribers()) {
      this.baseInstance.end();
      delete LpcConnectionHelper.customerBaseInstances[this.contactId];
    }
  }
  getStatus() {
    return this.status || this.baseInstance.getStatus();
  }
  onEnded(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.Ended, handler);
  }
  handleEnded() {
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.Ended, {});
  }
  onConnectionGain(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionGained, handler);
  }
  handleConnectionGain() {
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionGained, {});
  }
  onConnectionLost(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionLost, handler);
  }
  handleConnectionLost() {
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionLost, {});
  }
  onMessage(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage, handler);
  }
  handleMessage(message) {
    if (message.InitialContactId === this.initialContactId || message.ContactId === this.contactId || message.Type === _constants__WEBPACK_IMPORTED_MODULE_4__.CHAT_EVENTS.MESSAGE_METADATA) {
      this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage, message);
    }
  }
}
LpcConnectionHelper.customerBaseInstances = {};
LpcConnectionHelper.agentBaseInstance = null;
class LpcConnectionHelperBase {
  constructor(connectionDetailsProvider, websocketManager, logMetaData, connectionDetails) {
    this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.NeverStarted;
    this.eventBus = new _eventbus__WEBPACK_IMPORTED_MODULE_0__.EventBus();
    this.logger = _log__WEBPACK_IMPORTED_MODULE_1__.LogManager.getLogger({
      prefix: "ChatJS-LPCConnectionHelperBase",
      logMetaData
    });
    this.initialConnectionDetails = connectionDetails;
    this.initWebsocketManager(websocketManager, connectionDetailsProvider, logMetaData);
  }
  initWebsocketManager(websocketManager, connectionDetailsProvider, logMetaData) {
    this.websocketManager = websocketManager || _lib_amazon_connect_websocket_manager__WEBPACK_IMPORTED_MODULE_3__["default"].create(logMetaData);
    this.websocketManager.subscribeTopics(["aws/chat"]);
    this.subscriptions = [this.websocketManager.onMessage("aws/chat", this.handleMessage.bind(this)), this.websocketManager.onConnectionGain(this.handleConnectionGain.bind(this)), this.websocketManager.onConnectionLost(this.handleConnectionLost.bind(this)), this.websocketManager.onInitFailure(this.handleEnded.bind(this))];
    this.logger.info("Initializing websocket manager.");
    if (!websocketManager) {
      var startTime = new Date().getTime();
      this.websocketManager.init(() => this._getConnectionDetails(connectionDetailsProvider, this.initialConnectionDetails, startTime).then(response => {
        this.initialConnectionDetails = null;
        return response;
      }));
    }
  }
  _getConnectionDetails(connectionDetailsProvider, connectionDetails, startTime) {
    if (connectionDetails !== null && typeof connectionDetails === "object" && connectionDetails.expiry && connectionDetails.connectionTokenExpiry) {
      var logContent = {
        expiry: connectionDetails.expiry,
        transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_4__.TRANSPORT_LIFETIME_IN_SECONDS
      };
      this.logger.debug("Websocket manager initialized. Connection details:", logContent);
      return Promise.resolve({
        webSocketTransport: {
          url: connectionDetails.url,
          expiry: connectionDetails.expiry,
          transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_4__.TRANSPORT_LIFETIME_IN_SECONDS
        }
      });
    } else {
      return connectionDetailsProvider.fetchConnectionDetails().then(connectionDetails => {
        var details = {
          webSocketTransport: {
            url: connectionDetails.url,
            expiry: connectionDetails.expiry,
            transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_4__.TRANSPORT_LIFETIME_IN_SECONDS
          }
        };
        var logContent = {
          expiry: connectionDetails.expiry,
          transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_4__.TRANSPORT_LIFETIME_IN_SECONDS
        };
        this.logger.debug("Websocket manager initialized. Connection details:", logContent);
        this._addWebsocketInitCSMMetric(startTime);
        return details;
      }).catch(error => {
        this.logger.error("Initializing Websocket Manager failed:", error);
        this._addWebsocketInitCSMMetric(startTime, true);
        throw error;
      });
    }
  }
  _addWebsocketInitCSMMetric(startTime) {
    var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addLatencyMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.InitWebsocket, startTime, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API);
    _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addCountAndErrorMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.InitWebsocket, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API, isError);
  }
  end() {
    // WebSocketProvider instance from streams does not have closeWebSocket
    if (this.websocketManager.closeWebSocket) {
      this.websocketManager.closeWebSocket();
    }
    this.eventBus.unsubscribeAll();
    this.subscriptions.forEach(unsubscribe => unsubscribe());
    this.logger.info("Websocket closed. All event subscriptions are cleared.");
  }
  start() {
    if (this.status === _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.NeverStarted) {
      this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.Starting;
    }
    return Promise.resolve({
      websocketStatus: this.status
    });
  }
  onEnded(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.Ended, handler);
  }
  handleEnded() {
    this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.Ended;
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.Ended, {});
    _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addCountMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.Ended, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API);
    this.logger.info("Websocket connection ended.");
  }
  onConnectionGain(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionGained, handler);
  }
  handleConnectionGain() {
    this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.Connected;
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionGained, {});
    _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addCountMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.ConnectionGained, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API);
    this.logger.info("Websocket connection gained.");
  }
  onConnectionLost(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionLost, handler);
  }
  handleConnectionLost() {
    this.status = _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperStatus.ConnectionLost;
    this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.ConnectionLost, {});
    _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addCountMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.ConnectionLost, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API);
    this.logger.info("Websocket connection lost.");
  }
  onMessage(handler) {
    return this.eventBus.subscribe(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage, handler);
  }
  handleMessage(message) {
    var parsedMessage;
    try {
      parsedMessage = JSON.parse(message.content);
      this.eventBus.trigger(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage, parsedMessage);
      _service_csmService__WEBPACK_IMPORTED_MODULE_5__.csmService.addCountMetric(_constants__WEBPACK_IMPORTED_MODULE_4__.WEBSOCKET_EVENTS.IncomingMessage, _constants__WEBPACK_IMPORTED_MODULE_4__.CSM_CATEGORY.API);
      this.logger.info("this.eventBus trigger Websocket incoming message", _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage, parsedMessage);
    } catch (e) {
      this._sendInternalLogToServer(this.logger.error("Wrong message format"));
    }
  }
  getStatus() {
    return this.status;
  }
  getWebsocketManager() {
    return this.websocketManager;
  }
  hasMessageSubscribers() {
    return this.eventBus.getSubscriptions(_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_2__.ConnectionHelperEvents.IncomingMessage).length > 0;
  }
  _sendInternalLogToServer(logEntry) {
    if (logEntry && typeof logEntry.sendInternalLogToServer === "function") logEntry.sendInternalLogToServer();
    return logEntry;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LpcConnectionHelper);

/***/ }),

/***/ "./src/core/connectionHelpers/baseConnectionHelper.js":
/*!************************************************************!*\
  !*** ./src/core/connectionHelpers/baseConnectionHelper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionHelperEvents": () => (/* binding */ ConnectionHelperEvents),
/* harmony export */   "ConnectionHelperStatus": () => (/* binding */ ConnectionHelperStatus),
/* harmony export */   "ConnectionInfoType": () => (/* binding */ ConnectionInfoType),
/* harmony export */   "default": () => (/* binding */ BaseConnectionHelper)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../log */ "./src/log.js");


var ConnectionHelperStatus = {
  NeverStarted: "NeverStarted",
  Starting: "Starting",
  Connected: "Connected",
  ConnectionLost: "ConnectionLost",
  Ended: "Ended"
};
var ConnectionHelperEvents = {
  ConnectionLost: "ConnectionLost",
  // event data is: {reason: ...}
  ConnectionGained: "ConnectionGained",
  // event data is: {reason: ...}
  Ended: "Ended",
  // event data is: {reason: ...}
  IncomingMessage: "IncomingMessage" // event data is: {payloadString: ...}
};

var ConnectionInfoType = {
  WEBSOCKET: "WEBSOCKET",
  CONNECTION_CREDENTIALS: "CONNECTION_CREDENTIALS"
};
class BaseConnectionHelper {
  constructor(connectionDetailsProvider, logMetaData) {
    this.connectionDetailsProvider = connectionDetailsProvider;
    this.isStarted = false;
    this.logger = _log__WEBPACK_IMPORTED_MODULE_1__.LogManager.getLogger({
      prefix: "ChatJS-BaseConnectionHelper",
      logMetaData
    });
  }
  startConnectionTokenPolling() {
    var isFirstCall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var expiry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECTION_TOKEN_POLLING_INTERVAL_IN_MS;
    if (!isFirstCall) {
      //TODO: use Type field to avoid fetching websocket connection
      return this.connectionDetailsProvider.fetchConnectionDetails().then(response => {
        this.logger.info("Connection token polling succeeded.");
        expiry = this.getTimeToConnectionTokenExpiry();
        this.timeout = setTimeout(this.startConnectionTokenPolling.bind(this), expiry);
        return response;
      }).catch(e => {
        this.logger.error("An error occurred when attempting to fetch the connection token during Connection Token Polling", e);
        this.timeout = setTimeout(this.startConnectionTokenPolling.bind(this), expiry);
        return e;
      });
    } else {
      this.logger.info("First time polling connection token.");
      this.timeout = setTimeout(this.startConnectionTokenPolling.bind(this), expiry);
    }
  }
  start() {
    if (this.isStarted) {
      return this.getConnectionToken();
    }
    this.isStarted = true;
    return this.startConnectionTokenPolling(true, this.getTimeToConnectionTokenExpiry());
  }
  end() {
    clearTimeout(this.timeout);
  }
  getConnectionToken() {
    return this.connectionDetailsProvider.getFetchedConnectionToken();
  }
  getConnectionTokenExpiry() {
    return this.connectionDetailsProvider.getConnectionTokenExpiry();
  }
  getTimeToConnectionTokenExpiry() {
    var dateExpiry = new Date(this.getConnectionTokenExpiry()).getTime();
    var now = new Date().getTime();
    return dateExpiry - now - _constants__WEBPACK_IMPORTED_MODULE_0__.CONNECTION_TOKEN_EXPIRY_BUFFER_IN_MS;
  }
}


/***/ }),

/***/ "./src/core/connectionHelpers/connectionDetailsProvider.js":
/*!*****************************************************************!*\
  !*** ./src/core/connectionHelpers/connectionDetailsProvider.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConnectionDetailsProvider)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exceptions */ "./src/core/exceptions.js");
/* harmony import */ var _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseConnectionHelper */ "./src/core/connectionHelpers/baseConnectionHelper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _service_csmService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/csmService */ "./src/service/csmService.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




class ConnectionDetailsProvider {
  constructor(participantToken, chatClient, sessionType) {
    var getConnectionToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    this.chatClient = chatClient;
    this.participantToken = participantToken || null;
    this.connectionDetails = null;
    this.connectionToken = null;
    this.connectionTokenExpiry = null;
    this.sessionType = sessionType;
    this.getConnectionToken = getConnectionToken;
  }
  getFetchedConnectionToken() {
    return this.connectionToken;
  }
  getConnectionTokenExpiry() {
    return this.connectionTokenExpiry;
  }
  getConnectionDetails() {
    return this.connectionDetails;
  }
  fetchConnectionDetails() {
    return this._fetchConnectionDetails().then(connectionDetails => connectionDetails);
  }
  _handleCreateParticipantConnectionResponse(connectionDetails, ConnectParticipant) {
    this.connectionDetails = {
      url: connectionDetails.Websocket.Url,
      expiry: connectionDetails.Websocket.ConnectionExpiry,
      transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_2__.TRANSPORT_LIFETIME_IN_SECONDS,
      connectionAcknowledged: ConnectParticipant,
      connectionToken: connectionDetails.ConnectionCredentials.ConnectionToken,
      connectionTokenExpiry: connectionDetails.ConnectionCredentials.Expiry
    };
    this.connectionToken = connectionDetails.ConnectionCredentials.ConnectionToken;
    this.connectionTokenExpiry = connectionDetails.ConnectionCredentials.Expiry;
    return this.connectionDetails;
  }
  _handleGetConnectionTokenResponse(connectionTokenDetails) {
    this.connectionDetails = {
      url: null,
      expiry: null,
      connectionToken: connectionTokenDetails.participantToken,
      connectionTokenExpiry: connectionTokenDetails.expiry,
      transportLifeTimeInSeconds: _constants__WEBPACK_IMPORTED_MODULE_2__.TRANSPORT_LIFETIME_IN_SECONDS,
      connectionAcknowledged: false
    };
    this.connectionToken = connectionTokenDetails.participantToken;
    this.connectionTokenExpiry = connectionTokenDetails.expiry;
    return Promise.resolve(this.connectionDetails);
  }
  callCreateParticipantConnection() {
    var {
      Type = true,
      ConnectParticipant = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var startTime = new Date().getTime();
    return this.chatClient.createParticipantConnection(this.participantToken, Type ? [_baseConnectionHelper__WEBPACK_IMPORTED_MODULE_1__.ConnectionInfoType.WEBSOCKET, _baseConnectionHelper__WEBPACK_IMPORTED_MODULE_1__.ConnectionInfoType.CONNECTION_CREDENTIALS] : null, ConnectParticipant ? ConnectParticipant : null).then(response => {
      if (Type) {
        this._addParticipantConnectionMetric(startTime);
        return this._handleCreateParticipantConnectionResponse(response.data, ConnectParticipant);
      }
    }).catch(error => {
      if (Type) {
        this._addParticipantConnectionMetric(startTime, true);
      }
      return Promise.reject({
        reason: "Failed to fetch connectionDetails with createParticipantConnection",
        _debug: error
      });
    });
  }
  _addParticipantConnectionMetric(startTime) {
    var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _service_csmService__WEBPACK_IMPORTED_MODULE_3__.csmService.addLatencyMetricWithStartTime(_constants__WEBPACK_IMPORTED_MODULE_2__.ACPS_METHODS.CREATE_PARTICIPANT_CONNECTION, startTime, _constants__WEBPACK_IMPORTED_MODULE_2__.CSM_CATEGORY.API);
    _service_csmService__WEBPACK_IMPORTED_MODULE_3__.csmService.addCountAndErrorMetric(_constants__WEBPACK_IMPORTED_MODULE_2__.ACPS_METHODS.CREATE_PARTICIPANT_CONNECTION, _constants__WEBPACK_IMPORTED_MODULE_2__.CSM_CATEGORY.API, error);
  }
  _fetchConnectionDetails() {
    var _this = this;
    return _asyncToGenerator(function* () {
      // If this is a customer session, use the provided participantToken to call createParticipantConnection for our connection details. 
      if (_this.sessionType === _constants__WEBPACK_IMPORTED_MODULE_2__.SESSION_TYPES.CUSTOMER) {
        return _this.callCreateParticipantConnection();
      }
      // If this is an agent session, we can't assume that the participantToken is valid. 
      // In this case, we use the getConnectionToken API to fetch a valid connectionToken and expiry. 
      // If that fails, for now we try with createParticipantConnection.
      else if (_this.sessionType === _constants__WEBPACK_IMPORTED_MODULE_2__.SESSION_TYPES.AGENT) {
        return _this.getConnectionToken().then(response => {
          return _this._handleGetConnectionTokenResponse(response.chatTokenTransport);
        }).catch(() => {
          return _this.callCreateParticipantConnection({
            Type: true,
            ConnectParticipant: true
          }).catch(err => {
            throw new Error({
              type: _constants__WEBPACK_IMPORTED_MODULE_2__.CONN_ACK_FAILED,
              errorMessage: err
            });
          });
        });
      } else {
        return Promise.reject({
          reason: "Failed to fetch connectionDetails.",
          _debug: new _exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException("Failed to fetch connectionDetails.")
        });
      }
    })();
  }
}

/***/ }),

/***/ "./src/core/eventbus.js":
/*!******************************!*\
  !*** ./src/core/eventbus.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventBus": () => (/* binding */ EventBus)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

var ALL_EVENTS = "<<all>>";

/**
 * An object representing an event subscription in an EventBus.
 */
var Subscription = function Subscription(subMap, eventName, f) {
  this.subMap = subMap;
  this.id = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].randomId();
  this.eventName = eventName;
  this.f = f;
};

/**
 * Unsubscribe the handler of this subscription from the EventBus
 * from which it was created.
 */
Subscription.prototype.unsubscribe = function () {
  this.subMap.unsubscribe(this.eventName, this.id);
};

/**
 * A map of event subscriptions, used by the EventBus.
 */
var SubscriptionMap = function SubscriptionMap() {
  this.subIdMap = {};
  this.subEventNameMap = {};
};

/**
 * Add a subscription for the named event.  Creates a new Subscription
 * object and returns it.  This object can be used to unsubscribe.
 */
SubscriptionMap.prototype.subscribe = function (eventName, f) {
  var sub = new Subscription(this, eventName, f);
  this.subIdMap[sub.id] = sub;
  var subList = this.subEventNameMap[eventName] || [];
  subList.push(sub);
  this.subEventNameMap[eventName] = subList;
  return () => sub.unsubscribe();
};

/**
 * Unsubscribe a subscription matching the given event name and id.
 */
SubscriptionMap.prototype.unsubscribe = function (eventName, subId) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].contains(this.subEventNameMap, eventName)) {
    this.subEventNameMap[eventName] = this.subEventNameMap[eventName].filter(function (s) {
      return s.id !== subId;
    });
    if (this.subEventNameMap[eventName].length < 1) {
      delete this.subEventNameMap[eventName];
    }
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].contains(this.subIdMap, subId)) {
    delete this.subIdMap[subId];
  }
};

/**
 * Get a list of all subscriptions in the subscription map.
 */
SubscriptionMap.prototype.getAllSubscriptions = function () {
  return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].values(this.subEventNameMap).reduce(function (a, b) {
    return a.concat(b);
  }, []);
};

/**
 * Get a list of subscriptions for the given event name, or an empty
 * list if there are no subscriptions.
 */
SubscriptionMap.prototype.getSubscriptions = function (eventName) {
  return this.subEventNameMap[eventName] || [];
};

/**
 * An object which maintains a map of subscriptions and serves as the
 * mechanism for triggering events to be handled by subscribers.
 */
var EventBus = function EventBus(paramsIn) {
  var params = paramsIn || {};
  this.subMap = new SubscriptionMap();
  this.logEvents = params.logEvents || false;
};

/**
 * Subscribe to the named event.  Returns a new Subscription object
 * which can be used to unsubscribe.
 */
EventBus.prototype.subscribe = function (eventName, f) {
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertNotNull(eventName, "eventName");
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertNotNull(f, "f");
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertTrue(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(f), "f must be a function");
  return this.subMap.subscribe(eventName, f);
};

/**
 * Subscribe a function to be called on all events.
 */
EventBus.prototype.subscribeAll = function (f) {
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertNotNull(f, "f");
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertTrue(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(f), "f must be a function");
  return this.subMap.subscribe(ALL_EVENTS, f);
};

/**
 * Get a list of subscriptions for the given event name, or an empty
 * list if there are no subscriptions.
 */
EventBus.prototype.getSubscriptions = function (eventName) {
  return this.subMap.getSubscriptions(eventName);
};

/**
 * Trigger the given event with the given data.  All methods subscribed
 * to this event will be called and are provided with the given arbitrary
 * data object and the name of the event, in that order.
 */
EventBus.prototype.trigger = function (eventName, data) {
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].assertNotNull(eventName, "eventName");
  var self = this;
  var allEventSubs = this.subMap.getSubscriptions(ALL_EVENTS);
  var eventSubs = this.subMap.getSubscriptions(eventName);

  // if (this.logEvents && (eventName !== connect.EventType.LOG && eventName !== connect.EventType.MASTER_RESPONSE && eventName !== connect.EventType.API_METRIC)) {
  //    connect.getLog().trace("Publishing event: %s", eventName);
  // }

  allEventSubs.concat(eventSubs).forEach(function (sub) {
    try {
      sub.f(data || null, eventName, self);
    } catch (e) {
      //   connect
      //     .getLog()
      //     .error("'%s' event handler failed.", eventName)
      //     .withException(e);
    }
  });
};

/**
 * Trigger the given event with the given data.  All methods subscribed
 * to this event will be called and are provided with the given arbitrary
 * data object and the name of the event, in that order.
 */
EventBus.prototype.triggerAsync = function (eventName, data) {
  setTimeout(() => this.trigger(eventName, data), 0);
};

/**
 * Returns a closure which bridges an event from another EventBus to this bus.
 *
 * Usage:
 * conduit.onUpstream("MyEvent", bus.bridge());
 */
EventBus.prototype.bridge = function () {
  var self = this;
  return function (data, event) {
    self.trigger(event, data);
  };
};

/**
 * Unsubscribe all events in the event bus.
 */
EventBus.prototype.unsubscribeAll = function () {
  this.subMap.getAllSubscriptions().forEach(function (sub) {
    sub.unsubscribe();
  });
};


/***/ }),

/***/ "./src/core/exceptions.js":
/*!********************************!*\
  !*** ./src/core/exceptions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IllegalArgumentException": () => (/* binding */ IllegalArgumentException),
/* harmony export */   "IllegalJsonException": () => (/* binding */ IllegalJsonException),
/* harmony export */   "IllegalStateException": () => (/* binding */ IllegalStateException),
/* harmony export */   "UnImplementedMethodException": () => (/* binding */ UnImplementedMethodException),
/* harmony export */   "ValueError": () => (/* binding */ ValueError)
/* harmony export */ });
class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValueError";
  }
}
class UnImplementedMethodException extends Error {
  constructor(message) {
    super(message);
    this.name = "UnImplementedMethod";
  }
}
class IllegalArgumentException extends Error {
  constructor(message, argument) {
    super(message);
    this.name = "IllegalArgument";
    this.argument = argument;
  }
}
class IllegalStateException extends Error {
  constructor(message) {
    super(message);
    this.name = "IllegalState";
  }
}
class IllegalJsonException extends Error {
  constructor(message, args) {
    super(message);
    this.name = "IllegalState";
    this.causeException = args.causeException;
    this.originalJsonString = args.originalJsonString;
  }
}


/***/ }),

/***/ "./src/globalConfig.js":
/*!*****************************!*\
  !*** ./src/globalConfig.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfig": () => (/* binding */ GlobalConfig)
/* harmony export */ });
class GlobalConfigImpl {
  constructor() {
    this.stage = "prod";
    this.region = "us-west-2";
    this.reconnect = true;
    var self = this;
    this.features = new Proxy([], {
      set: function set(target, property, value) {
        console.log("new features added, initialValue: " + target[property] + " , newValue: " + value, Array.isArray(target[property]));
        var oldVal = target[property];
        //fire change listeners
        if (Array.isArray(value)) {
          value.forEach(feature => {
            //if a new feature is added
            if (Array.isArray(oldVal) && oldVal.indexOf(feature) === -1 && Array.isArray(self.featureChangeListeners[feature])) {
              self.featureChangeListeners[feature].forEach(callback => callback());
              self._cleanFeatureChangeListener(feature);
            }
          });
        }
        //change the value in this.features object.
        target[property] = value;
        return true;
      }
    });
    this.featureChangeListeners = [];
  }
  update(configInput) {
    var config = configInput || {};
    this.stage = config.stage || this.stage;
    this.region = config.region || this.region;
    this.endpointOverride = config.endpoint || this.endpointOverride;
    this.reconnect = config.reconnect === false ? false : this.reconnect;
    this.messageReceiptThrottleTime = config.throttleTime ? config.throttleTime : 5000;
    this.features["values"] = Array.isArray(config.features) ? [...config.features] : new Array();
  }
  updateStageRegion(config) {
    if (config) {
      this.stage = config.stage || this.stage;
      this.region = config.region || this.region;
    }
  }
  updateThrottleTime(throttleTime) {
    this.messageReceiptThrottleTime = throttleTime ? throttleTime : this.messageReceiptThrottleTime;
  }
  getMessageReceiptsThrottleTime() {
    return this.messageReceiptThrottleTime;
  }
  getStage() {
    return this.stage;
  }
  getRegion() {
    return this.region;
  }
  getEndpointOverride() {
    return this.endpointOverride;
  }
  setFeatureFlag(feature) {
    if (this.isFeatureEnabled(feature)) {
      return;
    }
    var featureValues = Array.isArray(this.features["values"]) ? this.features["values"] : [];
    this.features["values"] = [...featureValues, feature];
  }

  //private method
  _registerFeatureChangeListener(feature, callback) {
    if (!this.featureChangeListeners[feature]) {
      this.featureChangeListeners[feature] = [];
    }
    this.featureChangeListeners[feature].push(callback);
  }

  //private method
  _cleanFeatureChangeListener(feature) {
    delete this.featureChangeListeners[feature];
  }
  isFeatureEnabled(feature, callback) {
    if (Array.isArray(this.features["values"]) && this.features["values"].indexOf(feature) !== -1) {
      if (typeof callback === "function") {
        return callback();
      }
      return true;
    }
    if (typeof callback === "function") {
      this._registerFeatureChangeListener(feature, callback);
    }
    return false;
  }
}
var GlobalConfig = new GlobalConfigImpl();


/***/ }),

/***/ "./src/lib/amazon-connect-websocket-manager.js":
/*!*****************************************************!*\
  !*** ./src/lib/amazon-connect-websocket-manager.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var global = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
global.connect = global.connect || {};
var currentWebsocketManager = connect.WebSocketManager;
!function (e) {
  var n = {};
  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }
  t.m = e, t.c = n, t.d = function (e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) t.d(o, r, function (n) {
      return e[n];
    }.bind(null, r));
    return o;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 10);
}([function (e, n) {
  function t(n) {
    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  e.exports = function (e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  function t(e, n) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }
  e.exports = function (e, n, o) {
    return n && t(e.prototype, n), o && t(e, o), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  function t(n) {
    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n, t) {
  var o;
  !function () {
    "use strict";

    var r = {
      not_string: /[^s]/,
      not_bool: /[^t]/,
      not_type: /[^T]/,
      not_primitive: /[^v]/,
      number: /[diefg]/,
      numeric_arg: /[bcdiefguxX]/,
      json: /[j]/,
      not_json: /[^j]/,
      text: /^[^\x25]+/,
      modulo: /^\x25{2}/,
      placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
      key: /^([a-z_][a-z_\d]*)/i,
      key_access: /^\.([a-z_][a-z_\d]*)/i,
      index_access: /^\[(\d+)\]/,
      sign: /^[+-]/
    };
    function i(e) {
      return c(u(e), arguments);
    }
    function a(e, n) {
      return i.apply(null, [e].concat(n || []));
    }
    function c(e, n) {
      var t,
        o,
        a,
        c,
        s,
        u,
        l,
        d,
        p,
        f = 1,
        g = e.length,
        b = "";
      for (o = 0; o < g; o++) if ("string" == typeof e[o]) b += e[o];else if ("object" == typeof e[o]) {
        if ((c = e[o]).keys) for (t = n[f], a = 0; a < c.keys.length; a++) {
          if (null == t) throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', c.keys[a], c.keys[a - 1]));
          t = t[c.keys[a]];
        } else t = c.param_no ? n[c.param_no] : n[f++];
        if (r.not_type.test(c.type) && r.not_primitive.test(c.type) && t instanceof Function && (t = t()), r.numeric_arg.test(c.type) && "number" != typeof t && isNaN(t)) throw new TypeError(i("[sprintf] expecting number but found %T", t));
        switch (r.number.test(c.type) && (d = t >= 0), c.type) {
          case "b":
            t = parseInt(t, 10).toString(2);
            break;
          case "c":
            t = String.fromCharCode(parseInt(t, 10));
            break;
          case "d":
          case "i":
            t = parseInt(t, 10);
            break;
          case "j":
            t = JSON.stringify(t, null, c.width ? parseInt(c.width) : 0);
            break;
          case "e":
            t = c.precision ? parseFloat(t).toExponential(c.precision) : parseFloat(t).toExponential();
            break;
          case "f":
            t = c.precision ? parseFloat(t).toFixed(c.precision) : parseFloat(t);
            break;
          case "g":
            t = c.precision ? String(Number(t.toPrecision(c.precision))) : parseFloat(t);
            break;
          case "o":
            t = (parseInt(t, 10) >>> 0).toString(8);
            break;
          case "s":
            t = String(t), t = c.precision ? t.substring(0, c.precision) : t;
            break;
          case "t":
            t = String(!!t), t = c.precision ? t.substring(0, c.precision) : t;
            break;
          case "T":
            t = Object.prototype.toString.call(t).slice(8, -1).toLowerCase(), t = c.precision ? t.substring(0, c.precision) : t;
            break;
          case "u":
            t = parseInt(t, 10) >>> 0;
            break;
          case "v":
            t = t.valueOf(), t = c.precision ? t.substring(0, c.precision) : t;
            break;
          case "x":
            t = (parseInt(t, 10) >>> 0).toString(16);
            break;
          case "X":
            t = (parseInt(t, 10) >>> 0).toString(16).toUpperCase();
        }
        r.json.test(c.type) ? b += t : (!r.number.test(c.type) || d && !c.sign ? p = "" : (p = d ? "+" : "-", t = t.toString().replace(r.sign, "")), u = c.pad_char ? "0" === c.pad_char ? "0" : c.pad_char.charAt(1) : " ", l = c.width - (p + t).length, s = c.width && l > 0 ? u.repeat(l) : "", b += c.align ? p + t + s : "0" === u ? p + s + t : s + p + t);
      }
      return b;
    }
    var s = Object.create(null);
    function u(e) {
      if (s[e]) return s[e];
      for (var n, t = e, o = [], i = 0; t;) {
        if (null !== (n = r.text.exec(t))) o.push(n[0]);else if (null !== (n = r.modulo.exec(t))) o.push("%");else {
          if (null === (n = r.placeholder.exec(t))) throw new SyntaxError("[sprintf] unexpected placeholder");
          if (n[2]) {
            i |= 1;
            var a = [],
              c = n[2],
              u = [];
            if (null === (u = r.key.exec(c))) throw new SyntaxError("[sprintf] failed to parse named argument key");
            for (a.push(u[1]); "" !== (c = c.substring(u[0].length));) if (null !== (u = r.key_access.exec(c))) a.push(u[1]);else {
              if (null === (u = r.index_access.exec(c))) throw new SyntaxError("[sprintf] failed to parse named argument key");
              a.push(u[1]);
            }
            n[2] = a;
          } else i |= 2;
          if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          o.push({
            placeholder: n[0],
            param_no: n[1],
            keys: n[2],
            sign: n[3],
            pad_char: n[4],
            align: n[5],
            width: n[6],
            precision: n[7],
            type: n[8]
          });
        }
        t = t.substring(n[0].length);
      }
      return s[e] = o;
    }
    n.sprintf = i, n.vsprintf = a, "undefined" != typeof window && (window.sprintf = i, window.vsprintf = a, void 0 === (o = function () {
      return {
        sprintf: i,
        vsprintf: a
      };
    }.call(n, t, n, e)) || (e.exports = o));
  }();
}, function (e, n, t) {
  var o = t(8);
  e.exports = function (e, n) {
    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(n && n.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(e, "prototype", {
      writable: !1
    }), n && o(e, n);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n, t) {
  var o = t(0).default,
    r = t(9);
  e.exports = function (e, n) {
    if (n && ("object" === o(n) || "function" == typeof n)) return n;
    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
    return r(e);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  e.exports = function (e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = t, e;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  function t(n, o) {
    return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, n) {
      return e.__proto__ = n, e;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, o);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}, function (e, n, t) {
  "use strict";

  t.r(n), t.d(n, "WebSocketManager", function () {
    return Ne;
  });
  var o = t(0),
    r = t.n(o),
    i = t(4),
    a = "NULL",
    c = "CLIENT_LOGGER",
    s = "DEBUG",
    u = "AMZ_WEB_SOCKET_MANAGER:",
    l = "Network offline",
    d = "Network online, connecting to WebSocket server",
    p = "Network offline, ignoring this getWebSocketConnConfig request",
    f = "Heartbeat response not received",
    g = "aws/ping deep heartbeat response not received",
    b = "Heartbeat response received",
    v = "aws/ping deep heartbeat received",
    y = "Sending heartbeat",
    m = "Sending aws/ping deep heartbeat",
    h = "Failed to send heartbeat since WebSocket is not open",
    S = "Failed to send aws/ping deep heartbeat since WebSocket is not open",
    k = "Deep Heartbeat is successful. WebSocketManager has received 200 response from aws/ping",
    w = "Deep Heartbeat failed. WebSocketManager does not receive 200 response from aws/ping",
    O = "Generic topic failed.",
    C = "WebSocket connection established!",
    L = "WebSocket connection is closed",
    T = "WebSocketManager Error, error_event: ",
    _ = "Scheduling WebSocket reinitialization, after delay ",
    x = "WebSocket URL cannot be used to establish connection",
    W = "WebSocket Initialization failed - Terminating and cleaning subscriptions",
    I = "Terminating WebSocket Manager",
    N = "Fetching new WebSocket connection configuration",
    F = "Successfully fetched webSocket connection configuration",
    M = "Failed to fetch webSocket connection configuration",
    E = "Retrying fetching new WebSocket connection configuration",
    D = "Initializing Websocket Manager",
    R = "Initializing Websocket Manager Failure callback registered",
    A = "Websocket connection open callback registered",
    j = "Websocket connection close callback registered",
    H = "Websocket connection gain callback registered",
    P = "Websocket connection lost callback registered",
    G = "Websocket subscription failure callback registered",
    z = "Reset Websocket state",
    q = "WebSocketManager Message Error",
    U = "Message received for topic ",
    J = "Invalid incoming message",
    B = "WebsocketManager invoke callbacks for topic success ",
    V = "aws/subscribe",
    X = "aws/unsubscribe",
    $ = "aws/heartbeat",
    K = "aws/ping",
    Z = "connected",
    Q = "disconnected",
    Y = {
      assertTrue: function assertTrue(e, n) {
        if (!e) throw new Error(n);
      },
      assertNotNull: function assertNotNull(e, n) {
        return Y.assertTrue(null !== e && void 0 !== r()(e), Object(i.sprintf)("%s must be provided", n || "A value")), e;
      },
      isNonEmptyString: function isNonEmptyString(e) {
        return "string" == typeof e && e.length > 0;
      },
      assertIsList: function assertIsList(e, n) {
        if (!Array.isArray(e)) throw new Error(n + " is not an array");
      },
      isFunction: function isFunction(e) {
        return !!(e && e.constructor && e.call && e.apply);
      },
      isObject: function isObject(e) {
        return !("object" !== r()(e) || null === e);
      },
      isString: function isString(e) {
        return "string" == typeof e;
      },
      isNumber: function isNumber(e) {
        return "number" == typeof e;
      }
    },
    ee = new RegExp("^(wss://)\\w*"),
    ne = new RegExp("^(ws://127.0.0.1:)");
  Y.validWSUrl = function (e) {
    return ee.test(e) || ne.test(e);
  }, Y.getSubscriptionResponse = function (e, n, t) {
    return {
      topic: e,
      content: {
        status: n ? "success" : "failure",
        topics: t
      }
    };
  }, Y.assertIsObject = function (e, n) {
    if (!Y.isObject(e)) throw new Error(n + " is not an object!");
  }, Y.addJitter = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    n = Math.min(n, 1);
    var t = Math.random() > .5 ? 1 : -1;
    return Math.floor(e + t * e * Math.random() * n);
  }, Y.isNetworkOnline = function () {
    return navigator.onLine;
  }, Y.isNetworkFailure = function (e) {
    return !(!e._debug || !e._debug.type) && "NetworkingError" === e._debug.type;
  };
  var te = Y,
    oe = t(5),
    re = t.n(oe),
    ie = t(6),
    ae = t.n(ie),
    ce = t(3),
    se = t.n(ce),
    ue = t(7),
    le = t.n(ue),
    de = t(1),
    pe = t.n(de),
    fe = t(2),
    ge = t.n(fe);
  function be(e) {
    var n = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();
    return function () {
      var t,
        o = se()(e);
      if (n) {
        var r = se()(this).constructor;
        t = Reflect.construct(o, arguments, r);
      } else t = o.apply(this, arguments);
      return ae()(this, t);
    };
  }
  function ve(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n && (o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function ye(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {};
      n % 2 ? ve(Object(t), !0).forEach(function (n) {
        le()(e, n, t[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ve(Object(t)).forEach(function (n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
      });
    }
    return e;
  }
  var me = function () {
      function e() {
        pe()(this, e);
      }
      return ge()(e, [{
        key: "debug",
        value: function value(e) {}
      }, {
        key: "info",
        value: function value(e) {}
      }, {
        key: "warn",
        value: function value(e) {}
      }, {
        key: "error",
        value: function value(e) {}
      }, {
        key: "advancedLog",
        value: function value(e) {}
      }]), e;
    }(),
    he = u,
    Se = {
      DEBUG: 10,
      INFO: 20,
      WARN: 30,
      ERROR: 40,
      ADVANCED_LOG: 50
    },
    ke = function () {
      function e(n) {
        pe()(this, e), this.logMetaData = n || "", this.updateLoggerConfig();
      }
      return ge()(e, [{
        key: "hasLogMetaData",
        value: function value() {
          return !!this.logMetaData;
        }
      }, {
        key: "writeToClientLogger",
        value: function value(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (this.hasClientLogger()) {
            var t = "string" == typeof n ? n : JSON.stringify(n, Le()),
              o = "string" == typeof this.logMetaData ? this.logMetaData : JSON.stringify(this.logMetaData, Le()),
              r = "".concat(Ce(e), " ").concat(t, " ").concat(o);
            switch (e) {
              case Se.DEBUG:
                return this._clientLogger.debug(r) || r;
              case Se.INFO:
                return this._clientLogger.info(r) || r;
              case Se.WARN:
                return this._clientLogger.warn(r) || r;
              case Se.ERROR:
                return this._clientLogger.error(r) || r;
              case Se.ADVANCED_LOG:
                return this._advancedLogWriter ? this._clientLogger[this._advancedLogWriter](r) || r : "";
            }
          }
        }
      }, {
        key: "isLevelEnabled",
        value: function value(e) {
          return e >= this._level;
        }
      }, {
        key: "hasClientLogger",
        value: function value() {
          return null !== this._clientLogger;
        }
      }, {
        key: "getLogger",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.prefix || he;
          return e.logMetaData && this.setLogMetaData(e.logMetaData), this.logMetaData || console.info("*********Missing required option: WebSocketManager:logMetaData**********"), new Oe(this, ye({
            prefix: n,
            logMetaData: this.logMetaData
          }, e));
        }
      }, {
        key: "setLogMetaData",
        value: function value(e) {
          this.logMetaData = e;
        }
      }, {
        key: "updateLoggerConfig",
        value: function value(e) {
          var n = e || {};
          this._level = n.level || Se.INFO, this._advancedLogWriter = "warn", n.advancedLogWriter && (this._advancedLogWriter = n.advancedLogWriter), n.customizedLogger && "object" === r()(n.customizedLogger) && (this.useClientLogger = !0), this._clientLogger = n.logger || this.selectLogger(n), this._logsDestination = a, n.debug && (this._logsDestination = s), n.logger && (this._logsDestination = c);
        }
      }, {
        key: "selectLogger",
        value: function value(e) {
          return e.customizedLogger && "object" === r()(e.customizedLogger) ? e.customizedLogger : e.useDefaultLogger ? Te() : null;
        }
      }]), e;
    }(),
    we = function () {
      function e() {
        pe()(this, e);
      }
      return ge()(e, [{
        key: "debug",
        value: function value() {}
      }, {
        key: "info",
        value: function value() {}
      }, {
        key: "warn",
        value: function value() {}
      }, {
        key: "error",
        value: function value() {}
      }, {
        key: "advancedLog",
        value: function value() {}
      }]), e;
    }(),
    Oe = function (e) {
      re()(t, e);
      var n = be(t);
      function t(e, o) {
        var r;
        return pe()(this, t), (r = n.call(this)).options = o || {}, r.prefix = o.prefix || he, r.logManager = e, r;
      }
      return ge()(t, [{
        key: "debug",
        value: function value() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this._log(Se.DEBUG, n);
        }
      }, {
        key: "info",
        value: function value() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this._log(Se.INFO, n);
        }
      }, {
        key: "warn",
        value: function value() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this._log(Se.WARN, n);
        }
      }, {
        key: "error",
        value: function value() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this._log(Se.ERROR, n);
        }
      }, {
        key: "advancedLog",
        value: function value() {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
          return this._log(Se.ADVANCED_LOG, n);
        }
      }, {
        key: "_shouldLog",
        value: function value(e) {
          return this.logManager.hasClientLogger() && this.logManager.isLevelEnabled(e);
        }
      }, {
        key: "_writeToClientLogger",
        value: function value(e, n) {
          return this.logManager.writeToClientLogger(e, n);
        }
      }, {
        key: "_log",
        value: function value(e, n) {
          if (this._shouldLog(e)) {
            var t = this.logManager.useClientLogger ? n : this._convertToSingleStatement(n);
            return this._writeToClientLogger(e, t);
          }
        }
      }, {
        key: "_convertToSingleStatement",
        value: function value(e) {
          var n = new Date(Date.now()).toISOString(),
            t = "[".concat(n, "]");
          this.prefix && (t += this.prefix + " "), this.options && (this.options.prefix ? t += " " + this.options.prefix + ":" : t += "");
          for (var o = 0; o < e.length; o++) {
            var r = e[o];
            t += this._convertToString(r) + " ";
          }
          return t;
        }
      }, {
        key: "_convertToString",
        value: function value(e) {
          try {
            if (!e) return "";
            if (te.isString(e)) return e;
            if (te.isObject(e) && te.isFunction(e.toString)) {
              var n = e.toString();
              if ("[object Object]" !== n) return n;
            }
            return JSON.stringify(e);
          } catch (n) {
            return console.error("Error while converting argument to string", e, n), "";
          }
        }
      }]), t;
    }(we);
  function Ce(e) {
    switch (e) {
      case 10:
        return "DEBUG";
      case 20:
        return "INFO";
      case 30:
        return "WARN";
      case 40:
        return "ERROR";
      case 50:
        return "ADVANCED_LOG";
    }
  }
  function Le() {
    var e = new WeakSet();
    return function (n, t) {
      if ("object" === r()(t) && null !== t) {
        if (e.has(t)) return;
        e.add(t);
      }
      return t;
    };
  }
  var Te = function Te() {
      var e = new we();
      return e.debug = function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return console.debug.apply(window.console, [].concat(n));
      }, e.info = function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return console.info.apply(window.console, [].concat(n));
      }, e.warn = function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return console.warn.apply(window.console, [].concat(n));
      }, e.error = function () {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return console.error.apply(window.console, [].concat(n));
      }, e;
    },
    _e = function () {
      function e(n) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
        pe()(this, e), this.numAttempts = 0, this.executor = n, this.hasActiveReconnection = !1, this.defaultRetry = t;
      }
      return ge()(e, [{
        key: "retry",
        value: function value() {
          var e = this;
          this.hasActiveReconnection || (this.hasActiveReconnection = !0, setTimeout(function () {
            e._execute();
          }, this._getDelay()));
        }
      }, {
        key: "_execute",
        value: function value() {
          this.hasActiveReconnection = !1, this.executor(), this.numAttempts++;
        }
      }, {
        key: "connected",
        value: function value() {
          this.numAttempts = 0;
        }
      }, {
        key: "_getDelay",
        value: function value() {
          var e = Math.pow(2, this.numAttempts) * this.defaultRetry;
          return e <= 3e4 ? e : 3e4;
        }
      }, {
        key: "getIsConnected",
        value: function value() {
          return !this.numAttempts;
        }
      }]), e;
    }(),
    xe = null,
    We = function We() {
      var e = !1,
        n = xe.getLogger({
          prefix: u
        }),
        t = te.isNetworkOnline(),
        o = {
          primary: null,
          secondary: null
        },
        r = {
          reconnectWebSocket: !0,
          websocketInitFailed: !1,
          exponentialBackOffTime: 1e3,
          exponentialTimeoutHandle: null,
          lifeTimeTimeoutHandle: null,
          webSocketInitCheckerTimeoutId: null,
          connState: null
        },
        i = {
          connectWebSocketRetryCount: 0,
          connectionAttemptStartTime: null,
          noOpenConnectionsTimestamp: null
        },
        a = {
          pendingResponse: !1,
          intervalHandle: null
        },
        c = {
          pendingResponse: !1,
          intervalHandle: null
        },
        s = {
          initFailure: new Set(),
          getWebSocketTransport: null,
          subscriptionUpdate: new Set(),
          subscriptionFailure: new Set(),
          topic: new Map(),
          allMessage: new Set(),
          connectionGain: new Set(),
          connectionLost: new Set(),
          connectionOpen: new Set(),
          connectionClose: new Set(),
          deepHeartbeatSuccess: new Set(),
          deepHeartbeatFailure: new Set(),
          topicFailure: new Set()
        },
        Y = {
          connConfig: null,
          promiseHandle: null,
          promiseCompleted: !0
        },
        ee = {
          subscribed: new Set(),
          pending: new Set(),
          subscriptionHistory: new Set()
        },
        ne = {
          responseCheckIntervalId: null,
          requestCompleted: !0,
          reSubscribeIntervalId: null,
          consecutiveFailedSubscribeAttempts: 0,
          consecutiveNoResponseRequest: 0
        },
        oe = new _e(function () {
          Ie();
        }),
        re = new Set([V, X, $, K]),
        ie = setInterval(function () {
          if (t !== te.isNetworkOnline()) {
            if (!(t = te.isNetworkOnline())) return n.advancedLog(l), void Me(n.info(l));
            var e = pe();
            t && (!e || ue(e, WebSocket.CLOSING) || ue(e, WebSocket.CLOSED)) && (n.advancedLog(d), Me(n.info(d)), Ie());
          }
        }, 250),
        ae = function ae(e, t) {
          e.forEach(function (e) {
            try {
              e(t);
            } catch (e) {
              Me(n.error("Error executing callback", e));
            }
          });
        },
        ce = function ce(e) {
          if (null === e) return "NULL";
          switch (e.readyState) {
            case WebSocket.CONNECTING:
              return "CONNECTING";
            case WebSocket.OPEN:
              return "OPEN";
            case WebSocket.CLOSING:
              return "CLOSING";
            case WebSocket.CLOSED:
              return "CLOSED";
            default:
              return "UNDEFINED";
          }
        },
        se = function se() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          Me(n.debug("[" + e + "] Primary WebSocket: " + ce(o.primary) + " | Secondary WebSocket: " + ce(o.secondary)));
        },
        ue = function ue(e, n) {
          return e && e.readyState === n;
        },
        le = function le(e) {
          return ue(e, WebSocket.OPEN);
        },
        de = function de(e) {
          return null === e || void 0 === e.readyState || ue(e, WebSocket.CLOSED);
        },
        pe = function pe() {
          return null !== o.secondary ? o.secondary : o.primary;
        },
        fe = function fe() {
          return le(pe());
        },
        ge = function ge() {
          if (e && c.pendingResponse && (n.advancedLog(g), Me(n.warn(g)), ae(s.deepHeartbeatFailure, {
            timestamp: Date.now(),
            error: "aws/ping response is not received"
          }), clearInterval(c.intervalHandle), c.pendingResponse = !1), a.pendingResponse) return n.advancedLog(f), Me(n.warn(f)), clearInterval(a.intervalHandle), a.intervalHandle = null, a.pendingResponse = !1, void Ie();
          fe() ? (e && (Me(n.debug(m)), pe().send(Te(K)), c.pendingResponse = !0), Me(n.debug(y)), pe().send(Te($)), a.pendingResponse = !0) : (e && (n.advancedLog(S), Me(n.warn(S)), ae(s.deepHeartbeatFailure, {
            timestamp: Date.now(),
            error: "Unable to send message to aws/ping because websocket connection is not established."
          })), n.advancedLog(h), Me(n.warn(h)), se("sendHeartBeat"), Ie());
        },
        be = function be() {
          n.advancedLog(z), r.exponentialBackOffTime = 1e3, a.pendingResponse = !1, c.pendingResponse = !1, r.reconnectWebSocket = !0, clearTimeout(r.lifeTimeTimeoutHandle), clearInterval(a.intervalHandle), clearInterval(c.intervalHandle), clearTimeout(r.exponentialTimeoutHandle), clearTimeout(r.webSocketInitCheckerTimeoutId), a.intervalHandle = null;
        },
        ve = function ve() {
          ne.consecutiveFailedSubscribeAttempts = 0, ne.consecutiveNoResponseRequest = 0, clearInterval(ne.responseCheckIntervalId), clearInterval(ne.reSubscribeIntervalId);
        },
        ye = function ye() {
          i.connectWebSocketRetryCount = 0, i.connectionAttemptStartTime = null, i.noOpenConnectionsTimestamp = null;
        },
        me = function me() {
          oe.connected();
          try {
            n.advancedLog(C), Me(n.info(C)), se("webSocketOnOpen"), null !== r.connState && r.connState !== Q || ae(s.connectionGain), r.connState = Z;
            var e = Date.now();
            ae(s.connectionOpen, {
              connectWebSocketRetryCount: i.connectWebSocketRetryCount,
              connectionAttemptStartTime: i.connectionAttemptStartTime,
              noOpenConnectionsTimestamp: i.noOpenConnectionsTimestamp,
              connectionEstablishedTime: e,
              timeToConnect: e - i.connectionAttemptStartTime,
              timeWithoutConnection: i.noOpenConnectionsTimestamp ? e - i.noOpenConnectionsTimestamp : null
            }), ye(), be(), pe().openTimestamp = Date.now(), 0 === ee.subscribed.size && le(o.secondary) && we(o.primary, "[Primary WebSocket] Closing WebSocket"), (ee.subscribed.size > 0 || ee.pending.size > 0) && (le(o.secondary) && Me(n.info("Subscribing secondary websocket to topics of primary websocket")), ee.subscribed.forEach(function (e) {
              ee.subscriptionHistory.add(e), ee.pending.add(e);
            }), ee.subscribed.clear(), ke()), ge(), null !== a.intervalHandle && clearInterval(a.intervalHandle), a.intervalHandle = setInterval(ge, 1e4);
            var t = 1e3 * Y.connConfig.webSocketTransport.transportLifeTimeInSeconds;
            Me(n.debug("Scheduling WebSocket manager reconnection, after delay " + t + " ms")), r.lifeTimeTimeoutHandle = setTimeout(function () {
              Me(n.debug("Starting scheduled WebSocket manager reconnection")), Ie();
            }, t);
          } catch (e) {
            Me(n.error("Error after establishing WebSocket connection", e));
          }
        },
        he = function he(e) {
          se("webSocketOnError"), n.advancedLog(T, JSON.stringify(e)), Me(n.error(T, JSON.stringify(e))), oe.getIsConnected() ? Ie() : oe.retry();
        },
        Se = function Se(e) {
          var t = JSON.parse(e.data);
          switch (t.topic) {
            case V:
              if (Me(n.debug("Subscription Message received from webSocket server", e.data)), ne.requestCompleted = !0, ne.consecutiveNoResponseRequest = 0, "success" === t.content.status) ne.consecutiveFailedSubscribeAttempts = 0, t.content.topics.forEach(function (e) {
                ee.subscriptionHistory.delete(e), ee.pending.delete(e), ee.subscribed.add(e);
              }), 0 === ee.subscriptionHistory.size ? le(o.secondary) && (Me(n.info("Successfully subscribed secondary websocket to all topics of primary websocket")), we(o.primary, "[Primary WebSocket] Closing WebSocket")) : ke(), ae(s.subscriptionUpdate, t);else {
                if (clearInterval(ne.reSubscribeIntervalId), ++ne.consecutiveFailedSubscribeAttempts, 5 === ne.consecutiveFailedSubscribeAttempts) return ae(s.subscriptionFailure, t), void (ne.consecutiveFailedSubscribeAttempts = 0);
                ne.reSubscribeIntervalId = setInterval(function () {
                  ke();
                }, 500);
              }
              break;
            case $:
              Me(n.debug(b)), a.pendingResponse = !1, null === a.intervalHandle && (a.intervalHandle = setInterval(ge, 1e4));
              break;
            case K:
              Me(n.debug(v)), c.pendingResponse = !1, 200 === t.statusCode ? ae(s.deepHeartbeatSuccess, {
                timestamp: Date.now()
              }) : ae(s.deepHeartbeatFailure, {
                timestamp: Date.now(),
                statusCode: t.statusCode,
                statusContent: t.statusContent
              });
              break;
            default:
              if (t.topic) {
                if (n.advancedLog(U, t.topic), Me(n.debug(U + t.topic)), le(o.primary) && le(o.secondary) && 0 === ee.subscriptionHistory.size && this === o.primary) return void Me(n.warn("Ignoring Message for Topic " + t.topic + ", to avoid duplicates"));
                if (0 === s.allMessage.size && 0 === s.topic.size) return void Me(n.warn("No registered callback listener for Topic", t.topic));
                n.advancedLog(B, t.topic), ae(s.allMessage, t), s.topic.has(t.topic) && ae(s.topic.get(t.topic), t);
              } else t.message ? (n.advancedLog(q, t), Me(n.warn(q, t)), ae(s.topicFailure, {
                timestamp: Date.now(),
                errorMessage: t.message,
                connectionId: t.connectionId,
                requestId: t.requestId
              })) : (n.advancedLog(J, t), Me(n.warn(J, t)));
          }
        },
        ke = function e() {
          if (ne.consecutiveNoResponseRequest > 3) return Me(n.warn("Ignoring subscribePendingTopics since we have exhausted max subscription retries with no response")), void ae(s.subscriptionFailure, te.getSubscriptionResponse(V, !1, Array.from(ee.pending)));
          fe() ? 0 !== Array.from(ee.pending).length && (clearInterval(ne.responseCheckIntervalId), pe().send(Te(V, {
            topics: Array.from(ee.pending)
          })), ne.requestCompleted = !1, ne.responseCheckIntervalId = setInterval(function () {
            ne.requestCompleted || (++ne.consecutiveNoResponseRequest, e());
          }, 1e3)) : Me(n.warn("Ignoring subscribePendingTopics call since Default WebSocket is not open"));
        },
        we = function we(e, t) {
          ue(e, WebSocket.CONNECTING) || ue(e, WebSocket.OPEN) ? e.close(1e3, t) : Me(n.warn("Ignoring WebSocket Close request, WebSocket State: " + ce(e)));
        },
        Oe = function Oe(e) {
          we(o.primary, "[Primary] WebSocket " + e), we(o.secondary, "[Secondary] WebSocket " + e);
        },
        Ce = function Ce() {
          i.connectWebSocketRetryCount++;
          var e = te.addJitter(r.exponentialBackOffTime, .3);
          Date.now() + e <= Y.connConfig.urlConnValidTime ? (n.advancedLog(_), Me(n.debug(_ + e + " ms")), r.exponentialTimeoutHandle = setTimeout(function () {
            return Ne();
          }, e), r.exponentialBackOffTime *= 2) : (n.advancedLog(x), Me(n.warn(x)), Ie());
        },
        Le = function Le(e) {
          be(), ve(), n.advancedLog(W, e), Me(n.error(W)), r.websocketInitFailed = !0, Oe(I), clearInterval(ie), ae(s.initFailure, {
            connectWebSocketRetryCount: i.connectWebSocketRetryCount,
            connectionAttemptStartTime: i.connectionAttemptStartTime,
            reason: e
          }), ye();
        },
        Te = function Te(e, n) {
          return JSON.stringify({
            topic: e,
            content: n
          });
        },
        We = function We(e) {
          return !!(te.isObject(e) && te.isObject(e.webSocketTransport) && te.isNonEmptyString(e.webSocketTransport.url) && te.validWSUrl(e.webSocketTransport.url) && 1e3 * e.webSocketTransport.transportLifeTimeInSeconds >= 3e5) || (Me(n.error("Invalid WebSocket Connection Configuration", e)), !1);
        },
        Ie = function Ie() {
          if (!te.isNetworkOnline()) return n.advancedLog(p), void Me(n.info(p));
          if (r.websocketInitFailed) Me(n.debug("WebSocket Init had failed, ignoring this getWebSocketConnConfig request"));else {
            if (Y.promiseCompleted) return be(), n.advancedLog(N), Me(n.info(N)), i.connectionAttemptStartTime = i.connectionAttemptStartTime || Date.now(), Y.promiseCompleted = !1, Y.promiseHandle = s.getWebSocketTransport(), Y.promiseHandle.then(function (e) {
              return Y.promiseCompleted = !0, n.advancedLog(F), Me(n.debug(F, e)), We(e) ? (Y.connConfig = e, Y.connConfig.urlConnValidTime = Date.now() + 85e3, Ne()) : (Le("Invalid WebSocket connection configuration: " + e), {
                webSocketConnectionFailed: !0
              });
            }, function (e) {
              return Y.promiseCompleted = !0, n.advancedLog(M), Me(n.error(M, e)), te.isNetworkFailure(e) ? (n.advancedLog(E + JSON.stringify(e)), Me(n.info(E + JSON.stringify(e))), oe.retry()) : Le("Failed to fetch webSocket connection configuration: " + JSON.stringify(e)), {
                webSocketConnectionFailed: !0
              };
            });
            Me(n.debug("There is an ongoing getWebSocketConnConfig request, this request will be ignored"));
          }
        },
        Ne = function Ne() {
          if (r.websocketInitFailed) return Me(n.info("web-socket initializing had failed, aborting re-init")), {
            webSocketConnectionFailed: !0
          };
          if (!te.isNetworkOnline()) return Me(n.warn("System is offline aborting web-socket init")), {
            webSocketConnectionFailed: !0
          };
          n.advancedLog(D), Me(n.info(D)), se("initWebSocket");
          try {
            if (We(Y.connConfig)) {
              var e = null;
              return le(o.primary) ? (Me(n.debug("Primary Socket connection is already open")), ue(o.secondary, WebSocket.CONNECTING) || (Me(n.debug("Establishing a secondary web-socket connection")), oe.numAttempts = 0, o.secondary = Fe()), e = o.secondary) : (ue(o.primary, WebSocket.CONNECTING) || (Me(n.debug("Establishing a primary web-socket connection")), o.primary = Fe()), e = o.primary), r.webSocketInitCheckerTimeoutId = setTimeout(function () {
                le(e) || Ce();
              }, 1e3), {
                webSocketConnectionFailed: !1
              };
            }
          } catch (e) {
            return Me(n.error("Error Initializing web-socket-manager", e)), Le("Failed to initialize new WebSocket: " + e.message), {
              webSocketConnectionFailed: !0
            };
          }
        },
        Fe = function Fe() {
          var e = new WebSocket(Y.connConfig.webSocketTransport.url);
          return e.addEventListener("open", me), e.addEventListener("message", Se), e.addEventListener("error", he), e.addEventListener("close", function (t) {
            return function (e, t) {
              n.advancedLog(L, JSON.stringify(e)), Me(n.info(L, JSON.stringify(e))), se("webSocketOnClose before-cleanup"), ae(s.connectionClose, {
                openTimestamp: t.openTimestamp,
                closeTimestamp: Date.now(),
                connectionDuration: Date.now() - t.openTimestamp,
                code: e.code,
                reason: e.reason
              }), de(o.primary) && (o.primary = null), de(o.secondary) && (o.secondary = null), r.reconnectWebSocket && (le(o.primary) || le(o.secondary) ? de(o.primary) && le(o.secondary) && (Me(n.info("[Primary] WebSocket Cleanly Closed")), o.primary = o.secondary, o.secondary = null) : (Me(n.warn("Neither primary websocket and nor secondary websocket have open connections, attempting to re-establish connection")), r.connState === Q ? Me(n.info("Ignoring connectionLost callback invocation")) : (ae(s.connectionLost, {
                openTimestamp: t.openTimestamp,
                closeTimestamp: Date.now(),
                connectionDuration: Date.now() - t.openTimestamp,
                code: e.code,
                reason: e.reason
              }), i.noOpenConnectionsTimestamp = Date.now()), r.connState = Q, Ie()), se("webSocketOnClose after-cleanup"));
            }(t, e);
          }), e;
        },
        Me = function Me(e) {
          return e && "function" == typeof e.sendInternalLogToServer && e.sendInternalLogToServer(), e;
        };
      this.init = function (e) {
        if (te.assertTrue(te.isFunction(e), "transportHandle must be a function"), null === s.getWebSocketTransport) return s.getWebSocketTransport = e, Ie();
        Me(n.warn("Web Socket Manager was already initialized"));
      }, this.onInitFailure = function (e) {
        return n.advancedLog(R), te.assertTrue(te.isFunction(e), "cb must be a function"), s.initFailure.add(e), r.websocketInitFailed && e(), function () {
          return s.initFailure.delete(e);
        };
      }, this.onConnectionOpen = function (e) {
        return n.advancedLog(A), te.assertTrue(te.isFunction(e), "cb must be a function"), s.connectionOpen.add(e), function () {
          return s.connectionOpen.delete(e);
        };
      }, this.onConnectionClose = function (e) {
        return n.advancedLog(j), te.assertTrue(te.isFunction(e), "cb must be a function"), s.connectionClose.add(e), function () {
          return s.connectionClose.delete(e);
        };
      }, this.onConnectionGain = function (e) {
        return n.advancedLog(H), te.assertTrue(te.isFunction(e), "cb must be a function"), s.connectionGain.add(e), fe() && e(), function () {
          return s.connectionGain.delete(e);
        };
      }, this.onConnectionLost = function (e) {
        return n.advancedLog(P), te.assertTrue(te.isFunction(e), "cb must be a function"), s.connectionLost.add(e), r.connState === Q && e(), function () {
          return s.connectionLost.delete(e);
        };
      }, this.onSubscriptionUpdate = function (e) {
        return te.assertTrue(te.isFunction(e), "cb must be a function"), s.subscriptionUpdate.add(e), function () {
          return s.subscriptionUpdate.delete(e);
        };
      }, this.onSubscriptionFailure = function (e) {
        return n.advancedLog(G), te.assertTrue(te.isFunction(e), "cb must be a function"), s.subscriptionFailure.add(e), function () {
          return s.subscriptionFailure.delete(e);
        };
      }, this.onMessage = function (e, n) {
        return te.assertNotNull(e, "topicName"), te.assertTrue(te.isFunction(n), "cb must be a function"), s.topic.has(e) ? s.topic.get(e).add(n) : s.topic.set(e, new Set([n])), function () {
          return s.topic.get(e).delete(n);
        };
      }, this.onAllMessage = function (e) {
        return te.assertTrue(te.isFunction(e), "cb must be a function"), s.allMessage.add(e), function () {
          return s.allMessage.delete(e);
        };
      }, this.subscribeTopics = function (e) {
        te.assertNotNull(e, "topics"), te.assertIsList(e), e.forEach(function (e) {
          ee.subscribed.has(e) || ee.pending.add(e);
        }), ne.consecutiveNoResponseRequest = 0, ke();
      }, this.sendMessage = function (e) {
        if (te.assertIsObject(e, "payload"), void 0 === e.topic || re.has(e.topic)) Me(n.warn("Cannot send message, Invalid topic", e));else {
          try {
            e = JSON.stringify(e);
          } catch (t) {
            return void Me(n.warn("Error stringify message", e));
          }
          fe() ? pe().send(e) : Me(n.warn("Cannot send message, web socket connection is not open"));
        }
      }, this.deepHeartbeatHandler = function () {
        e = !0;
      }, this.onDeepHeartbeatSuccess = function (e) {
        return n.advancedLog(k), te.assertTrue(te.isFunction(e), "cb must be a function"), s.deepHeartbeatSuccess.add(e), function () {
          return s.deepHeartbeatSuccess.delete(e);
        };
      }, this.onDeepHeartbeatFailure = function (e) {
        return n.advancedLog(w), te.assertTrue(te.isFunction(e), "cb must be a function"), s.deepHeartbeatFailure.add(e), function () {
          return s.deepHeartbeatFailure.delete(e);
        };
      }, this.onTopicFailure = function (e) {
        return n.advancedLog(O), te.assertTrue(te.isFunction(e), "cb must be a function"), s.topicFailure.add(e), function () {
          return s.topicFailure.delete(e);
        };
      }, this.closeWebSocket = function () {
        be(), ve(), r.reconnectWebSocket = !1, clearInterval(ie), Oe("User request to close WebSocket");
      }, this.terminateWebSocketManager = Le;
    },
    Ie = {
      create: function create(e) {
        return xe || (xe = new ke(e)), xe.hasLogMetaData() || xe.setLogMetaData(e), e || console.info("********Missing metaData for logs from websocketManager: initialize websocketManager using create(metaData)*******"), new We();
      },
      setGlobalConfig: function setGlobalConfig(e) {
        var n = e && e.loggerConfig;
        xe || (xe = new ke()), xe.updateLoggerConfig(n);
        var t = e && e.webSocketManagerConfig,
          o = t && t.isNetworkOnline;
        o && "function" == typeof o && (te.isNetworkOnline = o);
      },
      LogLevel: Se,
      Logger: me
    };
  global.connect = global.connect || {}, connect.WebSocketManager = Ie;
  var Ne = Ie;
  n.default = Ne;
}]);
var WebSocketManager = connect.WebSocketManager;
connect.WebSocketManager = currentWebsocketManager || WebSocketManager;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebSocketManager);

/***/ }),

/***/ "./src/lib/connect-csm-worker.js":
/*!***************************************!*\
  !*** ./src/lib/connect-csm-worker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csmWorkerString": () => (/* binding */ csmWorkerString)
/* harmony export */ });
var csmWorkerString = "(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  csm.EVENT_TYPE = {\n    LOG: 'LOG',\n    METRIC: 'METRIC',\n    CONFIG: 'CONFIG',\n    WORKFLOW_EVENT: 'WORKFLOW_EVENT',\n    CUSTOM: 'CUSTOM',\n    CLOSE: 'CLOSE',\n    SET_AUTH: 'SET_AUTH',\n    SET_CONFIG: 'SET_CONFIG',\n  };\n\n  csm.UNIT = {\n    COUNT: 'Count',\n    SECONDS: 'Seconds',\n    MILLISECONDS: 'Milliseconds',\n    MICROSECONDS: 'Microseconds',\n  };\n})();\n\n(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  const MAX_METRIC_DIMENSIONS = 10;\n\n  /** ********* Dimension Classes ***********/\n\n  const Dimension = function(name, value) {\n    csm.Util.assertExist(name, 'name');\n    csm.Util.assertExist(value, 'value');\n\n    this.name = name;\n    this.value = value == null ? 'null' : (value === '' ? ' ' : value.toString());\n  };\n\n\n  /** ********* Metric Classes ***********/\n\n  const Metric = function(metricName, unit, value, dedupeOptions) {\n    csm.Util.assertExist(metricName, 'metricName');\n    csm.Util.assertExist(value, 'value');\n    csm.Util.assertExist(unit, 'unit');\n    csm.Util.assertTrue(csm.Util.isValidUnit(unit));\n    if (dedupeOptions) {\n      csm.Util.assertInObject(dedupeOptions, 'dedupeOptions', 'dedupeIntervalMs');\n    }\n\n    this.metricName = metricName;\n    this.unit = unit;\n    this.value = value;\n    this.timestamp = new Date();\n    this.dimensions = csm.globalDimensions ? csm.Util.deepCopy(csm.globalDimensions): [];\n    this.namespace = csm.configuration.namespace;\n    this.dedupeOptions = dedupeOptions; // optional. { dedupeIntervalMs: (int; required), context: (string; optional) }\n\n    // Currently, CloudWatch can't aggregate metrics by a subset of dimensions.\n    // To bypass this limitation, we introduce the optional dimensions concept to CSM.\n    // The CSM metric publisher will publish a default metric without optional dimension\n    // For each optional dimension, the CSM metric publisher publishes an extra metric with that dimension.\n    this.optionalDimensions = csm.globalOptionalDimensions ? csm.Util.deepCopy(csm.globalOptionalDimensions): [];\n  };\n\n  Metric.prototype.addDimension = function(name, value) {\n    this._addDimensionHelper(this.dimensions, name, value);\n  };\n\n  Metric.prototype.addOptionalDimension = function(name, value) {\n    this._addDimensionHelper(this.optionalDimensions, name, value);\n  };\n\n  Metric.prototype._addDimensionHelper = function(targetDimensions, name, value) {\n    // CloudWatch metric allows maximum 10 dimensions\n    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatch.html#putMetricData-property\n    if ((this.dimensions.length + this.optionalDimensions.length) >= MAX_METRIC_DIMENSIONS) {\n      throw new csm.ExceedDimensionLimitException(name);\n    }\n\n    const existing = targetDimensions.find(function(dimension) {\n      return dimension.name === name;\n    });\n\n    if (existing) {\n      existing.value = value == null ? 'null' : (value === '' ? ' ' : value.toString());\n    } else {\n      targetDimensions.push(new Dimension(name, value));\n    }\n  };\n\n\n  /** ********* Telemetry Classes ***********/\n\n  const WorkflowEvent = function(params) {\n    this.timestamp = params.timestamp || new Date().getTime();\n    this.workflowType = params.workflow.type;\n    this.instanceId = params.workflow.instanceId;\n    this.userId = params.userId;\n    this.organizationId = params.organizationId;\n    this.accountId = params.accountId;\n    this.event = params.event;\n    this.appName = params.appName;\n    this.data = [];\n\n    // Convert 'data' map into the KeyValuePairList structure expected by the Lambda API\n    for (const key in params.data) {\n      if (Object.prototype.hasOwnProperty.call(params.data, key)) {\n        this.data.push({'key': key, 'value': params.data[key]});\n      }\n    }\n  };\n\n  /** ********* Exceptions ***********/\n\n  const NullOrUndefinedException = function(paramName) {\n    this.name = 'NullOrUndefinedException';\n    this.message = paramName + ' is null or undefined. ';\n  };\n  NullOrUndefinedException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const AssertTrueException = function() {\n    this.name = 'AssertTrueException';\n    this.message = 'Assertion failed. ';\n  };\n  AssertTrueException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const ExceedDimensionLimitException = function(dimensionName) {\n    this.name = 'ExceedDimensionLimitException';\n    this.message = 'Could not add dimension ' + dimensionName + ' . Metric has maximum 10 dimensions. ';\n  };\n  ExceedDimensionLimitException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const InitializationException = function() {\n    this.name = 'InitializationException';\n    this.message = 'Initialization failed. ';\n  };\n  InitializationException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n\n  csm.Dimension = Dimension;\n  csm.Metric = Metric;\n  csm.WorkflowEvent = WorkflowEvent;\n  csm.NullOrUndefinedException = NullOrUndefinedException;\n  csm.AssertTrueException = AssertTrueException;\n  csm.InitializationException = InitializationException;\n  csm.ExceedDimensionLimitException = ExceedDimensionLimitException;\n})();\n\n(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  const validTimeUnits = [csm.UNIT.SECONDS, csm.UNIT.MILLISECONDS, csm.UNIT.MICROSECONDS];\n  const validUnits = validTimeUnits.concat(csm.UNIT.COUNT);\n\n  const Util = {\n    assertExist: function(value, paramName) {\n      if (value === null || value === undefined) {\n        throw new csm.NullOrUndefinedException(paramName);\n      }\n    },\n    assertTrue: function(value) {\n      if (!value) {\n        throw new csm.AssertTrueException();\n      }\n    },\n    assertInObject: function(obj, objName, key) {\n      if (obj === null || obj === undefined || typeof obj !== 'object') {\n        throw new csm.NullOrUndefinedException(objName);\n      }\n      if (key === null || key === undefined || !obj[key]) {\n        throw new csm.NullOrUndefinedException(`${objName}[${key}]`);\n      }\n    },\n    isValidUnit: function(unit) {\n      return validUnits.includes(unit);\n    },\n    isValidTimeUnit: function(unit) {\n      return validTimeUnits.includes(unit);\n    },\n    isEmpty: function(value) {\n      if (value !== null && typeof val === 'object') {\n        return Objects.keys(value).length === 0;\n      }\n      return !value;\n    },\n    deepCopy: function(obj) {\n      // NOTE: this will fail if obj has a circular reference\n      return JSON.parse(JSON.stringify(obj));\n    },\n\n    /**\n     * This function is used before setting the page location for default metrics and logs,\n     * and the APIs that set page location\n     * Can be overridden by calling csm.API.setPageLocationTransformer(function(){})\n     * @param {string}        pathname path for page location\n     * @return {string}       pathname provided\n     */\n    pageLocationTransformer: function(pathname) {\n      return pathname;\n    },\n\n    /**\n     * As of now, our service public claims only support for Firefox and Chrome\n     * Reference https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent\n     *\n     * This function will only return firefox, chrome and others\n     *\n     * Best practice as indicated in MDN, \"Avoiding user agent detection\"\n     */\n    getBrowserDetails: function() {\n      const userAgent = window.navigator.userAgent;\n      const details = {};\n      if (userAgent.includes('Firefox') && !userAgent.includes('Seamonkey')) {\n        details.name = 'Firefox';\n        details.version = getBrowserVersion('Firefox');\n      } else if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {\n        details.name = 'Chrome';\n        details.version = getBrowserVersion('Chrome');\n      }\n    },\n\n    randomId: function() {\n      return new Date().getTime() + '-' + Math.random().toString(36).slice(2);\n    },\n\n    getOrigin: function() {\n      return document.location.origin;\n    },\n\n    getReferrerUrl: function() {\n      const referrer = document.referrer || '';\n      return this.getURLOrigin(referrer);\n    },\n\n    getWindowParent: function() {\n      let parentLocation = '';\n      try {\n        parentLocation = window.parent.location.href;\n      } catch (e) {\n        parentLocation = '';\n      }\n      return parentLocation;\n    },\n\n    getURLOrigin: function(urlValue) {\n      let origin = '';\n      const originArray = urlValue.split( '/' );\n      if (originArray.length >= 3) {\n        const protocol = originArray[0];\n        const host = originArray[2];\n        origin = protocol + '//' + host;\n      }\n      return origin;\n    },\n\n  };\n\n  const getBrowserVersion = function(browserName) {\n    const userAgent = window.navigator.userAgent;\n    const browserNameIndex = userAgent.indexOf(browserName);\n    const nextSpaceIndex = userAgent.indexOf(' ', browserNameIndex);\n    if (nextSpaceIndex === -1) {\n      return userAgent.substring(browserNameIndex + browserName.length + 1, userAgent.length);\n    } else {\n      return userAgent.substring(browserNameIndex + browserName.length + 1, nextSpaceIndex);\n    }\n  };\n\n  csm.Util = Util;\n})();\n\n(function() {\n  const XHR_DONE_READY_STATE = 4; // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState\n\n  const global = self;\n  const configuration = {};\n  const batchSettings = {\n    maxMetricsSize: 30,\n    maxWorkflowEventsSize: 30,\n    putMetricsIntervalMs: 30000,\n    putWorkflowEventsIntervalMs: 2000,\n  };\n  const metricLists = {}; // metricList per CloudWatch Namespace\n  const metricMap = {};\n  const ports = {};\n  let workflowEvents = {workflowEventList: []};\n\n  // SharedWorker wiki:  https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker\n  onconnect = function(connectEvent) {\n    const port = connectEvent.ports[0];\n\n    port.onmessage = function(event) {\n      const data = event.data;\n      const messageType = data.type;\n      const message = data.message;\n      const endpoint = data.endpoint;\n      const headers = data.headers;\n\n      if (data.portId && !(data.portId in ports)) {\n        // This could happen when a user tries to close a tab which has a pop up alert to confirm closing,\n        // and the user decides to cancel closing\n        // This triggers before unload event while the tab or window is not closed actually\n        ports[data.portId] = port;\n      }\n\n      const {METRIC, WORKFLOW_EVENT, CUSTOM, CONFIG, SET_AUTH, SET_CONFIG, CLOSE} = csm.EVENT_TYPE;\n      switch (messageType) {\n        case METRIC: {\n          csm.Util.assertInObject(message, 'message', 'namespace');\n          const namespace = message.namespace;\n          if (shouldDedupe(message)) break;\n          addMetricEventToMap(message);\n          if (metricLists[namespace]) {\n            metricLists[namespace].push(message);\n          } else {\n            metricLists[namespace] = [message];\n          }\n          if (metricLists[namespace].length >= batchSettings.maxMetricsSize) {\n            putMetricsForNamespace(namespace);\n          }\n          break;\n        }\n        case WORKFLOW_EVENT: {\n          workflowEvents.workflowEventList.push(message);\n          if (workflowEvents.length >= batchSettings.maxWorkflowEventsSize) {\n            putWorkflowEvents();\n          }\n          break;\n        }\n        case CUSTOM: {\n          putCustom(endpoint, headers, message);\n          break;\n        }\n        case CONFIG: {\n          const portId = Object.keys(ports).length + 1; // portId starts from 1\n          ports[portId] = port;\n          for (const setting of Object.keys(message)) {\n            if (!csm.Util.isEmpty(message[setting])) {\n              configuration[setting] = message[setting];\n            }\n          }\n\n          // set optional batch settings\n          if (configuration.batchSettings) {\n            for (const setting of Object.keys(configuration.batchSettings)) {\n              batchSettings[setting] = configuration.batchSettings[setting];\n            }\n          }\n          // send metrics and workflow events at set intervals\n          putMetrics();\n          putWorkflowEvents();\n          global.setInterval(putMetrics, batchSettings.putMetricsIntervalMs);\n          global.setInterval(putWorkflowEvents, batchSettings.putWorkflowEventsIntervalMs);\n\n          port.postMessage(\n              {\n                type: csm.EVENT_TYPE.CONFIG,\n                portId: portId,\n              },\n          );\n          break;\n        }\n        case SET_AUTH: {\n          configuration.authParams = message;\n          authenticate();\n          break;\n        }\n        case SET_CONFIG: {\n          configuration[message.key] = message.value;\n          break;\n        }\n        case CLOSE: {\n          delete ports[data.portId];\n          if (Object.keys(ports).length === 0) {\n            putMetrics();\n            putWorkflowEvents();\n          }\n          break;\n        }\n        default:\n          break;\n      }\n    };\n  };\n\n  const shouldDedupe = function(metric) {\n    try {\n      const pastMetric = getPastMetricEvent(metric);\n      return pastMetric && metric.dedupeOptions &&\n        (metric.timestamp - pastMetric.timestamp < metric.dedupeOptions.dedupeIntervalMs);\n    } catch (err) {\n      console.error('Error in shouldDedupe', err);\n      return false;\n    }\n  };\n\n  const getPastMetricEvent = function(metric) {\n    try {\n      return metricMap[getMetricEventKey(metric)];\n    } catch (err) {\n      // ignore err - no previous metrics found\n      return null;\n    }\n  };\n\n  const addMetricEventToMap = function(metric) {\n    try {\n      metricMap[getMetricEventKey(metric)] = metric;\n    } catch (err) {\n      console.error('Failed to add event to metricMap', err);\n    }\n    csm.metricMap = metricMap;\n  };\n\n  const getMetricEventKey = function(metric) {\n    const {namespace, metricName, unit, dedupeOptions} = metric;\n    let context = 'global';\n    if (dedupeOptions && dedupeOptions.context) {\n      context = dedupeOptions.context;\n    }\n    return `${namespace}-${metricName}-${unit}-${context}`;\n  };\n\n  const authenticate = function() {\n    postRequest(configuration.endpointUrl + '/auth', {authParams: configuration.authParams},\n        {\n          success: function(response) {\n            if (response && response.jwtToken) {\n              configuration.authParams.jwtToken = response.jwtToken;\n            }\n          },\n          failure: function(response) {\n            broadcastMessage('[ERROR] csm auth failed!');\n            broadcastMessage('Response : ' + response);\n          },\n        }, {'x-api-key': 'auth-method-level-key'});\n  };\n\n  /**\n   * Put metrics to service when:\n   * a) metricList size is at maxMetricsSize\n   * b) every putMetricsIntervalMs time if the metricList is not empty\n   * c) worker is closed\n   *\n   * Timer is reset, and metricList emptied after each putMetrics call\n   */\n  const putMetrics = function() {\n    for (const namespace of Object.keys(metricLists)) {\n      putMetricsForNamespace(namespace);\n    }\n  };\n\n  const putMetricsForNamespace = function(namespace) {\n    csm.Util.assertInObject(metricLists, 'metricLists', namespace);\n    const metricList = metricLists[namespace];\n\n    if (metricList.length > 0 && !configuration.dryRunMode && configuration.endpointUrl) {\n      postRequest(configuration.endpointUrl + '/put-metrics', {\n        metricNamespace: namespace,\n        metricList: metricList,\n        authParams: configuration.authParams,\n        accountId: configuration.accountId,\n        organizationId: configuration.organizationId,\n        agentResourceId: configuration.userId,\n      }, {\n        success: function(response) {\n          if (response) {\n            broadcastMessage('PutMetrics response : ' + response);\n            if (response.unsetToken) {\n              delete configuration.authParams.jwtToken;\n              authenticate();\n            }\n          }\n        },\n        failure: function(response) {\n          broadcastMessage('[ERROR] Put metrics to service failed! ');\n        },\n      });\n    }\n    metricLists[namespace] = [];\n  };\n\n  /**\n   * Put metrics to service every two seconds if there are events to be put.\n   */\n  const putWorkflowEvents = function() {\n    if (workflowEvents.workflowEventList.length > 0 && !configuration.dryRunMode && configuration.endpointUrl) {\n      workflowEvents.authParams = configuration.authParams;\n      postRequest(configuration.endpointUrl + '/put-workflow-events', workflowEvents,\n          {\n            success: function(response) {\n              if (response) {\n                if (response.workflowEventList && response.workflowEventList.length > 0) {\n                  broadcastMessage('[WARN] There are ' + response.length + ' workflow events that failed to publish');\n                  broadcastMessage('Response : ' + response);\n                }\n                if (response.unsetToken) {\n                  delete configuration.authParams.jwtToken;\n                  authenticate();\n                }\n              }\n            },\n            failure: function(response) {\n              broadcastMessage('[ERROR] Put workflow events to service failed! ');\n            },\n          });\n    }\n\n    workflowEvents = {workflowEventList: []};\n  };\n\n  /**\n   * Put data to custom endpoint on demand\n   * @param {string} endpoint\n   * @param {object} headers\n   * @param {object} data to send to endpoint\n   */\n  const putCustom = function(endpoint, headers, data) {\n    if (!configuration.dryRunMode && endpoint && data) {\n      postRequest(endpoint, data, {\n        success: function(response) {\n          if (response) {\n            broadcastMessage('Response : ' + response);\n          }\n        },\n        failure: function(response) {\n          broadcastMessage('[ERROR] Failed to put custom data! ');\n        },\n      }, headers);\n    }\n  };\n\n  /**\n   * Broadcast message to all tabs\n   * @param {string} message to post to all the tabs\n   */\n  const broadcastMessage = function(message) {\n    for (const portId in ports) {\n      if (Object.prototype.hasOwnProperty.call(ports, portId)) {\n        ports[portId].postMessage(message);\n      }\n    }\n  };\n\n  const postRequest = function(url, data, callbacks, headers) {\n    csm.Util.assertExist(url, 'url');\n    csm.Util.assertExist(data, 'data');\n\n    callbacks = callbacks || {};\n    callbacks.success = callbacks.success || function() {};\n    callbacks.failure = callbacks.failure || function() {};\n\n    const request = new XMLHttpRequest(); // new HttpRequest instance\n    request.onreadystatechange = function() {\n      const errorList = request.response ? JSON.parse(request.response): [];\n      if (request.readyState === XHR_DONE_READY_STATE) { // request finished and response is ready\n        if (request.status === 200) {\n          callbacks.success(errorList);\n        } else {\n          broadcastMessage('AJAX request failed with status: ' + request.status);\n          callbacks.failure(errorList);\n        }\n      }\n    };\n\n    request.open('POST', url);\n    if (headers && typeof headers === 'object') {\n      Object.keys(headers).forEach((header) => request.setRequestHeader(header, headers[header]));\n    } else {\n      request.setRequestHeader('Content-Type', 'application/json');\n    }\n    request.send(JSON.stringify(data));\n  };\n})()";

/***/ }),

/***/ "./src/lib/connect-csm.js":
/*!********************************!*\
  !*** ./src/lib/connect-csm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "csmJsString": () => (/* binding */ csmJsString)
/* harmony export */ });
var csmJsString = "(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  csm.EVENT_TYPE = {\n    LOG: 'LOG',\n    METRIC: 'METRIC',\n    CONFIG: 'CONFIG',\n    WORKFLOW_EVENT: 'WORKFLOW_EVENT',\n    CUSTOM: 'CUSTOM',\n    CLOSE: 'CLOSE',\n    SET_AUTH: 'SET_AUTH',\n    SET_CONFIG: 'SET_CONFIG',\n  };\n\n  csm.UNIT = {\n    COUNT: 'Count',\n    SECONDS: 'Seconds',\n    MILLISECONDS: 'Milliseconds',\n    MICROSECONDS: 'Microseconds',\n  };\n})();\n\n(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  const MAX_METRIC_DIMENSIONS = 10;\n\n  /** ********* Dimension Classes ***********/\n\n  const Dimension = function(name, value) {\n    csm.Util.assertExist(name, 'name');\n    csm.Util.assertExist(value, 'value');\n\n    this.name = name;\n    this.value = value == null ? 'null' : (value === '' ? ' ' : value.toString());\n  };\n\n\n  /** ********* Metric Classes ***********/\n\n  const Metric = function(metricName, unit, value, dedupeOptions) {\n    csm.Util.assertExist(metricName, 'metricName');\n    csm.Util.assertExist(value, 'value');\n    csm.Util.assertExist(unit, 'unit');\n    csm.Util.assertTrue(csm.Util.isValidUnit(unit));\n    if (dedupeOptions) {\n      csm.Util.assertInObject(dedupeOptions, 'dedupeOptions', 'dedupeIntervalMs');\n    }\n\n    this.metricName = metricName;\n    this.unit = unit;\n    this.value = value;\n    this.timestamp = new Date();\n    this.dimensions = csm.globalDimensions ? csm.Util.deepCopy(csm.globalDimensions): [];\n    this.namespace = csm.configuration.namespace;\n    this.dedupeOptions = dedupeOptions; // optional. { dedupeIntervalMs: (int; required), context: (string; optional) }\n\n    // Currently, CloudWatch can't aggregate metrics by a subset of dimensions.\n    // To bypass this limitation, we introduce the optional dimensions concept to CSM.\n    // The CSM metric publisher will publish a default metric without optional dimension\n    // For each optional dimension, the CSM metric publisher publishes an extra metric with that dimension.\n    this.optionalDimensions = csm.globalOptionalDimensions ? csm.Util.deepCopy(csm.globalOptionalDimensions): [];\n  };\n\n  Metric.prototype.addDimension = function(name, value) {\n    this._addDimensionHelper(this.dimensions, name, value);\n  };\n\n  Metric.prototype.addOptionalDimension = function(name, value) {\n    this._addDimensionHelper(this.optionalDimensions, name, value);\n  };\n\n  Metric.prototype._addDimensionHelper = function(targetDimensions, name, value) {\n    // CloudWatch metric allows maximum 10 dimensions\n    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatch.html#putMetricData-property\n    if ((this.dimensions.length + this.optionalDimensions.length) >= MAX_METRIC_DIMENSIONS) {\n      throw new csm.ExceedDimensionLimitException(name);\n    }\n\n    const existing = targetDimensions.find(function(dimension) {\n      return dimension.name === name;\n    });\n\n    if (existing) {\n      existing.value = value == null ? 'null' : (value === '' ? ' ' : value.toString());\n    } else {\n      targetDimensions.push(new Dimension(name, value));\n    }\n  };\n\n\n  /** ********* Telemetry Classes ***********/\n\n  const WorkflowEvent = function(params) {\n    this.timestamp = params.timestamp || new Date().getTime();\n    this.workflowType = params.workflow.type;\n    this.instanceId = params.workflow.instanceId;\n    this.userId = params.userId;\n    this.organizationId = params.organizationId;\n    this.accountId = params.accountId;\n    this.event = params.event;\n    this.appName = params.appName;\n    this.data = [];\n\n    // Convert 'data' map into the KeyValuePairList structure expected by the Lambda API\n    for (const key in params.data) {\n      if (Object.prototype.hasOwnProperty.call(params.data, key)) {\n        this.data.push({'key': key, 'value': params.data[key]});\n      }\n    }\n  };\n\n  /** ********* Exceptions ***********/\n\n  const NullOrUndefinedException = function(paramName) {\n    this.name = 'NullOrUndefinedException';\n    this.message = paramName + ' is null or undefined. ';\n  };\n  NullOrUndefinedException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const AssertTrueException = function() {\n    this.name = 'AssertTrueException';\n    this.message = 'Assertion failed. ';\n  };\n  AssertTrueException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const ExceedDimensionLimitException = function(dimensionName) {\n    this.name = 'ExceedDimensionLimitException';\n    this.message = 'Could not add dimension \\'' + dimensionName + '\\'. Metric has maximum 10 dimensions. ';\n  };\n  ExceedDimensionLimitException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n  const InitializationException = function() {\n    this.name = 'InitializationException';\n    this.message = 'Initialization failed. ';\n  };\n  InitializationException.prototype.toString = function() {\n    return this.name + ': ' + this.message;\n  };\n\n\n  csm.Dimension = Dimension;\n  csm.Metric = Metric;\n  csm.WorkflowEvent = WorkflowEvent;\n  csm.NullOrUndefinedException = NullOrUndefinedException;\n  csm.AssertTrueException = AssertTrueException;\n  csm.InitializationException = InitializationException;\n  csm.ExceedDimensionLimitException = ExceedDimensionLimitException;\n})();\n\n(function() {\n  const global = self;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  const validTimeUnits = [csm.UNIT.SECONDS, csm.UNIT.MILLISECONDS, csm.UNIT.MICROSECONDS];\n  const validUnits = validTimeUnits.concat(csm.UNIT.COUNT);\n\n  const Util = {\n    assertExist: function(value, paramName) {\n      if (value === null || value === undefined) {\n        throw new csm.NullOrUndefinedException(paramName);\n      }\n    },\n    assertTrue: function(value) {\n      if (!value) {\n        throw new csm.AssertTrueException();\n      }\n    },\n    assertInObject: function(obj, objName, key) {\n      if (obj === null || obj === undefined || typeof obj !== 'object') {\n        throw new csm.NullOrUndefinedException(objName);\n      }\n      if (key === null || key === undefined || !obj[key]) {\n        throw new csm.NullOrUndefinedException(`${objName}[${key}]`);\n      }\n    },\n    isValidUnit: function(unit) {\n      return validUnits.includes(unit);\n    },\n    isValidTimeUnit: function(unit) {\n      return validTimeUnits.includes(unit);\n    },\n    isEmpty: function(value) {\n      if (value !== null && typeof val === 'object') {\n        return Objects.keys(value).length === 0;\n      }\n      return !value;\n    },\n    deepCopy: function(obj) {\n      // NOTE: this will fail if obj has a circular reference\n      return JSON.parse(JSON.stringify(obj));\n    },\n\n    /**\n     * This function is used before setting the page location for default metrics and logs,\n     * and the APIs that set page location\n     * Can be overridden by calling csm.API.setPageLocationTransformer(function(){})\n     * @param {string}        pathname path for page location\n     * @return {string}       pathname provided\n     */\n    pageLocationTransformer: function(pathname) {\n      return pathname;\n    },\n\n    /**\n     * As of now, our service public claims only support for Firefox and Chrome\n     * Reference https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent\n     *\n     * This function will only return firefox, chrome and others\n     *\n     * Best practice as indicated in MDN, \"Avoiding user agent detection\"\n     */\n    getBrowserDetails: function() {\n      const userAgent = window.navigator.userAgent;\n      const details = {};\n      if (userAgent.includes('Firefox') && !userAgent.includes('Seamonkey')) {\n        details.name = 'Firefox';\n        details.version = getBrowserVersion('Firefox');\n      } else if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {\n        details.name = 'Chrome';\n        details.version = getBrowserVersion('Chrome');\n      }\n    },\n\n    randomId: function() {\n      return new Date().getTime() + '-' + Math.random().toString(36).slice(2);\n    },\n\n    getOrigin: function() {\n      return document.location.origin;\n    },\n\n    getReferrerUrl: function() {\n      const referrer = document.referrer || '';\n      return this.getURLOrigin(referrer);\n    },\n\n    getWindowParent: function() {\n      let parentLocation = '';\n      try {\n        parentLocation = window.parent.location.href;\n      } catch (e) {\n        parentLocation = '';\n      }\n      return parentLocation;\n    },\n\n    getURLOrigin: function(urlValue) {\n      let origin = '';\n      const originArray = urlValue.split( '/' );\n      if (originArray.length >= 3) {\n        const protocol = originArray[0];\n        const host = originArray[2];\n        origin = protocol + '//' + host;\n      }\n      return origin;\n    },\n\n  };\n\n  const getBrowserVersion = function(browserName) {\n    const userAgent = window.navigator.userAgent;\n    const browserNameIndex = userAgent.indexOf(browserName);\n    const nextSpaceIndex = userAgent.indexOf(' ', browserNameIndex);\n    if (nextSpaceIndex === -1) {\n      return userAgent.substring(browserNameIndex + browserName.length + 1, userAgent.length);\n    } else {\n      return userAgent.substring(browserNameIndex + browserName.length + 1, nextSpaceIndex);\n    }\n  };\n\n  csm.Util = Util;\n})();\n\n(function() {\n  const global = window;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  csm.globalDimensions = []; // These dimensions are added to all captured metrics.\n  csm.globalOptionalDimensions = [];\n  csm.initFailureDimensions = [];\n\n  const API = {\n    getWorkflow: function(workflowType, instanceId, data) {\n      return csm.workflow(workflowType, instanceId, data);\n    },\n\n    addMetric: function(metric) {\n      csm.Util.assertExist(metric, 'metric');\n      csm.putMetric(metric);\n    },\n\n    addMetricWithDedupe: function(metric, dedupeIntervalMs, context) {\n      csm.Util.assertExist(metric, 'metric');\n      csm.Util.assertExist(metric, 'dedupeIntervalMs');\n      // context is optional; if present it will only dedupe on metrics with the same context. ex.) tabId\n      metric.dedupeOptions = {dedupeIntervalMs, context: context || 'global'};\n      csm.putMetric(metric);\n    },\n\n    addCount: function(metricName, count) {\n      csm.Util.assertExist(metricName, 'metricName');\n      csm.Util.assertExist(count, 'count');\n\n      const metric = new csm.Metric(metricName, csm.UNIT.COUNT, count);\n      csm.putMetric(metric);\n    },\n\n    addCountWithPageLocation: function(metricName) {\n      csm.Util.assertExist(metricName, 'metricName');\n\n      const metric = new csm.Metric(metricName, csm.UNIT.COUNT, 1.0);\n      metric.addDimension('WindowLocation', csm.Util.pageLocationTransformer(window.location.pathname));\n      csm.putMetric(metric);\n    },\n\n    addError: function(metricName, count) {\n      csm.Util.assertExist(metricName, 'metricName');\n\n      if (count === undefined || count == null) {\n        count = 1.0;\n      }\n      const metric = new csm.Metric(metricName, csm.UNIT.COUNT, count);\n      metric.addDimension('Metric', 'Error');\n      csm.putMetric(metric);\n    },\n\n    addSuccess: function(metricName) {\n      API.addError(metricName, 0);\n    },\n\n    addTime: function(metricName, time, unit) {\n      csm.Util.assertExist(metricName, 'metricName');\n      csm.Util.assertExist(time, 'time');\n\n      let timeUnit = csm.UNIT.MILLISECONDS;\n      if (unit && csm.Util.isValidTimeUnit(unit)) {\n        timeUnit = unit;\n      }\n      const metric = new csm.Metric(metricName, timeUnit, time);\n      metric.addDimension('Metric', 'Time');\n      csm.putMetric(metric);\n    },\n\n    addTimeWithPageLocation: function(metricName, time, unit) {\n      csm.Util.assertExist(metricName, 'metricName');\n      csm.Util.assertExist(time, 'time');\n\n      let timeUnit = csm.UNIT.MILLISECONDS;\n      if (unit && csm.Util.isValidTimeUnit(unit)) {\n        timeUnit = unit;\n      }\n      const metric = new csm.Metric(metricName, timeUnit, time);\n      metric.addDimension('WindowLocation', csm.Util.pageLocationTransformer(window.location.pathname));\n      csm.putMetric(metric);\n    },\n\n    pageReady: function() {\n      if (window.performance && window.performance.now) {\n        const pageLoadTime = window.performance.now();\n        const metric = new csm.Metric('PageReadyLatency', csm.UNIT.MILLISECONDS, pageLoadTime);\n        metric.addDimension('WindowLocation', csm.Util.pageLocationTransformer(window.location.pathname));\n        csm.putMetric(metric);\n      }\n    },\n\n    setPageLocationTransformer: function(transformFunc) {\n      csm.Util.assertExist(transformFunc, 'transformFunc');\n      csm.Util.assertTrue((typeof transformFunc) === 'function');\n      csm.Util.pageLocationTransformer = transformFunc;\n    },\n\n    setGlobalDimensions: function(dimensions) {\n      csm.Util.assertExist(dimensions, 'dimensions');\n      csm.globalDimensions = dimensions;\n    },\n\n    setGlobalOptionalDimensions: function(dimensions) {\n      csm.Util.assertExist(dimensions, 'dimensions');\n      csm.globalOptionalDimensions = dimensions;\n    },\n\n    setInitFailureDimensions: function(dimensions) {\n      csm.Util.assertExist(dimensions, 'dimensions');\n      csm.initFailureDimensions = dimensions;\n    },\n\n    putCustom: function(endpoint, headers, data) {\n      csm.Util.assertExist(data, 'data');\n      csm.Util.assertExist(endpoint, 'endpoint');\n      csm.Util.assertExist(headers, 'headers');\n      csm.putCustom(endpoint, headers, data);\n    },\n\n    setAuthParams: function(authParams) {\n      csm.setAuthParams(authParams);\n    },\n\n    setConfig: function(key, value) {\n      csm.Util.assertExist(key, 'key');\n      csm.Util.assertExist(value, 'value');\n      if (!csm.configuration[key]) {\n        csm.setConfig(key, value); // set configuration variables such as accountId, instanceId, userId\n      }\n    },\n  };\n\n  csm.API = API;\n})();\n\n(function() {\n  const global = window;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  const WORKFLOW_KEY_PREFIX = 'csm.workflow';\n\n  /**\n   * Calculates the local storage key used to store a workflow of the specified type.\n   * @param {string} type of workflow\n   * @return {string} storage key\n   */\n  const getWorkflowKeyForType = function(type) {\n    return [\n      WORKFLOW_KEY_PREFIX,\n      type,\n    ].join('.');\n  };\n\n  /**\n   * Constructor for new Workflow objects.\n   *\n   * If you need to be able to share a workflow across tabs, it is recommended\n   * to use \"csm.workflow\" to create/hydrate your workflows instead.\n   * @param {string} type of workflow\n   * @param {string} instanceId of workflow\n   * @param {JSON} data blob associated with workflow\n   */\n  const Workflow = function(type, instanceId, data) {\n    this.type = type;\n    this.instanceId = instanceId || csm.Util.randomId();\n    this.instanceSpecified = instanceId || false;\n    this.eventMap = {};\n    this.data = data || {};\n\n    // Merge global dimensions into the data map.\n    const dimensionData = {};\n    csm.globalDimensions.forEach(function(dimension) {\n      dimensionData[dimension.name] = dimension.value;\n    });\n    csm.globalOptionalDimensions.forEach(function(dimension) {\n      dimensionData[dimension.name] = dimension.value;\n    });\n    this.data = this._mergeData(dimensionData);\n  };\n\n  /**\n   * Create a new workflow or rehydrate an existing shared workflow.\n   *\n   * @param {string} type The type of workflow to be created.\n   * @param {string} instanceId The instanceId of the workflow.  If not provided, it will be\n   *      assigned a random ID and will not be automatically saved to local storage.\n   *      If provided, we will attempt to load an existing workflow of the same type\n   *      from local storage and rehydrate it.\n   * @param {JSON} data An optional map of key/value pairs to be added as data to every\n   *      workflow event created with this workflow.\n   * @return {Workflow} workflow event\n   * NOTE: Only one workflow of each type can be stored at the same time, to avoid\n   *       overloading localStorage with unused workflow records.\n   */\n  csm.workflow = function(type, instanceId, data) {\n    let workflow = new Workflow(type, instanceId, data);\n\n    if (instanceId) {\n      const savedWorkflow = csm._loadWorkflow(type);\n      if (savedWorkflow && savedWorkflow.instanceId === instanceId) {\n        workflow = savedWorkflow;\n        workflow.addData(data || {});\n      }\n    }\n\n    return workflow;\n  };\n\n  csm._loadWorkflow = function(type) {\n    let workflow = null;\n    const workflowJson = localStorage.getItem(getWorkflowKeyForType(type));\n    const workflowStruct = workflowJson ? JSON.parse(workflowJson) : null;\n    if (workflowStruct) {\n      workflow = new Workflow(type, workflowStruct.instanceId);\n      workflow.eventMap = workflowStruct.eventMap;\n    }\n    return workflow;\n  };\n\n  /**\n   * Creates a new workflow event and returns it.  Then this workflow event is sent upstream\n   * to the CSMSharedWorker where it is provided to the backend.\n   *\n   * If an instanceId was specified when the workflow was created, this will also save the workflow\n   * and all of its events to localStorage.\n   *\n   * @param {string} event The name of the event that occurred.\n   * @param {JSON} data An optional free-form key attribute pair of metadata items that will be stored\n   *      and reported backstream with the workflow event.\n   * @return {WorkflowEvent} workflowEvent\n   */\n  Workflow.prototype.event = function(event, data) {\n    const mergedData = this._mergeData(data || {});\n    const workflowEvent = new csm.WorkflowEvent({\n      workflow: this,\n      event: event,\n      data: mergedData,\n      userId: csm.configuration.userId || '',\n      organizationId: csm.configuration.organizationId || '',\n      accountId: csm.configuration.accountId || '',\n      appName: csm.configuration.namespace || '',\n    });\n    csm.putWorkflowEvent(workflowEvent);\n    this.eventMap[event] = workflowEvent;\n    if (this.instanceSpecified) {\n      this.save();\n    }\n    return workflowEvent;\n  };\n\n  /**\n   * Creates a new workflow event and returns it, if the same event is not happened in ths past\n   * dedupeIntervalMs milliseconds.\n   * @param {string} event The name of the event that occurred.\n   * @param {JSON} data An optional free-form key attribute pair of metadata items that will be stored\n   * and reported backstream with the workflow event.\n   * @param {int} dedupeIntervalMs defaults to 200 MS\n   * @return {WorkflowEvent} workflowEvent\n   */\n  Workflow.prototype.eventWithDedupe = function(event, data, dedupeIntervalMs) {\n    const pastEvent = this.getPastEvent(event);\n    const now = new Date().getTime();\n    const interval = dedupeIntervalMs || 200;\n\n    // Crafting the expected workflow event data result\n    const mergedData = this._mergeData(data);\n    const expectedData = [];\n    for (const key in mergedData) {\n      if (Object.prototype.hasOwnProperty.call(mergedData, key)) {\n        expectedData.push({'key': key, 'value': mergedData[key]});\n      }\n    }\n\n    // Deduplicate same events that happened within interval\n    if (!pastEvent || (pastEvent && JSON.stringify(pastEvent.data) !== JSON.stringify(expectedData)) ||\n        (pastEvent && (now - pastEvent.timestamp > interval))) {\n      return this.event(event, data);\n    }\n    return null;\n  };\n\n  /**\n   * Get a past event if it exists in this workflow, otherwise returns null.\n   * This can be helpful to emit metrics in real time based on the differences\n   * between workflow event timestamps, especially for workflows shared across tabs.\n   * @param {string} event key to see if workflow exists for this event\n   * @return {WorkflowEvent} workflow event retrieved\n   */\n  Workflow.prototype.getPastEvent = function(event) {\n    return event in this.eventMap ? this.eventMap[event] : null;\n  };\n\n  /**\n   * Save the workflow to local storage. This only happens automatically when an\n   * instanceId is specified on workflow creation, however if this method is called\n   * explicitly by the client, the randomly generated workflow instance id can be\n   * used to retrieve the workflow later and automatic save on events will be enabled.\n   */\n  Workflow.prototype.save = function() {\n    this.instanceSpecified = true;\n    localStorage.setItem(getWorkflowKeyForType(this.type), JSON.stringify(this));\n  };\n\n  /**\n   * Remove this workflow if it is the saved instance for this workflow type in localStorage.\n   */\n  Workflow.prototype.close = function() {\n    const storedWorkflow = csm._loadWorkflow(this.type);\n    if (storedWorkflow && storedWorkflow.instanceId === this.instanceId) {\n      localStorage.removeItem(getWorkflowKeyForType(this.type));\n    }\n  };\n\n  Workflow.prototype.addData = function(data) {\n    for (const key in data) {\n      if (Object.prototype.hasOwnProperty.call(data, key)) {\n        this.data[key] = data[key];\n      }\n    }\n  };\n\n  Workflow.prototype._mergeData = function(data) {\n    const mergedData = {};\n    let key = null;\n    for (key in this.data) {\n      if (Object.prototype.hasOwnProperty.call(this.data, key)) {\n        mergedData[key] = this.data[key] == null ? 'null' : (this.data[key] === '' ? ' ' : this.data[key].toString());\n      }\n    }\n    for (key in data) {\n      if (Object.prototype.hasOwnProperty.call(data, key)) {\n        mergedData[key] = data[key] == null ? 'null' : (data[key] === '' ? ' ' : data[key].toString());\n      }\n    }\n    return mergedData;\n  };\n})();\n\n(function() {\n  const global = window;\n  const csm = global.csm || {};\n  global.csm = csm;\n\n  let worker = null;\n  let portId = null;\n\n  const MAX_INIT_MILLISECONDS = 5000;\n  const preInitTaskQueue = [];\n  csm.configuration = {};\n\n  /**\n   * Initialize CSM variables\n   * @param {object} params for CSM\n   * @params.namespace Define your metric namespace used in CloudWatch metrics\n   * @params.sharedWorkerUrl Specify the relative url to the connect-csm-worker.js file in your service\n   * @params.endpoint Specify an LDAS endpoint to use.\n   * @params.dryRunMode When CSM is initialized with dry run mode, it won't actually publish metrics.\n   * @params.defaultMetrics Enable default metrics. Default to false.\n   */\n  csm.initCSM = function(params) {\n    csm.Util.assertExist(params.namespace, 'namespace');\n    csm.Util.assertExist(params.sharedWorkerUrl, 'sharedWorkerUrl');\n    csm.Util.assertExist(params.endpoint, 'endpoint');\n\n    try {\n      console.log('Starting csm shared worker with', params.sharedWorkerUrl);\n      worker = new SharedWorker(params.sharedWorkerUrl, 'CSM_SharedWorker');\n      worker.port.start();\n    } catch (e) {\n      console.log('Failed to initialize csm shared worker with', params.sharedWorkerUrl);\n      console.log(e.message);\n    }\n\n    /**\n     * Configure shared worker\n     */\n    csm.configuration = {\n      namespace: params.namespace,\n      userId: params.userId || '',\n      accountId: params.accountId || '',\n      organizationId: params.organizationId || '',\n      endpointUrl: params.endpoint || null,\n      batchSettings: params.batchSettings || null,\n      addPageVisibilityDimension: params.addPageVisibilityDimension || false,\n      addUrlDataDimensions: params.addUrlDataDimensions || false,\n      dryRunMode: params.dryRunMode || false, // When csm is in dryRunMode it won't actually publish metrics to CSM\n    };\n\n    postEventToWorker(csm.EVENT_TYPE.CONFIG, csm.configuration);\n\n    /**\n     * Receive message from shared worker\n     * @param {MessageEvent} messageEvent from shared worker\n     */\n    worker.port.onmessage = function(messageEvent) {\n      const messageType = messageEvent.data.type;\n      onMessageFromWorker(messageType, messageEvent.data);\n    };\n\n    /**\n     * Inform shared worker window closed\n     */\n    global.onbeforeunload = function() {\n      worker.port.postMessage(\n          {\n            type: csm.EVENT_TYPE.CLOSE,\n            portId: portId,\n          },\n      );\n    };\n\n    /**\n     * Check if initialization success\n     */\n    global.setTimeout(function() {\n      if (!isCSMInitialized()) {\n        console.log('[FATAL] CSM initialization failed! Please make sure the sharedWorkerUrl is reachable.');\n      }\n    }, MAX_INIT_MILLISECONDS);\n\n    // Emit out of the box metrics\n    if (params.defaultMetrics) {\n      emitDefaultMetrics();\n    }\n  };\n  // Final processing before sending to SharedWorker\n  const processMetric = function(metric) {\n    if (csm.configuration.addPageVisibilityDimension && document.visibilityState) {\n      metric.addOptionalDimension('VisibilityState', document.visibilityState);\n    }\n  };\n\n  const processWorkflowEvent = function(event) {\n    if (csm.configuration.addUrlDataDimensions) {\n      event.data.push({'key': 'ReferrerUrl', 'value': csm.Util.getReferrerUrl()});\n      event.data.push({'key': 'Origin', 'value': csm.Util.getOrigin()});\n      event.data.push({'key': 'WindowParent', 'value': csm.Util.getWindowParent()});\n    }\n    if (['initFailure', 'initializationLatencyInfo'].includes(event.event)) {\n      csm.initFailureDimensions.forEach((dimension) => {\n        Object.keys(dimension).forEach((key) => {\n          event.data.push({'key': key, 'value': dimension[key]});\n        });\n      });\n    }\n    return event;\n  };\n\n  csm.putMetric = function(metric) {\n    processMetric(metric);\n    postEventToWorker(csm.EVENT_TYPE.METRIC, metric);\n  };\n\n  csm.putLog = function(log) {\n    postEventToWorker(csm.EVENT_TYPE.LOG, log);\n  };\n\n  csm.putWorkflowEvent = function(event) {\n    const processedEvent = processWorkflowEvent(event);\n    postEventToWorker(csm.EVENT_TYPE.WORKFLOW_EVENT, processedEvent);\n  };\n\n  csm.putCustom = function(endpoint, headers, data) {\n    postEventToWorker(csm.EVENT_TYPE.CUSTOM, data, endpoint, headers);\n  };\n\n  csm.setAuthParams = function(authParams) {\n    postEventToWorker(csm.EVENT_TYPE.SET_AUTH, authParams);\n  };\n\n  csm.setConfig = function(key, value) {\n    csm.configuration[key] = value;\n    postEventToWorker(csm.EVENT_TYPE.SET_CONFIG, {key, value});\n  };\n  /** **********************  PRIVATE METHODS  ************************/\n\n  const onMessageFromWorker = function(messageType, data) {\n    if (messageType === csm.EVENT_TYPE.CONFIG) {\n      portId = data.portId;\n      onCSMInitialized();\n    }\n  };\n\n  const onCSMInitialized = function() {\n    // Purge the preInitTaskQueue\n    preInitTaskQueue.forEach(function(task) {\n      postEventToWorker(task.type, task.message, task.endpoint, task.headers);\n    });\n\n    // TODO:  Capture on errors and publish log to shared worker\n    /**\n            window.onerror = function(message, fileName, lineNumber, columnNumber, errorstack) {\n                var log = new csm.Log(message, fileName, lineNumber, columnNumber, errorstack.stack);\n                csm.putLog(log);\n            };\n        */\n  };\n\n  /**\n   * Emit out of the box metrics automatically\n   *\n   * TODO allow configuration\n   */\n  const emitDefaultMetrics = function() {\n    window.addEventListener('load', function() {\n      // loadEventEnd is avaliable after the onload function finished\n      // https://www.w3.org/TR/navigation-timing-2/#processing-model\n      // https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming\n      global.setTimeout(function() {\n        try {\n          const perfData = window.performance.getEntriesByType('navigation')[0];\n          const pageLoadTime = perfData.loadEventEnd - perfData.startTime;\n          const connectTime = perfData.responseEnd - perfData.requestStart;\n          const domRenderTime = perfData.domComplete - perfData.domInteractive;\n          csm.API.addCountWithPageLocation('PageLoad');\n          csm.API.addTimeWithPageLocation('PageLoadTime', pageLoadTime);\n          csm.API.addTimeWithPageLocation('ConnectTime', connectTime);\n          csm.API.addTimeWithPageLocation('DomRenderTime', domRenderTime);\n        } catch (err) {\n          console.log('Error emitting default metrics', err);\n        }\n      }, 0);\n    });\n  };\n\n  /**\n   * Try posting message to shared worker\n   * If shared worker hasn't been initialized, put the task to queue to be clean up once initialized\n   * @param {csm.EVENT_TYPE} eventType for CSM\n   * @param {object} message event following type of eventType\n   * @param {string} [endpoint] optional parameter for putCustom function (put any data to specified endpoint)\n   * @param {object} [headers] optional parameter for putCustom function\n   */\n  const postEventToWorker = function(eventType, message, endpoint, headers) {\n    if (eventType === csm.EVENT_TYPE.CONFIG || isCSMInitialized()) {\n      worker.port.postMessage(\n          {\n            type: eventType,\n            portId: portId,\n            message: message,\n            endpoint: endpoint,\n            headers: headers,\n          },\n      );\n    } else {\n      preInitTaskQueue.push({\n        type: eventType,\n        message: message,\n        endpoint: endpoint,\n        headers: headers,\n      });\n    }\n  };\n\n  const isCSMInitialized = function() {\n    return portId !== null;\n  };\n})()";

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "LogManager": () => (/* binding */ LogManager),
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


/*eslint-disable no-unused-vars*/
class Logger {
  debug(data) {}
  info(data) {}
  warn(data) {}
  error(data) {}
  advancedLog(data) {}
}
/*eslint-enable no-unused-vars*/

var LogLevel = {
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
  ADVANCED_LOG: 50
};
class LogManagerImpl {
  constructor() {
    this.updateLoggerConfig();
  }
  writeToClientLogger(level, logStatement, logMetaData) {
    if (!this.hasClientLogger()) {
      return;
    }
    var levelStringValue = getLogLevelByValue(level);
    switch (level) {
      case LogLevel.DEBUG:
        return this._clientLogger.debug(levelStringValue, logStatement, logMetaData) || logStatement;
      case LogLevel.INFO:
        return this._clientLogger.info(levelStringValue, logStatement, logMetaData) || logStatement;
      case LogLevel.WARN:
        return this._clientLogger.warn(levelStringValue, logStatement, logMetaData) || logStatement;
      case LogLevel.ERROR:
        return this._clientLogger.error(levelStringValue, logStatement, logMetaData) || logStatement;
      case LogLevel.ADVANCED_LOG:
        return this._advancedLogWriter && this._clientLogger[this._advancedLogWriter] && this._clientLogger[this._advancedLogWriter](levelStringValue, logStatement, logMetaData) || logStatement;
    }
  }
  isLevelEnabled(level) {
    return level >= this._level;
  }
  hasClientLogger() {
    return this._clientLogger !== null;
  }
  getLogger() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // option: {prefix: string; logMetaData: object}
    return new LoggerWrapperImpl(options);
  }
  updateLoggerConfig(inputConfig) {
    var config = inputConfig || {};
    this._level = config.level || LogLevel.INFO;
    //enabled advancedLogWriter
    this._advancedLogWriter = "warn";
    if (isValidAdvancedLogConfig(config.advancedLogWriter, config.customizedLogger)) {
      this._advancedLogWriter = config.advancedLogWriter;
    }
    //enable clientLogger
    if (config.customizedLogger && typeof config.customizedLogger === "object" || config.logger && typeof config.logger === "object") {
      this.useClientLogger = true;
    }
    this._clientLogger = this.selectLogger(config);
  }
  selectLogger(config) {
    if (config.customizedLogger && typeof config.customizedLogger === "object") {
      return config.customizedLogger;
    }
    if (config.logger && typeof config.logger === "object") {
      return config.logger;
    }
    if (config.useDefaultLogger) {
      return createConsoleLogger();
    }
    return null;
  }
}
var LogManager = new LogManagerImpl();
class LoggerWrapper {
  debug() {}
  info() {}
  warn() {}
  error() {}
}
class LoggerWrapperImpl extends LoggerWrapper {
  constructor(options) {
    super();
    this.options = options || {};
  }
  debug() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this._log(LogLevel.DEBUG, args);
  }
  info() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this._log(LogLevel.INFO, args);
  }
  warn() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this._log(LogLevel.WARN, args);
  }
  error() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this._log(LogLevel.ERROR, args);
  }
  advancedLog() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return this._log(LogLevel.ADVANCED_LOG, args);
  }
  _shouldLog(level) {
    return LogManager.hasClientLogger() && LogManager.isLevelEnabled(level);
  }
  _writeToClientLogger(level, logStatement) {
    return LogManager.writeToClientLogger(level, logStatement, this.options.logMetaData);
  }
  _log(level, args) {
    if (this._shouldLog(level)) {
      var logStatement = LogManager.useClientLogger ? args : this._convertToSingleStatement(args);
      return this._writeToClientLogger(level, logStatement);
    }
  }
  _convertToSingleStatement(args) {
    var date = new Date(Date.now()).toISOString();
    var logStatement = "[".concat(date, "]");
    if (this.options) {
      this.options.prefix ? logStatement += " " + this.options.prefix + ":" : logStatement += "";
    }
    for (var index = 0; index < args.length; index++) {
      var arg = args[index];
      logStatement += " " + this._convertToString(arg);
    }
    return logStatement;
  }
  _convertToString(arg) {
    try {
      if (!arg) {
        return "";
      }
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isString(arg)) {
        return arg;
      }
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(arg) && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(arg.toString)) {
        var toStringResult = arg.toString();
        if (toStringResult !== "[object Object]") {
          return toStringResult;
        }
      }
      return JSON.stringify(arg);
    } catch (error) {
      console.error("Error while converting argument to string", arg, error);
      return "";
    }
  }
}
function getLogLevelByValue(value) {
  switch (value) {
    case 10:
      return "DEBUG";
    case 20:
      return "INFO";
    case 30:
      return "WARN";
    case 40:
      return "ERROR";
    case 50:
      return "ADVANCED_LOG";
  }
}
function isValidAdvancedLogConfig(advancedLogVal, customizedLogger) {
  var customizedLoggerKeys = customizedLogger && Object.keys(customizedLogger);
  if (customizedLoggerKeys && customizedLoggerKeys.indexOf(advancedLogVal) === -1) {
    console.error("customizedLogger: incorrect value for loggerConfig:advancedLogWriter; use valid values from list ".concat(customizedLoggerKeys, " but used ").concat(advancedLogVal));
    return false;
  }
  var defaultLoggerKeys = ["warn", "info", "debug", "log"];
  if (advancedLogVal && defaultLoggerKeys.indexOf(advancedLogVal) === -1) {
    console.error("incorrect value for loggerConfig:advancedLogWriter; use valid values from list ".concat(defaultLoggerKeys, " but used ").concat(advancedLogVal));
    return false;
  }
  return true;
}
var createConsoleLogger = () => {
  var logger = new LoggerWrapper();
  logger.debug = console.debug.bind(window.console);
  logger.info = console.info.bind(window.console);
  logger.warn = console.warn.bind(window.console);
  logger.error = console.error.bind(window.console);
  return logger;
};


/***/ }),

/***/ "./src/service/csmService.js":
/*!***********************************!*\
  !*** ./src/service/csmService.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIMENSION_CATEGORY": () => (/* binding */ DIMENSION_CATEGORY),
/* harmony export */   "csmService": () => (/* binding */ csmService)
/* harmony export */ });
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalConfig */ "./src/globalConfig.js");
/* harmony import */ var _configs_csmConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/csmConfig */ "./src/configs/csmConfig.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log */ "./src/log.js");
/* harmony import */ var _lib_connect_csm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/connect-csm */ "./src/lib/connect-csm.js");
/* harmony import */ var _lib_connect_csm_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/connect-csm-worker */ "./src/lib/connect-csm-worker.js");





var DIMENSION_CATEGORY = "Category";
class CsmService {
  constructor() {
    this.widgetType = _configs_csmConfig__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_WIDGET_TYPE;
    this.logger = _log__WEBPACK_IMPORTED_MODULE_2__.LogManager.getLogger({
      prefix: "ChatJS-csmService"
    });
    this.csmInitialized = false;
    this.metricsToBePublished = [];
    this.agentMetricToBePublished = [];
    this.MAX_RETRY = 5;
  }
  loadCsmScriptAndExecute() {
    try {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = _lib_connect_csm__WEBPACK_IMPORTED_MODULE_3__.csmJsString;
      document.head.appendChild(script);
      this.initializeCSM();
    } catch (error) {
      this.logger.error("Load csm script error: ", error);
    }
  }
  initializeCSM() {
    // avoid multiple initialization
    try {
      if (this.csmInitialized) {
        return;
      }
      var region = _globalConfig__WEBPACK_IMPORTED_MODULE_0__.GlobalConfig.getRegion();
      var csmWorkerText = _lib_connect_csm_worker__WEBPACK_IMPORTED_MODULE_4__.csmWorkerString.replace(/\\/g, '');
      var sharedWorkerBlobUrl = URL.createObjectURL(new Blob([csmWorkerText], {
        type: 'text/javascript'
      }));
      var ldasEndpoint = (0,_configs_csmConfig__WEBPACK_IMPORTED_MODULE_1__.getLdasEndpointUrl)(region);
      var params = {
        endpoint: ldasEndpoint,
        namespace: _configs_csmConfig__WEBPACK_IMPORTED_MODULE_1__.CHAT_WIDGET_METRIC_NAME_SPACE,
        sharedWorkerUrl: sharedWorkerBlobUrl
      };
      csm.initCSM(params);
      this.logger.info("CSMService is initialized in ".concat(region));
      this.csmInitialized = true;
      if (this.metricsToBePublished) {
        this.metricsToBePublished.forEach(metric => {
          csm.API.addMetric(metric);
        });
        this.metricsToBePublished = null;
      }
    } catch (err) {
      this.logger.error('Failed to initialize csm: ', err);
    }
  }
  updateCsmConfig(csmConfig) {
    this.widgetType = typeof csmConfig === "object" && csmConfig !== null && !Array.isArray(csmConfig) ? csmConfig.widgetType : this.widgetType;
  }
  getDefaultDimensions() {
    return [{
      name: "WidgetType",
      value: this.widgetType
    }];
  }
  addMetric(metric) {
    // if csmService is never initialized, store the metrics in an array
    if (!this.csmInitialized) {
      if (this.metricsToBePublished) {
        this.metricsToBePublished.push(metric);
        this.logger.info("CSMService is not initialized yet. Adding metrics to queue to be published once CSMService is initialized");
      }
    } else {
      try {
        csm.API.addMetric(metric);
      } catch (err) {
        this.logger.error('Failed to addMetric csm: ', err);
      }
    }
  }
  setDimensions(metric, dimensions) {
    dimensions.forEach(dimension => {
      metric.addDimension(dimension.name, dimension.value);
    });
  }
  addLatencyMetric(method, timeDifference, category) {
    var otherDimensions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    try {
      var latencyMetric = new csm.Metric(method, csm.UNIT.MILLISECONDS, timeDifference);
      var dimensions = [...this.getDefaultDimensions(), {
        name: "Metric",
        value: "Latency"
      }, {
        name: DIMENSION_CATEGORY,
        value: category
      }, ...otherDimensions];
      this.setDimensions(latencyMetric, dimensions);
      this.addMetric(latencyMetric);
      this.logger.debug("Successfully published latency API metrics for method ".concat(method));
    } catch (err) {
      this.logger.error('Failed to addLatencyMetric csm: ', err);
    }
  }
  addLatencyMetricWithStartTime(method, startTime, category) {
    var otherDimensions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var endTime = new Date().getTime();
    var timeDifference = endTime - startTime;
    this.addLatencyMetric(method, timeDifference, category, otherDimensions);
    this.logger.debug("Successfully published latency API metrics for method ".concat(method));
  }
  addCountAndErrorMetric(method, category, error) {
    var otherDimensions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    try {
      var dimensions = [...this.getDefaultDimensions(), {
        name: DIMENSION_CATEGORY,
        value: category
      }, ...otherDimensions];
      var countMetric = new csm.Metric(method, csm.UNIT.COUNT, 1);
      this.setDimensions(countMetric, [...dimensions, {
        name: "Metric",
        value: "Count"
      }]);
      var errorCount = error ? 1 : 0;
      var errorMetric = new csm.Metric(method, csm.UNIT.COUNT, errorCount);
      this.setDimensions(errorMetric, [...dimensions, {
        name: "Metric",
        value: "Error"
      }]);
      this.addMetric(countMetric);
      this.addMetric(errorMetric);
      this.logger.debug("Successfully published count and error metrics for method ".concat(method));
    } catch (err) {
      this.logger.error('Failed to addCountAndErrorMetric csm: ', err);
    }
  }
  addCountMetric(method, category) {
    var otherDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    try {
      var dimensions = [...this.getDefaultDimensions(), {
        name: DIMENSION_CATEGORY,
        value: category
      }, {
        name: "Metric",
        value: "Count"
      }, ...otherDimensions];
      var countMetric = new csm.Metric(method, csm.UNIT.COUNT, 1);
      this.setDimensions(countMetric, dimensions);
      this.addMetric(countMetric);
      this.logger.debug("Successfully published count metrics for method ".concat(method));
    } catch (err) {
      this.logger.error('Failed to addCountMetric csm: ', err);
    }
  }
  addAgentCountMetric(metricName, count) {
    try {
      var _self = this;
      if (csm && csm.API.addCount && metricName) {
        csm.API.addCount(metricName, count);
        _self.MAX_RETRY = 5;
      } else {
        //add to list and retry later
        if (metricName) {
          this.agentMetricToBePublished.push({
            metricName,
            count
          });
        }
        setTimeout(() => {
          if (csm && csm.API.addCount) {
            this.agentMetricToBePublished.forEach(metricItem => {
              csm.API.addCount(metricItem.metricName, metricItem.count);
            });
            this.agentMetricToBePublished = [];
          } else if (_self.MAX_RETRY > 0) {
            _self.MAX_RETRY -= 1;
            _self.addAgentCountMetric();
          }
        }, 3000);
      }
    } catch (err) {
      this.logger.error('Failed to addAgentCountMetric csm: ', err);
    }
  }
}
var csmService = new CsmService();


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/exceptions */ "./src/core/exceptions.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




var Utils = {};

/**
 * Asserts that a premise is true.
 */
Utils.assertTrue = function (premise, message) {
  if (!premise) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.ValueError(message);
  }
};

/**
 * Asserts that a value is not null or undefined.
 */
Utils.assertNotNull = function (value, name) {
  Utils.assertTrue(value !== null && typeof value !== "undefined", (0,sprintf_js__WEBPACK_IMPORTED_MODULE_1__.sprintf)("%s must be provided", name || "A value"));
  return value;
};
Utils.now = function () {
  return new Date().getTime();
};
Utils.isString = function (value) {
  return typeof value === "string";
};

/**
 * Generate a random ID consisting of the current timestamp
 * and a random base-36 number based on Math.random().
 */
Utils.randomId = function () {
  return (0,sprintf_js__WEBPACK_IMPORTED_MODULE_1__.sprintf)("%s-%s", Utils.now(), Math.random().toString(36).slice(2));
};
Utils.assertIsNonEmptyString = function (value, key) {
  if (!value || typeof value !== "string") {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(key + " is not a non-empty string!");
  }
};
Utils.assertIsList = function (value, key) {
  if (!Array.isArray(value)) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(key + " is not an array");
  }
};
Utils.assertIsEnum = function (value, allowedValues, key) {
  var i;
  for (i = 0; i < allowedValues.length; i++) {
    if (allowedValues[i] === value) {
      return;
    }
  }
  throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(key + " passed (" + value + ")" + " is not valid. Allowed values are: " + allowedValues);
};

/**
 * Generate an enum from the given list of lower-case enum values,
 * where the enum keys will be upper case.
 *
 * Conversion from pascal case based on code from here:
 * http://stackoverflow.com/questions/30521224
 */
Utils.makeEnum = function (values) {
  var enumObj = {};
  values.forEach(function (value) {
    var key = value.replace(/\.?([a-z]+)_?/g, function (x, y) {
      return y.toUpperCase() + "_";
    }).replace(/_$/, "");
    enumObj[key] = value;
  });
  return enumObj;
};
Utils.contains = function (obj, value) {
  if (obj instanceof Array) {
    return Utils.find(obj, function (v) {
      return v === value;
    }) !== null;
  } else {
    return value in obj;
  }
};
Utils.find = function (array, predicate) {
  for (var x = 0; x < array.length; x++) {
    if (predicate(array[x])) {
      return array[x];
    }
  }
  return null;
};
Utils.containsValue = function (obj, value) {
  if (obj instanceof Array) {
    return Utils.find(obj, function (v) {
      return v === value;
    }) !== null;
  } else {
    return Utils.find(Utils.values(obj), function (v) {
      return v === value;
    }) !== null;
  }
};

/**
 * Determine if the given value is a callable function type.
 * Borrowed from Underscore.js.
 */
Utils.isFunction = function (obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

/**
 * Get a list of values from a Javascript object used
 * as a hash map.
 */
Utils.values = function (map) {
  var values = [];
  Utils.assertNotNull(map, "map");
  for (var k in map) {
    values.push(map[k]);
  }
  return values;
};
Utils.isObject = function (value) {
  return !(typeof value !== "object" || value === null);
};
Utils.assertIsObject = function (value, key) {
  if (!Utils.isObject(value)) {
    throw new _core_exceptions__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(key + " is not an object!");
  }
};
Utils.delay = ms => new Promise(resolve => setTimeout(resolve, ms));
Utils.asyncWhileInterval = function (f, predicate, interval) {
  var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var now = new Date();
  if (predicate(count)) {
    return f(count).catch(e => {
      var delay = Math.max(0, interval - new Date().valueOf() + now.valueOf());
      return Utils.delay(delay).then(() => Utils.asyncWhileInterval(f, predicate, interval, count + 1, e));
    });
  } else {
    return Promise.reject(error || new Error("async while aborted"));
  }
};
Utils.isAttachmentContentType = function (contentType) {
  return contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.applicationPdf || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.imageJpg || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.imagePng || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.applicationDoc || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.applicationXls || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.applicationPpt || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.textCsv || contentType === _constants__WEBPACK_IMPORTED_MODULE_2__.CONTENT_TYPE.audioWav;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/sprintf-js/src/sprintf.js":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports.sprintf = sprintf
        exports.vsprintf = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatSession": () => (/* binding */ ChatSession)
/* harmony export */ });
/* harmony import */ var _core_chatSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/chatSession */ "./src/core/chatSession.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/log.js");
/*eslint no-unused-vars: "off"*/


var global = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
global.connect = global.connect || {};
connect.ChatSession = _core_chatSession__WEBPACK_IMPORTED_MODULE_0__.ChatSessionObject;
connect.LogManager = _log__WEBPACK_IMPORTED_MODULE_1__.LogManager;
connect.LogLevel = _log__WEBPACK_IMPORTED_MODULE_1__.LogLevel;
connect.csmService = _core_chatSession__WEBPACK_IMPORTED_MODULE_0__.ChatSessionObject.csmService;
var ChatSession = _core_chatSession__WEBPACK_IMPORTED_MODULE_0__.ChatSessionObject;
})();

/******/ })()
;
//# sourceMappingURL=amazon-connect-chat.js.map