import React, { useState } from "react";
import { TextInput, View, Pressable, StyleSheet, Alert } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = () => {
		onSearch(searchQuery);
	};

	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchIcon}>
				<MaterialCommunityIcons
					name="search-web"
					size={28}
					color="black"
				/>
			</View>

			<TextInput
				style={styles.searchInput}
				placeholder="Search or ask a question.."
				placeholderTextColor="#4F5456"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
				autoCapitalize="none"
				autoCorrect={true}
			/>
			<View style={styles.extraIcons}>
				<Pressable
					style={styles.lensIcon}
					onPress={() => Alert.alert("Google lens")}
				>
					<MaterialCommunityIcons
						name="google-lens"
						size={28}
						color="#6C7072"
					/>
				</Pressable>
				<Pressable
					style={styles.microphoneIcon}
					onPress={() => Alert.alert("Microphone")}
				>
					<MaterialCommunityIcons
						name="microphone-outline"
						size={28}
						color="#6C7072"
					/>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	searchContainer: {
		// flex: 0.9,
		borderWidth: 2,
		borderRadius: 20,
		// paddingHorizontal: 3,
		borderColor: "#0D4876",
		backgroundColor: "#E1F3FF",
		// width: "100%",
		flexDirection: "row",
		// justifyContent: "space-between",
		// alignItems: "center",
		gap: 0,
		// marginVertical: 10,
	},

	searchIcon: {
		flex: 0.11,
		// borderWidth: 1,
		// borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		// paddingLeft: 10,
	},
	searchInput: {
		flex: 0.67,
		// borderWidth: 1,
		// width: "60%",
	},
	extraIcons: {
		flex: 0.22,
		flexDirection: "row",
		// borderWidth: 1,
		gap: 1,
	},
	lensIcon: {
		flex: 0.5,
		// borderWidth: 1,
		// width: 30,
		// marginLeft: 5,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	microphoneIcon: {
		flex: 0.5,
		// borderWidth: 1,
		// width: 30,
		// marginLeft: 5,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default SearchBar;
