export default function StringWriter({ fields }: { fields: Array<string> }) {
  return (
    <>
      {fields.map((x, index) => (
        <span key={index}>
          {x}
          {index !== fields.length - 1 && ", "}
        </span>
      ))}
    </>
  );
}
