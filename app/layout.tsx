import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
// @ts-ignore theme css import
import "nextra-theme-blog/style.css";

export const metadata = {
  title: "Blog Example",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#222831", light: "#fefce8" }} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            {new Date().getFullYear()} © gopher.uz
            <a href="/rss.xml" style={{ float: "right" }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
