import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getSession , logout} from "@/lib/session";
import AvatarSizeDemo from "./shadcn-studio/avatar/avatar-04";

const Navbar = async ({ className }: { className?: string }) => {
  const session = await getSession();
  const user = session?.user ?? null;

  const hasUser = !!user;

  const userName = user?.name?.replace(/\s+.+$/, "").replace(/^\w/g, (i) => i.toUpperCase());

  const handleLogout = async () => {
    "use server";
  try {
    await logout();
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  return (
    <nav className={cn("h-16 bg-background border-b", className)}>
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Logo className="h-15 w-15" />
            <span className='text-xl font-semibold'>3DThink</span>
          </div>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          {hasUser ? (
            <div className="flex items-center gap-3">
              <span>{userName}</span>
              <AvatarSizeDemo image={user?.image} />
              <form action={handleLogout}>
                <Button type="submit">Log out</Button>
              </form>
            </div>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="outline" className="hidden sm:inline-flex">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button>Sign Up</Button>
              </Link>

              {/* <Button size="icon" variant="outline">
            <SunIcon />
          </Button> */}

              {/* Mobile Menu */}
              <div className="md:hidden">
                <NavigationSheet />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
