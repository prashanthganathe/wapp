BlogComment = new SimpleSchema({
           
            blogid:{  type: String,  optional: false } ,
            comment_author:     {  type: String,  optional: true, label: "Images", max: 200 },       
            comment:     {  type: String,  optional: true, label: "Images", max: 20 },   
            month:      {  type: String,  optional: true, label: "Images", max: 20 },        
            date:     {  type: String,  optional: true, label: "Images", max: 20},        
            year:     {  type: String,  optional: true, label: "Images", max: 20 },        
            time:     {  type: String,  optional: true, label: "Images", max: 20 },        
            createdat:{  type: Date, defaultValue:new Date(), optional: true }           
         
            
        });