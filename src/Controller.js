import React from 'react';
// import zingTouch from 'zingtouch';

const Controller = (props) => {
    const { handleRotate , handleSelect ,handleMenu } = props
    return (
        <div className='controller'>
            <div id='childElement' onClick={handleRotate}>
                <h2 onClick={handleMenu}>Menu</h2>
                <ion-icon name="play-skip-forward"></ion-icon>
                <ion-icon name="play-skip-back"></ion-icon>
                <ion-icon name="play"></ion-icon>
                <div onClick={handleSelect} className='innerCircle'></div>
            </div>
        </div>
    );
}

export default Controller;