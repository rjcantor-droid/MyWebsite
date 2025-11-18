import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* This is a visual-only form. To make it work, you'll need to 
        use a service like Formspree or build your own API route.
        For now, you can link to your email.
      */}
      <Button asChild size="lg">
        <a href="mailto:your-email@example.com">Email Me</a>
      </Button>

      {/* OR - build the static form (this won't do anything yet)
      */}
      <form className="max-w-lg space-y-4 mt-8">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your Name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your message..." />
        </div>
        <Button type="submit" disabled>Submit (Coming Soon)</Button>
      </form>
    </div>
  );
}