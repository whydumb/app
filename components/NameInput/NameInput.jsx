import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const NameInput = ({ label, placeholder, keyboardType }) => {
    const { theme, darkMode } = useContext(ThemeContext);
    const [selectedTitle, setSelectedTitle] = useState('Mr.');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [name, setName] = useState('');

    const titles = ['Mr.', 'Ms.', 'Mrs.'];

    const handleSelectTitle = (title) => {
        setSelectedTitle(title);
        setIsDropdownVisible(false);
    };

    return (
        <View style={styles.inputBox}>
            <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
            <View style={styles.inputWrapper}>
                <Pressable style={styles.dropdownContainer} onPress={() => setIsDropdownVisible(true)}>
                    <Text style={[styles.dropdownText, { color: theme.color }]}>{selectedTitle}</Text>
                </Pressable>
                <View style={styles.divider} />
                <TextInput
                    style={[styles.input, { color: theme.color }]}
                    placeholderTextColor={darkMode ? '#ffffff' : '#808080'}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <Modal
                visible={isDropdownVisible}
                transparent={true}
                animationType="fade"
            >
                <TouchableWithoutFeedback onPress={() => setIsDropdownVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <FlatList
                                data={titles}
                                renderItem={({ item }) => (
                                    <Pressable style={styles.modalItem} onPress={() => handleSelectTitle(item)}>
                                        <Text style={styles.modalItemText}>{item}</Text>
                                    </Pressable>
                                )}
                                keyExtractor={(item) => item}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default NameInput;

const styles = StyleSheet.create({
    inputBox: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FF007E',
        borderRadius: 15,
    },
    dropdownContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    dropdownText: {
        fontSize: 16,
    },
    divider: {
        width: 1,
        height: 40,
        backgroundColor: '#FF007E',
    },
    input: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
    },
    modalItem: {
        padding: 10,
    },
    modalItemText: {
        fontSize: 16,
    },
});
