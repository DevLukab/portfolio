import { Hero } from "@/components/Hero";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Stack/>
    <LogoAnimation/>
    </>
  );
}
