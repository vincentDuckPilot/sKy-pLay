# Guide: Running the sKy-pLay Web App Locally

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Setup Instructions

1. **Install dependencies**

   Open a terminal and navigate to the `web` directory:
   
   ```powershell
   cd web
   npm install
   # or
   # yarn install
   ```

2. **Start the development server**

   ```powershell
   npm run dev
   # or
   # yarn dev
   ```

3. **Access the app in your browser**

   By default, the app runs at: [http://localhost:3000](http://localhost:3000)

   Open this URL in your web browser to view the site.

---

## Troubleshooting
- If you see errors about missing dependencies, make sure you ran `npm install` or `yarn install`.
- If port 3000 is in use, you can specify another port:
  ```powershell
  set PORT=4000; npm run dev
  ```
  Then access [http://localhost:4000](http://localhost:4000)

## Production Build
To build and run the app in production mode:
```powershell
npm run build
npm start
```

---

For more details, see the `README.md` in the `web` folder.
