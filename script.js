function handleLike(like) {
    like.classList.toggle("active-like");
}

console.log("Welcome to notes app. This is app.js");
showTweet();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let tweet = localStorage.getItem("tweet");
    if (tweet == null) {
        tweetObj = [];
    } else {
        notesObj = JSON.parse(tweet);
    }
    tweetObj.push(addTxt.value);
    localStorage.setItem("tweet", JSON.stringify(tweetObj));
    addTxt.value = "";
    //   console.log(tweetObj);
    showTweet();
});

// Function to show elements from localStorage
function showTweet() {
    let tweet = localStorage.getItem("tweet");
    if (tweet == null) {
        tweetObj = [];
    } else {
        tweetObj = JSON.parse(tweet);
    }
    let html = "";
    tweetObj.forEach(function (element, index) {
        html += `
                <div class="post">
                    <div class="post__avatar">
                    <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
                    </div>

                    <div class="post__body">
                    <div class="post__header">
                        <div class="post__headerText">
                        <h3>Mohammed Safadi
                            <span class="post__headerSpecial">
                            <span class="material-icons post__badge"> verified </span>@mhmad_safadi
                            </span>
                        </h3>
                        </div>
                        <div class="post__headerDescription">
                        <p>${element}</p>
                        </div>
                    </div>
                    <div class="post__footer">
                        <span onclick="handleLike(this)" class="material-icons like"> favorite </span>
                        <span class="material-icons share"> share </span>
                        <span id="${index}"onclick="deleteNote(this.id)" class="material-icons delete">delete</span>
                    </div>
                    </div>
                </div>
                `;
    });
    let tweetElm = document.getElementById("tweet");
    if (tweetObj.length != 0) {
        tweetElm.innerHTML = html;
    } else {
        tweetElm.innerHTML = `"Add a Tweet" Above to show`;
    }
}

// Function to delete a note
function deleteNote(index) {
    //   console.log("I am deleting", index);

    let tweet = localStorage.getItem("tweet");
    if (tweet == null) {
        tweetObj = [];
    } else {
        tweetObj = JSON.parse(tweet);
    }

    tweetObj.splice(index, 1);
    localStorage.setItem("tweet", JSON.stringify(tweetObj));
    showTweet();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
