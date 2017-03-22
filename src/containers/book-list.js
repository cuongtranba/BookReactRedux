import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//this aware of state so it is a container
class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return(
                <li 
                    onClick={()=>this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>                
        );
    }
};

function mapStateToProps(state){
    // parameter state pass from reducers index.js
    return{
        books: state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);