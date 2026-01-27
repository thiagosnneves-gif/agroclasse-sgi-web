export default function UnderConstruction() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "#e5e7eb",
      fontFamily: "Inter, system-ui"
    }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>
          SGI Agroclasse
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9 }}>
          Estamos construindo um novo sistema de gestão,
          mais simples, moderno e eficiente.
        </p>

        <p style={{ marginTop: 20, fontSize: 14, opacity: 0.7 }}>
          Em breve disponível para os usuários.
        </p>
      </div>
    </div>
  );
}