'use client';

import React, { StrictMode } from 'react';
import { Inter } from 'next/font/google';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import theme from '../../theme/theme';
import Header from '../Header/Header';
import { RootNode } from '../../typisation/types/types';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Footer from '../Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({children}: RootNode) => {
    return (
        <StrictMode>
            <Provider store={store}>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <html lang="en">
                            <body className={inter.className}>
                                <Header />
                                {children}
                                <Footer />
                            </body>
                        </html>
                    </ThemeProvider>
                </StyledEngineProvider>
            </Provider>
        </StrictMode>
    )
}

export default MainLayout;