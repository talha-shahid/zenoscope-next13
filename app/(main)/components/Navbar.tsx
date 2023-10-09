"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

//react icons imports
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, Atom } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sorting Algorithms",
    href: "/algorithms/sorting",
    description: "Organize list of items into a particular order",
  },
  {
    title: "Path Finding Algorithms",
    href: "/algorithms/pathfinder",
    description: "Find the best route from point A to point B",
  },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="sticky top-4 z-30">
      <div className="flex justify-between bg-[#2d363f] rounded-xl shadow-xl p-3">
        <div>
          <Link className="flex gap-[6px] text-xl pt-2 items-center" href="/">
            <Image src={"/logo.png"} width={30} height={20} alt="logo" />
            <p className="text-white">ZENOSCOPE</p>
          </Link>
        </div>
        <div className="md:flex gap-6 lg:mr-10 mr-3 hidden items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Experiments</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/experiments"
                        >
                          <Atom />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Experiments
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore and Analyze Real-World Scenarios.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/experiments/physics" title="Physics">
                      Unravel the fundamental laws governing the Universe
                    </ListItem>
                    <ListItem href="/experiments/chemistry" title="Chemistry">
                      Unveil the secrets of substances that make up our world
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Algorithms</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contactUs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/signin">
            <Button variant="nav">
              Login <ArrowRight className="ml-1" />
            </Button>
          </Link>

          <ModeToggle />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-[48px] w-[48px]",
              },
            }}
          />
        </div>

        <div className="md:hidden">
          <HiMenuAlt3 size={30} onClick={toggleHidden} />
        </div>
      </div>
      {hidden && (
        <div className="p-3 w-32 flex flex-col absolute right-5 top-[65px] text-white bg-[#2d363f] rounded-lg">
          <a href="/experiments" className="cursor-pointer hover:underline">
            Experiments
          </a>
          <a href="/algorithms" className="cursor-pointer hover:underline">
            Algorithms
          </a>
          <a href="/aboutUs" className="cursor-pointer hover:underline">
            About us
          </a>
          <a href="/contactUs" className="cursor-pointer hover:underline">
            Contact us
          </a>
          <a href="/login" className="cursor-pointer hover:underline">
            login
          </a>
        </div>
      )}
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
