import Image from "next/image";

export const Logo = () => (
  <Image
          className="dark:invert"
          src="/3dthink_ic.png"
          alt="3DThink logo"
          width={35}
          height={35}
        />
);
