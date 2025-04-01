
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, TextInput } from "flowbite-react";

export function NavbarComponentRight() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <TextInput></TextInput>
      </SidebarItems>
    </Sidebar>
  );
}
