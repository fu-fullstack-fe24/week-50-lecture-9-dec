import { useRef } from 'react';

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://kdt5fomim6.execute-api.eu-north-1.amazonaws.com/login', {
      method : 'POST',
      body : JSON.stringify({
        username : usernameRef.current.value,
        password : passwordRef.current.value
      }),
      credentials : 'include'
    });
    // const response = await fetch('https://kdt5fomim6.execute-api.eu-north-1.amazonaws.com/data');
    console.log(await response.json());
  }

  const getData = async () => {
    const response = await fetch('https://kdt5fomim6.execute-api.eu-north-1.amazonaws.com/data', {
      method: 'GET',
      credentials: 'include'
    });
    console.log(await response.json());
  }

  return (
    <section className="app">
      <form>
        <input type="text" placeholder="Username" ref={usernameRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button onClick={handleSubmit}>Login</button>
      </form>
      <button onClick={ getData }>Get Data</button>
    </section>
  )
}

export default App
