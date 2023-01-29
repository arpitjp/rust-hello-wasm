import { greet, fib } from "rust-hello-wasm";

document.getElementById("btn")?.addEventListener("click", () => greet("The Office"));

const num = 41;

console.time("fib-wasm");
console.log("fib-wasm", fib(num));
console.timeEnd("fib-wasm");

const jfib = (n) => (n <= 1 ? n : jfib(n - 1) + jfib(n - 2));
console.time("jfib");
console.log("jfib", jfib(num));
console.timeEnd("jfib");