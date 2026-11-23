export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-card">
        <div className="about-symbol">✦</div>
        <h1>About Sweet Bites</h1>
        <p>
          Welcome to Sweet Bites, a little virtual cafe created for everyone who loves desserts,
          baking, and creativity. Discover delicious recipes, explore new flavors, and enjoy every sweet moment.
        </p>
        <div className="about-divider" />
        <p>
          Our goal is to make baking simple, fun, and inspiring. We believe that every recipe is
          an opportunity to create something beautiful and share happiness.
        </p>
        <div className="about-features">
          <article className="about-feature"><span>♡</span><h3>Made with Love</h3><p>Every dessert begins with a little love and care.</p></article>
          <article className="about-feature"><span>🍰</span><h3>Sweet Recipes</h3><p>Discover different desserts and explore new flavors.</p></article>
          <article className="about-feature"><span>☕</span><h3>Cozy Moments</h3><p>Your little corner of sweetness and inspiration.</p></article>
        </div>
        <div className="about-footer">SWEET BITES · BAKED WITH LOVE</div>
      </section>
    </main>
  );
}
