import React, {useEffect} from 'react';

import RootNavigation from './src/logic/navigation/RootNavigation';
import {Appearance} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => Appearance.setColorScheme('light'), []);
  return <RootNavigation />;
}

export default App;
