# Frontend - Item Manager Lab Test

## Setup
1. Open a terminal inside the frontend folder.
2. Run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` (or create `.env` with your backend URL)
4. Start the frontend for development:
   ```bash
   npm run dev
   ```

## Configuration
- **Development**: `VITE_API_URL=http://localhost:5000/api`
- **Production**: `VITE_API_URL=https://labtest-backend-q3v8.onrender.com/api`

The `.env` file is already configured for production deployment.

## Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` folder.

## Preview Production Build Locally
```bash
npm run preview
```

## Deployment
The frontend is ready to be deployed to any static hosting service:
- Render.com
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static web server

Simply build the project (`npm run build`) and deploy the `dist/` folder.
