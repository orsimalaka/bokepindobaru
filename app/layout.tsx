import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
    metadataBase: new URL("https://bokepindobaru.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'p8EFtHt9tNbgpYwgFb_8AQJGlMi4zhMSZMECbqahzFQ',
        yandex: '4d5aff3f698120f4',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        "logo": "https://bokepindobaru.pages.dev/favicon.ico",
        "url": "https://bokepindobaru.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepindobaru.pages.dev"
            },
            "foundingDate":"2024-10-27"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepindobaru.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Ngentot Jilbab Smp Mama Viral Sma Tante Live Paksa Bokep Abg Jepang Jav Barat Korea China Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepindobaru.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
