"use client";

import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"; // Adjust the path if needed
import { DialogTitle } from "@radix-ui/react-dialog";

type DrawerComponentProps = {
  trigger: React.ReactNode; // The element that triggers the drawer opening (e.g., a button)
  content: React.ReactNode; // The content to display inside the drawer
};

const DeviceDrawer: React.FC<DrawerComponentProps> = ({ trigger, content }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={toggleDrawer}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger> {/* Trigger element */}
      <DrawerContent className="px-6 py-10">
        <DialogTitle />
        {content}
      </DrawerContent>{" "}
    </Drawer>
  );
};

export default DeviceDrawer;
