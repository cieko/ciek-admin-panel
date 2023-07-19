import { redirect } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });

    return (
        <>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <div>
                        <StoreSwitcher items={stores} />
                    </div>
                    <div className="ml-auto flex items-center space-x-4">
                        <ThemeToggle />
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto mx-4">
                <MainNav className="mx-4 my-2 mb-4 items-center " />
            </div>
        </>
    );
};

export default Navbar;
