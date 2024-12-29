import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const InvoiceDetail = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Flights');
    const [selectedFlight, setSelectedFlight] = useState(null);
    const tabs = ['Flights', 'Train', 'Bus', 'Hotel', 'Tour'];

    const flightStops = [
        {
            time: "01:30",
            city: "Jakarta (CGK)",
            airport: "Soekarno-Hatta International Airport",
            terminal: "Terminal 3"
        },
        {
            time: "08:00",
            city: "Guangzhou (CAN)",
            airport: "Baiyun International Airport",
            terminal: "Terminal 2",
            duration: "4h 30m"
        },
        {
            time: "13:55",
            city: "Guangzhou (CAN)",
            airport: "Baiyun International Airport",
            terminal: "Terminal 2",
            duration: "3h 10m"
        },
        {
            time: "17:05",
            city: "Tokyo (HND)",
            airport: "Haneda International Airport",
            terminal: "Terminal 2"
        }
    ];

    const handleCardPress = (cardType) => {
        setSelectedFlight(selectedFlight === cardType ? null : cardType);
    };

    const renderBillingInfo = () => (
        <View style={styles.billingInfo}>
            <View style={styles.billingColumns}>
                <View style={styles.leftColumn}>
                    <Text style={styles.billingText}>
                        Billing to: <Text style={styles.blueText}>Emily Rose</Text>
                    </Text>
                    <Text style={styles.contactText}>(+62) 81355923718</Text>
                    <Text style={styles.contactText}>emilyroze@gmail.com</Text>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.billingText}>
                        Passport Number: <Text style={styles.blueText}>A1234567</Text>
                    </Text>
                    <Text style={styles.billingText}>
                        Visa Number: <Text style={styles.blueText}>V0023159</Text>
                    </Text>
                    <Text style={styles.billingText}>
                        Date: <Text style={styles.blueText}>19/07/2024</Text>
                    </Text>
                </View>
            </View>
        </View>
    );

    const renderDetailCard = () => (
        <View style={styles.detailCard}>
            <View style={styles.airlineHeader}>
                <View style={styles.airlineInfo}>
                    <Image 
                        source={require('../assets/JapanAirline.png')} 
                        style={styles.airlineIcon}
                    />
                    <Text style={styles.airlineName}>Japan Airlines</Text>
                </View>
                <Text style={styles.flightPrice}>Rp 3.956.400</Text>
            </View>
            
            <View style={styles.stopsContainer}>
                {flightStops.map((stop, index) => (
                    <View key={index} style={styles.stopItem}>
                        <View style={styles.timelineLeft}>
                            <Text style={styles.stopTime}>{stop.time}</Text>
                            <View style={styles.timelineDot} />
                            {index < flightStops.length - 1 && (
                                <View style={styles.timelineLine} />
                            )}
                        </View>
                        
                        <View style={styles.stopDetails}>
                            <Text style={styles.cityText}>{stop.city}</Text>
                            <Text style={styles.airportText}>{stop.airport}</Text>
                            <Text style={styles.terminalText}>{stop.terminal}</Text>
                            
                            {index === 1 && (
                                <View style={styles.layoverInfo}>
                                    <Text style={styles.layoverTitle}>
                                        Change planes in Guangzhou (5h 55m)
                                    </Text>
                                    <Text style={styles.layoverSubtitle}>Remember to:</Text>
                                    <Text style={styles.layoverText}>
                                        • Bring your passport and transit visa (if required)
                                    </Text>
                                </View>
                            )}
                            
                            {stop.duration && (
                                <View style={styles.durationBadge}>
                                    <Text style={styles.durationText}>{stop.duration}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );

    const renderFlightCard = (isJapanAirlines = false) => (
        <TouchableOpacity 
            style={styles.flightCard}
            onPress={() => handleCardPress(isJapanAirlines ? 'japanAirlines' : 'airAsia')}
        >
            <View style={styles.airlineHeader}>
                <View style={styles.airlineInfo}>
                    <Image 
                        source={isJapanAirlines ? 
                            require('../assets/JapanAirline.png') : 
                            require('../assets/AirAsia.png')} 
                        style={styles.airlineIcon}
                    />
                    <Text style={styles.airlineName}>
                        {isJapanAirlines ? 'Japan Airlines' : 'AirAsia Indonesia + HK Express'}
                    </Text>
                </View>
                <Text style={styles.flightPrice}>
                    {isJapanAirlines ? 'Rp 3.956.400' : 'Rp 4.708.400'}
                </Text>
            </View>
            <View style={styles.flightDetails}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{isJapanAirlines ? '01:30' : '12:10'}</Text>
                    <Text style={styles.locationText}>Jakarta</Text>
                </View>
                <View style={styles.flightPath}>
                    <View style={styles.pathLine} />
                    <Text style={styles.durationText}>1 stop</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{isJapanAirlines ? '17:05' : '22:55'}</Text>
                    <Text style={styles.locationText}>Tokyo</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <Image 
                        source={require('../assets/PanahKiri.png')} 
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Invoice</Text>
            </View>

            {renderBillingInfo()}

            <View style={styles.tabsWrapper}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={styles.tabsContainer}
                    contentContainerStyle={styles.tabsContentContainer}
                >
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.tab,
                                activeTab === tab && styles.activeTab
                            ]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText
                            ]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <ScrollView style={styles.content}>
                {selectedFlight === 'japanAirlines' ? 
                    renderDetailCard() : 
                    <>
                        {renderFlightCard(true)}
                        {renderFlightCard(false)}
                    </>
                }
            </ScrollView>

            <TouchableOpacity 
                style={styles.bottomBackButton}
                onPress={() => navigation.navigate('ListTrip')}
            >
                <Text style={styles.bottomBackText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    backButton: {
        padding: 8,
    },
    backIcon: {
        width: 24,
        height: 24,
        top: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
        top: 9,
        right: -100,
    },
    billingInfo: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    billingColumns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftColumn: {
        flex: 1,
        marginRight: 16,
    },
    rightColumn: {
        flex: 1,
    },
    billingText: {
        fontSize: 13,
        color: '#333',
        marginBottom: 1,
    },
    contactText: {
        fontSize: 13,
        color: '#1F79CC',
        marginBottom: 1,
    },
    blueText: {
        color: '#2196F3',
    },
    tabsWrapper: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    tabsContainer: {
        backgroundColor: 'white',
        height: 45,
    },
    tabsContentContainer: {
        paddingHorizontal: 8,
        alignItems: 'center',
    },
    tab: {
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#2196F3',
    },
    tabText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#666',
    },
    activeTabText: {
        color: '#2196F3',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    flightCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    detailCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    airlineHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    airlineInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    airlineIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    airlineName: {
        fontSize: 16,
        fontWeight: '500',
    },
    flightPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2196F3',
    },
    stopsContainer: {
        marginTop: 8,
    },
    stopItem: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    timelineLeft: {
        alignItems: 'center',
        marginRight: 16,
        width: 50,
    },
    timelineDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2196F3',
        marginVertical: 8,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: '#E0E0E0',
        position: 'absolute',
        top: 40,
        bottom: -16,
        left: 25,
    },
    stopTime: {
        fontSize: 14,
        fontWeight: '500',
    },
    stopDetails: {
        flex: 1,
    },
    cityText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    airportText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    terminalText: {
        fontSize: 14,
        color: '#666',
    },
    layoverInfo: {
        backgroundColor: '#E3F2FD',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
    },
    layoverTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#2196F3',
        marginBottom: 8,
    },
    layoverSubtitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    layoverText: {
        fontSize: 14,
        color: '#666',
    },
    durationBadge: {
        marginTop: 8,
    },
    durationText: {
        fontSize: 14,
        color: '#666',
    },
    flightDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    timeContainer: {
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    locationText: {
        fontSize: 12,
        color: '#666',
    },
    flightPath: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,
    },
    pathLine: {
        height: 2,
        backgroundColor: '#E0E0E0',
        width: '100%',
        marginBottom: 4,
    },
    bottomBackButton: {
        backgroundColor: '#2196F3',
        margin: 14,
        padding: 14,
        borderRadius: 25,
        alignItems: 'center',
    },
    bottomBackText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default InvoiceDetail;