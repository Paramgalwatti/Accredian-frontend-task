import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const ReferralModal = ({ open, handleClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        borderRadius: 2, 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Your Name"
            {...register('referrerName', { required: true })}
            error={!!errors.referrerName}
            helperText={errors.referrerName && 'Name is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            {...register('referrerEmail', { required: true })}
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail && 'Email is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Friend's Name"
            {...register('refereeName', { required: true })}
            error={!!errors.refereeName}
            helperText={errors.refereeName && 'Name is required'}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Friend's Email"
            {...register('refereeEmail', { required: true })}
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail && 'Email is required'}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
