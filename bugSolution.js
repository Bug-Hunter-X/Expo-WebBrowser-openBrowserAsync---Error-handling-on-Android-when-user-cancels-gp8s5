import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://www.example.com');
    console.log({ result });
  } catch (error) {
    // Handle errors gracefully, including cases where the user cancels.
    console.error('Error opening browser:', error);
    if (error.message.includes("cancelled")) {
      console.log('User cancelled browser navigation');
      // Add your custom error handling logic here.
    } else {
      // Handle other error types appropriately
      console.log("Another error occurred")
    }
  }
}

//This is an improved version that handles the undefined result object when the user cancels the browser navigation on Android.