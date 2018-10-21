import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card-section';
import Button from'./button';

const AlbumDetail = ({ dataPassed }) => {
    //making use of destructuring
    const { title, artist, thumbnail_image, image, url } = dataPassed;
    const { albumDetailsContainer,
        titleTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}></Image>
                </View>
                <View style={albumDetailsContainer}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                    <Image style={imageStyle} source={{ uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPressEvent={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    albumDetailsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleTextStyle : {
        fontSize : 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight : 10
    },
    imageStyle : {
        height : 200,
        flex: 1,
        width : null
    }
}

// {
// <Text>{props.dataPassed.title}</Text>
// <Text>{props.dataPassed.artist}</Text> }
export default AlbumDetail;