import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const HelloWorld = () => <div>Hello World!</div>;

createRoot(document.getElementById('root')!).render(<HelloWorld />);
