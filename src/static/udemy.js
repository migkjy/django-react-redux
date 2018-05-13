import React, { Component } from 'react';

class Udemy extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            headerText: 'welcome',
            contentText: 'content'
        };
    }

    render() {
        return (
            <div>
                <h1>Practicing</h1>
                <Clock />
                {/* <h2>{this.state.headerText}</h2> */}
                {/* <p>{this.state.contentText}</p> */}
                {/* <Content /> */}
            </div>
        );
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        this.timeID = setInterval(
            () => { this.tick(); }
            , 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    render() {
        return (
            <div>
                <h2>the time is: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}


// class Content extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {
//                     id: 1,
//                     name: 'Foo',
//                     age: '30'
//                 },
//                 {
//                     id: 2,
//                     name: 'Boo',
//                     age: '35'
//                 }
//             ]
//         };
//     }

//     render() {
//         return (
//             <p>
//                 <h1>this is the contents</h1>
//                 <p>fofofo</p>
//                 <table>
//                     <thead>
//                         <th>
//                             <td>ID</td>
//                             <td>NAME</td>
//                             <td>AGE</td>
//                         </th>
//                     </thead>
//                     <tbody>
//                         {this.state.data.map((person, i) => { return <TableRow key={i} data={person} />; })}
//                     </tbody>
//                 </table>
//             </p>
//         );
//     }
// }

// class TableRow extends Component {
//     render() {
//         return (
//             <tr>
//                 <td>{this.props.data.id}</td>
//                 <td>{this.props.data.name}</td>
//                 <td>{this.props.data.age}</td>
//             </tr>
//         );
//     }
// }

export default Udemy;
