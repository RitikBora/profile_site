"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconBrandTabler,
  IconUserBolt,
  IconMessage2Star,
  IconBriefcase,
  IconCode,
  IconShare,
  IconWorld,
  IconBrandLinkedin,
  IconBrandGithub,
  IconGlobe
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { div } from "framer-motion/client";


export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "#",
      icon: (
        <IconCode className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
    {
      label: "Career",
      href: "#",
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
    {
      label: "Testimonials",
      href: "#",
      icon: (
        <IconMessage2Star className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <IconBrandLinkedin className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
    {
      label: "Github",
      href: "#",
      icon: (
        <IconBrandGithub className="text-neutral-700 dark:text-neutral-200 h-8 w-8 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-between gap-12">
          <div className="pt-5">
            <SidebarLink
              link={{
                label: "Ritik Bora",
                href: "#",
                icon: (
                  <Image
                    src="/images/profile_photo.png"
                    className="h-12 w-12 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden gap-24">
            <div className="flex flex-col gap-3">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {socialLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}




const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first" + i}
              className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((i) => (
            <div
              key={"second" + i}
              className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
