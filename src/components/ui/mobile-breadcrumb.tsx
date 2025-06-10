import React from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";

type BreadcrumbProps = {
  items: {
    label: string;
    href: string;
  }[];
  sidebarContent: React.ReactNode;
};

export function MobileBreadcrumb({ items, sidebarContent }: BreadcrumbProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-4 py-2">
      <div className="flex items-center space-x-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80vw] p-0">
            {sidebarContent}
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-2 overflow-auto scrollbar-hide">
          {items.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500" />}
              <a
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}