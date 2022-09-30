let url = "http://localhost:3000/"
localStorage.setItem("time", 1)
if (localStorage.getItem("loginAs") != "") {
    document.getElementById('Login').classList.remove('d-block')
    document.getElementById('Login').classList.add('d-none')
    document.getElementById('Home').classList.add('d-block')
    document.getElementById('Home').classList.remove('d-none')
    async function mm() {
        let m2 = await axios.post(url + "Stages", {
            username: localStorage.getItem("loginAs")
        })
        let stages = m2.data
        console.log(stages.stage1 == "Done")
        if (stages.stage1 == "Done") {
            console
            document.getElementById("JWBtn").classList.add("disabled")
            document.getElementById("rightJW").classList.remove("d-none")
            document.getElementById("rightJW").classList.add("d-block")
        }
        if (stages.stage2 == "Done") {
            document.getElementById("TZBtn").classList.add("disabled")
            document.getElementById("rightTZ").classList.remove("d-none")
            document.getElementById("rightTZ").classList.add("d-block")
        }
        if (stages.stage3 == "Done") {
            document.getElementById("CHBtn").classList.add("disabled")
            document.getElementById("rightCH").classList.remove("d-none")
            document.getElementById("rightCH").classList.add("d-block")
        }
        if (stages.stage4 == "Done") {
            document.getElementById("HUBtn").classList.add("disabled")
            document.getElementById("rightHU").classList.remove("d-none")
            document.getElementById("rightHU").classList.add("d-block")
        }
    }
    mm()
}

async function m() {
    let m = await axios.post(url + "Stages", {
        username: "Mina"
    })
    console.log(m.data)
}
m()





function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function openInfo(tel) {
    if (tel == "JM") {
        document.getElementById("info").innerHTML = '<div class="row justify-content-between"><p class="mt-2 Arima size40 weight600 text-center text-light">james webb telescope</p><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">The Webb telescope will be thepremier observatoryof the next decade, serving thousands of astronomersworldwide. It will study every phase in the history of our Universe, ranging from the first luminousglowsafter the Big Bang, to the formation of solar systems capable of supporting life on planets like Earth,tothe evolution of our own Solar System And it takes infrared photos.</p><model-viewer class="col-5 DDD mx-auto border border-2 rounded px-0" src="../3D/gw.glb" alt="dragon"auto-rotate camera-controls></model-viewer><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">Being able to see in the infraredreveals more structure to the dust clouds and hidden stars have now become apparent. And if Hubble cantake an infrared image like this, imagine what JWST, which is 100x more powerful than Hubble, will do! <br>Hubble, as shown above, has some infrared capability, so compare these two images, one in infrared and one in visible light:</p><div class="col-6 text-center"><img class="w-75 " src="../images/comp1.jpg" alt=""></div></div><button onclick="closeInfo()" class="btn position-fixed BackBtn"><i class="fa-regular fa-circle-left fa-2xl"></i></button>'
    }
    if (tel == "tz") {
        document.getElementById("info").innerHTML = '<div class="row justify-content-between"><p class="mt-2 Arima size40 weight600 text-center text-light">Spitzer telescope</p><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">Spitzers highly sensitive instruments allowed scientists to peer into cosmic regionsthat are hidden from optical telescopes, including dusty stellar nurseries, the centersof galaxies, and newly forming planetary systems. Spitzers infrared eyes alsoallowed astronomers to see cooler objects in space, such as failed stars (browndwarfs), extrasolar planets, giant molecular clouds, and organic molecules that mayhold the secret to life on other planets.The Sombrero Galaxys Split Personality</p><model-viewer class="col-5 DDD mx-auto border border-2 rounded px-0" src="../3D/tz.glb" alt="dragon"auto-rotate camera-controls></model-viewer><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">Here, a close-up of the MIRI image is compared to a past image of the same target taken with NASA’s Spitzer Space Telescope’s Infrared Array Camera (at 8.0 microns). The retired Spitzer was the first observatory to provide high-resolution images of the near- and mid-infrared Universe</p><div class="col-6 text-center"><img class="w-75 mt-2" src="../images/comp2.jpeg" alt=""></div></div><button onclick="closeInfo()" class="btn position-fixed BackBtn"><i class="fa-regular fa-circle-left fa-2xl"></i></button>'
    }
    if (tel == "ch") {
        document.getElementById("info").innerHTML = '<div class="row justify-content-between"><p class="mt-2 Arima size40 weight600 text-center text-light">Chandrat telescope</p><p class="col-6 text-light Arima weight600 size25 my-3 px-5 alignText">NASAs Chandra X-ray Observatory is a telescope specially designed to detect X-rayemission from very hot regions of the Universe such as exploded stars, clusters of galaxies, and matter around black holes. Because X-rays are absorbed by Earthsatmosphere, Chandra must orbit above it, up to an altitude of 139,000 km (86,500mi) in space. The Smithsonians Astrophysical Observatory in Cambridge, MA, hoststhe Chandra X-ray Center which operates the satellite, processes the data, anddistributes it to scientists around the world for analysis. The Center mainJWtains anextensive public web site about the science results and an education program.</p><model-viewer class="col-5 DDD mx-auto border border-2 rounded px-0" src="../3D/ch.glb" alt="dragon"auto-rotate camera-controls></model-viewer><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">scientists released the first image of a black hole in the galaxy M87 using the Event Horizon Telescope (EHT). However, that remarkable achievement was just the beginning of the science story to be told. <br> Data from 19 observatories are being released that promise to give unparalleled insight into this black hole and the system it powers, and to improve tests of Einsteins General Theory of Relativity.</p><div class="col-6 text-center"><img class="w-75 mt-2" src="../images/comp3.jpeg" alt=""></div></div><button onclick="closeInfo()" class="btn position-fixed BackBtn"><i class="fa-regular fa-circle-left fa-2xl"></i></button>'
    }
    if (tel == "ke") {
        document.getElementById("info").innerHTML = '<div class="row justify-content-between"><p class="mt-2 Arima size40 weight600 text-center text-light">Hubble telescope</p><p class="col-6 text-light Arima weight600 size25 my-0 px-5 alignText">Images taken by Hubble have helped scientists estimate the age and size of theuniverse. Scientists believe the universe is almost 14 billion years old. Hubble hashelped scientists understand how planets and galaxies form. An image called"Hubble Ultra Deep Field" shows the farthest galaxies ever seen.What Makes Hubble Different From Telescopes on Earth?Earthâ€TMs atmosphere alters and blocks the light that comes from space. Hubbleorbits above Earthâ€TMs atmosphere, which gives it a better view of the universethan telescopes have at ground level.What Makes Hubble Different From Telescopes on Earth?Earthâ€TMs atmosphere alters and blocks the light that comes from space. Hubbleorbits above Earthâ€TMs atmosphere, which gives it a better view of the universethan telescopes have at ground level.</p><model-viewer class="col-5 DDD mx-auto border border-2 rounded px-0" src="../3D/hu.glb" alt="dragon"auto-rotate camera-controls></model-viewer><p class="col-6 text-light Arima weight600 size25 my-5 px-5 alignText">NASA has finally published the first colorized, full-resolution photos captured by the James Webb Space Telescope and the detail and resolution of the images is incredible, especially when compared to the images of these same cosmic objects captured by Hubble.</p><div class="col-6 text-center"><img class="w-75 mt-2" src="../images/comp4.jpeg" alt=""></div></div><button onclick="closeInfo()" class="btn position-fixed BackBtn"><i class="fa-regular fa-circle-left fa-2xl"></i></button>'
    }
    document.getElementById("info").classList.add("d-block")
    document.getElementById("info").classList.remove("d-none")
    document.getElementById("main").classList.add("d-none")
    document.getElementById("main").classList.remove("d-block")
}

