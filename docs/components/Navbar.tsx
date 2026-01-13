import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 transition-transform group-hover:rotate-12 duration-500">
             <Image 
                src="/logo-orange.png" 
                alt="Logo" 
                fill
                className="object-contain"
             />
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground group-hover:to-foreground transition-all duration-400">
            LC - Tracker
          </span>
    
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/docs/setup" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
          <a
            href="https://github.com/ShauryaRahlon/Leetcode-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-foreground/20"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
