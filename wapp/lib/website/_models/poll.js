poll = new SimpleSchema({
           
            name:       {  type: String,  optional: true,     label: "Title",              max: 2000 },
            email:      {  type: String,  optional: true,     label: "Email",              max: 2000 },
            description: {  type: String,  optional: true,     label: "description",              max: 2000 },
            userid:      {  type: String,  optional: true,                 max: 2000 },   
            share:       {   type:String,  label:"Share", defaultValue:"Public"  ,optional:true },
            authorizerequired:       {  type: Boolean,      label: "isauthorized" , defaultValue:false     ,optional:true } , 
            summited:    {  type: Date, defaultValue:new Date(), optional: true } ,
            author:      {  type: String,  optional: true,                 max: 2000 },       
            userid:      {  type: String,  optional: true,                 max: 2000 }
      });