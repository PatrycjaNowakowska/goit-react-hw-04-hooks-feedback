function Section({ title, children }) {
  return (
    <section className="title">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;