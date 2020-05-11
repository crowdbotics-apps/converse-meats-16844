import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item42710Navigator from '../features/Add-Item42710/navigator';
import Maps42709Navigator from '../features/Maps42709/navigator';
import UserProfile42508Navigator from '../features/UserProfile42508/navigator';
import Maps42504Navigator from '../features/Maps42504/navigator';
import Add-Item42500Navigator from '../features/Add-Item42500/navigator';
import Maps42499Navigator from '../features/Maps42499/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Add-Item42710: { screen: Add-Item42710Navigator },
Maps42709: { screen: Maps42709Navigator },
UserProfile42508: { screen: UserProfile42508Navigator },
Maps42504: { screen: Maps42504Navigator },
Add-Item42500: { screen: Add-Item42500Navigator },
Maps42499: { screen: Maps42499Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
