export default function LanguageSelector({ selected, onChange }: { selected: string; onChange: (value: string) => void }) {
    const languages = { en: "English", es: "Spanish", fr: "French", de: "German" };
  
    return (
      <select value={selected} onChange={(e) => onChange(e.target.value)} style={styles.select}>
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    );
  }
  
  const styles = {
    select: {
      width: "100%",
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "1px solid #ddd",
    },
  };
  