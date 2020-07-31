import { NativeModules } from 'react-native';

const { RNBackstage } = NativeModules;

const Backstage = {
	moveTaskToBack(fn) {
		RNBackstage.MoveTaskToBack((e) => {
			fn && fn(e);
		});
	}
};

export default Backstage;
