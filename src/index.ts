import express, {Request, Response} from "express";

const app = express();

const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express and typescript app");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("This is about page")
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
});
