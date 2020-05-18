import * as Font from 'expo-font';

export const bootstrap = async () => {
  await Font.loadAsync({
    'openSans-bold' : require('../assets/fonts/OpenSans-Bold.ttf'),
    'openSans-regular' : require('../assets/fonts/OpenSans-Regular.ttf')
  })
}
