const scoreDiv = document.querySelector("#scores");
const scoreCategory = document.querySelector(".score-category");
const averageScore = document.querySelector(".average-score");


const categories = [
   {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
      },
      {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
      },
      {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
      },
      {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
      }
] 

function addData(){
   let average = 0;

   for(let i = 0; i < categories.length; i++){
      let scoresDiv = document.createElement("div")
      scoresDiv.classList.add("scores")


      let img = document.createElement("img")
      img.src = categories[i]['icon'];
      img.classList.add("icon")
      
      let categoryType = document.createElement("p");
      categoryType.textContent = categories[i]['category'];
      categoryType.classList.add("category");

      let score = document.createElement("p");
      score.textContent = categories[i]['score'] + ` / 100`;
      score.classList.add("number")

      switch(categories[i]['category']){
         case 'Reaction':
            categoryType.style.color = "#E86C6C"
            scoresDiv.style.backgroundColor = "#FFF6F5";
         break;
         case 'Memory':
            categoryType.style.color = "#F3B63B"
            scoresDiv.style.backgroundColor = "#FFFBF2";
         break
         case 'Verbal':
            categoryType.style.color = "#5AC8AD"
            scoresDiv.style.backgroundColor = "#F2FBFA";
         break;
         case 'Visual':
            categoryType.style.color = "#4A55DC"
            scoresDiv.style.backgroundColor = "#F3F3FD";
         break;
      }



      scoresDiv.appendChild(img);
      scoresDiv.appendChild(categoryType);
      scoresDiv.appendChild(score);
      
      scoreCategory.appendChild(scoresDiv);

      average += Math.floor(categories[i]['score'] / 4);
      averageScore.textContent = average

   }
   console.log(averageScore)
}
addData()