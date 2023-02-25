import Footer from "./navigation/Footer";

export default function Layout({ children, global, pageContext }) {
  const { navigation, footer } = global.attributes;
  return (
    <>
    <Header navigation={navigation} />
    <div className="layout">
      <main className="content">{children}</main>
      <Footer footer={footer} />
    </div>
    </>
  );
}
