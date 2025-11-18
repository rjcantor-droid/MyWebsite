import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* Find a good photo of yourself and place it in the /public folder
        For example: /public/profile-pic.jpg
        Then you can link to it like this:
      */}
      {/*  */}
      {/* <Image src="/profile-pic.jpg" alt="Your Name" width={150} height={150} className="rounded-full mb-4" /> */}
      
      <h1 className="text-4xl font-bold mb-2">Hello, I'm [Your Name]</h1>
      <p className="text-xl text-muted-foreground mb-6">
        [Your Title - e.g., "Full-Stack Developer" or "Student"]
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/about">About Me</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  );
}