function closeInfo() {
    document.getElementById("main").classList.add("d-block")
    document.getElementById("main").classList.remove("d-none")
    document.getElementById("info").classList.add("d-none")
    document.getElementById("info").classList.remove("d-block")
}

async function opengame(id) {


    if (id == "JW") {
        var puzzles = [{
            src: '../JWPuzzles/1.png',
            title: 'London Bridge'
        }];

        function restart() {
            var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
            imagePuzzle.startGame(puzzles, gridSize);
        }
        document.getElementById("JWContent").innerHTML = `
        <div id="Blur" class="row justify-content-center d-none">
            <div class="col-10 mb-4">
                <p class="Arima weight600 size30 text-light alignText">In this stage you should edit the
                    picture with the brightness,the blurry and the colors to arrive
                    to the best edit for the picture and you can use the hint picture . When you finish
                    your edit you have to press done to collect your points from this stage.</p>
            </div>
            <div class="col-6">
                <img id="JMBlure" class="w-100 rounded border border-2 border-light"
                    src="../images/JWBlur.jpg"
                    style="filter: brightness(2.01) blur(5.01px) grayscale(80.01%);" alt="">
            </div>
            <div class="col-3">
                <img id="JMBlure2" style="filter: brightness(1.01) blur(0.01px) grayscale(10.01%);" class="w-100 rounded mt-3" src="../images/JWBlur.jpg" alt="">
                <div class="d-flex justify-content-around mt-3">
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inbr('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Brightness</p>
                        <button onclick="debr('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Blur</p>
                        <button onclick="deblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onmousedown="degray('JMBlure')" onclick="degray('JMBlure')"
                            class="btn"><i class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Colors</p>
                        <button onclick="ingray('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-9 d-flex justify-content-center mt-5">
                <button onclick="ConStg2('JMBlure')"
                    class="btn btn-light rounded-pill Arima weight600 size25 px-5 py-3">Done</button>
            </div>
        </div>
        <div id="Con2" class="row justify-content-center d-none">
            <div
                class="col-3 rounded border border-2 border-light text-center bg-1 position-fixed Con2">
                <p class="Arima weight600 size40 text-light mt-3">Your Points:</p>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Brightness</p>
                    <p id="bri" class="m-0"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Blur</p>
                    <p id="blu" class="m-0"></p>
                </div>
                <div
                    class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 border-bottom border-light px-1">
                    <p>Colors</p>
                    <p id="Color"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Total</p>
                    <p id="Total" class="m-0">0 Points</p>
                </div>
                <button onclick="final('JW')"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Done</button>
            </div>
        </div>
        <div id="Con" class="row justify-content-center d-none">
            <p class="mt-2 mb-5 Arima size60 weight600 text-center text-light">congratulations!</p>
            <div class="col-5 rounded border border-2 border-light text-center bg-1">
                <p class="Arima weight600 size25 text-light mt-3">You Solved Puzzle Successfully!</p>
                <p class="Arima weight600 size25 text-light"> Time Taken: <span
                        class="timeCount">0</span> seconds</p>
                <p class="Arima weight600 size25 text-light"> Solved in : <span id="stepCount"
                        class="stepCount">0</span> steps.</p>
                <p class="Arima weight600 size25 text-light"> You got : <span id="points">0</span> Points.</p>
                <p class="Arima weight600 size30 text-light">In the next stage you have to edit the
                    pictures that has taken by james web telescope and make it clearer.
                </p>
                <button onclick="nextStage()"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Go to Next
                    Stage</button>
            </div>
        </div>
        <div id="Sol" class="row justify-content-center">
            <p class="mt-2 mb-2 Arima size40 weight600 text-center text-light">Solve the Puzzle</p>
            <div class="col-12 d-flex justify-content-center Arima weight600 text-light">
                <p class="mt-2 Arima size25 weight600 text-center text-light">Chosse the difficulty:
                </p>
                <p id="levelPanel" class="mt-3 ms-4">
                    <input id="easy" type="radio" class="form-check-input text-light mx-3" name="level" id="easy"
                        checked="checked" value="3"
                        onchange="var puzzles = [{src: '../JWPuzzles/1.png',title: 'London Bridge'}] 
                         imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="easy">Easy</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level"
                        id="medium" value="4" onchange="var puzzles = [{src: '../JWPuzzles/1.png',title: 'London Bridge'}] 
                         imagePuzzle.startGame(puzzles, this.value);" />
                    <label class="form-check-label text-light Arima weight600"
                        for="medium">Medium</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="hard"
                        value="5" onchange="var puzzles = [{src: '../JWPuzzles/1.png',title: 'London Bridge'}]; 
                         imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="hard">Hard</label>
                </p>
            </div>
            <p id="dif" class="mt-2 Arima size25 weight600 text-center text-light">
            </p>
            <div id="collage" class="Arima weight600 text-light">
                <div id="playPanel">
                    <div class="d-flex justify-content-center">
                        <ul id="sortable" class="sortable mx-5"></ul>
                        <div id="actualImageBox">
                            <div id="timeBox"
                                class="position-fixed timer bg-white text-dark p-2 rounded-pill">
                                Time : <span id="timerPanel"></span> s
                            </div>
                            <img id="actualImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="closegame('JW')" class="btn position-fixed BackBtn"><i
                class="fa-regular fa-circle-left fa-2xl"></i></button>`


        var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
        imagePuzzle.startGame(puzzles, gridSize);

        document.getElementById("puzzleJW").classList.add("d-block")
        document.getElementById("puzzleJW").classList.remove("d-none")
        document.getElementById("main").classList.add("d-none")
        document.getElementById("main").classList.remove("d-block")
    }


    if (id == "TZ") {
        var puzzles = [{
            src: '../TZPuzzles/1.png',
            title: 'London Bridge'
        }];

        function restart() {
            var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
            imagePuzzle.startGame(puzzles, gridSize);
        }
        document.getElementById("TZContent").innerHTML = `
        <div id="Blur" class="row justify-content-center d-none">
            <div class="col-10 mb-4">
                <p class="Arima weight600 size30 text-light alignText">In this stage you should edit the
                    picture with the brightness,the blurry and the colors to arrive
                    to the best edit for the picture and you can use the hint picture . When you finish
                    your edit you have to press done to collect your points from this stage.</p>
            </div>
            <div class="col-6">
                <img id="JMBlure" class="w-100 rounded border border-2 border-light"
                    src="../images/TZBlur.jpg"
                    style="filter: brightness(2.01) blur(5.01px) grayscale(80.01%);" alt="">
            </div>
            <div class="col-3">
                <img id="JMBlure2" style="filter: brightness(1.01) blur(0.01px) grayscale(10.01%);" class="w-100 rounded mt-3" src="../images/TZBlur.jpg" alt="">
                <div class="d-flex justify-content-around mt-3">
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inbr('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Brightness</p>
                        <button onclick="debr('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Blur</p>
                        <button onclick="deblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onmousedown="degray('JMBlure')" onclick="degray('JMBlure')"
                            class="btn"><i class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Colors</p>
                        <button onclick="ingray('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-9 d-flex justify-content-center mt-5">
                <button onclick="ConStg2('JMBlure')"
                    class="btn btn-light rounded-pill Arima weight600 size25 px-5 py-3">Done</button>
            </div>
        </div>
        <div id="Con2" class="row justify-content-center d-none">
            <div
                class="col-3 rounded border border-2 border-light text-center bg-1 position-fixed Con2">
                <p class="Arima weight600 size40 text-light mt-3">Your Points:</p>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Brightness</p>
                    <p id="bri" class="m-0"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Blur</p>
                    <p id="blu" class="m-0"></p>
                </div>
                <div
                    class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 border-bottom border-light px-1">
                    <p>Colors</p>
                    <p id="Color"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Total</p>
                    <p id="Total" class="m-0">0 Points</p>
                </div>
                <button onclick="final('TZ')"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Done</button>
            </div>
        </div>
        <div id="Con" class="row justify-content-center d-none">
            <p class="mt-2 mb-5 Arima size60 weight600 text-center text-light">congratulations!</p>
            <div class="col-5 rounded border border-2 border-light text-center bg-1">
                <p class="Arima weight600 size25 text-light mt-3">You Solved Puzzle Successfully!</p>
                <p class="Arima weight600 size25 text-light"> Time Taken: <span
                        class="timeCount">0</span> seconds</p>
                <p class="Arima weight600 size25 text-light"> Solved in : <span id="stepCount"
                        class="stepCount">0</span> steps.</p>
                <p class="Arima weight600 size25 text-light"> You got : <span id="points">0</span> Points.</p>
                <p class="Arima weight600 size30 text-light">In the next stage you have to edit the
                    pictures that has taken by james web telescope and make it clearer.
                </p>
                <button onclick="nextStage()"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Go to Next
                    Stage</button>
            </div>
        </div>
        <div id="Sol" class="row justify-content-center">
            <p class="mt-2 mb-2 Arima size40 weight600 text-center text-light">Solve the Puzzle</p>
            <div class="col-12 d-flex justify-content-center Arima weight600 text-light">
                <p class="mt-2 Arima size25 weight600 text-center text-light">Chosse the difficulty:
                </p>
                <p id="levelPanel" class="mt-3 ms-4">
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="easy"
                        checked="checked" value="3"
                        onchange="var puzzles = [{src: '../TZPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="easy">Easy</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level"
                        id="medium" value="4" onchange="var puzzles = [{src: '../TZPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" />
                    <label class="form-check-label text-light Arima weight600"
                        for="medium">Medium</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="hard"
                        value="5" onchange="var puzzles = [{src: '../TZPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="hard">Hard</label>
                </p>
            </div>
            <p id="dif" class="mt-2 Arima size25 weight600 text-center text-light">
            </p>
            <div id="collage" class="Arima weight600 text-light">
                <div id="playPanel">
                    <div class="d-flex justify-content-center">
                        <ul id="sortable" class="sortable mx-5"></ul>
                        <div id="actualImageBox">
                            <div id="timeBox"
                                class="position-fixed timer bg-white text-dark p-2 rounded-pill">
                                Time : <span id="timerPanel"></span> s
                            </div>
                            <img id="actualImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="closegame('TZ')" class="btn position-fixed BackBtn"><i
                class="fa-regular fa-circle-left fa-2xl"></i></button>`


        var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
        imagePuzzle.startGame(puzzles, gridSize);

        document.getElementById("puzzleTZ").classList.add("d-block")
        document.getElementById("puzzleTZ").classList.remove("d-none")
        document.getElementById("main").classList.add("d-none")
        document.getElementById("main").classList.remove("d-block")
    }


    if (id == "CH") {
        var puzzles = [{
            src: '../CHPuzzles/1.png',
            title: 'London Bridge'
        }];

        function restart() {
            var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
            imagePuzzle.startGame(puzzles, gridSize);
        }
        document.getElementById("CHContent").innerHTML = `
        <div id="Blur" class="row justify-content-center d-none">
            <div class="col-10 mb-4">
                <p class="Arima weight600 size30 text-light alignText">In this stage you should edit the
                    picture with the brightness,the blurry and the colors to arrive
                    to the best edit for the picture and you can use the hint picture . When you finish
                    your edit you have to press done to collect your points from this stage.</p>
            </div>
            <div class="col-6">
                <img id="JMBlure" class="w-100 rounded border border-2 border-light"
                    src="../images/CHBlur.webp"
                    style="filter: brightness(2.01) blur(5.01px) grayscale(80.01%);" alt="">
            </div>
            <div class="col-3">
                <img id="JMBlure2" style="filter: brightness(1.01) blur(0.01px) grayscale(10.01%);" class="w-100 rounded mt-3" src="../images/CHBlur.webp" alt="">
                <div class="d-flex justify-content-around mt-3">
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inbr('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Brightness</p>
                        <button onclick="debr('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Blur</p>
                        <button onclick="deblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onmousedown="degray('JMBlure')" onclick="degray('JMBlure')"
                            class="btn"><i class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Colors</p>
                        <button onclick="ingray('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-9 d-flex justify-content-center mt-5">
                <button onclick="ConStg2('JMBlure')"
                    class="btn btn-light rounded-pill Arima weight600 size25 px-5 py-3">Done</button>
            </div>
        </div>
        <div id="Con2" class="row justify-content-center d-none">
            <div
                class="col-3 rounded border border-2 border-light text-center bg-1 position-fixed Con2">
                <p class="Arima weight600 size40 text-light mt-3">Your Points:</p>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Brightness</p>
                    <p id="bri" class="m-0"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Blur</p>
                    <p id="blu" class="m-0"></p>
                </div>
                <div
                    class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 border-bottom border-light px-1">
                    <p>Colors</p>
                    <p id="Color"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Total</p>
                    <p id="Total" class="m-0">0 Points</p>
                </div>
                <button onclick="final('CH')"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Done</button>
            </div>
        </div>
        <div id="Con" class="row justify-content-center d-none">
            <p class="mt-2 mb-5 Arima size60 weight600 text-center text-light">congratulations!</p>
            <div class="col-5 rounded border border-2 border-light text-center bg-1">
                <p class="Arima weight600 size25 text-light mt-3">You Solved Puzzle Successfully!</p>
                <p class="Arima weight600 size25 text-light"> Time Taken: <span
                        class="timeCount">0</span> seconds</p>
                <p class="Arima weight600 size25 text-light"> Solved in : <span id="stepCount"
                        class="stepCount">0</span> steps.</p>
                <p class="Arima weight600 size25 text-light"> You got : <span id="points">0</span> Points.</p>
                <p class="Arima weight600 size30 text-light">In the next stage you have to edit the
                    pictures that has taken by james web telescope and make it clearer.
                </p>
                <button onclick="nextStage()"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Go to Next
                    Stage</button>
            </div>
        </div>
        <div id="Sol" class="row justify-content-center">
            <p class="mt-2 mb-2 Arima size40 weight600 text-center text-light">Solve the Puzzle</p>
            <div class="col-12 d-flex justify-content-center Arima weight600 text-light">
                <p class="mt-2 Arima size25 weight600 text-center text-light">Chosse the difficulty:
                </p>
                <p id="levelPanel" class="mt-3 ms-4">
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="easy"
                        checked="checked" value="3"
                        onchange="var puzzles = [{src: '../CHPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="easy">Easy</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level"
                        id="medium" value="4" onchange="var puzzles = [{src: '../CHPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" />
                    <label class="form-check-label text-light Arima weight600"
                        for="medium">Medium</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="hard"
                        value="5" onchange="var puzzles = [{src: '../CHPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="hard">Hard</label>
                </p>
            </div>
            <p id="dif" class="mt-2 Arima size25 weight600 text-center text-light">
            </p>
            <div id="collage" class="Arima weight600 text-light">
                <div id="playPanel">
                    <div class="d-flex justify-content-center">
                        <ul id="sortable" class="sortable mx-5"></ul>
                        <div id="actualImageBox">
                            <div id="timeBox"
                                class="position-fixed timer bg-white text-dark p-2 rounded-pill">
                                Time : <span id="timerPanel"></span> s
                            </div>
                            <img id="actualImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="closegame('CH')" class="btn position-fixed BackBtn"><i
                class="fa-regular fa-circle-left fa-2xl"></i></button>`


        var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
        imagePuzzle.startGame(puzzles, gridSize);

        document.getElementById("puzzleCH").classList.add("d-block")
        document.getElementById("puzzleCH").classList.remove("d-none")
        document.getElementById("main").classList.add("d-none")
        document.getElementById("main").classList.remove("d-block")
    }


    if (id == "HU") {
        var puzzles = [{
            src: '../HUPuzzles/1.png',
            title: 'London Bridge'
        }];

        function restart() {
            var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
            imagePuzzle.startGame(puzzles, gridSize);
        }
        document.getElementById("HUContent").innerHTML = `
        <div id="Blur" class="row justify-content-center d-none">
            <div class="col-10 mb-4">
                <p class="Arima weight600 size30 text-light alignText">In this stage you should edit the
                    picture with the brightness,the blurry and the colors to arrive
                    to the best edit for the picture and you can use the hint picture . When you finish
                    your edit you have to press done to collect your points from this stage.</p>
            </div>
            <div class="col-6">
                <img id="JMBlure" class="w-100 rounded border border-2 border-light"
                    src="../images/HUBlur.jpg"
                    style="filter: brightness(2.01) blur(5.01px) grayscale(80.01%);" alt="">
            </div>
            <div class="col-3">
                <img id="JMBlure2" style="filter: brightness(1.01) blur(0.01px) grayscale(10.01%);" class="w-100 rounded mt-3" src="../images/HUBlur.jpg" alt="">
                <div class="d-flex justify-content-around mt-3">
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inbr('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Brightness</p>
                        <button onclick="debr('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onclick="inblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Blur</p>
                        <button onclick="deblur('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                    <div class="bg-white rounded-pill d-flex justify-content-between fitContent">
                        <button onmousedown="degray('JMBlure')" onclick="degray('JMBlure')"
                            class="btn"><i class="fa-solid fa-plus"></i></button>
                        <p class="Arima weight600 my-2">Colors</p>
                        <button onclick="ingray('JMBlure')" class="btn"><i
                                class="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-9 d-flex justify-content-center mt-5">
                <button onclick="ConStg2('JMBlure')"
                    class="btn btn-light rounded-pill Arima weight600 size25 px-5 py-3">Done</button>
            </div>
        </div>
        <div id="Con2" class="row justify-content-center d-none">
            <div
                class="col-3 rounded border border-2 border-light text-center bg-1 position-fixed Con2">
                <p class="Arima weight600 size40 text-light mt-3">Your Points:</p>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Brightness</p>
                    <p id="bri" class="m-0"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Blur</p>
                    <p id="blu" class="m-0"></p>
                </div>
                <div
                    class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 border-bottom border-light px-1">
                    <p>Colors</p>
                    <p id="Color"></p>
                </div>
                <div class="d-flex justify-content-between mx-5 text-light Arima weight600 size25 px-1">
                    <p class="m-0">Total</p>
                    <p id="Total" class="m-0">0 Points</p>
                </div>
                <button onclick="final('HU')"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Done</button>
            </div>
        </div>
        <div id="Con" class="row justify-content-center d-none">
            <p class="mt-2 mb-5 Arima size60 weight600 text-center text-light">congratulations!</p>
            <div class="col-5 rounded border border-2 border-light text-center bg-1">
                <p class="Arima weight600 size25 text-light mt-3">You Solved Puzzle Successfully!</p>
                <p class="Arima weight600 size25 text-light"> Time Taken: <span
                        class="timeCount">0</span> seconds</p>
                <p class="Arima weight600 size25 text-light"> Solved in : <span id="stepCount"
                        class="stepCount">0</span> steps.</p>
                <p class="Arima weight600 size25 text-light"> You got : <span id="points">0</span> Points.</p>
                <p class="Arima weight600 size30 text-light">In the next stage you have to edit the
                    pictures that has taken by james web telescope and make it clearer.
                </p>
                <button onclick="nextStage()"
                    class="btn bg-white text-dark rounded-pill Arima weight600 size25 mb-4">Go to Next
                    Stage</button>
            </div>
        </div>
        <div id="Sol" class="row justify-content-center">
            <p class="mt-2 mb-2 Arima size40 weight600 text-center text-light">Solve the Puzzle</p>
            <div class="col-12 d-flex justify-content-center Arima weight600 text-light">
                <p class="mt-2 Arima size25 weight600 text-center text-light">Chosse the difficulty:
                </p>
                <p id="levelPanel" class="mt-3 ms-4">
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="easy"
                        checked="checked" value="3"
                        onchange="var puzzles = [{src: '../CHPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="easy">Easy</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level"
                        id="medium" value="4" onchange="var puzzles = [{src: '../HUPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" />
                    <label class="form-check-label text-light Arima weight600"
                        for="medium">Medium</label>
                    <input type="radio" class="form-check-input text-light mx-3" name="level" id="hard"
                        value="5" onchange="var puzzles = [{src: '../HUPuzzles/1.png',title: 'London Bridge'}] 
                        imagePuzzle.startGame(puzzles, this.value);" /> <label
                        class="form-check-label text-light Arima weight600" for="hard">Hard</label>
                </p>
            </div>
            <p id="dif" class="mt-2 Arima size25 weight600 text-center text-light">
            </p>
            <div id="collage" class="Arima weight600 text-light">
                <div id="playPanel">
                    <div class="d-flex justify-content-center">
                        <ul id="sortable" class="sortable mx-5"></ul>
                        <div id="actualImageBox">
                            <div id="timeBox"
                                class="position-fixed timer bg-white text-dark p-2 rounded-pill">
                                Time : <span id="timerPanel"></span> s
                            </div>
                            <img id="actualImage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button onclick="closegame('HU')" class="btn position-fixed BackBtn"><i
                class="fa-regular fa-circle-left fa-2xl"></i></button>`


        var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
        imagePuzzle.startGame(puzzles, gridSize);

        document.getElementById("puzzleHU").classList.add("d-block")
        document.getElementById("puzzleHU").classList.remove("d-none")
        document.getElementById("main").classList.add("d-none")
        document.getElementById("main").classList.remove("d-block")
    }
}

