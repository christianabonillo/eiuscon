const fieldExpr = "value";
const lowerWhiskerExpr = 10;
const upperWhiskerExpr = 50;

const filterExpression = "(".concat(fieldExpr, " < ").concat(lowerWhiskerExpr, ") || (").concat(fieldExpr, " > ").concat(upperWhiskerExpr, ")");

// Usage in filtering data
const filteredData = data.filter(item => eval(filterExpression)); // Assuming 'data' is an array of objects with 'value' property

console.log(filteredData);
