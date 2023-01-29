import { greet } from "rust-hello-wasm";

document.getElementById("btn")?.addEventListener("click", () => greet("The Office"));
