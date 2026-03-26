import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FloatingShapes } from "@/components/FloatingShapes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asya's Quizzes",
  description: "Where ASYA is Tested and Quizzed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <FloatingShapes />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
