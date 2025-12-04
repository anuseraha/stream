import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Triangle } from "lucide-react"
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Image
                            src="/connect_stream_logo.svg"
                            alt="Logo"
                            width={140} height={50} className="w-[160px] lg:w-[220px]"
                        />
            <Triangle className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">Connectstream</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQs
          </Link>
        </nav>

        <Button className="bg-primary hover:bg-primary/90">Make a Task</Button>
      </div>
    </header>
  )
}
