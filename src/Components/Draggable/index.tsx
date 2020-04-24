import React from 'react';
import './styles.css';

const Draggable = (props: any) => {
    const [initialMousePos, setInitalMousePos] = React.useState({x: 0, y: 0});

    const startDrag = (e: any) => {
        console.log("Drag: " + e.clientX);
        setInitalMousePos({x: e.clientX, y: e.clientY});
    }

    const move = (e: any) => {
        console.log("Move x: " + e.clientX + " Move y: " + e.clientY);
        e.target.style.transform = `translate(${e.clientX - initialMousePos.x}px,${e.clientY - initialMousePos.y}px`;
        
        // setMousePosition(
        //     {x: document.all ? window.event.clientX : e.pageX, 
        //     y: document.all ? window.event.clientY : e.pageY})

        //     e.target.style.left = (mousePosition.x - elemPosition.x) + 'px'; 
        //     e.target.style.top = (mousePosition.x - mousePosition.y) + 'px';
            
    }

    return (
        <div className={`${props.className}`} draggable="true" onMouseDown={startDrag} onDrag={move}>
            {props.children}
        </div>
    )
}

export default Draggable;