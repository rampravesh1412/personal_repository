function Pokemon({ name, images, types }) {
  return (
    <>
      <div>{name}</div>
      <div>
        <img src={images} alt="" />
      </div>
      <div>{types}</div>
    </>
  );
}

export default Pokemon;
