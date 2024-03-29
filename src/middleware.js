import createIntlMiddleware from "next-intl/middleware";

const intlMiddleware = createIntlMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "ar"],

  // Used when no locale matches
  defaultLocale: "fr",
  
});


export default function middleware(req){
  if(req.nextUrl.pathname.startsWith("/api")){
    //console.log("heyy");
  }else {
    return intlMiddleware;
  }
}





export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|fr|ar)/:path*","/api/:path*"],
};
