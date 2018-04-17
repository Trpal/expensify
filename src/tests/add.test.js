const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;


test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('should be Hello mike', () => {
	const greeting = generateGreeting('mike');
	expect(greeting).toBe('Hello mike!');
})