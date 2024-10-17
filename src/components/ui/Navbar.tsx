"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconBrandTabler,
  IconUserBolt,
  IconMessage2Star,
  IconBriefcase,
  IconCode,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import Image from "next/image";


export type SelectedPage = "Dashboard" | "About" | "Projects" | "Career" | "Testimonials";

export default function Navbar() {

  const [selectedPage , setSeletedPage] = useState<SelectedPage>("Dashboard"); 
   
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className={`text-neutral-700  dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0 ${selectedPage === "Dashboard" ? "dark:text-blue-400" : "dark:text-neutral-200"}`} />
      ),
    },
    {
      label: "About",
      href: "about",
      icon: (
        <IconUserBolt className={`text-neutral-700  dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0 ${selectedPage === "About" ? "dark:text-blue-400" : "dark:text-neutral-200"}`} />
      ),
    },
    {
      label: "Projects",
      href: "projects",
      icon: (
        <IconCode className={`text-neutral-700  dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0 ${selectedPage === "Projects" ? "dark:text-blue-400" : "dark:text-neutral-200"}`} />
      ),
    },
    {
      label: "Career",
      href: "career",
      icon: (
        <IconBriefcase className={`text-neutral-700  dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0 ${selectedPage === "Career" ? "dark:text-blue-400" : "dark:text-neutral-200"}`} />
      ),
    },
    {
      label: "Testimonials",
      href: "testimonials",
      icon: (
        <IconMessage2Star className={`text-neutral-700  dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0 ${selectedPage === "Testimonials" ? "dark:text-blue-400" : "dark:text-neutral-200"}`} />
      ),
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ritikbora",
      icon: (
        <IconBrandLinkedin className={`text-neutral-700 dark:text-neutral-200 dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0`} />
      ),
    },
    {
      label: "Github",
      href: "https://github.com/RitikBora",
      icon: (
        <IconBrandGithub className={`text-neutral-700 dark:text-neutral-200 dark:group-hover:text-blue-400 h-8 w-8 flex-shrink-0`} />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-12">
          <div className="pt-5">
            <SidebarLink
              link={{
                label: "Ritik Bora",
                href: "https://www.linkedin.com/in/ritikbora",
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
              type="external"
            />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden gap-24">
            <div className="flex flex-col gap-3">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} selectedPage={selectedPage} setSelectedPage={setSeletedPage}/>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {socialLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} type="external" />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
  );
}




