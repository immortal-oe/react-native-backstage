<p align="center">
  <h1 align="center">react-native-backstage</h1>
  <h2 align="center">一般来说，app每次退出，然后再次进入app，则会重新重启动页加载一次，
	这样会使app到存活率(存在时间)变低，而react-native-backstage则会让app退出到后台，再次点击app则会回到原来到页面，包括状态都不会重新加载，这样使app的存活率(存在时间)变低，
	例如支付宝，微信都使用的此功能，来增加存活率</h1>
</p>


Getting started
---------------

Install `react-native-backstage` using npm.

```shell
npm install react-native-backstage
// or 
yarn add react-native-backstage
```

## Examples

The source code for the example (showcase) app is under the [`Example/`](https://github.com/XPgan/react-native-backstage/tree/master/example) directory.
If you want to play with the API but don't feel like trying it on a real app, you can run the example project. Clone the repo, go to the Example/ folder and run:

```
yarn install
```

### Running on Android

Run the react native's cli command:

```
react-native run-android
```

```js
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
```


## License

么有

## Credits

么得