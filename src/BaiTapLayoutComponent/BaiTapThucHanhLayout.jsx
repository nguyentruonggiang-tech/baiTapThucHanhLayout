import Header from './Header';
import Banner from './Banner';
import Body from './Body';
import Footer from './Footer';

export default function BaiTapThucHanhLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Banner />
      <Body />
      <Footer />
    </div>
  );
}