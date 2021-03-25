# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Rahul**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/obvious-large-wallet?path=README.md%3A7%3A15

## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✓] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✓] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✓] Start button plays a sound whenever clicked.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src = "./assets/MkRxteyTkC.gif"><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  - StackOverflow: Randon number generator in JavaScript, How to play audio on button click
  - MDN Web Docs: Basic JavaScript Syntax and buitin functions.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  - Due to a very limited experience with web development, I had trouble writing JavaScript functions, understanding how each function connects
  to the actual elements in the HTML and how everything joins together to make the complete game. However over the course of making this game, I 
  read the tutorial in detail and for any function or the terminology I did not understand, I searched up on google and tried to find the official 
  documentation for that. In the case where I could not find the official documentation, I tried to look up on third party resources such as Stack Overflow. 
  One very specific issue I faced was that to play a sound file for the start button, I could not play it by initializing a global sound variable 
  containing the file stored in the assets folder. While I could not find an exact solution for this problem on the internet, I quickly found a 
  Stack Overflow article explaining how the sound object in JavaScript works and using my newly gained knowledge, I made a function which first 
  made a sound object and then played it. To play the sound whenever the start button was clicked, I just called the function in the start game 
  function which resolved the issue. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  - One of the biggest questions that I would have for web development would be how would a front end of a website be connected to a real time 
  database on the back end which would seamlessly upload and retrieve data while still being virtually seamless. I have this question because modern 
  day websites are full stack and it is very common to upload and retrieve data and without knowledge of such processes, I am very confused on how 
  modern day websites save and retrieve our data on demand and would want to learn these concepts to become a successful web developer.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  - If i had more time to work on this project, I would add a Spotify integration to this game and would allow individual players to connect their Spotify accounts. 
  For every single tile, I would use this integration by choosing one song players playlist for each individual tile. So instead of sounds with different frequencies 
  played by each tile, I would just play the song from spotify for a few songs and this would allow users to play the game while listening to their favorite music.



## License

    Copyright Rahul

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
