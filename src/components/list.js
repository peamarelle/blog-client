import React, { Component } from 'react'
import axios from 'axios'

export default class list extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({ posts: res.data });
        console.log(this.state)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    List
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.posts.map(post =>
                                <li className="list-group-item list-group-item-action" key={post.id}>
                                    {post.title}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
