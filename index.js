//Start Button
var startButton = document.getElementById("Start");
var IntroElement = document.getElementById("Intro");

//The background element, particularly for the first scene
var backGround = document.querySelector(".background");

// The first scene element
const sceneOneElement = document.getElementById("Scene-1");

//The tree and the leaf in the first Scene 
var sceneOneTree = document.getElementById("Scene-1-Tree");
var sceneOneLeaf = document.getElementById("Scene-1-Leaf");

//The sprout element in Scene 5-5
var sceneFivePointFiveSprout = document.getElementById("Scene-5-5-Sprout");

//Click event handler for the start button
startButton.addEventListener("click", start)

//Click event handler for the tree in the first scene
sceneOneTree.addEventListener("click", startAnimationStory);

//Click event handler for the first leaf in the first scene
sceneOneLeaf.addEventListener("click", continueStory);

//Click event Handler for the tree sprout scene
sceneFivePointFiveSprout.addEventListener("click", concludeStory);

/**
 * Utility function as an alternative to setTimeout
 * Used to cause delays in the JS execution in 
 * accordance with the durations of the CSS animations
 * @param {Number} duration The seconds to delay by
 * @returns A Resolved Promise
 */
function delayinSeconds(duration) {
    let timeInMs = duration * 1000;
    return new Promise(resolve => setTimeout(resolve, timeInMs));
}

async function start(){
    IntroElement.remove();
    sceneOneElement.style.display = "block";
}

/**
 * The general structure of the animations:
 * The tasks or changes in the DOM/elements
 * Delay after those changes
 * 
 * Next Scene or changes
 */

/**
 * The starting point of the animation which 
 * starts when the user clicks the red tree
 */
async function startAnimationStory() {
    sceneOneTree.classList.add("hidden");
    sceneOneElement.classList.add("zoom-in-tree");
    await delayinSeconds(5);

    sceneOneLeaf.classList.add("clickable");
    sceneOneLeaf.classList.remove("hidden");
    sceneOneLeaf.classList.add("fade-in");
}

