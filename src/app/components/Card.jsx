export default function Card(props) {
  const main = props.main;
  const secondary = props.secondary;
  return (
    <div className="card bg-slate-800 text-white flex flex-col h-96 w-64 justify-center items-center text-center rounded-lg">
      <h1>{main}</h1>
      <p>{secondary}</p>
    </div>
  );
}
