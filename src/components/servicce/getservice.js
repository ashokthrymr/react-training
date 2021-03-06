import React, { Component } from 'react';
class Getservice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultList: []
        }
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        // .then(response => {
        //     let data=response;
        //     console.log(data);

        //     this.setState({
        //         resultList:data
        //     })
        // })
       fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                let data = json;
                this.setState({
                    resultList: data
                })
            })


    }
    render() {
        const list = this.state.resultList.map((ele, index) => {
            return (
                <tr key={index}>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.userId}</td>
                </tr>
            )
        })
        return (
            <div>
                <div>get service</div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Getservice