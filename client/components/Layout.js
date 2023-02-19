export default function Layout({ children, global, pageContext }) {
  const { navigation, footer } = global.attributes;
  return (
    <div className="layout">
      <Header navigation={navigation} />
      <main className="content">{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
