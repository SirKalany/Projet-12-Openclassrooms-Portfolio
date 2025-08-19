import "./globals.css";

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio Next.js + Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
