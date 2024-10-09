// Implement the following on above data: Store it in an array named dataset.

// 1. Write a function to return only emails in the form of array without modifying the existing array.

// 2. If the email is abc@xyz.com, then the output should be Abc. Return all the emails in the specified format without modifying the existing array.

// 3. Suppose the given object is { firstName: 'Charlie', lastName: 'smith', email: 'charlie@yopmail.com' } the output should be as follows:

// Hi I am Charlie Smith. You can reach out to me on charlie@yopmail.com.
// First letter of firstName and lastName should be capitalised.
// Write a function which takes dataset as an argument, and returns the output array in the above format.

// 4. Sort the given array in ascending order of emails.

// 5. Add a new key-value pair named age with random values between 10 to 35 to the existing array using the preferred.

const dataset = [
  {
    first_name: "Starla",
    last_name: "Kilfeather",
    email: "skilfeather0@slideshare.net",
  },
  {
    first_name: "Mariam",
    last_name: "Schusterl",
    email: "mschusterl1@dailymotion.com",
  },
  { first_name: "Delly", last_name: "Sturman", email: "dsturman2@webmd.com" },
  {
    first_name: "Bee",
    last_name: "Ledner",
    email: "bledner3@sciencedirect.com",
  },
  {
    first_name: "Ethe",
    last_name: "Dalgarnowch",
    email: "edalgarnowch4@clickbank.net",
  },
  {
    first_name: "Gilles",
    last_name: "O'Loughane",
    email: "goloughane5@wiley.com",
  },
  {
    first_name: "Yvonne",
    last_name: "Tallman",
    email: "ytallman6@paypal.com",
  },
  {
    first_name: "Josh",
    last_name: "Cattle",
    email: "jcattle7@guardian.co.uk",
  },
  {
    first_name: "Frasquito",
    last_name: "Jagielski",
    email: "fjagielski8@columbia.edu",
  },
  {
    first_name: "Guglielma",
    last_name: "Reynalds",
    email: "greynalds9@mediafire.com",
  },
  { first_name: "Goldia", last_name: "Lambdin", email: "glambdina@ning.com" },
  { first_name: "Celie", last_name: "Tace", email: "ctaceb@examiner.com" },
  { first_name: "Robbi", last_name: "Chiplen", email: "rchiplenc@noaa.gov" },
  {
    first_name: "Henrietta",
    last_name: "Beinisch",
    email: "hbeinischd@sitemeter.com",
  },
  { first_name: "Lion", last_name: "Gierke", email: "lgierkee@zimbio.com" },
  { first_name: "Kittie", last_name: "Ikins", email: "kikinsf@icq.com" },
  {
    first_name: "Aylmar",
    last_name: "Delion",
    email: "adeliong@biglobe.ne.jp",
  },
  {
    first_name: "Jan",
    last_name: "Attenborrow",
    email: "jattenborrowh@cnn.com",
  },
  { first_name: "Carmella", last_name: "Zorro", email: "czorroi@hexun.com" },
  {
    first_name: "Caria",
    last_name: "Hubbuck",
    email: "chubbuckj@skyrock.com",
  },
  {
    first_name: "Jacqueline",
    last_name: "Pummell",
    email: "jpummellk@cdc.gov",
  },
  { first_name: "Domingo", last_name: "Gair", email: "dgairl@nps.gov" },
  {
    first_name: "Hali",
    last_name: "Antley",
    email: "hantleym@businessweek.com",
  },
  {
    first_name: "Doreen",
    last_name: "Teligin",
    email: "dteliginn@guardian.co.uk",
  },
  {
    first_name: "Robbie",
    last_name: "Mathison",
    email: "rmathisono@omniture.com",
  },
  { first_name: "Gerald", last_name: "Pettwood", email: "gpettwoodp@t.co" },
  { first_name: "Roxana", last_name: "Antao", email: "rantaoq@cmu.edu" },
  {
    first_name: "Hildagard",
    last_name: "Dmych",
    email: "hdmychr@forbes.com",
  },
  { first_name: "Maurits", last_name: "Greg", email: "mgregs@gizmodo.com" },
  {
    first_name: "Christyna",
    last_name: "Laherty",
    email: "clahertyt@google.es",
  },
];

// 1. return only email
function returnOnlyEmail() {
  return dataset.map((item) => item.email);
}

console.log(returnOnlyEmail());

// 2. format email(capitalise first letter)
function formatEmailByCapitalizeFirstLetter() {
  return dataset.map(
    (item) => item.email.charAt(0).toUpperCase() + item.email.slice(1)
  );
}

console.log(formatEmailByCapitalizeFirstLetter());

// 3. introduce peapole

function introducePeapole() {
  return dataset.map(
    (item) =>
      `Hi I am ${item.first_name} ${item.last_name}. You can reach out to me on ${item.email}.`
  );
}

console.log(introducePeapole());

// 4. Sort the emails in ascending order without modifiying the original array
function sortEmailInAscendingOrder() {
  return dataset.map((item) => item.email).sort();
}

console.log(sortEmailInAscendingOrder());

// 5. Add new key-value pair named age with random values between 10 to 35
function addNewKeyAge() {
  return dataset.map((item) => ({
    ...item,
    age: Math.floor(Math.random() * 25) + 10,
  }));
}

console.log(addNewKeyAge());