function closegame(id) {
    if (id == "JW") {
        document.getElementById("puzzleJW").classList.add("d-none")
        document.getElementById("puzzleJW").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("JWContent").innerHTML = ``
    }
    if (id == "TZ") {
        document.getElementById("puzzleTZ").classList.add("d-none")
        document.getElementById("puzzleTZ").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("TZContent").innerHTML = ``
    }
    if (id == "CH") {
        document.getElementById("puzzleCH").classList.add("d-none")
        document.getElementById("puzzleCH").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("CHContent").innerHTML = ``
    }
    if (id == "HU") {
        document.getElementById("puzzleHU").classList.add("d-none")
        document.getElementById("puzzleHU").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("HUContent").innerHTML = ``
    }
}


async function final(id) {
    if (id == "JW") {
        document.getElementById("Con2").classList.add("d-none")
        document.getElementById("Con2").classList.remove("d-block")
        document.getElementById("puzzleJW").classList.add("d-none")
        document.getElementById("puzzleJW").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("JWBtn").classList.add("disabled")
        document.getElementById("rightJW").classList.remove("d-none")
        document.getElementById("rightJW").classList.add("d-block")
        document.getElementById("JWContent").innerHTML = ``
        let m = await axios.post(url + "saveNewStage", {
            username: localStorage.getItem("loginAs"),
            stage: "stage1"
        })
    }
    if (id == "TZ") {
        document.getElementById("Con2").classList.add("d-none")
        document.getElementById("Con2").classList.remove("d-block")
        document.getElementById("puzzleTZ").classList.add("d-none")
        document.getElementById("puzzleTZ").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("TZBtn").classList.add("disabled")
        document.getElementById("rightTZ").classList.remove("d-none")
        document.getElementById("rightTZ").classList.add("d-block")
        document.getElementById("TZContent").innerHTML = ``
        let m = await axios.post(url + "saveNewStage", {
            username: localStorage.getItem("loginAs"),
            stage: "stage2"
        })
    }
    if (id == "CH") {
        document.getElementById("Con2").classList.add("d-none")
        document.getElementById("Con2").classList.remove("d-block")
        document.getElementById("puzzleCH").classList.add("d-none")
        document.getElementById("puzzleCH").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("CHBtn").classList.add("disabled")
        document.getElementById("rightCH").classList.remove("d-none")
        document.getElementById("rightCH").classList.add("d-block")
        document.getElementById("CHContent").innerHTML = ``
        let m = await axios.post(url + "saveNewStage", {
            username: localStorage.getItem("loginAs"),
            stage: "stage3"
        })
    }
    if (id == "HU") {
        document.getElementById("Con2").classList.add("d-none")
        document.getElementById("Con2").classList.remove("d-block")
        document.getElementById("puzzleHU").classList.add("d-none")
        document.getElementById("puzzleHU").classList.remove("d-block")
        document.getElementById("main").classList.add("d-block")
        document.getElementById("main").classList.remove("d-none")
        document.getElementById("HUBtn").classList.add("disabled")
        document.getElementById("rightHU").classList.remove("d-none")
        document.getElementById("rightHU").classList.add("d-block")
        document.getElementById("HUContent").innerHTML = ``
        let m = await axios.post(url + "saveNewStage", {
            username: localStorage.getItem("loginAs"),
            stage: "stage4"
        })
    }
}


