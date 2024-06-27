import express from "express";

//Declarations
const app = express();
const port = 3000;


//setting EJS as the Express app view engine
app.set('view engine', 'ejs');

//Send .ejs to browser
app.get("/", (req, res) => {
    // const today = new Date("September 20, 1993 01:15:00");
    const today = new Date();
    const day = today.getDay();

    // console.log(day)
    let type = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekday";
        adv = "it's time to have some fun and play hard";
    }

    // res.render('file', {htmlX:decX, htmlY:decY});
    res.render('index', {dayType: type, advice: adv})
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}.`);
    
})