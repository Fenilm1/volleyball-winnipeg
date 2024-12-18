"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu as Nav,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Clubs",
    href: "/",
  },
  {
    title: "Camps",
    href: "/",
  },
  {
    title: "Leagues",
    href: "/",
  },
  {
    title: "Tourneys",
    href: "/",
  },
  {
    title: "Drop-ins",
    href: "/",
  },
  {
    title: "Resources",
    href: "/",
  },
  {
    title: "Calendar",
    href: "/",
  },
]

export function NavigationMenu() {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/ball_small.png"
            alt="Volleyball Winnipeg Logo"
            width={40}
            height={40}
          />
          <span className="hidden font-bold sm:inline-block">
            Volleyball Winnipeg
          </span>
        </Link>
        <Nav className="max-w-max flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.slice(0, 6).map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {components.slice(6).map((component) => (
              <NavigationMenuItem key={component.title}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {component.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </Nav>
        <div className="ml-auto">
          <Link href="/" passHref>
            <Button asChild>
              <span>Register Today!</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
