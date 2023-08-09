import './tailwind.css';

function Styles() {
  return (
    <main id="main" className="test">
      <h1 className="text-4xl bg-red-500 underline">prototurk.com</h1>
      <button className="text-xl font-semibold flex px-4 rounded mt-6 hover:bg-orange-700 text-center bg-black text-white">
        test
      </button>
      <input type="text" />

      <ul>
        {toHaveDescription.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </main>
  );
}
export default Styles;
