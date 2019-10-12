// tslint:disable:no-console
import express, { Request, Response } from "express";
import path from "path";
const app = express();

// default port to listen on
const PORT = 8080;

// configure template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// default route handler
app.get("/", (req: any, res: { render: (arg0: string) => void; }) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
