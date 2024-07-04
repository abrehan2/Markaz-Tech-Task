"use client";

// IMPORTS -
import { usePathname } from "next/navigation";
import { DEFAULT_REDIRECT_ROUTE, authRoutes, publicRoutes } from "@/routes";
import ShimmerButton from "../magicui/shimmer-button";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { useIsUser } from "@/hooks/usIsUser";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useIsUser();
  let findUser = !!user;

  return (
    <div className="w-full overflow-hidden py-10 flex items-center justify-center lg:mb-[10px]">
      <nav
        className="bg-white flex items-center gap-x-3 justify-between w-[600px] p-4 rounded-xl shadow-sm bg-secondary
     "
      >
        <div className="mt-0">
          <AnimatedGradientText className="rounded-[100px] lg:px-6 lg:py-3 lg:text-lg ">
            🚀
          </AnimatedGradientText>
        </div>
        <div className="flex gap-x-2">
          <ShimmerButton
            className="rounded-xl mb-0"
            background={pathname === publicRoutes[0] ? "#f97316" : "#000000"}
            onClick={() => router.push(publicRoutes[0])}
          >
            Home
          </ShimmerButton>

          {!findUser && (
            <ShimmerButton
              className="rounded-xl mb-0"
              background={pathname === authRoutes[0] ? "#f97316" : "#000000"}
              onClick={() => router.push(authRoutes[0])}
            >
              Login
            </ShimmerButton>
          )}

          {findUser && (
            <ShimmerButton
              className="rounded-xl mb-0"
              background={
                pathname === DEFAULT_REDIRECT_ROUTE ? "#f97316" : "#000000"
              }
              onClick={() => router.push(DEFAULT_REDIRECT_ROUTE)}
            >
              <FaUserAlt />
            </ShimmerButton>
          )}
        </div>
      </nav>
    </div>
  );
};
