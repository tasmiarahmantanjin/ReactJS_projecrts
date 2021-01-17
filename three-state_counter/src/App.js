import React, { useState } from "react"
import "./App.css";


const App = () => {
	const [count, setCount] = useState(0)


	return (
		<div className="App">
			<header>
				<h1>Counter App using state</h1>
			</header>
			<h2>Current value of count is {count}</h2>
			<button onClick={() => setCount(0)}>Reset Button</button>
			{/* <button onClick={() => setCount(count + 1)}>Increase Button</button> */}
			<button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increase Button</button>

			<button onClick={() => count <= 0 ? "" : setCount(count - 1)}>Normal Button</button>
		</div>
	)
}

export default App;
