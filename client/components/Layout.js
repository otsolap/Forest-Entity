import Footer from "./navigation/Footer";
import Header from "./navigation/Header";

export default function Layout({ children, global }) {
  console.log(global)
  const { navigation, footer } = global
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
