import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";
import refaim_badge from "/refaim_badge.png";

function NavbarTop() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList dir="rtl">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white text-lg">
            העמותה
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img
                      src={refaim_badge}
                      className="max-h-36 flex-1 place-items-center align-middle justify-center"
                      alt="refaim-badge"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      עמותת רפאים
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      עמותת רפאים הוקמה ב2023- על מנת לקיים בית חם לבוגרי
                      היחידה, לקיים קהילה מקדמת ופעילה למען החברה הישראלית, לחזק
                      את מורשת היחידה, לסייע לחבריה בהכוונה לקבלת טיפול לנפגעי
                      הנפש ולהנציח את נופליה.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/docs"
                title="על היחידה"
                className="row-span-full"
              >
                היחידה הרב-ממדית,"יחידת רפאיםֿ, היא יחידה קרבית מיוחדת בצה"ל,
                הפועלת תחת זרוע היבשה. היחידה הוקמה במהלך שנת 2019 ביוזמת
                הרמטכ"ל אביב כוכבי, במטרה להיערך ללחימה בשדה הקרב העתידי. היא
                מהווה יחידת מודל לשינויים עתידיים ביחידות התמרון של צה"ל. היחידה
                מיועדת להילחם בכל זירות הלחימה ובכל תוואי שטח בהתאם למאפייניו
                ולאתגריו המשתנים, תוך שהיא משמשת ככוח מתמרן רב־זרועי ייחודי, בעל
                כושר לחימה גבוה לאיתור, לחשיפה ולהשמדת אויב. היחידה מוכשרת
                ומתפקדת כיחידת קומנדו לכל דבר.
              </ListItem>
              <ListItem href="/docs/installation" title="להצטרפות לעמותה">
                להצטרפות לעמותה לחץ כאן
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="לתרומה">
                לתרומות לחץ כאן
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white text-lg"></NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white text-lg">
            צור קשר
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavbarTop;

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
