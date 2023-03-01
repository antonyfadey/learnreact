import React, { useState } from 'react';
import '../styles/FormPage.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "yup-phone-lite";
import api from '../../../src/utils/api';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Alert, Button, Paper, Snackbar, TextField, } from '@mui/material';

const FormPage = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const navigate = useNavigate();

    function onNavBack() {
        navigate('/', { replace: true });
    }

    const validation = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        phone: yup
            .string()
            .phone("RU", "Enter a valid phone")
            .min(11, "Enter a valid phone")
            .max(12, "Enter a valid phone")
            .required('Phone is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },
        validationSchema: validation,
        onSubmit: (values) => {
            api.post(values).then(() => {
                setOpenAlert(true);
            });
        },
    });

    return (
        <div className='fullWidth'>
            <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={onNavBack} className='button-back'>
                Back
            </Button>
            {/* <Card variant='elevation'> */}
            <form onSubmit={formik.handleSubmit} className='form-page'>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin='dense'
                />
                <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone number"
                    type="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    margin='dense'
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
            {/* </Card> */}
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={() => setOpenAlert(false)}>
                <Alert onClose={() => setOpenAlert(false)} severity='success' sx={{ width: '100%' }}>
                    Success submit!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default FormPage;
