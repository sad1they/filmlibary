'use client';

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme/theme';
import Header from '../../components/Header/Header';
import { RootNode } from '../../typisation/types/types';

const inter = Inter({ subsets: ['latin'] })

const MainLayout = ({children}: RootNode) => {
  return (
    <ThemeProvider theme={theme}>
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    </ThemeProvider>
  )
}

export default MainLayout;