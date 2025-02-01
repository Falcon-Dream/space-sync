import type { Metadata, Viewport } from "next";
import { Exo_2 } from "next/font/google";

import "aos/dist/aos.css";
import "@styles/global.scss";
import { FC, ReactNode } from "react";

import ProviderLayout from "@components/layout/ProviderLayout";
import getConfig from "../../next-seo.config";

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = getConfig();
export const viewport: Viewport = {
  themeColor: "#5edada",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={exo2.className}>
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
};

export default RootLayout;
