import React from 'react';
import {Button} from 'semantic-ui-react' 

class Buttons extends React.Component{

    constructor(){
        super()
        this.state={
            likes:0
        }
    }

render(){
    return(
        <>
        <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, 
        color: 'red',
         pointing: 'left', 
         content: this.state.likes,
        
        }}

        onClick= { () =>this.setState(prevState =>{
            return {likes : prevState.likes+1}
        })}

    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
    />

      </>

    )


}

}

export default Buttons