import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Index from '../pages/index/index.jsx';
import Login from '../pages/login/index.jsx';


// 使用store的方法
import { useLocalReducer } from '../store/useLocalReducer';
import { context } from '../hooks/useLocalContext';


const BasicMap = () => {

  const [state, dispatch] = useLocalReducer();

  return (
    <context.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </context.Provider>
  );
}

export default BasicMap
