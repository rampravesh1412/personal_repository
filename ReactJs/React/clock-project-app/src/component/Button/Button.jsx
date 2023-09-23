import India from "../India/India";
function Button() {
  return (
    <>
      <button onClick={India}>India</button>
      <button>NewYork</button>
      <button>London</button>
      <button>Tokyo</button>

      <India />
    </>
  );
}

export default Button;
