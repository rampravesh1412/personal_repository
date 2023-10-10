const First = (props) => {
  return (
    <div>
      My first ka {props.attributes}
      {props.children}{" "}
    </div>
  );
};

export default First;
