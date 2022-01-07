const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', generateActivity);
const text = document.getElementById('activity-text');
const heading = document.getElementById('bot-heading');
let activeClass = "";


function generateActivity(){
    text.textContent = "Finding you something to do..."
    fetch("https://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            const type = data.type;

            let classes = document.getElementById('container').classList;

            if(classes.length === 0){
                document.getElementById('container').classList.add(type)
            }
            else{
                document.getElementById('container').classList.replace(activeClass,type)
            }
            
            switch(type){
                case "education": 
                    heading.textContent = "👩‍🎓Education Bot👩‍🎓";
                    break;

                case "recreational":
                    heading.textContent = "⚡ GET IT DONE Bot⚡";
                    break;

                case "social":
                    heading.textContent = "🦜Social Bot🗣";
                    break;
                        
                case "diy":
                    heading.textContent = "🔨Fix It Bot🔧";
                    break;

                case "charity":
                    heading.textContent = "❤Kind Bot❤";
                    break;

                case "cooking": 
                    heading.textContent = "🍳Ramsay Bot🥓";
                    break;

                case "relaxation":
                    heading.textContent = "☮ Zen Bot ✌";
                    break;

                case "music":
                    heading.textContent = "🎵Drop a beat Bot🪕";
                    break;
                        
                case "busywork":
                    heading.textContent = "🐝Busy Bee Bot🐝";
                    break;
                
                default:
                    break;

            }
            activeClass = type;
            text.textContent = data.activity;
        })
}