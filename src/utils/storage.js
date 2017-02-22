import { AsyncStorage } from 'react-native';

class Storage {

	save(key, value) {
		let result = value;
		if (value && typeof value === 'object' || typeof value === 'number') {
			result = JSON.stringify(value);
		}
		return AsyncStorage.setItem(key, result);
	}

	async get(key) {
		const value = await AsyncStorage.getItem(key);
		let result;
		try {
			result = JSON.parse(value);
		} catch(e) {
			result = value;
		} finally {
			return result;
		}
	}

	remove(key) {
		return AsyncStorage.removeItem(key);
	}

	clear() {
		return AsyncStorage.clear();
	}

}

const instance = new Storage();
export default instance;
