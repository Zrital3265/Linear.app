import { Container } from "postcss";
import "../styles/global.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head> */}
      <body>
        <div>
          <Header />
          <main className="pt-[var(--navigation-height)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
