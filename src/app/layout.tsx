import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import "aos/dist/aos.css";
import "@styles/global.scss";
import { FC, ReactNode } from "react";

import ProviderLayout from "@components/layout/ProviderLayout";
import getConfig from "../../next-seo.config";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["400", "500", "600"],
});

type Props = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = getConfig();
export const viewport: Viewport = {
  themeColor: "#f6110f",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <ProviderLayout>{children}</ProviderLayout>
      </body>
    </html>
  );
};

export default RootLayout;