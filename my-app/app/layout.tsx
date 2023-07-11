import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Wedding Planner",
  description: "Wedding Planner",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        {/* <Modal title="hell world" isOpen /> */}
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
