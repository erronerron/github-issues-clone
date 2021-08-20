const BadgeItem = ({ item }) => {
  const badgeStyle = {
    backgroundColor: `#${item.color}`,
  };

  return (
    <span className="mx-2 badge rounded-pill" style={badgeStyle}>
      {item.name}
    </span>
  );
};

export default BadgeItem;
