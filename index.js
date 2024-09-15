import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;


function dayGenerator(){
    const d = new Date();
    let day = d.getDay();
    var dayofweek = "";
    
    if(day == 0 || day == 6){
        dayofweek = "It's the weekend! Time to have fun!";
    }
    
    else{
        dayofweek = "It's a weekday! It's time to work hard!";
    }

    return dayofweek;
}

app.get("/", (req, res) => {
    res.render("index.ejs", {
        day1: dayGenerator()
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});