import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "OpenNeuro Docs",
  description: "Documentation for the OpenNeuro real-time audio pipeline framework",
};

const navbar = (
  <Navbar
    logo={<b>OpenNeuro</b>}
    projectLink="https://github.com/Project-NEURIA/OpenNeuro"
  />
);

const footer = (
  <Footer>MIT {new Date().getFullYear()} © OpenNeuro.</Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Project-NEURIA/OpenNeuro/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
