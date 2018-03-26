import React, { Component } from 'react';
import {Text, View} from 'react-native';
import ProfileChange from './src/ProfileChange'
import GestureDemo from './src/GestureDemo'
class App extends Component
{

    render()
    {console.disableYellowBox=true;
        return(

            <ProfileChange/>

        )
    }
}
export default App;