async function openPuzzle2() {
    const d = new Date();
    document.getElementById("puzzle2").classList.add("d-block")
    document.getElementById("puzzle2").classList.remove("d-none")
    document.getElementById("main").classList.add("d-none")
    document.getElementById("main").classList.remove("d-block")
    let m = await axios.post(url + "Stages", {
        username: localStorage.getItem("loginAs")
    })
    let stages = m.data
    console.log(stages.stage1 == "Done" && stages.stage2 == "Done" && stages.stage3 == "Done" && stages.stage4 == "Done")
    if (stages.stage1 == "Done" && stages.stage2 == "Done" && stages.stage3 == "Done" && stages.stage4 == "Done") {
        if (d.getTime() - 60 * 1 * 1000 >= localStorage.getItem("time")) {
            document.getElementById("mysJW").classList.remove("disabled")
            document.getElementById("mysTZ").classList.remove("disabled")
            document.getElementById("mysCH").classList.remove("disabled")
            document.getElementById("mysHU").classList.remove("disabled")
        } else {

        }
    }
    localStorage.setItem("time", d.getTime())
}

function mys(id) {
    if (id == "JW") {

    } else {

    }

}

function closePuzzle2() {
    document.getElementById("puzzle2").classList.add("d-none")
    document.getElementById("puzzle2").classList.remove("d-block")
    document.getElementById("main").classList.add("d-block")
    document.getElementById("main").classList.remove("d-none")
}


