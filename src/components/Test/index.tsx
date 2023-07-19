const handleFetchAPI = async e => {
  e.preventDefault();
  await fetch('/api/send', {
    method: 'POST',
    body: JSON.stringify({ firstName: 'Rubinaooo from Test' })
  });
};

const Test = () => {
  return (
    <form onSubmit={handleFetchAPI}>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Test;
