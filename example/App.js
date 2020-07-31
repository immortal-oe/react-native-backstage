import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';

import Backstage from 'react-native-backstage';

const App = () => {
	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', onBackPress);
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		};
	}, []);

	const onBackPress = () => {
		// 通过 moveTaskToBack() 使app退出到后台
		Backstage.moveTaskToBack((e) => {
			// 返回是否退出成功
			console.log(e);
		});
		return false;
	};

	const [ num, useNum ] = useState('11111');

	return (
		<View style={styles.container}>
			<Text
				onPress={() => {
					useNum('99999');
				}}
			>
				点击此处，再按下安卓返回{num}
			</Text>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
