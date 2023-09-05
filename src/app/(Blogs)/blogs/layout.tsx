import Footer from '@/components/footer';
import MegaMenu from '@/components/megamenu';
import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <MegaMenu />
      {children}
      <Footer />
    </div>
  );
}
