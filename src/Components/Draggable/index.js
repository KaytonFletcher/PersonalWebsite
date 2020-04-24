import React from 'react';
import './styles.css';

const Draggable = (props) => {
    const [selected, setSelected] = React.useState(null);
    const [initialMousePos, setInitalMousePos] = React.useState({x: 0, y: 0});
    const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
    const [elemPosition, setElemPosition] = React.useState({x: 0, y: 0});


    // React.useEffect(() => {
    //     if (selected !== null) {
    //         setSelected(selected => 
    //             {selected.style.left = (mousePosition.x - elemPosition.x) + 'px';  
    //             selected.style.top = (mousePosition.x - mousePosition.y) + 'px';
    //         });
           
    //     }
    // }, [mousePosition]);

    const drag_init = (e) => {
        console.log("Drag: " + e.clientX);
        setInitalMousePos({x: e.clientX, y: e.clientY});
        
        // console.log("x: " + mousePosition.x - e.target.offsetLeft + " y: " + mousePosition.y - e.target.offsetTop)
        // setElemPosition({x: mousePosition.x - e.offsetLeft, y: mousePosition.y - e.offsetTop});
    }




    const move = (e) => {
        console.log("Move x: " + e.clientX + " Move y: " + e.clientY);
        e.target.style.transform = `translate(${e.clientX - initialMousePos.x}px,${e.clientY - initialMousePos.y}px`;
        
        // setMousePosition(
        //     {x: document.all ? window.event.clientX : e.pageX, 
        //     y: document.all ? window.event.clientY : e.pageY})

        //     e.target.style.left = (mousePosition.x - elemPosition.x) + 'px'; 
        //     e.target.style.top = (mousePosition.x - mousePosition.y) + 'px';
            
    }

    const doneDragging = () => {
        setSelected(null);
    }

    return (
        <div id="draggable" className={`${props.className}`} draggable="true" onMouseDown={drag_init} onDrag={move}>
            {props.children}
        </div>
    )
}

export default Draggable;