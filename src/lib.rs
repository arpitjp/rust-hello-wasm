use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn fib(num: i32) -> i32 {
    match num {
        num if num < 0 => panic!("Expected non negative number"),
        0 => 0,
        1 => 1,
        _ => fib(num-1)+fib(num-2)
    }
}