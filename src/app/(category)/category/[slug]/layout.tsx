import Footer from '@/components/footer';
import MegaMenu from '@/components/megamenu';
import Navbar from '@/components/navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <MegaMenu />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
