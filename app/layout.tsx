import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ali Akbar's Nextjs Walkthrough</title>
      </head>
      {/* childern is page.tsx */}
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
