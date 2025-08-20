import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image, Text, Platform, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ThemeContext from '../../theme/ThemeContext';

const ImageUpload = ({ text, bordercolor, borderwidth, borderstyle, onPress }) => {
    const { theme } = useContext(ThemeContext);
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        if (Platform.OS === 'web') {
            document.getElementById('fileInput').click();
        } else {
            let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (result.granted) {
                let pickerResult = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });

                if (!pickerResult.cancelled) {
                    setSelectedImage(pickerResult.uri);
                }
            } else {
                alert('Permission to access gallery was denied');
            }
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <View style={[styles.container, { borderColor: bordercolor, borderWidth: borderwidth, borderStyle: borderstyle }]}>
            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.image} />
            )}
            {Platform.OS === 'web' ? (
                <div
                    style={styles.dragDrop}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <input
                        type="file"
                        id="fileInput"
                        style={styles.fileInput}
                        onChange={handleImageUpload}
                    />
                </div>
            ) : (
                <Pressable style={[styles.imagePicker]} onPress={onPress}>
                    <View style={styles.row}>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
};

export default ImageUpload;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderColor: '#FF007E',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        margin: 10,
        maxHeight: 90,
        minHeight: 90,
        width: '100%',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    imagePicker: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        maxWidth: '35%',
        marginTop: 10,
        backgroundColor: '#FF007E',
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF', 
        backgroundColor: '#FF007E',
    },
    dragDrop: {
        padding: 20,
        borderRadius: 5,
        textAlign: 'center',
    },
    fileInput: {
        display: 'none',
    },
    button: {
        backgroundColor: '#FF007E',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});
