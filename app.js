import express from 'express';

const app = express();

app.use(express.static('public'))

const arr = [
  "Wake up early and make a cup of coffee",
  "Complete work tasks for the day",
  "Exercise or go for a walk",
  "Read a chapter from a book or article",
  "Cook a healthy meal for lunch",
  "Attend a meeting or call with team",
  "Spend time learning something new (e.g., programming, language, etc.)",
  "Relax and unwind after work (e.g., listen to music, meditate)",
  "Prepare for tomorrow and organize your workspace"
];


app.get('/', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
  <script src="htmx.js"></script>
 
  <title>HTMX</title>
</head>
<body>
  <div class="min-h-screen bg-gradient-to-r from-fuchsia-600 to-rose-600 text-white flex items-center justify-center">
    <main class="min-h-[500px] bg-gray-800 max-w-[90%] w-[900px] rounded-lg shadow-lg p-4 flex flex-col items-center gap-8">
        <p class="text-3xl">Basics of HTMX</p>
        <button hx-get="/items" hx-swap="afterend" class="hover:bg-green-800 bg-green-700 cursor-pointer px-5 py-3 rounded-md">Click here to Show the Items</button>
        
    </main>
  </div>
</body>
</html>
    `
  )
})

app.get('/items', (req, res) => {
  
  const listItems = arr.map((item) => {
    console.log(`Current item is: ${item}`);
    return `<li>${item}</li>`
    
  })
  console.log("Final list:", listItems);


  const listItems2 = arr.map((item, i) => {
    console.log(`Current item is: ${item}`);
    return `<li>${i + 1}.) ${item}</li>`
    
  }).join(" ")
  console.log("Final list:", listItems2);
  

  res.send(
    `
    <ul>
    
      
        ${listItems2}
    
    </ul>
    `
  )
})



app.listen(3000);