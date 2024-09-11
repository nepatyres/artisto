'use client';
import React, { useEffect } from "react";
import HomePage from "../pages/homePage";
import './globals.css';

export default function Home() {
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
