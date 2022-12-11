import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'


interface PostI{
    id: string,
    image: string,
    type: string,
    title: string,
    bed: number,
    bedroom: number,
    oldPrice: number,
    newPrice: number,
    totalPrice: number,
    coordinate: {
        latitude: number,
        longitude: number,
    },
}


const Post = ({post} : PostI) => {


    return (
        <View style={styles.container}>

            {/* image */}
            <Image style={styles.postImage} source={{ uri: post.image }} />
            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text style={styles.description}>
                { post.type} { post.title}
            </Text>

            <View style={styles.prices}>
                <Text style={styles.oldPrice}>${ post.oldPrice}</Text>
                <Text style={styles.price}>${post.newPrice}/ night</Text>
            </View>
            <Text style={styles.totalPrice}>${post.totalPrice}</Text>
        </View>
    )
}




export default Post