function inbr(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (bri + 0.2 < 9.81) {
            var newBri = JSON.stringify(bri + 0.1)
        }
        document.getElementById(id).style.filter = `brightness(${newBri}) blur(${blur}px) grayscale(${gray}%)`
    } else {

    }
}


function debr(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (bri - 0.2 > 0) {
            var newBri = JSON.stringify(bri - 0.1)
        }
        document.getElementById(id).style.filter = `brightness(${newBri}) blur(${blur}px) grayscale(${gray}%)`
    } else {

    }
}


function inblur(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (blur + 1 < 9.21) {
            var newBlur = JSON.stringify(blur + 0.2)
        }
        console.log(fil)
        document.getElementById(id).style.filter = `brightness(${bri}) blur(${newBlur}px) grayscale(${gray}%)`
    } else {

    }
}


function deblur(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])
    console.log(fil.length)
    console.log(fil)

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (blur + 1 > 0.01) {
            var newBlur = JSON.stringify(blur - 0.2)
        }
        document.getElementById(id).style.filter = `brightness(${bri}) blur(${newBlur}px) grayscale(${gray}%)`
        console.log(fil)
    } else {

    }
}


function ingray(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (gray + 5 < 99.02) {
            var newGray = JSON.stringify(gray + 5)
        }
        console.log(fil)
        document.getElementById(id).style.filter = `brightness(${bri}) blur(${blur}px) grayscale(${newGray}%)`
        console.log(document.getElementById(id).style.filter.length)
    } else {

    }
}


