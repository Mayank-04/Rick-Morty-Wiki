import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://rickandmortyapi.com/api/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req,res) => {
    const randomId = Math.floor(Math.random() * 826 + 1);
    try {
        const result = await axios.get(API_URL + "/character/" + randomId);
        res.render("index.ejs", {
            charName: result.data.name,
            status: result.data.status,
            charSpecies: result.data.species,
            imageURL: result.data.image,
        });
    } catch(error) {
        console.log(response.error.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});