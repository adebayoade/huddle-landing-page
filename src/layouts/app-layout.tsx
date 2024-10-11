import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
