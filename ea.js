// Example values for demonstration
const scaleType = 'continuous';
const sort = 'descending';

// Function to check if the scale type has a continuous domain
function hasContinuousDomain(type) {
  return type === 'continuous';
}

// Conditional statement
if (hasContinuousDomain(scaleType) && sort === 'descending') {
  console.log('Both conditions are true!'); // Executed since both conditions are met
} else {
  console.log('Either one or both conditions are false!');
}
