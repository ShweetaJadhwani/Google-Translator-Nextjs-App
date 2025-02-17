export default function TextArea({ 
    value, 
    onChange, 
    readOnly, 
    placeholder 
  }: { 
    value: string; 
    onChange?: (value: string) => void; 
    readOnly?: boolean; 
    placeholder: string;
  }) {
    return (
      <textarea
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        readOnly={readOnly}
        placeholder={placeholder}
        style={styles.textarea}
      />
    );
  }
  
  const styles: { [key: string]: React.CSSProperties } = {
    textarea: {
      width: "100%",
      height: "100px",
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ddd",
      resize: "none",
    },
  };
  