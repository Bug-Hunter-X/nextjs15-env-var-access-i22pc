# Accessing Environment Variables in Next.js 15 Page Component

This repository demonstrates a common issue in Next.js 15 applications when attempting to access environment variables directly within page components.  Environment variables are not automatically available in the client-side context of the application. This example shows how to correctly access these variables.

## Problem

Directly accessing `process.env` variables within a page component on the client-side will throw an error, as shown in the `pages/about.js` file.