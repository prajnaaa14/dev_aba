function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Travis CI and Netlify Integration</h1>

      <h2>DevOps CI/CD Pipeline Demo</h2>

      <p>
        This project demonstrates Continuous Integration using Travis CI
        and deployment using Netlify.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "2px solid #ccc",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
        }}
      >
        <h3>Workflow</h3>

        <p>Code Push → Travis CI Build → Netlify Deployment</p>

        <h3>Status</h3>

        <p>Build Automation Successful ✅</p>
      </div>
    </div>
  );
}

export default App;