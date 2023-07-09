'use client';

import React, { StrictMode } from 'react'
import { CacheProvider } from "@emotion/react";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../theme/theme';
import Header from '../Header/Header';
import { RootNode } from '../../typisation/types/types';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Footer from '../Footer/Footer';
import createEmotionCache from '@/utils/createEmotionCache';

const inter = Inter({ subsets: ['latin'] });
const clientSideEmotionCache = createEmotionCache();

const MainLayout = ({children}: RootNode) => {
    return (
        <StrictMode>
            <Provider store={store}>
                <CacheProvider value={clientSideEmotionCache}>
                    <ThemeProvider theme={theme}>
                        <html lang="en">
                            <body className={inter.className}>
                                <Header />
                                {children}
                                <Footer />
                            </body>
                        </html>
                    </ThemeProvider>
                </CacheProvider>
            </Provider>
        </StrictMode>
    )
}

export default MainLayout;