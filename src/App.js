 
import test2 from "./test2.png"
import React from 'react';
import {Grid,Button,Image,Divider,Header,Icon} from 'semantic-ui-react' 
import Comments from './comments.js'
import Buttons from "./buttons.js"

function App() {
  return (
  <div >
      
    <p>ggggggggggggggggggggggggggggggg</p>

  <Grid  centered>
 <Grid.Row>
  <Image src ={test2} centered />

  </Grid.Row>

  <Grid.Row> 
  <div>
   <Buttons />

  </div>
  </Grid.Row>
</Grid>
 
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='comment alternate' style ={{Color:"white"}} />
        댓글
      </Header>
    </Divider>
   

   <Comments />


   <Divider horizontal>
      <Header as='h4'>
        <Icon name='assistive listening systems' />
        공유
      </Header>
    </Divider>
 
 
  <div>
    <br />
    <Grid centered>
   
    <Button circular color='facebook' icon='facebook' onClick = {()=>window.open("https://www.facebook.com")}/>
    <Button circular color='twitter' icon='twitter'  onClick={()=>alert("준비중입")}/>
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus'  />
  </Grid>

  </div>
  </div>  
  );
}

export default App; 
