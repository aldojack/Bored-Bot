const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', generateActivity);
const text = document.getElementById('activity-text');

function generateActivity(){
    text.textContent = "Finding you something to do..."
    fetch("https://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            const type = data.type;
            let classes = document.getElementById('container').classList;
            if(classes.length>=1){
                document.getElementById('container').classList.remove(classes[0])
            }
            document.getElementById('container').classList.add(type)
            text.textContent = data.activity;
            console.log(data)
        })
}