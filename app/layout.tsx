import './globals.css';
import { Poppins, Noto_Serif_Tamil } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Head from 'next/head';


gsap.registerPlugin(ScrollToPlugin);


if (typeof window !== 'undefined') {
  gsap.to(window, {
    duration: 1.5, // Increase to 1.5 or 2 for smoother scrolling
    ease: 'power1.inOut', // Use a smoother easing function
  });
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '700'],
  variable: '--font-noto-serif-tamil',
  display: 'swap',
});

export const metadata = {
  title: 'Ganga Shanmuga Social and Educational Trust',
  description: 'Empowering Communities Through Education and Transforming Lives',
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ganga Shanmuga Social and Educational Trust",
    "url": "https://www.gangashanmugatrust.org/",
    "logo": "https://www.gangashanmugatrust.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.facebook.com/gangashanmugatrust",
      "https://www.twitter.com/gangashanmugatrust",
      "https://www.instagram.com/gangashanmugatrust"
    ]
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     <Head>
      <title>Ganga Shanmuga Social and Educational Trust</title>
      <meta name="description" content="Empowering communities through education and social initiatives." />
      <meta name="keywords" content="education, social trust, community development, Ganga Shanmuga" />
      <meta property="og:title" content="Ganga Shanmuga Social and Educational Trust" />
      <meta property="og:description" content="Empowering communities through education and social initiatives." />
      <meta property="og:url" content="https://www.gangashanmugatrust.org/" />
      <meta property="og:image" content="https://www.gangashanmugatrust.org/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ganga Shanmuga Social and Educational Trust" />
      <meta name="twitter:description" content="Empowering communities through education and social initiatives." />
      <meta name="twitter:image" content="https://www.gangashanmugatrust.org/twitter-image.jpg" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </Head>
      <body className={`${poppins.variable} ${notoSerifTamil.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}