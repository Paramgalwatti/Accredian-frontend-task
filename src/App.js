import React, { useState } from 'react';
import Main from './components/Main';
import ReferralModal from './components/ReferralModal';
import { CssBaseline } from '@mui/material';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <CssBaseline />
      <Main openModal={openModal} />
      <ReferralModal open={modalOpen} handleClose={closeModal} />
    </div>
  );
};

export default App;
