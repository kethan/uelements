## UElements

uelements provides a functional way of defining custom elements.

```html
<my-counter count="10"></my-counter>
```

```jsx
import { define, useState } from "uelements";

function Counter({ count = 0 }) {
	const [value, setValue] = useState(count);

	return (
		<>
			<div>Counter: {value}</div>
			<button onClick={() => setValue(value + 1)}>Increment</button>
			<button onClick={() => setValue(value - 1)}>Decrement</button>
		</>
	);
}

define(
	"my-counter",
	(el) => <Counter count={parseInt(el.getAttribute("count") || "0")} />,
	["count"],
	() => console.log("counter cleanup")
);
```

Courtesy: Preact and uwhen
