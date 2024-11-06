import "./globals.css";
import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Sidebar />
        {children}

      <footer className="footer-text flex items-center justify-center">
          <p>© 2024 - Powered by Blackfight Studios</p>
      </footer>
      </body>
    </html>
  );
}
