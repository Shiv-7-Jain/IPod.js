import React from 'react';

const Music = () => {
    return (
        <div className='music'>
            <div>
                <h2> Music </h2>
                <ul>
                    <li id='option1'>
                        <span>PlayLists</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option2'>
                        <span>Songs</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option3'>
                        <span>Albums</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                    <li id='option4'>
                        <span>Artists</span> <ion-icon name="chevron-forward-circle"></ion-icon>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Music