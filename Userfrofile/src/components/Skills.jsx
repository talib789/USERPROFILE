function SkillSets(props) {
  const { src, langName, className, id } = props;
  return (
    <div key={id} className={className}>
      <img src={src} alt="icon" />
      <span>{langName}</span>
    </div>
  );
}

export default SkillSets;
