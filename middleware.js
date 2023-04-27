import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";


import { NextResponse } from "next/server";

export async function middleware(req) {
  // Create a base response
  const res = NextResponse.next();

  const path = req.nextUrl.pathname;

  // Create authenticated Supabase Client.
  const supabase = createMiddlewareSupabaseClient({ req, res });

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // if we don't have a session and the user is trying to go to the dashboard or access an api endpoint, redirect to landing page
  if (!session && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/landing", req.url));
  }

  return res;
}
