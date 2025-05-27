import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../Config/Config';
import { TextField, MenuItem, Select, Button, Box, Typography, InputLabel, FormControl } from '@mui/material';

export default function Add() {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [address, setaddress] = useState("");
    const [mobile, setmobile] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const ref = collection(db, "appointments");
        await addDoc(ref, {
            name: name,
            age: age,
            gender: gender,
            address: address,
            mobile: mobile,
        }).then(() => {
            alert("Appointment added successfully.");
            setname("");
            setage("");
            setgender("");
            setaddress("");
            setmobile("");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                mt: 4,
                mx: "auto",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "#fff"
            }}
        >
            <Typography variant="h5" align="center" gutterBottom>
                Add New Appointment
            </Typography>
            <TextField
                label="Full Name"
                required
                fullWidth
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <TextField
                label="Age"
                required
                fullWidth
                type="number"
                inputProps={{ min: 0, max: 120 }}
                value={age}
                onChange={(e) => setage(e.target.value.replace(/\D/, ""))}
            />
            <FormControl fullWidth required>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                    labelId="gender-label"
                    value={gender}
                    label="Gender"
                    onChange={(e) => setgender(e.target.value)}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        Select Gender
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Address"
                required
                fullWidth
                value={address}
                onChange={(e) => setaddress(e.target.value)}
            />
            <TextField
                label="Mobile Number"
                type="tel"
                required
                fullWidth
                inputProps={{ pattern: "[0-9]{10,15}" }}
                value={mobile}
                onChange={(e) => setmobile(e.target.value.replace(/\D/, ""))}
                helperText="Enter a valid mobile number"
            />
            <Button variant="contained" type="submit" size="large">
                Submit
            </Button>
        </Box>
    )
}
