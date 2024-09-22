import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
// import loader from '@/components/Loading'
import Loader from "./../components/Loading";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Auth",
  description: "Next Auth with clerk and mongodb",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            {/* <div className="flex items-center justify-center h-screen w-full">
              <div className="text-xl text-white">Loading...</div>
            </div> */}
          <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
