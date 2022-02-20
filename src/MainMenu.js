import React from 'react';

const MainMenu = () => {
    return (
        <div className='mainMenu'>
            <div>
                <h2> Menu </h2>
                <ul>
                    <li id='option1'>
                        <span>Music</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option2'>
                        <span>Games</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option3'>
                        <span>Settings</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option4'>
                        <span>About</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainMenu;