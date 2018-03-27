import React,{Component} from 'react'
import {Text, View,StyleSheet,TouchableOpacity,Dimensions,ScrollView,Image,Alert} from 'react-native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
let femaleImage=[
    {id:0,photo:require('../src/images/avatar-female-large/avatar-lge-46.png')},
    {id:1,photo:require('../src/images/avatar-female-large/avatar-lge-47.png')},
    {id:2,photo:require('../src/images/avatar-female-large/avatar-lge-48.png')},
    {id:3,photo:require('../src/images/avatar-female-large/avatar-lge-49.png')},
    {id:4,photo:require('../src/images/avatar-female-large/avatar-lge-50.png')},
    {id:5,photo:require('../src/images/avatar-female-large/avatar-lge-51.png')},
    {id:6,photo:require('../src/images/avatar-female-large/avatar-lge-52.png')},
    {id:7,photo:require('../src/images/avatar-female-large/avatar-lge-53.png')},
    {id:8,photo:require('../src/images/avatar-female-large/avatar-lge-54.png')},
    {id:9,photo:require('../src/images/avatar-female-large/avatar-lge-55.png')},
    {id:10,photo:require('../src/images/avatar-female-large/avatar-lge-56.png')},
    {id:11,photo:require('../src/images/avatar-female-large/avatar-lge-57.png')},
    {id:12,photo:require('../src/images/avatar-female-large/avatar-lge-58.png')},
    {id:13,photo:require('../src/images/avatar-female-large/avatar-lge-59.png')},
    {id:14,photo:require('../src/images/avatar-female-large/avatar-lge-60.png')},
    {id:15,photo:require('../src/images/avatar-female-large/avatar-lge-61.png')},
    {id:16,photo:require('../src/images/avatar-female-large/avatar-lge-62.png')},
    {id:17,photo:require('../src/images/avatar-female-large/avatar-lge-63.png')},
    {id:18,photo:require('../src/images/avatar-female-large/avatar-lge-64.png')},
    {id:19,photo:require('../src/images/avatar-female-large/avatar-lge-65.png')},
    {id:20,photo:require('../src/images/avatar-female-large/avatar-lge-66.png')},
    {id:21,photo:require('../src/images/avatar-female-large/avatar-lge-67.png')},
    {id:22,photo:require('../src/images/avatar-female-large/avatar-lge-68.png')},
    {id:23,photo:require('../src/images/avatar-female-large/avatar-lge-69.png')},
    {id:24,photo:require('../src/images/avatar-female-large/avatar-lge-70.png')},
    {id:25,photo:require('../src/images/avatar-female-large/avatar-lge-71.png')},
    {id:26,photo:require('../src/images/avatar-female-large/avatar-lge-72.png')},
    {id:27,photo:require('../src/images/avatar-female-large/avatar-lge-73.png')},
    {id:28,photo:require('../src/images/avatar-female-large/avatar-lge-74.png')},
    {id:29,photo:require('../src/images/avatar-female-large/avatar-lge-75.png')},
    {id:30,photo:require('../src/images/avatar-female-large/avatar-lge-76.png')},
    {id:31,photo:require('../src/images/avatar-female-large/avatar-lge-77.png')},
    {id:32,photo:require('../src/images/avatar-female-large/avatar-lge-78.png')},
    {id:33,photo:require('../src/images/avatar-female-large/avatar-lge-79.png')},
    {id:34,photo:require('../src/images/avatar-female-large/avatar-lge-80.png')},
    {id:35,photo:require('../src/images/avatar-female-large/avatar-lge-81.png')},
    {id:36,photo:require('../src/images/avatar-female-large/avatar-lge-82.png')},
    {id:37,photo:require('../src/images/avatar-female-large/avatar-lge-83.png')},
    {id:38,photo:require('../src/images/avatar-female-large/avatar-lge-84.png')},
    {id:39,photo:require('../src/images/avatar-female-large/avatar-lge-85.png')},
    {id:40,photo:require('../src/images/avatar-female-large/avatar-lge-86.png')},
    {id:41,photo:require('../src/images/avatar-female-large/avatar-lge-87.png')},
    {id:42,photo:require('../src/images/avatar-female-large/avatar-lge-88.png')},
    {id:43,photo:require('../src/images/avatar-female-large/avatar-lge-89.png')},
    {id:44,photo:require('../src/images/avatar-female-large/avatar-lge-90.png')},
];
let maleImage=[
    {id:0,photo:require('./../src/images/avatar-male-large/avatar-lge-1.png')},
    {id:1,photo:require('./../src/images/avatar-male-large/avatar-lge-2.png')},
    {id:2,photo:require('./../src/images/avatar-male-large/avatar-lge-3.png')},
    {id:3,photo:require('./../src/images/avatar-male-large/avatar-lge-4.png')},
    {id:4,photo:require('./../src/images/avatar-male-large/avatar-lge-5.png')},
    {id:5,photo:require('./../src/images/avatar-male-large/avatar-lge-6.png')},
    {id:6,photo:require('./../src/images/avatar-male-large/avatar-lge-7.png')},
    {id:7,photo:require('./../src/images/avatar-male-large/avatar-lge-8.png')},
    {id:8,photo:require('./../src/images/avatar-male-large/avatar-lge-9.png')},
    {id:9,photo:require('./../src/images/avatar-male-large/avatar-lge-10.png')},
    {id:10,photo:require('./../src/images/avatar-male-large/avatar-lge-11.png')},
    {id:11,photo:require('./../src/images/avatar-male-large/avatar-lge-12.png')},
    {id:12,photo:require('./../src/images/avatar-male-large/avatar-lge-13.png')},
    {id:13,photo:require('./../src/images/avatar-male-large/avatar-lge-14.png')},
    {id:14,photo:require('./../src/images/avatar-male-large/avatar-lge-15.png')},
    {id:15,photo:require('./../src/images/avatar-male-large/avatar-lge-16.png')},
    {id:16,photo:require('./../src/images/avatar-male-large/avatar-lge-17.png')},
    {id:17,photo:require('./../src/images/avatar-male-large/avatar-lge-18.png')},
    {id:18,photo:require('./../src/images/avatar-male-large/avatar-lge-19.png')},
    {id:19,photo:require('./../src/images/avatar-male-large/avatar-lge-20.png')},
    {id:20,photo:require('./../src/images/avatar-male-large/avatar-lge-21.png')},
    {id:21,photo:require('./../src/images/avatar-male-large/avatar-lge-22.png')},
    {id:22,photo:require('./../src/images/avatar-male-large/avatar-lge-23.png')},
    {id:23,photo:require('./../src/images/avatar-male-large/avatar-lge-24.png')},
    {id:24,photo:require('./../src/images/avatar-male-large/avatar-lge-25.png')},
    {id:25,photo:require('./../src/images/avatar-male-large/avatar-lge-26.png')},
    {id:26,photo:require('./../src/images/avatar-male-large/avatar-lge-27.png')},
    {id:27,photo:require('./../src/images/avatar-male-large/avatar-lge-28.png')},
    {id:28,photo:require('./../src/images/avatar-male-large/avatar-lge-29.png')},
    {id:29,photo:require('./../src/images/avatar-male-large/avatar-lge-30.png')},
    {id:30,photo:require('./../src/images/avatar-male-large/avatar-lge-31.png')},
    {id:31,photo:require('./../src/images/avatar-male-large/avatar-lge-32.png')},
    {id:32,photo:require('./../src/images/avatar-male-large/avatar-lge-33.png')},
    {id:33,photo:require('./../src/images/avatar-male-large/avatar-lge-34.png')},
    {id:34,photo:require('./../src/images/avatar-male-large/avatar-lge-35.png')},
    {id:35,photo:require('./../src/images/avatar-male-large/avatar-lge-36.png')},
    {id:36,photo:require('./../src/images/avatar-male-large/avatar-lge-37.png')},
    {id:37,photo:require('./../src/images/avatar-male-large/avatar-lge-38.png')},
    {id:38,photo:require('./../src/images/avatar-male-large/avatar-lge-39.png')},
    {id:39,photo:require('./../src/images/avatar-male-large/avatar-lge-40.png')},
    {id:40,photo:require('./../src/images/avatar-male-large/avatar-lge-41.png')},
    {id:41,photo:require('./../src/images/avatar-male-large/avatar-lge-42.png')},
    {id:42,photo:require('./../src/images/avatar-male-large/avatar-lge-43.png')},
    {id:43,photo:require('./../src/images/avatar-male-large/avatar-lge-44.png')},
    {id:44,photo:require('./../src/images/avatar-male-large/avatar-lge-45.png')},
];
let userImage=[];
let color=[
    '#fed586',
    '#fed1ae',
    '#fff0ae',
    '#d8aa53',
    '#776d5a'
];
let height=Dimensions.get('window').height;
let width=Dimensions.get('window').width;
let xValue=width/3;
let xWidth=width/3;
let forwardid=0;
let count=0;
let prevId=0;
class ProfileChange extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            gender:'male',
            selectedColor:0,
            gestureName: 'none',
            selectedId:0
        };

    }

    onPressImage=(id,index)=>{
        if(index === 0)
        {
            this.setState({selectedId:this.state.selectedColor})
        }
        else
        {
            if(id===forwardid+5)
            {
                forwardid=forwardid+5;
                this.refs.scrollview.scrollTo({x:xValue});
                (xValue <= xWidth*8) ? xValue = (xValue + xWidth) : xValue = xWidth*8;
            }
            else {
                forwardid=forwardid-5;
                xValue=xValue-(xWidth*2);
                this.refs.scrollview.scrollTo({x:xValue});
                (xValue <= xWidth*8) ? xValue = (xValue + xWidth) : xValue = xWidth*8;
            }

            count++
        }

    };
    displayImages=()=>
    {
       return(
           userImage.map((data,index)=>{
               return(
                   <View  style={{marginTop: '5%', marginBottom: '8%', flexDirection:'row',width:(width/3),justifyContent:'center'}}>
                       <TouchableOpacity key={index} onPress={()=> {{
                           if(this.state.selectedId!==data.id)
                           {
                               this.setState({selectedId:data.id});
                               this.onPressImage(data.id,index);
                           }}
                       }}>
                            <Image style={{height: 90, width: 90,opacity:(this.state.selectedId===data.id)?1:0.3}} source={data.photo}/>
                       </TouchableOpacity>
                    </View>
               )
           })
       )

    };
    setValues=(id,id2=this.state.selectedId)=>
    {

        console.log("setvalues");
        console.log(count);
        if(count===0)
        {
            console.log("in if");
            this.setState({selectedId:id});
            forwardid=id;

        }
        else if(id===prevId){
            this.setState({selectedId:id2+id});
            forwardid=id2+id;
        }

        else
        {
            this.setState({selectedId:id2+id-prevId});
            forwardid=id2+id-prevId;
        }
        prevId=id;
    };

    View=()=> {

        userImage=[{}];
        if (this.state.gender === 'male') {
            for (i = this.state.selectedColor; i < maleImage.length; i = i + 5) {
                userImage.push({id:maleImage[i].id,photo:maleImage[i].photo});
            }
        }
        else {
            for (i = this.state.selectedColor; i < femaleImage.length; i = i + 5) {
                userImage.push({id:femaleImage[i].id,photo:femaleImage[i].photo})
            }
        }
        return this.displayImages();
    };

    onSwipeLeft(gestureState) {
        console.log("swipe left");
        console.log("selcetdcolor"+this.state.selectedColor);
        if (this.state.selectedId < 44) {

            //var index = this.state.selectedId + 5;

            if(xValue < xWidth*8)
            {
                console.log("if called");
                forwardid=forwardid+5;
                this.refs.scrollview.scrollTo({x:xValue});
                xValue = (xValue + xWidth);
                var index = this.state.selectedId + 5;

            }
            else{

                if(xValue === xWidth*8)
                {
                    console.log("else if called");
                    forwardid=forwardid+5;
                    this.refs.scrollview.scrollTo({x:xValue});
                     index = this.state.selectedId + 5;
                    xValue = xValue+1;
                }
                else
                {
                    index = this.state.selectedId;
                    xValue = xValue+1
                }

            };

            this.setState({
                selectedId: index
            });
            console.log(index);
            console.log(xValue);

        }
        count++
    }

    onSwipeRight(gestureState) {
        console.log("swipe right");
        console.log(xValue);
        if(this.state.selectedId<44) {
            if (xValue > xWidth) {
                console.log("if called");
                forwardid=forwardid-5;
                xValue=xValue-(xWidth*2);
                this.refs.scrollview.scrollTo({x:xValue});
                xValue = (xValue + xWidth);
                var index = this.state.selectedId - 5;

            }
            else {

                    index = this.state.selectedId;
                    xValue = xValue
                }

        }
        console.log(index);
        console.log("xvalue"+xValue);
        this.setState({
            selectedId:index
        });
        count++;

    }

    render()
    {
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 20
        };

        return(
            <View style={styles.container}>

                <View>
                    <Text style={styles.Text1}>Before we begin</Text>
                 </View>

                <View>
                    <Text style={styles.Text2}>Finally,choose your avatar.</Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>{this.setState({gender:'male'});
                                                        userImage=[]}}>
                        <Text style={[styles.gender,{color:(this.state.gender==='male')&&'yellow'||"white"}]}>
                            Male
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.setState({gender:'female'});
                                                        userImage=[]}}>
                            <Text style={[styles.gender,{color:(this.state.gender==='female')&&'yellow'||"white"}]}>
                                FeMale
                            </Text>
                        </TouchableOpacity>
                    </View>

                <View ref='mainView' style={{alignItems:'center',width:500,height:200}}>

                        <GestureRecognizer
                                onSwipeLeft={(state)=>this.onSwipeLeft(state)}
                                onSwipeRight={(state)=>this.onSwipeRight(state)}
                                config={config}
                        >
                            <ScrollView horizontal={true}
                                        ref='scrollview'
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        scrollEnabled={false}
                                        style={{width:width}}
                            >
                                    {
                                         this.View()
                                    }
                            </ScrollView>
                        </GestureRecognizer>
                </View>

                <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
                    {
                        color.map((item, key)=> (
                                <TouchableOpacity onPress={()=>{this.setState({selectedColor:key});
                                                                userImage=[];
                                                                this.setValues(key);}}>
                                     <View style={{height:50,width:50,borderRadius:25,borderWidth:2,borderColor:(this.state.selectedColor===key)?'rgb(146,226,139)':'rgb(26,92,120)',justifyContent:'center',alignItems:'center'}}>
                                        <View style={{height:38,width:38,borderRadius:19,backgroundColor:item}}/>
                                     </View>
                                </TouchableOpacity>)
                        )
                    }
                </View>

                <View>
                    <TouchableOpacity onPress={()=>{alert(this.state.selectedId)}}>
                        <View style={{height:60,width:width-100,backgroundColor:'#fff',borderRadius:60/2,alignItems:'center',justifyContent:'center',marginTop:80}}>
                            <Text style={{color:'rgb(26,92,120)',fontSize:15}}>Finish Setup</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height:height,
        width:width,
        backgroundColor:'rgb(26,92,120)',
       alignItems:'center'
    },
    Text1: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 120,
        color:'#cecece',
    },
    Text2: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color:'#fff',
    },
    gender:{
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        paddingRight:10
    }
});
export default ProfileChange;



