// link of question: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
// Level: meduim
// This code defines a function called `jsonStringify` which takes an object as its parameter and returns 
// a string representation of that object in JSON format.
var jsonStringify = function(object) {

    // If the type of the object is either a number, boolean or undefined, return it directly since they can be safely converted to JSON format.
    if (typeof object === 'number' || typeof object === 'boolean' || 
        object === undefined) 
        return object;

    // If the object is null, return the string "null", since `null` is also a valid JSON value.
    if(object === null) 
        return "null"

    // If the object is a string, enclose it in double quotes and return it.
    if (typeof object === 'string') 
        return `"${object}"`;

    // If the object is an array, use the `map` method to recursively call itself on each element of the array and concatenate the results.
    // The resulting string is then enclosed in square brackets to denote that it's an array.
    if (Array.isArray(object))
        return `[${object.map(jsonStringify).join(',')}]`;

    // If none of the above conditions are satisfied, assume that the object is a non-empty plain JavaScript object and proceed to 
    // convert it into a string in JSON format. Convert the object's keys into an array using the `Object.keys` method and iterate over them.
    // For each key, create a string with the key and its corresponding value (which is recursively passed back into the `jsonStringify` function).
    // Finally, concatenate all these strings together and enclose them in curly braces to indicate a JSON object.
    return '{' + Object.keys(object).map(key => `"${key}":${jsonStringify(object[key])}`).join(',') + '}';
};
