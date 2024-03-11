let someSum = 2 * 200;

function returnSum(a, b) {
	return a + b;
}

const rootElement = document.getElementById('root')

let someLayout = (
	<>
		<h1 className="title">Sintax JSX</h1>
		<div className="text">salary of developer: {returnSum(200, 500)}$</div>
	</>
)
ReactDOM.createRoot(rootElement).render(someLayout);