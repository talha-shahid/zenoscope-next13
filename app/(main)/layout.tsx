import Navbar from "@/app/(main)/components/Navbar";
import Footer from "@/app/(main)/components/Footer";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
