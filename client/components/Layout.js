import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

export default function Layout({ children, global }) {
  const { navigation, footer } = global
  return (
    <>
      <Header navigation={navigation} />
        <main className="container">
          {children}
        </main>
      <Footer footer={footer} />
    </>
  );
}
