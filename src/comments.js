
import React from 'react';
import {Button, Comment, Form, Header,Icon} from 'semantic-ui-react' 
import moment from "moment"

function SingleComment(detail){
    return (  
    <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>방문자</Comment.Author>
          <Comment.Metadata>
            <div>{detail.info.time}</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>{detail.info.content}</p>
          </Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Jenny Hess</Comment.Author>
              <Comment.Metadata>
                <div>Just now</div>
              </Comment.Metadata>
              <Comment.Text>Elliot you are always so right :)</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Comment>)
}


class Comments extends React.Component{

    constructor(){
        super()
        this.state={
            inputContent:"",
            inputTime: "",
            commentsList: []
            
             
        }
    }

    render(){ 
        console.log(this.state.inputContent)
    return( 
    <Comment.Group style= {{marginLeft:"300px"}}>
        <Header as='h3' dividing>
          Comments
        </Header>
    
         
    
       {this.state.commentsList.map(comments => <SingleComment info = {comments}/>)}
    
            
    
        <Form reply>
          <Form.TextArea 
           value = {this.state.inputContent} 
          placeholder="댓글입력 ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ"
          onChange ={(e)=>this.setState({inputContent : e.target.value})}
           />

          <Button content='Add Reply'
           labelPosition='left'
            icon='edit' 
            primary  
          onClick = {()=>{if (this.state.inputContent !=""){
            this.setState((prevState)=>{
                return{
                    commentsList:[...prevState.commentsList,{content: this.state.inputContent ,time: moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초 ")}],
                };
                   
               } )
          }
        else{
            alert("내용을 입력해주세요")
        }
        } 
            } 
           />
        </Form>

     


      </Comment.Group>
      )}
    }
    
    export default Comments