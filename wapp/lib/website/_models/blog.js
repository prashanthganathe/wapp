Blog = new SimpleSchema({
           
            titleimages:     {  type: [String],  optional: true,     label: "Images",              max: 2000 },      
            categories:      {  type: [String],  optional: true,     label: "Images",              max: 2000 },            
            day:      		 {  type: String,    defaultValue:'01'     , optional:true                                   },
            month:      	 {  type: String,    defaultValue:'Jan'      ,optional:true                                },
            posttitle:       {  type: String,  optional: true,     label: "Post Title",              max: 2000 },  
            postcontent:     {  type: String,  optional: true,     label: "Post content",              max: 50000 },  
            postmetauser:    {  type: String,  optional: true,     label: "Post content",              max: 50000 },  
            postcontenttag:  {  type: String,  optional: true,     label: "Post Tag",              max: 50000 },  
            postcontentcomments:{  type: String,  optional: true,     label: "Post Comments",              max: 50000 },  
            author:{  type: String,  optional: true,     label: "Author",              max: 5000 }, //later create schema for author
            createdat:{  type: Date, defaultValue:new Date(), optional: true }  
        });