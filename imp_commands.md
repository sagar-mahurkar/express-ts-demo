# Important Commands

## Git setup

Go to GitHub and create new repo

```bash
git init
git remote -v
git remote add origin [repo-url]
git remote -v
```

```bash
touch .gitignore
```

```.gitignore
/node_modules
```

```bash
git branch -M main
git branch
git pull origin main
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Project setup

```bash
# setup node project
npm init -y
# make a typescript project
npm install --save-dev typescript ts-node @types/node
# auto restart the server
npm install --save-dev nodemon
# configure tsconfig file
tsc --init
```

Update tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "rootDir": "./src",
    "esModuleInterop": true
  }
}
```

```bash
# expressjs
npm install express
# types for express for developement purpose
npm install --save-dev @types/express
```

```bash
mkdir src
touch src/index.ts
```
