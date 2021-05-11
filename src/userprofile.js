import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

const userprofile=()=>{
class UserGithub extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            githubtUrl: '',
            avatarUrl: '',
            followers: '',
            following: '',
            id: '',
            blog: '',
            location: '',
        }
    }
    componentDidMount(){
        $.get(this.props.source, (result)=>{
            console.log(result);
            const data=result;
            if(data){
                this.setState({
                    username: data.name,
                    id: data.id,
                    githubtUrl: data.html_url,
                    avatarUrl: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    blog: data.blog,
                    location: data.location,
                });
            }
        });
    }
    render(){
      return(
        <div>
          <h3>Name:{this.state.username}</h3>
          <h4>ID:{this.state.id}</h4>
          <h4>Location:{this.state.location}</h4>
          <img src={this.state.avatarUrl}/>
          <br></br>
          <h4>GitHub Link:
              <a href={this.state.githubtUrl}>Chia-Chi HSU's GitHub</a>
          </h4>
          <h4>Number of my GitHub's followers:{this.state.followers}</h4>
          <h4>Number of my GitHub's following:{this.state.following}</h4>
          <h4>Instagram Link:
              <a href={this.state.blog}>Chia-Chi HSU's Instagram</a>
          </h4>
        </div>
      );
    }
}
ReactDOM.render(
    <UserGithub source="https://api.github.com/users/ChiaChi-Hsu"/>,
    document.getElementById('root')
);
var output=[];
    output.push(<UserGithub/>)
    return output;
}

/*const userprofile=()=>{
    var output=[];
    output.push(<UserGithub/>)
    return output;
}*/
export default userprofile;