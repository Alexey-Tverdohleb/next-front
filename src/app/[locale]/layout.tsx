import { FC } from 'react';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/types';
import { ThemeProvider } from '@/hooks/useThemeMode/themeProvider';
import ScreenProvider from '@/hooks/useScreen/ScreenProvider';
import StoreProvider from '@/store/StoreProvider';
import MainLayout from '@/app/[locale]/MainLayout';

import 'react-date-range/dist/styles.css';
import '@/components/DateRangePicker/theme.css';

import '@/globals.css';

const poppins = Poppins({
  subsets: ['devanagari', 'latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Pick<IProps, 'params'>) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
  };
}

const LocaleLayout: FC<IProps> = async ({ children, params: { locale } }) => {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body
        className={twMerge(poppins.variable, 'font-poppins', 'bg-secondary-blue dark:bg-black')}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StoreProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <ScreenProvider>
                <MainLayout>{children}</MainLayout>
              </ScreenProvider>
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
