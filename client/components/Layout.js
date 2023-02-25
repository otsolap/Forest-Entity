import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

export default function Layout({ children, global }) {
  const { navigation, footer } = global.attributes;
  return (
    <>
    <div className="layout">
    <Header navigation={navigation} />
      <main className="content">{children}</main>
      <Footer footer={footer} />
    </div>
    </>
  );
}
