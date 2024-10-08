import { MobileNav } from "./mobile-nav";
import { MainNav } from "./main-nav";
import { UserButton } from "./user-button";
import { ModeToggle } from "./ui/mode-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
};
