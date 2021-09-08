import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faMusic } from '@fortawesome/free-solid-svg-icons';
import items from './items';

const Menu = () => {
    return (
        <View style={styles.menuItems}>
            {items.map(item => (
                <TouchableOpacity key={item.id}>
                    <View style={styles.menuRow}>
                        <FontAwesomeIcon size={24} style={styles.icon} icon={item.icon} />
                        <View style={styles.menuTextBox}>
                            <Text style={styles.menuText}>{item.title}</Text>
                            {item.subTitle && <Text style={styles.subTitle}>{item.subTitle}</Text>}
                        </View>
                        <FontAwesomeIcon size={24} style={styles.arrowIcon} icon={faChevronRight} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Menu;
