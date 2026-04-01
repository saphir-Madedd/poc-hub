import * as React from "react"
import { Home, Settings, HelpCircle } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className=" max-h-225 w-18 border shadow-md border-sidebar-border rounded-[12px] bg-white">
      {/* 1. Logo Section */}
      <SidebarHeader className="flex items-center justify-center py-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg ">

        </div>
      </SidebarHeader>

      {/* 2. Main Navigation */}
      <SidebarContent className="flex flex-col items-center gap-4 py-4">
        <SidebarMenu className="items-center">
          <SidebarMenuItem>
            <SidebarMenuButton 
              tooltip="Accueil" 
              isActive 
              className="h-10 w-10 p-0 justify-center "
            >
              <Home className="h-5 w-5 bg-none" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* 3. Bottom Actions & User */}
      <SidebarFooter className="flex flex-col items-center gap-6 pb-8">
        <SidebarMenu className="gap-4 items-center">
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Paramètres" className="h-10 w-10 p-0 justify-center ">
              <Settings className="h-5 w-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Aide" className="h-10 w-10 p-0 justify-center ">
              <HelpCircle className="h-5 w-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="relative pt-2">
          <Avatar className="h-9 w-9 border-2 border-white ring-1 ring-slate-100 cursor-pointer transition-transform hover:scale-105">
            <AvatarImage src="/avatar-user.jpg" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}