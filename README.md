##Code refractoring task

###Introduction
I have taken on the task of updating the code in the app.js file, aiming to improve its overall quality. Here is a breakdown of the improvements I made:

###What was implemented:
- Switched to const and let: I replaced all instances of var with const and let for variable declarations.

- Simplified Event Name Creation: I combined two sports: handball and tennis and used a simple condition to determine the appropriate delimiter.

- Adopted Template Strings: I started using ES6 template strings to incorporate variables and expressions directly into strings. 

- Removed Regular Expressions for Score Splitting: I eliminated the use of regular expressions for splitting match scores. Instead, I used split to create an array of substrings.

- Introduced switch Statements: To replace the previously proposed if statements, I used switch statements. 

- Utilized ES2019 Array.prototype.flat(): I applied the .flat() method to concatenate nested array in basketball match score case.

- Used .map() for Array Transformation: In the final step, I used .map() to transform the array of matches into an array of parsed matches (matchesParsed). Then, I filtered out only those entries with valid names and scores.
