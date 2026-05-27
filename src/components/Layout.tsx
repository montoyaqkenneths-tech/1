import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen md:cursor-none">
      <CustomCursor />
      <Navbar />
      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
