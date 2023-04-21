"use strict";(self.webpackChunkcja_apis=self.webpackChunkcja_apis||[]).push([[6006],{66394:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return N}});var a,d=t(87462),i=t(63366),r=(t(15007),t(64983)),m=t(91515),l=["components"],o={},p=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:o},x=m.Z;function N(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.mdx)(x,(0,d.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"dimensions-api"},"Dimensions API"),(0,r.mdx)("p",null,"The CJA Dimensions APIs allow you to retrieve dimensions programmatically through Adobe Developer. These APIs use the same data and methods that Adobe uses inside the product UI."),(0,r.mdx)("h2",{id:"retrieve-multiple-dimensions"},"Retrieve multiple dimensions"),(0,r.mdx)("p",null,"Retrieve a list of dimensions for a specified dataview ID. that the user can access."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/dimensions")),(0,r.mdx)("p",null,", get a response of all dimensions shared with the user."),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://cja.adobe.io/dimensions?includeType=shared" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "x-gw-ims-org-id: {IMSORG}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}"\n')),(0,r.mdx)("h4",{id:"response"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "content": [\n        {\n            "id": "62437d"\n        }\n    ],\n    "totalElements": 1,\n    "totalPages": 1,\n    "numberOfElements": 1,\n    "number": 0,\n    "firstPage": true,\n    "lastPage": true,\n    "sort": null,\n    "size": 10\n}\n')),(0,r.mdx)("h3",{id:"request-parameters"},"Request parameters"),(0,r.mdx)("p",null,"Optional parameters are specified as query parameters in the request."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Req/Opt"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataviewId")),(0,r.mdx)("td",{parentName:"tr",align:null},"required"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID of the dataview containing the dimension")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"includeType")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"array of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of include types")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"locale")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The language to use in the response")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"expansion")),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"array of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"A comma-delimited list of additional fields to include in the response")))),(0,r.mdx)("h3",{id:"response-parameters"},"Response parameters"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("strong",{parentName:"p"},"Retrieve multiple dimensions")," endpoint includes the following response parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension ID")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension name")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"description")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contents of dimension description field in report")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceFieldId")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID of source field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceFieldName")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of source field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"storageId")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"ID of storage")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataSetIds")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Lists the ID for each dataset returned")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dataSetType")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"One of three ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum")," dataset types: ",(0,r.mdx)("inlineCode",{parentName:"td"},"EVENT"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"LOOKUP"),", or ",(0,r.mdx)("inlineCode",{parentName:"td"},"PROFILE"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"schemaType")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Type of schema")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sourceFieldType")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Type of source field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tableName")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of table")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Dimension data type that is listed as an ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum")," of one of the following: ",(0,r.mdx)("inlineCode",{parentName:"td"},"string"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"boolean"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"int"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"decimal"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"currency"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"percent"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"time"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"ordered_enum"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether it is required")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"hideFromReporting")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is hidden in reports")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"schemaPath")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Path of schema")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"hasData")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension contains data")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"segmentable")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is segmentable")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"favorite")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is tagged as a favorite")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"approved")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is approved")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tags")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,r.mdx)("inlineCode",{parentName:"td"},"property")," objects that contain data associated with the dimension. For example, ",(0,r.mdx)("inlineCode",{parentName:"td"},"property1"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"property2"),", etc. each contain data in key-value pairs for the dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"shares")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,r.mdx)("inlineCode",{parentName:"td"},"property")," objects that contain data associated with the dimension. For example, ",(0,r.mdx)("inlineCode",{parentName:"td"},"property1"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"property2"),", etc. each contain data in key-value pairs for the dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"usageSummary")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,r.mdx)("inlineCode",{parentName:"td"},"property")," objects that contain data associated with the dimension. For example, ",(0,r.mdx)("inlineCode",{parentName:"td"},"property1"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"property2"),", etc. each contain data in key-value pairs for the dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"notFound")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is found")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"fromGlobalLookup")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is sourced from global lookup")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"multiValued")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension has mutliple values")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"Shows settings specified for dimension retrieval. This includes the following: ",(0,r.mdx)("inlineCode",{parentName:"td"},"caseSensitive"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"match"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"type"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"rules")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"enabled"),". These settings are described in the following rows.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"caseSensitive")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is queried as case sensitive. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"match")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The logical operator specified: ",(0,r.mdx)("inlineCode",{parentName:"td"},"and"),", or ",(0,r.mdx)("inlineCode",{parentName:"td"},"or")," (both type ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum"),"). This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"type")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type specified: ",(0,r.mdx)("inlineCode",{parentName:"td"},"string"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"numeric")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"date")," (all type ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum"),"). This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"rules")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains the rules specified for the query: This includes ",(0,r.mdx)("inlineCode",{parentName:"td"},"string")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"value")," (both type ",(0,r.mdx)("inlineCode",{parentName:"td"},"string"),"). This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"enabled")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the query specifies that the dimension is enabled. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"includeExcludeSetting")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Shows field definitions for ",(0,r.mdx)("inlineCode",{parentName:"td"},"func"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"id"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"field"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"label"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"branches"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-storage-type"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-table"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-field"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-storage-id"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"case-sensitive"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"mapped-type"),". These definitions are described in the following rows.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"func")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The function of the field, including options: ",(0,r.mdx)("inlineCode",{parentName:"td"},"raw_field"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"match")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"floor")," (all type ",(0,r.mdx)("inlineCode",{parentName:"td"},"enum"),"). This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"id")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID of the field. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"field")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The field associated with the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition"),". This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"label")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The label. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"branches")),(0,r.mdx)("td",{parentName:"tr",align:null},"array of objects"),(0,r.mdx)("td",{parentName:"tr",align:null},"Shows branches for ",(0,r.mdx)("inlineCode",{parentName:"td"},"pred")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"map-to"),".  This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object. For the complete data model on  ",(0,r.mdx)("inlineCode",{parentName:"td"},"pred")," objects and parameters, see the ",(0,r.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1"},"CJA Dimensions API reference"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-storage-type")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type used in oberon storage. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-table")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The table used in oberon. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-field")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The field in oberon. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"oberon-storage-id")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID associated with oberon storage. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"case-sensitive")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," is case-sensitive. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"mapped-type")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type used for mapping. This is contained in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"fieldDefinition")," response object.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"bucketingSetting")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"The setting used for bucketing, including options ",(0,r.mdx)("inlineCode",{parentName:"td"},"bucketSetting")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"enabled"),". For the complete data model on these settings, see the ",(0,r.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1"},"CJA Dimensions API reference"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"noValueOptionsSetting")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"The options setting used for dimensions with no value, including ",(0,r.mdx)("inlineCode",{parentName:"td"},"option")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"value"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"defaultDimensionSort")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether sorting of dimensions is set for default.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"persistenceSetting")),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"The settings for persistence, including ",(0,r.mdx)("inlineCode",{parentName:"td"},"enabled"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"allocationModel"),", and ",(0,r.mdx)("inlineCode",{parentName:"td"},"lookback"),". For the complete data model on these settings, see the ",(0,r.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/cja-apis/docs/api/#tag/Dimensions-API/operation/getDimensionsForDataview_1"},"CJA Dimensions API reference"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"isDeleted")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether the dimension is deleted.")))),(0,r.mdx)("h2",{id:"retrieve-a-single-dimension"},"Retrieve a single dimension"),(0,r.mdx)("p",null,"You can retrieve details around a single dimension if you know the dimension ID. You can find the dimension ID by using the multiple dimensions endpoint. See ",(0,r.mdx)("a",{parentName:"p",href:"parameters.md"},"Dimensions parameters")," for query strings that you can attach to this API call."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"GET https://cja.adobe.io/dimensions")),(0,r.mdx)("p",null,"For example, find dimensions with an ID of ",(0,r.mdx)("inlineCode",{parentName:"p"},"62437d"),", including the name, description, date range, and color:"),(0,r.mdx)(p,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"request-1"},"Request"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://cja.adobe.io/dimensions/62437d?expansion=name,description,dateRange,color" \\\n    -H "x-api-key: {CLIENTID}" \\\n    -H "x-gw-ims-org-id: {IMSORG}" \\\n    -H "Authorization: Bearer {ACCESSTOKEN}"\n')),(0,r.mdx)("h4",{id:"response-1"},"Response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "62437d",\n    "name": "Example dimension",\n    "description": "This is an example dimension description.",\n    "dateRange": "YYYY-03-29T00:00:00/YYYY-03-29T23:59:59",\n    "color": "STANDARD6"\n}\n')))}N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-endpoints-dimensions-index-md-b2472b1cad3ff86df8d0.js.map