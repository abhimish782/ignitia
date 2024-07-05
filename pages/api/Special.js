const mongoose = require("mongoose");
const Special = require("@/Schema/Special.js")


export default async function (req, res) {

    const database_url = process.env.DATABASEURL;
    
    if(mongoose.connection.readyState != 1){
        try{
            mongoose.set("strictQuery", true);
        
            mongoose.connect(database_url).then(()=>{   
                console.log("database connected")
            });
        }catch{
            console.log("Error while connecting")
        }
    }else{
        console.log("Database already connected")
    }

    var result = await Special.findOne();
    // Special.create({Title:"Join the Creed",FormLink:"http://localhost:3000/api/Special",FrameLink:"https://www.youtube.com/embed/DNf6Bu7z4vw"})
    
    res.status(200).json({ result })
}
