import React, { useEffect } from 'react';
import MainContentArea from './MainContentArea';
import SidebarArea from './SidebarArea';

let canvasEmpty = true;

export default function Content(props){
    const [technologies, setTechnologies] = React.useState(['css','html']);
    const [tools, setTools] = React.useState(['vscode']);

    function changeDisplayedTechnologies(values){
        setTechnologies(values);
    }
    function changeDisplayedTools(values){
        setTools(values);
    }

    function getRandomSize(){
        return Math.random() * 0.5 - 0.25 + 1;
    }

    function getRandomPos(axis){
        if(axis === 'x'){
            return Math.random() * (window.innerWidth * 3);
        }else if (axis ==='y'){
            return Math.random() * window.innerHeight;
        }
    }
    
    useEffect(() => {
        let dotsCanvas = document.querySelector("#content__dots-canvas");
        dotsCanvas.style.transform = `translate(-${props.activeTab * window.innerWidth}px, 0px)`;
    },[props.activeTab])

    useEffect(() => {
        let dotsCanvas = document.querySelector("#content__dots-canvas");
            dotsCanvas.width = window.innerWidth * 3;
            dotsCanvas.height = window.innerHeight;
        if(dotsCanvas && canvasEmpty){
            const ctx = dotsCanvas.getContext('2d');
        
            class CanvasDot {
                constructor(){
                    this.x = getRandomPos('x');
                    this.y =  getRandomPos('y');
                    this.vx = ((Math.random() * 0.5 - 0.25));
                    this.vy = ((Math.random() * 0.5 - 0.25));
                    this.growing = Math.random() > 0.9 ? true : false;
                    this.shrinking = this.growing ? false : Math.random() > 0.9 ? true : false;
                    this.desinationX = getRandomPos('x');
                    this.destinationY = getRandomPos('y');
                    this.radius = getRandomSize();
                    this.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                }
                draw = function(){
                ctx.beginPath();  
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
                }
            };
            const dots = [];
            function draw() {
                ctx.clearRect(0,0, dotsCanvas.width, dotsCanvas.height);
                    dots.forEach(dot => {
                            if(dot.growing || dot.shrinking){
                                if(dot.growing){
                                    dot.radius +=  0.005;
                                    if(dot.radius > 4){
                                        dot.growing = false;
                                    }
                                }   
                                else{
                                    dot.radius -= 0.005;
                                    if(dot.radius <= 1){
                                        dot.shrinking = false;
                                    }
                                }
                            }
                            else{
                                if(Math.random() > 0.995 ){
                                    if(Math.random() > 0.5){
                                        dot.growing = true;
                                        dot.shrinking = false;
                                    }   
                                    else{
                                        dot.growing = false;
                                        dot.shrinking = true;
                                    }
                                }
                            }
                            if(Math.abs(dot.desinationX - dot.x) < 10){
                                dot.desinationX = getRandomPos('x');
                                dot.destinationY = getRandomPos('y');
                                dot.vx = ((Math.random() * 0.5 - 0.25));
                                dot.vy = ((Math.random() * 0.5 - 0.25));
                            }
                            else{
                                if(dot.x < dot.destinationX){
                                    dot.x -=  dot.vx;
                                }
                                else{
                                    dot.x +=  dot.vx;
                                }
                                if(dot.y < dot.destinationY){
                                    dot.y -=  dot.vy;
                                }
                                else{
                                    dot.y +=  dot.vy;
                                }
                            }
                            dot.draw();
                    })
                        window.requestAnimationFrame(draw);
                }
                
                for(let i = 0; i < 300; i++){
                    const cc = new CanvasDot();
                    dots.push(cc);
                }
                draw();
                canvasEmpty = false;
            }
            window.addEventListener('resize', () => {
                dotsCanvas.width = window.innerWidth * 3;
                dotsCanvas.height = window.innerHeight;
            })
        },[])

    return (
        <div className="content__container">
            <canvas  id="content__dots-canvas"></canvas>
            <MainContentArea setTechnologies={changeDisplayedTechnologies} setTools={changeDisplayedTools} activeTab={props.activeTab}/>
            <SidebarArea technologies={technologies} tools={tools}/>
        </div>
    )
}