"use client";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
function LeftSideBar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-2 px-6">
        {sidebarLinks?.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`${isActive && "bg-primary-500"} leftsidebar_link`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton
            signOutOptions={{
              redirectUrl: "/sign-in",
            }}
          >
            <div className="flex cursor-pointer gap-4 p-4" title="logout">
              <Image
                src="/assets/logout.svg"
                alt="signout"
                width={24}
                height={24}
              />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSideBar;
