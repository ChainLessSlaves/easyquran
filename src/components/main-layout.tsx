
"use client";

import React from 'react';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter
} from '@/components/ui/sidebar';
import { BookOpen, Home, Mic, Radio, BookUser, ExternalLink, MessageSquareQuote, Tv, GitPullRequest, HelpCircle, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from './ui/button';
import { SearchTool } from './search-tool';
import { ThemeToggle } from './theme-toggle';

interface MainLayoutProps {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const menuItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "#", icon: Radio, label: "Quran Radio" },
  { href: "#", icon: Mic, label: "Reciters" },
  { href: "#", icon: BookUser, label: "About Us" },
  { href: "#", icon: Tv, label: "Developers" },
  { href: "#", icon: GitPullRequest, label: "Product Updates" },
  { href: "#", icon: MessageSquareQuote, label: "Feedback" },
  { href: "#", icon: HelpCircle, label: "Help" },
];

const projectItems = [
  { href: "#", label: "Quran.com" },
  { href: "#", label: "Quran For Android" },
  { href: "#", label: "Quran iOS" },
  { href: "#", label: "QuranReflect.com" },
  { href: "#", label: "Sunnah.com" },
  { href: "#", label: "Nuqayah.com" },
  { href: "#", label: "Legacy.quran.com" },
  { href: "#", label: "Corpus.quran.com" },
];

export function MainLayout({ children, sidebarContent }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-headline font-semibold">EasyQuran</h1>
          </div>
          <ThemeToggle />
        </SidebarHeader>
        <SidebarContent>
          {sidebarContent ? sidebarContent : (
            <>
            <SidebarGroup>
              <SearchTool />
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarMenu>
                {menuItems.map(item => (
                   <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                       <Link href={item.href}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                       </Link>
                    </SidebarMenuButton>
                   </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
             <SidebarGroup>
              <SidebarGroupLabel>Our Projects</SidebarGroupLabel>
              <SidebarMenu>
                {projectItems.map(item => (
                   <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                       <Link href={item.href} target="_blank">
                         <span>{item.label}</span>
                         <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                       </Link>
                    </SidebarMenuButton>
                   </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
            </>
          )}
        </SidebarContent>
        <SidebarFooter>
          <Card className="bg-primary/5 border-primary/10">
            <CardHeader className="p-4">
              <CardTitle className="text-base">Become A Monthly Donor</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground mb-4">
                Monthly donations help us improve Quran.com and sustain operations so we focus less on fundraising and more on creating impact.
              </p>
              <div className="flex gap-2">
                <Button className="flex-1">Donate Monthly</Button>
                <Button variant="outline" className="flex-1">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
         <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-2 flex items-center md:hidden">
              <SidebarTrigger />
              <div className="flex-1 text-center">
                 <h1 className="text-xl font-headline font-semibold">EasyQuran</h1>
              </div>
              <ThemeToggle />
          </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
