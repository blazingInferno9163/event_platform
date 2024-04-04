import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes:[
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/logo.svg',
    "/assets/images/dotted-pattern.png",
    "/assets/images/hero.png"
  ],
  ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/logo.svg',
    "/assets/images/dotted-pattern.png",
    "/assets/images/hero.png"
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};