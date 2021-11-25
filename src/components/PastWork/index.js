import React from 'react';
import img1 from '/Users/megancampbell/Desktop/projects/Assignment-2/portfolio/src/assets /01-html-css-git-homework-demo.png';
import img2 from '/Users/megancampbell/Desktop/projects/Assignment-2/portfolio/src/assets /ScreenShot.png';
import img3 from '/Users/megancampbell/Desktop/projects/Assignment-2/portfolio/src/assets /Untitled copy.jpg';
import img4 from '/Users/megancampbell/Desktop/projects/Assignment-2/portfolio/src/assets /Toilet SOS.jpg'


const PastWork = () => {
    return (
<div class="contianer">
        <div class="row">
            <div id="#Past-Projects" class="three columns">
                <h2 id="Past-Projects"> Past Projects
                </h2>
                <h3>
                    <div class="three columns">
                        <a href="https://megwatson88.github.io/horiseon-refactor-accessability/" target="_blank">
                            <img id="first-image" src={img1}
                                alt="A screen shot of a project using advanced css" />
                        </a>
                        Horiseon
                        <p> Project using HTML and CSS </p>
                    </div>
                    <div class="three columns">
                        <a href="https://eisforgene.github.io/cocktails-cinema/" target="_blank">
                            <img src={img3}
                                alt="image of functional webpage" /> </a>
                        Cocktails and Cinema
                        <p> A project build with a fellow bootcamper. We created a way for you to choose an drink and we give you a movie.
                        </p>
                    </div>
                    <div class="three columns">
                        <a href="https://ucla-code-quiz.herokuapp.com/" target="_blank">
                            <img src={img2}
                                alt="A screen shot of code-quiz " />
                        </a>
                        Code Quiz
                        <p> We have created a platform where students can boost their knowledge of coding while answering complex true or false questions, tracking progress, while protecting their progress.
                        </p>
                    </div>
                    <div class="three columns">
                        <a href="https://project-toilet.herokuapp.com/" target="_blank">
                            <img src={img4} alt="Phone in a hand" />
                        </a>
                        Toilet SOS 
                        <p>
                            An app that allows users to find and review toilets in their area.
                        </p>
                    </div>
                </h3>
            </div>
        </div>
    </div>
    )
    }

    export default PastWork;