function degray(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])

    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }
    if (fil.length == 47 || fil.length == 46) {
        if (gray - 5 > 0.01) {
            var newGray = JSON.stringify(gray - 5)
        }
        console.log(fil)
        document.getElementById(id).style.filter = `brightness(${bri}) blur(${blur}px) grayscale(${newGray}%)`
        console.log(document.getElementById(id).style.filter.length)
    } else {

    }
}


function nextStage() {
    document.getElementById("Con").classList.add("d-none")
    document.getElementById("Con").classList.remove("d-block")
    document.getElementById("Blur").classList.add("d-flex")
    document.getElementById("Blur").classList.remove("d-none")
}


async function ConStg2(id) {
    let fil = document.getElementById(id).style.filter
    let bri = JSON.parse(fil[11] + fil[12] + fil[13] + fil[14])
    let blur = JSON.parse(fil[22] + fil[23] + fil[24] + fil[25])
    if (fil.length == 47) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43] + fil[44])
    }
    if (fil.length == 46) {
        var gray = JSON.parse(fil[40] + fil[41] + fil[42] + fil[43])
    }


    let total = 0
    if (bri >= 0.91 && bri <= 1.31) {
        document.getElementById("bri").innerHTML = "5 Points"
        total = total + 5
    }
    if (bri >= 0.71 && bri <= 0.91 || bri >= 1.31 && bri <= 1.51) {
        document.getElementById("bri").innerHTML = "3 Points"
        total = total + 3
    }
    if (bri >= 0.51 && bri <= 0.71 || bri >= 1.51 && bri <= 1.71) {
        document.getElementById("bri").innerHTML = "1 Points"
        total = total + 1
    }
    if (bri < 0.71 || bri > 1.71) {
        document.getElementById("bri").innerHTML = "0 Points"
    }


    if (blur <= 0.41 && blur >= 0.01) {
        document.getElementById("blu").innerHTML = "5 Points"
        total = total + 5
    }
    if (blur <= 0.81 && blur >= 0.42) {
        document.getElementById("blu").innerHTML = "3 Points"
        total = total + 3
    }
    if (blur <= 1.21 && blur >= 0.82) {
        document.getElementById("blu").innerHTML = "1 Points"
        total = total + 1
    }
    if (blur > 1.21) {
        document.getElementById("blu").innerHTML = "0 Points"
    }


    console.log(gray)
    if (gray >= 5.01 && gray <= 25.01) {
        document.getElementById("Color").innerHTML = "5 Points"
        total = total + 5
    }
    if (gray >= 25.02 && gray <= 40.01) {
        document.getElementById("Color").innerHTML = "3 Points"
        total = total + 3
    }

    if (gray >= 40.02 && gray <= 55.01) {
        document.getElementById("Color").innerHTML = "1 Points"
        total = total + 1
    }
    if (gray > 55.01) {
        document.getElementById("Color").innerHTML = "0 Points"
    }

    let m = await axios.post("http://localhost:3000/AddPoints", {
        username: localStorage.getItem("loginAs"),
        points: total
    })
    document.getElementById("Total").innerHTML = total + " Points"
    document.getElementById("Blur").classList.add("d-none")
    document.getElementById("Blur").classList.remove("d-block")
    document.getElementById("Con2").classList.add("d-flex")
    document.getElementById("Con2").classList.remove("d-none")
}



