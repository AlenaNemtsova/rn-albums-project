import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";

import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
    constructor() {
        super();
        this.state = { albumList: [] };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then((response) => this.setState({ albumList: response.data }))
    }

    renderList = () => {
        return this.state.albumList.map((album) => {
            return <AlbumDetail key={album.id} album={album} />
        })
    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }
}

export default AlbumList;