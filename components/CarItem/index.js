import React, { useState } from 'react';
import { View, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu';

const CarItem = () => {
    const [locked, setLocked] = useState(false);
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} size={24} icon={faCog} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>MugdhoCars</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} size={24} icon={faToolbox} />
                </TouchableOpacity>
            </View>

            {/* Mileage */}
            <View style={styles.batterySection}>
                <Image source={require('../../assets/battery.png')} style={styles.batteryImage} />
                <Text style={styles.batteryText}>150 mi</Text>
            </View>

            {/* Status */}
            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
            </View>

            <ScrollView>
                {/* Control Icons */}
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={faFan} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={faKey} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLocked(!locked)}>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlockAlt} />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Menu */}
                <Menu />
            </ScrollView>
        </View>
    );
};

export default CarItem;
