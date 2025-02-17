export default function TranslateButton({ onClick }: { onClick: () => void }) {
    return (
      <button onClick={onClick} style={styles.button}>
        Translate
      </button>
    );
  }
  
  const styles = {
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1.2rem",
      color: "white",
      backgroundColor: "#0A66C2",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };
  