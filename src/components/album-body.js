import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './album-details';

// const RegistrationBody = () => {
//     return <Text>Album Body</Text>;
// }

class AlbumBody extends Component {

    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return <AlbumDetail key={album.title} dataPassed={album} />
            //return (<Text key={album.title}>{album.title}</Text>);
        });
    }

    render() {
        //return <Text>Album Body</Text>;
        //console.log("rendering albums : ",this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumBody;