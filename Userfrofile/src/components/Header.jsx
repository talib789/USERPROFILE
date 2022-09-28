function HeaderPart(props) {
  const { name, className } = props;
  return (
    <div className={className}>
      <h1>{name}</h1>
      <button>Follow</button>
    </div>
  );
}

export default HeaderPart;
