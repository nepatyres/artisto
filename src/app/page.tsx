'use client';
import { useEffect } from "react";
import HomePage from "../pages/homePage";
import './globals.css';
import Products from "@/pages/products";

export default function Home() {
  // document.body.classList.add("overflow-hidden");
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main>
      <HomePage />
    </main>
  );
}
