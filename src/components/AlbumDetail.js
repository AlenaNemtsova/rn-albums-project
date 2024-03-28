import React from "react";
import { View, Text, Image, Linking } from "react-native";

import Item from './Item';
import ItemSection from "./ItemSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
    const { headerContainer, headerText, imageStyle } = styles;

    return (
        <Item>
            <ItemSection>
                <View style={headerContainer}>
                    <Text style={headerText}>{album.id}</Text>
                    <Text>{album.title}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image
                    style={imageStyle}
                    source={{ uri: album.thumbnailUrl }} />
            </ItemSection>
            <ItemSection>
                <Button buttonPress={() => {
                    Linking.openURL(album.url);
                }} />
            </ItemSection>
        </Item>
    );
};

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0
    }
};

export default AlbumDetail;