import React from 'react';
import MainMenu from './MainMenu';
import Music from './Music';
import Games from './Games';
import SubMusic from './SubMusic';
import Settings from './Settings';
import About  from './About';
import SubGames from './SubGames';


const Screen = (props) => {
    const { currentState } = props;
    let element;
    if(currentState === 'MainMenu'){
        element = <MainMenu />
        // console.log('Done')
    }
    else if(currentState === 'Music'){
        element = <Music />
    }
    else if(currentState === 'PlayLists' || currentState === 'Songs' || currentState === 'Albums' || currentState === 'Artists'){
        console.log('DOne');
        element = <SubMusic />
    }
    else if(currentState === 'Games'){
        element = <Games />
    }
    else if(currentState === 'Chess' || currentState === 'Business' || currentState === 'Carrom' || currentState === 'Ludo'){
        element = <SubGames />
    }
    else if(currentState === 'Settings'){
        element = <Settings />
    }
    else if(currentState === 'About'){
        element = <About />
    }
    return (
        <div className='screen'>
            {element}
        </div>
    );
}

export default Screen;