**7Mind Android App Login Automation using Appium, Mocha framework and JavaScript programming language.**

This project demonstrates 7Mind App Login Mobile Automation using Appium server, Appium Inspector, webdriverIO, Mocha framework, selenium standalone server, Android Emulator, VSCode on Windows OS.

**Setup and Dependencies**

- Java JDK [Click here to download latest version](https://www.oracle.com/java/technologies/downloads/) and follow installation sequence.
- Node.js [Click here to download latest version](https://nodejs.org/en/download/) and follow installation sequence.
- npm [No explicit installation required, it comes with node]
- Visual Studio Code [Click here to download latest version](https://code.visualstudio.com/download) and follow installation sequence.
- Android Studio [Click here to download latest version](https://developer.android.com/studio/install) and follow installation sequence. Pixel 2 was used to test this project. To select this in the emulator: Click on "configure" and select "AVD manager" then click on "Create virtual device". Select "Pixel 2" then select and download android version (for this project I used Android 11). Then click "Finish".
- Appium server [Click here to download latest version](http://appium.io/) and follow installation sequence. Click on Edit Configurations and set Environment Variables for ANDROID_HOME and JAVA_HOME correctly.
- Appium Inspector [Click here to download latest version](https://github.com/appium/appium-inspector). Open Appium Inspector and ensure "Remote host" is set as 127.0.0.1, "Remote port" is set as 4723, and remote path is set as "/wd/hub". **To set desired capabilities in Appium Inspector** select "Desired Capabilities", Click on "+ icon" three times and fill boxes as follows :

| Name            | select form | value                                        |
| --------------- | ----------- | -------------------------------------------- |
| platformName    | text        | Android                                      |
| platformVersion | text        | 11                                           |
| deviceName      | text        | pixel 2                                      |
| app             | text        | "**path of 7Mind app apk on your computer**" |

click on check box "Automatically add necessary Appium vendor prefixes on start" and then save.

**Steps to run this project**

- Clone repository https://github.com/Ayohbk/7Mind-Assignment,
- Launch Appium server,
- Launch Emulator in Android studio and switch ON device,
- Open Appium Inspector and select saved desired capabilities for the project, then click on "Start Session",
- Open cloned repository on VSCode and run "npm test" on VSCode terminal.

LOGIN Process with valid email and password is automated.
