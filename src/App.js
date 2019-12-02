import React from 'react';

import './App.css';
import marked from 'marked';
import {FaPencilAlt} from 'react-icons/fa';
import {FaEye} from 'react-icons/fa';



const editor ='![alt text](https://tse1.mm.bing.net/th?id=OIP.YuZrmECPHDAyz5d3glXg2QHaEj&pid=Api&rs=1&c=1&qlt=95&w=158&h=97)\n\n  > "Knowledge and skill acquired by hard work will be of great help in difficult times!"\n \n # Welcome to Markdown-Previewer\n  \n ## a second project:\n  ```All:\nBuild a Random Quote Machine \nBuild a Markdown Previewer \nBuild a Drum Machine \nBuild a JavaScript Calculator  \nBuild a Pomodoro Clock\n```  \n\n The link is here [FreeCodeCamp](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).\n\n You need to use **the Marked library**. \n\nThis project is a good way to practice:\n - React,\n - JavaScript, \n - HTML/CSS. \n\n  \n\n`Have a nice day`';
   
   marked.setOptions({ breaks: true });
 

const Preview = (props) => {
  return (
    <div 
      id="preview"
      dangerouslySetInnerHTML={
        {__html: marked(props.text, { renderer: new marked.Renderer() })}
      }
     />
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { text: editor }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({text: e.target.value});
  }
  render() {
    return (
      <div>
      <div className="col-lg-12">
        <h1 className="title">Markdown Previewer</h1>
         <hr/>
      </div>
      
        <EditorWindow 
        text={this.state.text} 
        onChange={this.handleChange}/>

        <PreviewerWindow text={this.state.text} />
      </div>
    )
  }
}



class EditorWindow extends React.Component {
  render() {
    return (
      <div className="classHalf" >

        <div>
            <FaPencilAlt  className="icon"/>
            <h2>Editor</h2>
        </div>
        <div>
        <textarea 
          id="editor"
          onChange={this.props.onChange}
          value={this.props.text} 
         />
         </div>
      </div>
    )
  }
}

class PreviewerWindow extends React.Component {

  render() {
    return (
      <div className="classHalf">
          <div>
          <FaEye className="icon"/>
            <h2>Previewer</h2>
          </div>
       
        {Preview({text: this.props.text})}
      </div>
    )
  }
}






export default App;
