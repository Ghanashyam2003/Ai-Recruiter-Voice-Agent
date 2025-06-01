// This is a Next.js root layout file that sets up global styles and fonts for the application. defaul page our website
import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div>
      <h2>Welcome to the Ai-Interview</h2>
      <Button>subscribe</Button>
    </div>
  );
}
