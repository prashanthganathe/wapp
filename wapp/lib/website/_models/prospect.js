Prospect = new SimpleSchema({
            fullname:        {  type: String,    optional: true,     label: "Full Name",                 max: 200  },
            email:           {  type: String,    optional: true,     label: "Email",              max: 200 },
            phone:           {  type: String,    optional: true,     label: "Phone",              max: 200 },
            category:        {  type: String,    optional: true,     label: "Category",              max: 200   },
            country:         {  type: String,    optional: true,     label: "Country",          max: 200   },
            details:         {  type: String,    optional: true,     label: "How can we Help",      max: 2000   },
           
            createdby:       {  type: String,    optional: true,     label: "UserId"                  },     
            updatedAt:       {  type: String,    defaultValue:new Date().toString()     , optional:true                                   },
            createdAt:       {  type: String,    defaultValue:new Date().toString()      ,optional:true                                }
        });