async function login() {
    let loginUser = document.getElementById('loginUsername').value
    let loginPass = document.getElementById('loginPassword').value
    if (loginPass.length >= 8) {
        let m = await axios.post(url + "login", {
            username: loginUser,
            password: loginPass
        })
        console.log(m.data)
        if (m.data == "cond1") {
            document.getElementById('loginUserCon').classList.add('d-block')
            document.getElementById('loginUserCon').classList.remove('d-none')
        } else if (m.data == "cond3") {
            document.getElementById('loginUserCon').classList.remove('d-block')
            document.getElementById('loginUserCon').classList.add('d-none')
            document.getElementById('loginWrongPass').classList.add('d-block')
            document.getElementById('loginWrongPass').classList.remove('d-none')
        } else if (m.data == "cond2") {
            document.getElementById('Login').classList.remove('d-block')
            document.getElementById('Login').classList.add('d-none')
            document.getElementById('Home').classList.add('d-block')
            document.getElementById('Home').classList.remove('d-none')
            localStorage.setItem("loginAs", loginUser);
            console.log(localStorage.getItem("loginAs"))

            let m2 = await axios.post(url + "Stages", {
                username: localStorage.getItem("loginAs")
            })
            let stages = m2.data
            console.log(stages.stage1 == "Done")
            if (stages.stage1 == "Done") {
                console
                document.getElementById("JWBtn").classList.add("disabled")
                document.getElementById("rightJW").classList.remove("d-none")
                document.getElementById("rightJW").classList.add("d-block")
            }
            if (stages.stage2 == "Done") {
                document.getElementById("TZBtn").classList.add("disabled")
                document.getElementById("rightTZ").classList.remove("d-none")
                document.getElementById("rightTZ").classList.add("d-block")
            }
            if (stages.stage3 == "Done") {
                document.getElementById("CHBtn").classList.add("disabled")
                document.getElementById("rightCH").classList.remove("d-none")
                document.getElementById("rightCH").classList.add("d-block")
            }
            if (stages.stage4 == "Done") {
                document.getElementById("HUBtn").classList.add("disabled")
                document.getElementById("rightHU").classList.remove("d-none")
                document.getElementById("rightHU").classList.add("d-block")
            }
        }
        document.getElementById('passcon').classList.remove('d-block')
        document.getElementById('passcon').classList.add('d-none')

    } else {
        document.getElementById('passcon').classList.add('d-block')
        document.getElementById('passcon').classList.remove('d-none')
    }
}



function logout() {
    localStorage.setItem("loginAs", "")

    if (localStorage.getItem("loginAs") == "") {
        document.getElementById('Login').classList.add('d-block')
        document.getElementById('Login').classList.remove('d-none')
        document.getElementById('Home').classList.remove('d-block')
        document.getElementById('Home').classList.add('d-none')
        document.getElementById("loginUsername").value = ""
        document.getElementById("loginPassword").value = ""
    }
}