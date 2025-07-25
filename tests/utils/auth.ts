// import { request } from '@playwright/test';

// export default async function globalSetup() {
//   const context = await request.newContext({
//     extraHTTPHeaders: {
//       Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
//     },
//   });

//   const res = await context.get('/api/auth/validate');
//   if (!res.ok()) throw new Error('Auth failed');
// }
