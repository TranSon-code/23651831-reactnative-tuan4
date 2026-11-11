import React, { useState } from 'react';
import MainTabScr from './src/screens/gio5/MainTabScr';
import BookDetailScr from './src/screens/gio4/BookDetailScr';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'MAIN' | 'DETAIL'>('MAIN');

  if (currentScreen === 'DETAIL') {
    return <BookDetailScr onBack={() => setCurrentScreen('MAIN')} />;
  }

  return <MainTabScr onNavigateDetail={() => setCurrentScreen('DETAIL')} />;
}