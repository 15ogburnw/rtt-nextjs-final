import Link from "next/link";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import SVG from "react-inlinesvg";

import { useRouter } from "next/router";
import SideBarMenuItem from "../Menus/SidbarMenuItem";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Sidebar() {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleSignOut = (e) => {
    e.preventDefault();
    async function signOut() {
      const { error } = await supabase.auth.signOut();
      router.push("/");
      if (error) console.error(error);
    }
    signOut();
  };

  // TODO:
  // --FIX SO THAT THE NAVBAR COLLAPSES ON SMALLER SIZES - REFERENCE NOTUS TEMPLATE NAVBAR
  // --FIX LOGO - TRADE FOR LOGO WITH FULL NAME AND CENTER ABOVE AVATAR (FIGURE OUT WHY THE CURRENT LOGO IS FAILING TO LOAD SOMETIMES)
  return (
    <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">
      <Link href="/dashboard">
        <SVG
          src="/rtt-logos/rtt-icon.svg"
          className="h-8 w-auto inline mr-3"
          alt="logo"
        />
      </Link>

      <div className="flex flex-col flex-1 mt-6">
        <nav>
          <Link
            href="/dashboard"
            className={` flex items-center px-4 py-3 mt-3 font-bold rounded-md 
                      ${
                        router.pathname.indexOf("/dashboard") !== -1 &&
                        router.pathname.indexOf("/dashboard/") === -1
                          ? "text-emerald-500 hover:text-emerald-600 bg-gray-100"
                          : "text-slate-700 hover:text-slate-500"
                      }`}
          >
            <RectangleStackIcon
              className={`h-5 w-5 inline flex-none
                        ${
                          router.pathname.indexOf("/dashboard") !== -1 &&
                          router.pathname.indexOf("/dashboard/") === -1
                            ? "opacity-75"
                            : ""
                        }`}
            />
            <span className="mx-4 font-medium">Dashboard</span>
          </Link>

          <Link
            href="/dashboard/recipe-search"
            className={` flex items-center px-4 py-3 mt-3 font-bold rounded-md 
                      ${
                        router.pathname.indexOf("/dashboard/recipe-search") !==
                        -1
                          ? "text-emerald-500 hover:text-emerald-600 bg-gray-100"
                          : "text-slate-700 hover:text-slate-500"
                      }`}
          >
            <MagnifyingGlassCircleIcon
              className={`h-5 w-5 inline flex-none
                        ${
                          router.pathname.indexOf(
                            "/dashboard/recipe-search"
                          ) !== -1
                            ? "opacity-75"
                            : ""
                        }`}
            />
            <span className="mx-4 font-medium">Search Recipes</span>
          </Link>

          <Link
            href="/dashboard/restaurants"
            className={` flex items-center px-4 py-3 mt-3 font-bold rounded-md 
                      ${
                        router.pathname.indexOf("/dashboard/restaurants") !== -1
                          ? "text-emerald-500 hover:text-emerald-600 bg-gray-100"
                          : "text-slate-700 hover:text-slate-500"
                      }`}
          >
            <GlobeAltIcon
              className={`h-5 w-5 inline flex-none
                        ${
                          router.pathname.indexOf("/dashboard/restaurants") !==
                          -1
                            ? "opacity-75"
                            : ""
                        }`}
            />
            <span className="mx-4 font-medium">Find a Restaurant</span>
          </Link>

          <Link
            href="/dashboard/profile"
            className={` flex items-center px-4 py-3 mt-3 font-bold rounded-md 
                      ${
                        router.pathname.indexOf("/dashboard/profile") !== -1
                          ? "text-emerald-500 hover:text-emerald-600 bg-gray-100"
                          : "text-slate-700 hover:text-slate-500"
                      }`}
          >
            <UserCircleIcon
              className={`h-5 w-5 inline flex-none
                        ${
                          router.pathname.indexOf("/dashboard/profile") !== -1
                            ? "opacity-75"
                            : ""
                        }`}
            />
            <span className="mx-4 font-medium">Profile</span>
          </Link>

          <Link
            href="/dashboard/settings"
            className={` flex items-center px-4 py-3 mt-3 font-bold rounded-md 
                      ${
                        router.pathname.indexOf("/dashboard/settings") !== -1
                          ? "text-emerald-500 hover:text-emerald-600 bg-gray-100"
                          : "text-slate-700 hover:text-slate-500"
                      }`}
          >
            <Cog6ToothIcon
              className={`h-5 w-5 inline flex-none
                        ${
                          router.pathname.indexOf("/dashboard/settings") !== -1
                            ? "opacity-75"
                            : ""
                        }`}
            />
            <span className="mx-4 font-medium">Settings</span>
          </Link>

          <Link
            href="#"
            onClick={handleSignOut}
            className=" flex items-center px-4 py-3 mt-3 font-bold rounded-md text-slate-700 hover:text-slate-500"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 inline flex-none" />
            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </nav>
        <div className="pt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-800 ">My Menus</h2>

            <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-4 mx-3 space-y-3 ">
            <SideBarMenuItem dotColor="bg-pink-500" name="Test Item" />
          </nav>
        </div>
      </div>
    </aside>
  );
}
