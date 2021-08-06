function Formulario() {
  return (
    <form>
      <h3>Name</h3>
      <input placeholder="Name" type="text" required></input>
      <h3>life</h3>
      <input placeholder="life" type="number" required></input>
      <h3>force</h3>
      <input placeholder="force" type="number" required></input>
      <h3>defending</h3>
      <input placeholder="defending" type="number" required></input>
      <h3>speed</h3>
      <input placeholder="speed" type="number" required></input>
      <h3>heigth</h3>
      <input placeholder="heigth" type="number" required></input>
      <h3>weight</h3>
      <input placeholder="weight" type="number" required></input>
      <h3>img_DB</h3>
      <input placeholder="img_DB" type="file" required></input>
    </form>
  );
}
export default Formulario;
