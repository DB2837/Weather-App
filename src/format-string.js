function formatString(string) {
  return (
    string.trim().charAt(0).toUpperCase() + string.trim().slice(1).toLowerCase()
  );
}

export default formatString;
