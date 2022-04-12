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

define("my-counter", {count : 0} (el) => (
	<Counter count={el.count}} />
));

```

Courtesy: Preact and swiss
