import express, {Request, Response, NextFunction} from "express";

const app = express();

const PORT = 8080;

// app.use((req: Request, res: Response, next: NextFunction) => {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${req.method} ${req.url}`)
// })

// app.use((req: Request, res: Response, next: NextFunction) => {
//   (req as any).requestedAt = new Date().toLocaleString();
//   next();
// })

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const secret = req.query.secret;
  if (secret === "123") {
    next();   // allow
  } else {
    res.status(401).json({error: "Unauthorized access"});
  }
};

app.get("/", authenticate, (req: Request, res: Response) => {
  res.send("You have accessed a protected route!!");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Hello from express and typescript app!!");
});

app.get("/about", (req: Request, res: Response) => {
  res.send("This is about page")
})

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
});
