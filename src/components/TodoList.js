import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <div className="TodoList">
                {this.props.match.params.name}
            </div>
        );
    }
}

export default TodoList;
