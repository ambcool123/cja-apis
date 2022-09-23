"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[876],{5022:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var a=t(7462),d=t(3366),i=(t(5007),t(4983)),r=t(1515),o=["components"],p={},s={_frontmatter:p},l=r.Z;function m(e){var n=e.components,t=(0,d.Z)(e,o);return(0,i.mdx)(l,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"projects-overview"},"Projects Overview"),(0,i.mdx)("p",null,"The CJA APIs allow you to retrieve, update, or create projects programmatically through Adobe Developer. The APIs use the same data and methods that are used when working with projects in the UI. For more information on understanding project definition data architecture, see the ",(0,i.mdx)("a",{parentName:"p",href:"structure.md"},"Project Definition")," article that accompanies this user guide.  See ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics-platform/using/cja-workspace/home.html"},"Workspace projects overview")," in the CJA documentation for more information."),(0,i.mdx)("h2",{id:"best-practices"},"Best Practices"),(0,i.mdx)("p",null,"Please follow these guidelines when using the Projects APIs:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Make multiple, smaller requests instead of a large, single request."),(0,i.mdx)("li",{parentName:"ul"},"Request data once and cache it."),(0,i.mdx)("li",{parentName:"ul"},"Use caution when updating a project so that you do not alter the original project used by others."),(0,i.mdx)("li",{parentName:"ul"},"Avoid creating duplicate projects with the same definition. Creating many projects will affect performance for your company in some situations."),(0,i.mdx)("li",{parentName:"ul"},"If possible use the Analytics UI for creating projects from scratch. The UI offers significant advantages for managing and optimizing the complexity of this task. If you need to create projects programmatically, it is usually easier to create a template project in the UI and then have your application change only small portions of the project definition.")),(0,i.mdx)("h2",{id:"creating-projects"},"Creating Projects"),(0,i.mdx)("p",null,"As mentioned in the ",(0,i.mdx)("a",{parentName:"p",href:"#best-practices"},"Best Practices")," section above, the CJA UI is recommended for creating projects from scratch. If you do choose to use the API to create projects, keep in mind that certain fields cannot be supplied via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST /projects")," endpoint. For example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"tags")," are not stored within the projects themselves and will therefore be ignored if supplied on a creation request."),(0,i.mdx)("h2",{id:"projects-endpoint-description"},"/projects Endpoint Description"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"/projects")," endpoint description is shown in our ",(0,i.mdx)("a",{parentName:"p",href:"../../api.md"},"Swagger UI"),". Use the Swagger UI to see endpoint summaries, available methods, parameters, example values, models, and status codes, and to try out the API."),(0,i.mdx)("h3",{id:"expansions"},"Expansions"),(0,i.mdx)("p",null,"Projects endpoints support the URL query parameter ",(0,i.mdx)("inlineCode",{parentName:"p"},"expansion"),". This parameter allows specifying additional data fields to be populated in response objects. Available expansions are shown in the ",(0,i.mdx)("a",{parentName:"p",href:"../../api.md"},"Swagger UI")," description. The following table describes expansion fields:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Field"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ownerFullName"),(0,i.mdx)("td",{parentName:"tr",align:null},"The name of the owner of the project")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"modified"),(0,i.mdx)("td",{parentName:"tr",align:null},"The date the project was last modified")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"tags"),(0,i.mdx)("td",{parentName:"tr",align:null},"Tags applied to the project")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"shares"),(0,i.mdx)("td",{parentName:"tr",align:null},"Shares applied to the project")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"accessLevel"),(0,i.mdx)("td",{parentName:"tr",align:null},"Access level the current user has to a particular project (Edit/Duplicate/View)")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"externalReferences"),(0,i.mdx)("td",{parentName:"tr",align:null},"Analytics components (Segments, Calculated Metrics, Date Views) used in the project definition")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"definition"),(0,i.mdx)("td",{parentName:"tr",align:null},"The ",(0,i.mdx)("a",{parentName:"td",href:"structure.md"},"project definition"))))),(0,i.mdx)("h3",{id:"includetypes"},"IncludeTypes"),(0,i.mdx)("p",null,"The GET multiple ",(0,i.mdx)("inlineCode",{parentName:"p"},"/projects")," endpoint supports the query parameter ",(0,i.mdx)("inlineCode",{parentName:"p"},"includeType"),". This parameter alters the set of projects that are included in API responses. By default, responses without this parameter include only projects owned by the user making the request. When using this parameter, the following values are possible:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"all"),": Returns all projects linked to this company - this includeType is only available to admin users"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"shared"),": Returns projects shared with the user")),(0,i.mdx)("h3",{id:"locale"},"Locale"),(0,i.mdx)("p",null,"Project endpoints support the URL query parameter ",(0,i.mdx)("inlineCode",{parentName:"p"},"locale"),". Supported values are ",(0,i.mdx)("inlineCode",{parentName:"p"},"en_US"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"fr_FR"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"jp_JP"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"ja_JP"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"de_DE"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"es_ES"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"ko_KR"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"pt_BR"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"zh_CN"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"zh_TW"),". This query parameter specifies the language for responses."),(0,i.mdx)("h3",{id:"pagination"},"Pagination"),(0,i.mdx)("p",null,"Any response that can return multiple projects can be paginated with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," URL query parameters. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"limit")," parameter indicates the size of the desired page, and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"page")," parameter indicates which page you want. A maximum page size of 1000 is enforced."),(0,i.mdx)("h3",{id:"example-curl-request"},"Example cURL Request"),(0,i.mdx)("p",null,"The following example requests all projects on page 0 with page size 10:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/projects")),(0,i.mdx)("h3",{id:"example-response"},"Example Response"),(0,i.mdx)("p",null,"The following response 10 projects owned by the caller on the first page:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'\n{\n  "content": [\n    {\n      "id": "6091a10005c7706c0acdd751",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-04T19:31:12Z"\n    },\n    {\n      "id": "6094a7e01936af351300b81b",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-07T02:37:20Z"\n    },\n    {\n      "id": "6094aa6b318ae31bf7d0a052",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-07T02:48:11Z"\n    },\n    {\n      "id": "609c001c17d70a6b31694b7b",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-12T16:19:40Z"\n    },\n    {\n      "id": "609d94557a1bac32bfe822d6",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-13T21:04:21Z"\n    },\n    {\n      "id": "609d9b7117d70a6b31699d63",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-13T21:34:41Z"\n    },\n    {\n      "id": "609eb9772ecede2233067197",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-14T17:55:03Z"\n    },\n    {\n      "id": "60a400cfad861025de7edf25",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-18T18:00:47Z"\n    },\n    {\n      "id": "60a403292ecede223306ffe3",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-18T18:10:49Z"\n    },\n    {\n      "id": "60a5777dad861025de7ee116",\n      "name": "New Project",\n      "description": "",\n      "dataId": "dv_000000000000000000",\n      "owner": {\n        "imsUserId": "0000000000000000000@AdobeID"\n      },\n      "type": "project",\n      "created": "2021-05-19T20:39:25Z"\n    }\n  ],\n  "totalPages": 10,\n  "totalElements": 94,\n  "number": 0,\n  "numberOfElements": 10,\n  "firstPage": true,\n  "lastPage": false,\n  "sort": [\n    {\n      "direction": "ASC",\n      "property": "id",\n      "ignoreCase": false,\n      "ascending": true\n    }\n  ],\n  "size": 10\n}\n\n')),(0,i.mdx)("h2",{id:"retrieving-a-single-project"},"Retrieving a Single Project"),(0,i.mdx)("p",null,"You can retrieve projects individually if you know the project ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),". To find the project ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),", you can refer to the report descriptions or find it by using the multiple projects endpoint."),(0,i.mdx)("h3",{id:"example-request"},"Example Request"),(0,i.mdx)("p",null,"The following example requests data on the project ",(0,i.mdx)("inlineCode",{parentName:"p"},"6091a10005c7706c0acdd751"),":"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/projects/6091a10005c7706c0acdd751")),(0,i.mdx)("h3",{id:"example-response-1"},"Example Response"),(0,i.mdx)("p",null,"The following example shows the response data for the request on project ",(0,i.mdx)("inlineCode",{parentName:"p"},"6091a10005c7706c0acdd751"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "id": "6091a10005c7706c0acdd751",\n  "name": "New Project",\n  "description": "",\n  "dataId": "dv_000000000000000000",\n  "owner": {\n    "imsUserId": "0000000000000000000@AdobeID"\n  },\n  "type": "project",\n  "created": "2021-05-04T19:31:12Z"\n}\n')),(0,i.mdx)("h2",{id:"deleting-a-project"},"Deleting a Project"),(0,i.mdx)("p",null,"If you delete a project, it is hidden from all users in all menus. Additionally, it is no longer returned when retrieving multiple projects in an API call."),(0,i.mdx)("h3",{id:"example-request-1"},"Example Request"),(0,i.mdx)("p",null,"The following example deletes project ",(0,i.mdx)("inlineCode",{parentName:"p"},"6091a10005c7706c0acdd751"),":"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"DELETE https://cja.adobe.io/projects/6091a10005c7706c0acdd751")),(0,i.mdx)("h3",{id:"example-response-2"},"Example Response"),(0,i.mdx)("p",null,"The following response shows the deletion status for project ",(0,i.mdx)("inlineCode",{parentName:"p"},"6091a10005c7706c0acdd751"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "result": "success"\n}\n')),(0,i.mdx)("h2",{id:"updating-a-project"},"Updating a Project"),(0,i.mdx)("p",null,"You can edit existing projects with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"PUT /projects/{id}")," endpoint. Some fields cannot be edited on a project with the PUT endpoint, including ",(0,i.mdx)("inlineCode",{parentName:"p"},"tags")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"shares"),". Other fields, including ",(0,i.mdx)("inlineCode",{parentName:"p"},"owner"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"name"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"description"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"dataId"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"definition"),", can be edited."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"PUT")," endpoint also supports partial updates. This means that instead of sending the entire JSON object to the API, you can simply send fields that you want to update. For example, if you only want to update the name, use the JSON ",(0,i.mdx)("inlineCode",{parentName:"p"},'{"name":"Updated name"}'),". The entire object is returned in the response, modified by the requested expansions."),(0,i.mdx)("h3",{id:"example-request-2"},"Example Request"),(0,i.mdx)("p",null,"The following example updates the project ",(0,i.mdx)("inlineCode",{parentName:"p"},"6091a10005c7706c0acdd751")," with a new name:"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"PUT https://cja.adobe.io/projects/6091a10005c7706c0acdd751")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{"name":"{NAME UPDATE}"}\n')),(0,i.mdx)("h3",{id:"example-response-3"},"Example Response"),(0,i.mdx)("p",null,"The following example shows the response with updated name data:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'\n{\n  "id": "6091a10005c7706c0acdd751",\n  "name": "{NAME UPDATE}",\n  "description": "",\n  "dataId": "dv_000000000000000000",\n  "owner": {\n    "imsUserId": "0000000000000000000@AdobeID"\n  },\n  "type": "project",\n  "created": "2021-05-04T19:31:12Z"\n}\n\n')),(0,i.mdx)("h2",{id:"validate-endpoint"},"Validate Endpoint"),(0,i.mdx)("p",null,"Because data views can have different configurations, variables, or metrics, one project that is valid in one report suite may not be valid in another. To determine which projects to use in different data views, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"validate")," endpoint. This endpoint allows you to ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," a definition along with a target ",(0,i.mdx)("inlineCode",{parentName:"p"},"dataId"),". The validate endpoint responds with compatibility information on the project."),(0,i.mdx)("h3",{id:"example-request-3"},"Example Request"),(0,i.mdx)("p",null,"The following example requests validation for the project with ",(0,i.mdx)("inlineCode",{parentName:"p"},"dataId"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"dv_000000000000000000"),". The example shows a ",(0,i.mdx)("inlineCode",{parentName:"p"},"POST")," of the JSON ",(0,i.mdx)("a",{parentName:"p",href:"structure.md"},"definition"),":"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST https://cja.adobe.io/projects/validate")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "project": {\n    "id": "6091a10005c7706c0acdd751",\n    "name": "New Project",\n    "description": "",\n    "dataId": "dv_000000000000000000",\n    "owner": {\n      "id": 622291\n    },\n    "type": "project",\n    "definition": {\n      "additionalCuratedComponents": [],\n      "colorScheme": {\n        "id": "default",\n        "label": "",\n        "value": ["#00C0C7", "#5144D3", "#E8871A", "#DA3490", "#9089FA", "#47E26F", "#2780EB", "#6F38B1", "#DFBF03", "#CB6F10", "#268D6C", "#9BEC54", "#5EABFA", "#BE40CC", "#F56BB7", "#FEE02D"]\n      },\n      "countRepeatInstances": true,\n      "currentWorkspaceIndex": 0,\n      "customColorSchemes": [],\n      "isCurated": false,\n      "version": "31",\n      "viewDensity": "expanded",\n      "workspaces": [{\n        "id": "3B1FE317-C72A-4983-ABF1-D3BD14A8D511",\n        "name": "",\n        "panels": [{\n          "annotations": [],\n          "collapsed": false,\n          "dateRange": {\n            "id": "thisMonth",\n            "__entity__": true,\n            "type": "DateRange",\n            "__metaData__": {\n              "name": "This month"\n            }\n          },\n          "description": "",\n          "id": "C0DACAE8-CCE1-4332-9496-ABDBE80C9C23",\n          "name": "Freeform",\n          "position": {\n            "autoHeight": 374,\n            "autoSize": true,\n            "width": 100,\n            "x": 0,\n            "y": 0\n          },\n          "reportSuite": {\n            "id": "dv_000000000000000000",\n            "__entity__": true,\n            "type": "ReportSuite",\n            "__metaData__": {\n              "name": "dv name",\n              "rsid": "dv_000000000000000000"\n            }\n          },\n          "segmentGroups": [],\n          "subPanels": [{\n            "collapsed": false,\n            "description": "",\n            "id": "F2AAAA88-E63E-4AB6-9090-3612F378B9F0",\n            "isQuickInsightsSubPanel": false,\n            "linkedSourceId": "",\n            "position": {\n              "autoHeight": 222,\n              "autoSize": true,\n              "width": 100,\n              "x": 0,\n              "y": 0\n            },\n            "reportlet": {\n              "advancedMode": false,\n              "advancedSettings": {\n                "rows": [],\n                "tableState": "builder"\n              },\n              "columnTree": {\n                "_computedValues": [],\n                "dataSettings": {\n                  "advancedItemLimit": 5,\n                  "advancedItemSearch": {\n                    "operator": "AND",\n                    "rules": []\n                  }\n                },\n                "id": "f46df4-2",\n                "name": "",\n                "nodes": [{\n                  "_computedValues": [],\n                  "component": {\n                    "id": "All_Visits",\n                    "__entity__": true,\n                    "type": "Segment",\n                    "__metaData__": {\n                      "name": "All Visits"\n                    }\n                  },\n                  "dataSettings": {\n                    "advancedItemLimit": 5,\n                    "advancedItemSearch": {\n                      "operator": "AND",\n                      "rules": []\n                    }\n                  },\n                  "id": "f46df4-4",\n                  "name": "All Visits",\n                  "nodes": [],\n                  "selectionCoordinates": [],\n                  "tableCellDisplay": {\n                    "conditionalFormattingOpts": {\n                      "autoGenerate": true,\n                      "usePercentLimits": false\n                    },\n                    "location": "behindNumber",\n                    "type": {\n                      "anomaly": true,\n                      "background": true,\n                      "backgroundType": "bar",\n                      "comparison": "none",\n                      "interpretZeroAsNoValue": false,\n                      "number": true,\n                      "percent": true,\n                      "showGrandTotal": true,\n                      "showSparklines": true,\n                      "showTotals": true,\n                      "wrapHeaderText": true\n                    }\n                  }\n                }],\n                "selectionCoordinates": [],\n                "tableCellDisplay": {\n                  "conditionalFormattingOpts": {\n                    "autoGenerate": true,\n                    "usePercentLimits": false\n                  },\n                  "location": "behindNumber",\n                  "type": {\n                    "anomaly": true,\n                    "background": true,\n                    "backgroundType": "bar",\n                    "comparison": "none",\n                    "interpretZeroAsNoValue": false,\n                    "number": true,\n                    "percent": true,\n                    "showGrandTotal": true,\n                    "showSparklines": true,\n                    "showTotals": true,\n                    "wrapHeaderText": true\n                  }\n                }\n              },\n              "freeformTable": {\n                "alignDatesForTimeDimension": true,\n                "attributionSettings": [],\n                "breakdowns": [],\n                "collapsed": false,\n                "columnWidths": [100, 100],\n                "pagination": {\n                  "currentPage": 0,\n                  "viewBy": 50\n                },\n                "search": {\n                  "operator": "AND",\n                  "rules": []\n                },\n                "selectionCoordinates": [],\n                "settings": {\n                  "breakdownByPosition": false,\n                  "rowBasedPercentages": false,\n                  "totalsType": "columnSum"\n                },\n                "sort": {\n                  "asc": false,\n                  "columnId": "f46df4-4",\n                  "labelColumn": false\n                },\n                "staticRows": [{\n                  "component": {\n                    "id": "metrics/visits",\n                    "__entity__": true,\n                    "type": "Metric",\n                    "__metaData__": {\n                      "name": "Visits"\n                    }\n                  },\n                  "dataSettings": {\n                    "advancedItemLimit": 5,\n                    "advancedItemSearch": {\n                      "operator": "AND",\n                      "rules": []\n                    }\n                  },\n                  "id": "f46df4-a"\n                }],\n                "statistics": {\n                  "functions": [],\n                  "ignoreZeros": true\n                }\n              },\n              "isConfigVisible": true,\n              "type": "FreeformReportlet"\n            },\n            "swatchColor": "#00C0C7",\n            "type": "genericSubPanel",\n            "visible": true,\n            "visualizationIndex": 1\n          }],\n          "type": "panel"\n        }]\n      }]\n    },\n    "created": "2021-05-04T19:31:12Z"\n  }\n}\n\n')),(0,i.mdx)("h3",{id:"example-response-4"},"Example Response"),(0,i.mdx)("p",null,"The following response shows validation for the project with ",(0,i.mdx)("inlineCode",{parentName:"p"},"dataId"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"dv_000000000000000000"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "valid": true,\n  "validatorVersion": "1.0.0"\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-projects-index-md-a37bed436d323d872505.js.map