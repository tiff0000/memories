import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

// set the starting path for all routes inside posts. Means all routes inside posts, prepend this /posts infront of their specified path e.g. get /home is => get /posts/home
app.use('/posts', postRoutes); // localhost:5000/posts

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://tiffanydev:zN75qWYzfxPUQVG5@cluster0.rste5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server listening on port: ${PORT}`)))
    .catch(() => (error) => console.log(error.message));

// mongoose.set("userFindAndModify", false);