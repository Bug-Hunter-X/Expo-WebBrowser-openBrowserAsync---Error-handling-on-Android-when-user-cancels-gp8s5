# Expo WebBrowser openBrowserAsync - Error Handling on Android When User Cancels

This repository demonstrates a bug in Expo's WebBrowser API on Android. When using `openBrowserAsync` and the user cancels the browser navigation, the promise rejects without providing a meaningful error message, resulting in a crash. This issue does not occur on iOS. 

## Bug Description

The `WebBrowser.openBrowserAsync` function in Expo doesn't reliably handle cancellation on Android.  If the user cancels the browser navigation,  the returned promise rejects, and accessing `result.type` throws a `TypeError: Cannot read properties of undefined (reading 'type')` because the `result` object is undefined. This leads to application crashes.

## Steps to Reproduce

1. Run the `bug.js` file in Expo Go on an Android device.
2. Tap the button to open the URL.
3. Immediately cancel or close the browser window that appears. 
4. Observe the app crash and the error message in the console.

## Solution

The `bugSolution.js` file provides a solution by checking if the `result` object is undefined before accessing its properties. This prevents the crash and allows for graceful error handling. 

## Additional Notes
This issue has been tested on various Android versions and Expo SDK versions.