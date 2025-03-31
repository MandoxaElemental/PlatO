
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
export function Component() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/" icon={}>
            Home
          </SidebarItem>
          <SidebarItem href="/Discover" icon={} label="Pro" labelColor="dark">
            Discover
          </SidebarItem>
          <SidebarItem href="#" icon={} label="3">
            Notificiations
          </SidebarItem>
          <SidebarItem href="#" icon={}>
            Premium
          </SidebarItem>
          <SidebarItem href="#" icon={}>
            Messages
          </SidebarItem>
          <SidebarItem href="/RecipeBook" icon={}>
            Recipe Book
          </SidebarItem>
          <SidebarItem href="/Profile" icon={}>
            Profile
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
