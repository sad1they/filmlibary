import './globals.css';
import MainLayout from '../../components/MainLayout/MainLayout'
import { RootNode } from '../../types/types';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: RootNode) {
    return (
      <MainLayout>{children}</MainLayout>
    )
}
