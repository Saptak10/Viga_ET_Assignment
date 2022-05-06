import React from 'react'

import { theme } from '../../utils/theme';
import { ThemeProvider  } from '@mui/material/styles';

import Spash from '../../views/spash/Spash';
import Login from '../../views/login/Login';
import Onboard1 from '../../views/onboarding screens/onboard1/Onboard1';
import Onboard2 from '../../views/onboarding screens/onboard2/Onboard2';
import Onboard4 from '../../views/onboarding screens/onboard4/Onboard4';
import Onboard3 from '../../views/onboarding screens/onboard3/Onboard3';
import { Home } from '../../views/home/Home';
import { Settings } from '../../views/settings/Settings';
import { Check } from '../../views/check/Check';
import { Exam } from '../../views/exam/Exam';

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
        <Spash />
        {/* <Login /> */}
        {/* <Onboard1/>   */}
        {/* <Onboard2/>   */}
        {/* <Onboard3/>   */}
        {/* <Onboard4/>  */}
        {/* <Home /> */}
        {/* <Settings /> */}
        {/* <Check /> */}
        {/* <Exam />  */}
    </ThemeProvider>
    
  )
}

export default Content