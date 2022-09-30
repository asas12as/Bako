var timerFunction;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

var imagePuzzle = {
    stepCount: 0,
    startTime: new Date().getTime(),
    startGame: function (puzzles, gridSize) {
        if (gridSize == 3) {
            document.getElementById('dif').innerHTML = "You will get 15 Points if you solved the puzzel in 10s, 10 Points in 15s, 5 Points in 20s"
        }
        if (gridSize == 4) {
            document.getElementById('dif').innerHTML = "You will get 15 Points if you solved the puzzel in 20s, 10 Points in 40s, 5 Points in 60s"
        }
        if (gridSize == 5) {
            document.getElementById('dif').innerHTML = "You will get 15 Points if you solved the puzzel in 30s, 10 Points in 60s, 5 Points in 90s"
        }
        this.setImage(puzzles, gridSize);
        helper.doc('playPanel').style.display = 'block';
        helper.shuffle('sortable');
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
    tick: function () {
        var now = new Date().getTime();
        var elapsedTime = parseInt((now - imagePuzzle.startTime) / 1000, 10);
        helper.doc('timerPanel').textContent = elapsedTime;
        timerFunction = setTimeout(imagePuzzle.tick, 1000);
    },
    setImage: function (puzzles, gridSize = 4) {
        var percentage = 100 / (gridSize - 1);
        var image = puzzles[Math.floor(Math.random() * puzzles.length)];
        helper.doc('imgTitle').innerHTML = image.title;
        helper.doc('actualImage').setAttribute('src', image.src);
        helper.doc('sortable').innerHTML = '';
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';

            let li = document.createElement('li');
            li.id = i;
            li.setAttribute('data-value', i);
            li.style.backgroundImage = 'url(' + image.src + ')';
            li.style.backgroundSize = (gridSize * 100) + '%';
            li.style.backgroundPosition = xpos + ' ' + ypos;
            li.style.width = 600 / gridSize + 'px';
            li.style.height = 600 / gridSize + 'px';

            li.setAttribute('draggable', 'true');
            li.ondragstart = (event) => event.dataTransfer.setData('data', event.target.id);
            li.ondragover = (event) => event.preventDefault();
            li.ondrop = async (event) => {
                let origin = helper.doc(event.dataTransfer.getData('data'));
                let dest = helper.doc(event.target.id);
                let p = dest.parentNode;

                if (origin && dest && p) {
                    let temp = dest.nextSibling;
                    p.insertBefore(dest, origin);
                    p.insertBefore(origin, temp);

                    let vals = Array.from(helper.doc('sortable').children).map(x => x.id);
                    var now = new Date().getTime();
                    helper.doc('stepCount').textContent = ++imagePuzzle.stepCount;
                    document.querySelector('.timeCount').textContent = (parseInt((now - imagePuzzle.startTime) / 1000, 10));

                    if (isSorted(vals)) {
                        await delay(500);
                        // helper.doc('actualImageBox').style.display = 'none';
                        // helper.doc('gameOver').style.display = 'block';
                        helper.doc('actualImageBox').innerHTML = helper.doc('gameOver').innerHTML;
                        helper.doc('stepCount').textContent = imagePuzzle.stepCount;
                        document.getElementById("Con").classList.remove("d-none")
                        document.getElementById("Con").classList.add("d-flex")
                        document.getElementById("Sol").classList.remove("d-block")
                        document.getElementById("Sol").classList.add("d-none")
                        let time = parseInt((now - imagePuzzle.startTime) / 1000, 10)
                        let point
                        if (gridSize == 3) {
                            if (time >= 0 && time <= 10) {
                                helper.doc('points').textContent = "15"
                                point = 15
                            }
                            if (time >= 11 && time <= 15) {
                                helper.doc('points').textContent = "10"
                                point = 10
                            }
                            if (time >= 16) {
                                helper.doc('points').textContent = "5"
                                point = 5
                            }
                        }
                        if (gridSize == 4) {
                            if (time >= 0 && time <= 20) {
                                helper.doc('points').textContent = "15"
                                point = 15
                            }
                            if (time >= 21 && time <= 40) {
                                helper.doc('points').textContent = "10"
                                point = 10
                            }
                            if (time >= 41) {
                                helper.doc('points').textContent = "5"
                                point = 5
                            }
                        }
                        if (gridSize == 5) {
                            if (time >= 0 && time <= 30) {
                                helper.doc('points').textContent = "15"
                                point = 15
                            }
                            if (time >= 31 && time <= 60) {
                                helper.doc('points').textContent = "10"
                                point = 10
                            }
                            if (time >= 61) {
                                helper.doc('points').textContent = "5"
                                point = 5
                            }
                        }
                        let m = await axios.post("http://localhost:3000/AddPoints", {
                            username: localStorage.getItem("loginAs"),
                            points: point
                        })
                    }
                }
            };
            li.setAttribute('dragstart', 'true');
            helper.doc('sortable').appendChild(li);
        }
        helper.shuffle('sortable');
    }
};

isSorted = (arr) => arr.every((elem, index) => {
    return elem == index;
});

var helper = {
    doc: (id) => document.getElementById(id) || document.createElement("div"),

    shuffle: (id) => {
        var ul = document.getElementById(id);
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }
}