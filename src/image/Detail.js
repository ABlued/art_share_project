import React from 'react';
import './Detail.css';
import Home from './Home';
import { Link } from 'react-router-dom';

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
                <div className="container_Detail">
                     <Link to="/" >
                    <img src = {location.state.path} alt = {location.state.name} title = {location.state.name}/>
                    </Link>
                    <div className="container_Detail_sentence">
                        <h1 className="image__title">작품명 : {location.state.name} </h1>
                        <span className="image__year">작성일 : {location.state.year} </span>
                        <p className="image__author">작품설명 : {location.state.author.slice(0,90)} </p>
                        <p className="image__rating">평점 : {location.state.rating} / 5.0</p>
                        <p>상세 설명은 구현중입니다...</p>
                    </div>
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