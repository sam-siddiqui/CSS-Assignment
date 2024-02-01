# Animation Story of a Leaf

## Project Overview

This project is a CSS animation story that depicts the journey of a leaf from Autumn to Summer. The animation is implemented using various CSS properties and JavaScript for managing state and timing.

## File Structure

- `index.html`: The main HTML file that includes the structure of the animation.
- `styles.min.css`: The CSS file that includes all the styles and animations for the project.
- `script.min.js`: The JavaScript file that manages state and timing for the animation.
- `all.css`: Un-minified version of all the styles used in the animation
- `index.js`: Un-minified version of all the javascript used in the animation

## CSS Structure

The CSS for this project is structured with root variables for global use, and separate sections for each scene of the animation. 
<br> Each scene has its own set of styles and animations. And each scene has it's own styles in seperate files labelled by the the scene number
<br> `common.css` has the common styles applicable generally

## JS Structure

The animation is divided into three section
- Initial Click: Started by the tree in the first scene
- Main story: The journey of the leaf across the seasons
- Conclusion: When the used clicks on the tree sprout in the second-last scene

Accordingly, the JS has been divided into three `Click` events: the tree, the first leaf and the tree sprout in the end.
<br> A delay function is used instead of setTimeout to control the elements or classes during the animation

## Animation Details

The journey of the leaf is animated using a combination of CSS properties, including `transform` for movement and rotation, `animation` for timing, and `opacity` for visibility. JavaScript is used to manage the state and timing of the animation, adding and removing classes and changing elements at specific times to align with the CSS animations.

## Code Conventions

Classes and IDs are named according to the element they style and the scene they belong to. For example, the ID `Scene-1-Leaf` refers to the leaf element in Scene 1. CSS rules are organized by scene, with a comment indicating the start of each scene's styles.

## How to Run the Project

To run the project locally, open the `index.html` file in your web browser.