import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6 md:p-24 bg-background">
      
      {/* Grid Layout: Stacks on mobile, Side-by-side on desktop (md) */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        
        {/* LEFT SIDE: Text & Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hello, I'm Reign Cantor
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            This is My Website Project, Full-Stack Developer or Student
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            {/* 'asChild' allows the Button to work as a Link */}
            <Button asChild size="lg" className="font-semibold">
              <Link href="/about">About Me</Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE: Circle Avatar */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Container to control size */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* The Image Wrapper: Makes it circular with border/shadow */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden">
              <Image 
                src="/profile.png"
                alt="Reign Cantor"
                fill
                className="object-cover" 
                priority
              />
            </div>
            
            {/* Optional: Background blur glow effect behind the avatar for style */}
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-full dark:bg-blue-500/10" />
          </div>
        </div>
        
      </div>
    </main>
  );
}