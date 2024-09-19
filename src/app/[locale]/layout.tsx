import "@/styles/global.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "@/styles/reset.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { AppConfig } from "@/utils/AppConfig";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "128x128",
      url: "/favicon-128x128.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "196x196",
      url: "/favicon-196x196.png",
    },
  ],
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <NextUIProvider>{props.children}</NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
