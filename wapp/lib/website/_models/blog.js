Blog = new SimpleSchema({
           
            titleimages:     {  type: [String],  optional: true,     label: "Images",              max: 2000 },          
            categories:      {  type: [String],  optional: true,     label: "Images",              max: 2000 },            
        
            posttitle:       {  type: String,  optional: true,     label: "Post Title",              max: 2000 },  
            postcontent:     {  type: String,  optional: true,     label: "Post content",              max: 5000000 },
            snippet:         {  type: String,  optional: true,     label: "Snippet",              max: 5000000 },    
            isdraft:         {  type: Boolean,  defaultValue :false,                                     },

            day:             {  type: String,    defaultValue:'01'     , optional:true                                   },
            month:           {  type: String,    defaultValue:'Jan'      ,optional:true                                },
            postmetauser:    {  type: String,  optional: true,     label: "Post content",              max: 500 },            
            commentscount:   {  type: Number,  optional: true,     label: "Comments count",              max: 50 },  
            author:          {  type: String,  optional: true,     label: "Author",              max: 80 }, //later create schema for author
            createdat:       {  type: Date, defaultValue:new Date(), optional: true }  
        });