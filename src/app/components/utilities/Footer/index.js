"use client";
import { BoxIconElement } from "boxicons";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="p-6 flex items-center justify-between fixed bottom-0 w-full bg-[#C08261]">
      <div className="flex items-center space-x-1">
        <div className="text-[#FCF5ED] text-sm selection:bg-yellow-400 selection:text-black">
          @ 2023 Masih Pemula. All rights reserved.
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <div>
        <box-icon name='instagram-alt' type='logo' color='#FCF5ED' ></box-icon>
        </div>
        <div>
        <box-icon name='whatsapp-square' type='logo' color='#FCF5ED' ></box-icon>
        </div>
        <div>
        <box-icon type='logo' name='pinterest' color='#FCF5ED'></box-icon>
        </div>
        <div>
        <box-icon name='twitter' type='logo' color='#FCF5ED' ></box-icon>
        </div>
        <div>
        <box-icon name='facebook-square' type='logo' color='#FCF5ED' ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
