// A .json file is a JavaScript Object Notation (JSON) file. JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and web applications, APIs, or other systems.

// Key Features of .json Files:
// Human-readable: JSON is text-based and follows a syntax similar to JavaScript objects, making it easy to understand and write.
// Lightweight: It is minimal and easy to use for transferring data over the web.
// Structured Data: It supports data structures like arrays, objects, numbers, strings, and booleans, allowing the representation of complex data.

const jsonData =
  '[{"first_name":"Aleksandr","last_name":"Gobeau","email":"agobeau0@nytimes.com","gender":"Genderfluid"},{"first_name":"Delphine","last_name":"Bolzen","email":"dbolzen1@jigsy.com","gender":"Polygender"},{"first_name":"Dieter","last_name":"Cricket","email":"dcricket2@zdnet.com","gender":"Male"},{"first_name":"Khalil","last_name":"Tebbs","email":"ktebbs3@uol.com.br","gender":"Male"},{"first_name":"Judith","last_name":"Coburn","email":"jcoburn4@sciencedirect.com","gender":"Female"}]';



  const data = JSON.parse(jsonData);

  console.log(data)

  const dataString = JSON.stringify(data);

  console.log(dataString)