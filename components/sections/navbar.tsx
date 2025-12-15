"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-slate-900">Oro Dental</span>
            </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
             <Link href="#appointment">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 mt-6">
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                            <Stethoscope className="h-6 w-6 text-blue-600" />
                            <span className="text-xl font-bold">Oro Dental</span>
                        </Link>
                         <nav className="flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium hover:text-blue-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                                >
                                {item.name}
                                </Link>
                            ))}
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full mt-4">
                                <Link href="#appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                            </Button>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
