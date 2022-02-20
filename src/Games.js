import React from 'react';

const Games = () => {
    return (
        <div className='games'>
            <div>
                <h2> Games </h2>
                <ul>
                    <li id='option1'>
                        <span> Ludo </span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option2'>
                        <span>Chess</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option3'>
                        <span>Business</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option4'>
                        <span>Carrom</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Games;