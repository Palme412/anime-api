const express = require("express");
const { Season } = require('./models');
const app = express();

app.use(express.json());
app.get("/season", async (request, response) => {

    try {
        const seasonArray = await Season.find({});
        response.json({ seasonArray });
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});