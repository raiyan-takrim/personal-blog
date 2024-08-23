"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter()
  return (
    <main className="flex flex-col place-items-center gap-6 text-center place-content-center py-20 h-[calc(100vh-72px)]">
      <h1 className="text-2xl md:text-4xl font-medium">Welcome to my blog</h1>
      <p className="max-w-[450px] md: text-lg sm:max-w-[700px] tracking-wide leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, odit et assumenda quidem ad molestiae cupiditate sapiente rerum sequi facilis!</p>
      <Button className="tracking-wide font-semibold" onClick={() => route.push('/posts')}>EXPLORE POSTS</Button>
    </main>
  );
}
