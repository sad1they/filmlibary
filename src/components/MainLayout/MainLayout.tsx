'use client';

import React, { StrictMode } from 'react'
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import Header from '../Header/Header';
import { RootNode } from '../../typisation/types/types';
import { Provider } from 'react-redux';
import store from '../../store/store';

const inter = Inter({ subsets: ['latin'] })

const MainLayout = ({children}: RootNode) => {
    return (
        <StrictMode>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <html lang="en">
                        <body className={inter.className}>
                            <Header />
                            {children}
                        </body>
                    </html>
                </ThemeProvider>
            </Provider>
        </StrictMode>
    )
}

export default MainLayout;