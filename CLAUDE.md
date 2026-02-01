# Aklil Holdings Website

## Project Overview
Corporate website for Aklil Holdings, a diversified investment company led by Mr. Mekdes Aklilu with 30+ years of business experience in Ethiopia.

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- React Router for navigation
- Firebase Hosting for deployment

## Key Stats (as of Jan 2025)
- 13 Group Companies (featured on portfolio page)
- 30+ Total Investments
- 10+ Sectors
- 30+ Years Experience

## Portfolio Structure
- **Key Holdings**: 11 detailed companies grouped by sector with status badges (Operational, Under Construction, Coming Soon)
- **Other Investments**: Additional sectors shown as a simple grid (Education, Logistics, Fintech, Construction, Import/Export, Agriculture)

## Deployment
- **CI/CD**: GitHub Actions auto-deploys to Firebase on push to `main`
- **Live URL**: https://aklilholdings.com
- **Firebase Project**: aklil-holdings

## Important Notes
- Uses `legacy-peer-deps=true` in `.npmrc` due to react-helmet-async not supporting React 19 yet
- Company data is in `src/data/portfolio.ts` - update there to add/modify companies
- Sector order is defined in `sectorOrder` array - Financial Services is first by design

## Common Tasks
- Add a company: Edit `src/data/portfolio.ts`, add to `companies` array
- Change sector order: Edit `sectorOrder` in `src/data/portfolio.ts`
- Update stats: Edit `src/components/StatsBar.tsx` and `src/pages/Portfolio.tsx`
