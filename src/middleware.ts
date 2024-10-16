import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
} from "@convex-dev/auth/nextjs/server";
import { NextResponse } from "next/server"; // Import NextResponse for handling redirects

// Define public routes (e.g., /auth is a public route)
const isPublicPage = createRouteMatcher(["/auth"]);

export default convexAuthNextjsMiddleware((request) => {
  const isAuthenticated = isAuthenticatedNextjs(); // Check if the user is authenticated
  const url = new URL(request.url); // Get the request URL

  // If the user is not authenticated and trying to access a private page
  if (!isPublicPage(request) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/auth", request.url)); // Redirect to /auth
  }

  // If the user is authenticated and trying to access the /auth page
  if (isPublicPage(request) && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to home
  }

  // Allow the request to proceed if no redirects are needed
  return NextResponse.next(); // Proceed with the request as usual
});

// Apply middleware to all routes except static assets (_next) and APIs
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// import {
//   convexAuthNextjsMiddleware,
//   createRouteMatcher,
//   isAuthenticatedNextjs,
//   nextjsMiddlewareRedirect,
// } from "@convex-dev/auth/nextjs/server";

// const isPublicPage = createRouteMatcher("[/auth]");

// export default convexAuthNextjsMiddleware((request) => {
//   if (!isPublicPage(request) && !isAuthenticatedNextjs()) {
//     console.log("-----------------------------------");
//     console.log("Redirecting to /auth");
//     console.log("-----------------------------------");
//     return nextjsMiddlewareRedirect(request, "/auth");
//   }

//   // TODO: Redirect user away from "/auth" if authenticated
// });

// export const config = {
//   // The following matcher runs middleware on all routes
//   // except static assets.
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
