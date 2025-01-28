import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://www.example.com');
  console.log({ result });
}

// This will cause an error in Expo Go on Android if the user cancels the browser navigation.
// It seems like the result.type is not available in that scenario.
// The app will crash with an error like: TypeError: Cannot read properties of undefined (reading 'type')
// This only happens when the user cancels navigation and no url is opened