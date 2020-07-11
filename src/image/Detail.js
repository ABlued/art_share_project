import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const{location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return (
                <div>
                    <img src = {location.state.path} alt = {location.state.name} title = {location.state.name}/>
                    <h1 className="image__title">작품명 : {location.state.name} </h1>
                    <span className="image__year">작성일 : {location.state.year} </span>
                    <p className="image__author">작품설명 : {location.state.author.slice(0,90)} </p>
                    <p className="image__rating">평점 : {location.state.rating} / 5.0</p>
                </div>  
            )
        } else {
            return null;
        }
        
    }
}
/*function Detail(props){
    return console.log(props);
}
*/
export default Detail;