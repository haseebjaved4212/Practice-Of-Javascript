# Collection: Small JavaScript Utility Projects

This repo is a set of small JS demos (each project in its own folder). Open the folder in your browser (open the folder's `index.html`) to run each example.

Below is a short description, usage, and the main symbols/files for each project. All files in the workspace are linked so you can open them directly.

---

## Projects index (all workspace files)
- [Add  two Numbers/index.html](Add  two Numbers/index.html)  
- [Add  two Numbers/index.js](Add  two Numbers/index.js)  
- [Checking Number/index.html](Checking Number/index.html)  
- [Checking Number/index.js](Checking Number/index.js)  
- [Checking Prime Number/index.html](Checking Prime Number/index.html)  
- [Checking Prime Number/index.js](Checking Prime Number/index.js)  
- [Convert Calcius To Fehrenhiet/index.html](Convert Calcius To Fehrenhiet/index.html)  
- [Convert Calcius To Fehrenhiet/index.js](Convert Calcius To Fehrenhiet/index.js)  
- [Convert KM to Miles/index.html](Convert KM to Miles/index.html)  
- [Convert KM to Miles/index.js](Convert KM to Miles/index.js)  
- [Find Area of A Triangle/index.html](Find Area of A Triangle/index.html)  
- [Find Area of A Triangle/index.js](Find Area of A Triangle/index.js)  
- [Find Area of A Triangle/index.tldr](Find Area of A Triangle/index.tldr)  
- [Find Square  Root/index.html](Find Square  Root/index.html)  
- [Find Square  Root/index.js](Find Square  Root/index.js)  
- [Generating random Number/index.html](Generating random Number/index.html)  
- [Generating random Number/index.js](Generating random Number/index.js)  
- [Program to check  Even Or Odd Number/index.html](Program to check  Even Or Odd Number/index.html)  
- [Program to check  Even Or Odd Number/index.js](Program to check  Even Or Odd Number/index.js)  
- [Swaping Two Numbers/index.html](Swaping Two Numbers/index.html)  
- [Swaping Two Numbers/index.js](Swaping Two Numbers/index.js)

---

## 1) Add two Numbers
- Purpose: show adding static and prompt-driven input.
- Run: open [Add  two Numbers/index.html](Add  two Numbers/index.html) in a browser.
- Key symbols (see code): [`num1`](Add  two Numbers/index.js), [`num2`](Add  two Numbers/index.js), [`total`](Add  two Numbers/index.js), [`a`](Add  two Numbers/index.js), [`b`](Add  two Numbers/index.js), [`c`](Add  two Numbers/index.js).

---

## 2) Checking Number (positive/negative/zero)
- Purpose: determine sign of a value entered in an input field.
- Run: open [Checking Number/index.html](Checking Number/index.html).
- Main function: [`check()`](Checking Number/index.js) — updates `#result` with the outcome. See [`result`](Checking Number/index.js).

---

## 3) Checking Prime Number
- Purpose: basic prime check using trial division.
- Run: open [Checking Prime Number/index.html](Checking Prime Number/index.html).
- Notable: prompts the user for `x` and sets `res`. See [`x`](Checking Prime Number/index.js) and [`res`](Checking Prime Number/index.js).

---

## 4) Convert Calcius To Fehrenhiet
- Purpose: convert Celsius input to Fahrenheit.
- Run: open [Convert Calcius To Fehrenhiet/index.html](Convert Calcius To Fehrenhiet/index.html).
- Main function: [`convert()`](Convert Calcius To Fehrenhiet/index.js) — reads `celcius` and writes `fahrenheit` to `#res`. See [`celcius`](Convert Calcius To Fehrenhiet/index.js) and [`fahrenheit`](Convert Calcius To Fehrenhiet/index.js).

---

## 5) Convert KM to Miles
- Purpose: convert kilometers to miles using factor 0.621371.
- Run: open [Convert KM to Miles/index.html](Convert KM to Miles/index.html).
- Main function: [`convert()`](Convert KM to Miles/index.js) — reads `#km` and writes result to `#result`.

---

## 6) Find Area of A Triangle
- Purpose: two demonstrations:
  - Area of right triangle using base and height entered via `prompt`.
  - Using Heron's formula for a triangle given sides `a`, `b`, `c`.
- Run: open [Find Area of A Triangle/index.html](Find Area of A Triangle/index.html).
- Formulas:
  - Right-triangle area: inline $ \text{area} = \dfrac{\text{base} \times \text{height}}{2} $
  - Heron's formula:
    $$
    s = \frac{a+b+c}{2},\qquad
    \text{area} = \sqrt{s(s-a)(s-b)(s-c)}
    $$
- Files & symbols: see [Find Area of A Triangle/index.js](Find Area of A Triangle/index.js) for [`base`](Find Area of A Triangle/index.js), [`height`](Find Area of A Triangle/index.js), [`area1`](Find Area of A Triangle/index.js), and the Heron variables [`a`](Find Area of A Triangle/index.js), [`b`](Find Area of A Triangle/index.js), [`c`](Find Area of A Triangle/index.js), [`s`](Find Area of A Triangle/index.js), [`temp`](Find Area of A Triangle/index.js), [`area2`](Find Area of A Triangle/index.js). Diagram file: [Find Area of A Triangle/index.tldr](Find Area of A Triangle/index.tldr).

---

## 7) Find Square Root
- Purpose: compute square root via `Math.sqrt`.
- Run: open [Find Square  Root/index.html](Find Square  Root/index.html).
- Key symbols: [`a`](Find Square  Root/index.js), [`b`](Find Square  Root/index.js) (where `b = Math.sqrt(a)`).

---

## 8) Generating random Number
- Purpose: demonstrate `Math.random()` and scaling to ranges / integers.
- Run: open [Generating random Number/index.html](Generating random Number/index.html).
- Key symbols: [`x`](Generating random Number/index.js), usage of `Math.random()` (see file) and `Math.floor()` for integer generation.

---

## 9) Program to check Even Or Odd Number
- Purpose: prompt-based and ternary-based check for parity.
- Run: open [Program to check  Even Or Odd Number/index.html](Program to check  Even Or Odd Number/index.html).
- Key symbols: [`x`](Program to check  Even Or Odd Number/index.js), [`y`](Program to check  Even Or Odd Number/index.js), [`result`](Program to check  Even Or Odd Number/index.js).

---

## 10) Swaping Two Numbers
- Purpose: show two techniques to swap values (temporary variable and arithmetic).
- Run: open [Swaping Two Numbers/index.html](Swaping Two Numbers/index.html).
- Key symbols: [`a`](Swaping Two Numbers/index.js), [`b`](Swaping Two Numbers/index.js), [`temp`](Swaping Two Numbers/index.js), also prompt-based [`x`](Swaping Two Numbers/index.js) and [`y`](Swaping Two Numbers/index.js).

---

## Quick usage notes
- Most demos either:
  - Use `prompt()` (run from a browser window; the page may be blank but the script runs), or
  - Use an input element and button in the HTML (e.g., KM→Miles and Celsius→Fahrenheit).
- To run: open the folder's `index.html` via file:// or a simple local server (e.g., `npx http-server .` or `python -m http.server`) and then interact using the browser.

---

## Suggested improvements (small ideas)
- Validate numeric input (use `Number()` and check `isNaN`).
- Replace `prompt()` demos with an HTML form to make them friendlier.
- Make functions return values (so they can be reused/tested) rather than only logging or writing to DOM.
- Add comments and consistent naming/spacing.

---

