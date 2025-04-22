import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';

const NavigationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Left Side: Search Bar and List Items */}
      <View style={styles.leftContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.listContainer}>
          {[...Array(3)].map((_, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listItemText}>ID Name:</Text>
              <Text style={styles.listItemText}>Location of Admin</Text>
              <Text style={styles.listItemText}>Location of Incident</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Right Side */}
      <View style={styles.rightContainer}>
        {/* Top Section: Map */}
        <View style={styles.mapContainer}>
          {Platform.OS === 'web' ? (
            <WebView
              source={{
                html: `
                  <!DOCTYPE html>
                  <html>
                  <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link
                      rel="stylesheet"
                      href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    />
                    <style>
                      #map {
                        width: 100%;
                        height: 100%;
                      }
                    </style>
                  </head>
                  <body>
                    <div id="map"></div>
                    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
                    <script>
                      const map = L.map('map').setView([0, 0], 16);
                      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: 'Map data © OpenStreetMap contributors',
                      }).addTo(map);
                    </script>
                  </body>
                  </html>
                `,
              }}
              style={{ flex: 1 }}
            />
          ) : (
            <Text>Map is not available on mobile yet.</Text>
          )}
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>ID Name</Text>
          <Text style={styles.bottomText}>Location:</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  leftContainer: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  filterButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
  },
  rightContainer: {
    flex: 2,
    padding: 10,
  },
  mapContainer: {
    height: 200, // Adjust the height of the map
    marginBottom: 10,
  },
  bottomContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  bottomText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default NavigationScreen;