/**
 * The story continues when the user clicks 
 * on the leaf
*/
async function continueStory() {
    const sceneOnePointFiveElement = document.getElementById("Scene-1-5");
    const sceneTwoElement = document.getElementById("Scene-2");
    const sceneTwoPointFiveElement = document.getElementById("Scene-2-5");
    const sceneThreeElement = document.getElementById("Scene-3");
    const sceneThreePointFiveElement = document.getElementById("Scene-3-5");
    const sceneFourElement = document.getElementById("Scene-4");
    const sceneFourPointFiveElement = document.getElementById("Scene-4-5");
    const sceneFiveElement = document.getElementById("Scene-5");
    const sceneFivePointFiveElement = document.getElementById("Scene-5-5");

    const sceneTwoPointFiveLeafElement = document.getElementById("Scene-2-5-Leaf");
    const sceneThreeLeafElement = document.getElementById("Scene-3-Leaf");
    const sceneThreePointFiveLeafElement = document.getElementById("Scene-3-5-Leaf");
    const sceneFivePointFiveLeafElement = document.getElementById("Scene-5-5-Leaf");
    
    sceneOneElement.classList.remove("zoom-in-tree");
    sceneOneLeaf.classList.remove("swinging");
    await delayinSeconds(1.5);

    sceneOneLeaf.classList.add("leaf-blowing-away-animation");
    await delayinSeconds(10);

    //Scene 1-5
    sceneOneElement.style.display = "none";
    sceneOnePointFiveElement.style.display = "block";
    await delayinSeconds(10);

    //Scene 2
    sceneOnePointFiveElement.style.display = "none";
    sceneTwoElement.style.display = "block";
    await delayinSeconds(15);

    //Scene 2-5
    sceneTwoElement.style.display = "none";
    sceneTwoPointFiveElement.style.display = "block";
    await delayinSeconds(10);
    
    sceneTwoPointFiveLeafElement.classList.remove("leaf-initial-position");
    sceneTwoPointFiveLeafElement.classList.remove("leaf-floating-animation");
    sceneTwoPointFiveLeafElement.classList.add("leaf-scene-end-position");
    await delayinSeconds(1);

    sceneTwoPointFiveLeafElement.classList.add("leaf-frozen")                  //Change the leaf into a frozen version
    await delayinSeconds(2);

    //Scene 3
    sceneTwoPointFiveElement.style.display = "none";
    sceneThreeElement.style.display = "block";
    await delayinSeconds(1);
    
    sceneThreeLeafElement.classList.remove("leaf-frozen");                //Defrost the leaf
    await delayinSeconds(10);

    //Scene 3-5
    sceneThreeElement.style.display = "none";
    sceneThreePointFiveElement.style.display = "block";
    await delayinSeconds(20);

    sceneThreePointFiveLeafElement.classList.remove("leaf-initial-position");
    sceneThreePointFiveLeafElement.classList.remove("leaf-floating-animation");
    sceneThreePointFiveLeafElement.classList.add("leaf-scene-end-position");
    await delayinSeconds(3)

    //Scene 4
    sceneThreePointFiveElement.style.display = "none";
    sceneFourElement.style.display = "block";
    await delayinSeconds(10 + 2); //Leaf animation plus two seconds delay

    //Scene 4-5
    sceneFourElement.style.display = "none";
    sceneFourPointFiveElement.style.display = "block";
    await delayinSeconds(10);

    //Scene 5
    sceneFourPointFiveElement.style.display = "none";
    
    sceneFiveElement.style.display = "block";
    await delayinSeconds(10);

    //Scene 5-5
    sceneFiveElement.style.display = "none";
    
    sceneFivePointFiveElement.style.display = "block";
    await delayinSeconds(5);

    
    sceneFivePointFiveLeafElement.classList.remove("leaf-initial-position");
    sceneFivePointFiveLeafElement.classList.remove("leaf-floating-animation");
    sceneFivePointFiveLeafElement.classList.add("leaf-scene-end-position");
    await delayinSeconds(3);

    sceneFivePointFiveElement.classList.add("zoom-in-sprout");                       //Zooms into the sprout
}

/**
 * The conclusion of the story when
 * the user clicks on the Tree Sprout
 */
async function concludeStory() {
    const sceneFivePointFiveElement = document.getElementById("Scene-5-5");
    const sceneSixElement = document.getElementById("Scene-6");

    const sceneFivePointFiveTreeGIF = document.getElementById("Scene-5-5-Tree-GIF");
    const sceneFivePointFiveTreeFrameElement = document.getElementById("Scene-5-5-Tree");
    const sceneSixSecondLeafElement = document.getElementById("Scene-6-Leaf-2");
    const finElement = document.getElementById("Fin");
    
    sceneFivePointFiveElement.classList.remove("zoom-in-sprout");
    sceneFivePointFiveSprout.style.display = "none";
    sceneFivePointFiveTreeGIF.style.display = "block";                      //Starts the Tree GIF
    await delayinSeconds(15);

    sceneFivePointFiveTreeGIF.style.display = "none";
    sceneFivePointFiveTreeFrameElement.classList.remove("hidden");
    await delayinSeconds(5);

    //Scene 6
    sceneFivePointFiveElement.style.display = "none";
    sceneSixElement.style.display = "block";
    await delayinSeconds(5);

    sceneSixElement.classList.add("zoom-out-tree");                          //Slowly moves towards the tree
    await delayinSeconds(10);

    sceneSixSecondLeafElement.classList.remove("hidden");
    sceneSixSecondLeafElement.classList.add("fade-in");
    await delayinSeconds(2);

    sceneSixElement.classList.remove("initial-final-scene");
    sceneSixElement.classList.add("final-final-scene");
    await delayinSeconds(30);

    sceneSixElement.style.display = "none";
    finElement.style.display = "block";

}

