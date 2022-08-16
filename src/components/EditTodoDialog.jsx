import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import {Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {MyContext} from "../context/MyContext";
import {useContext} from "react";

export default function EditTodoDialog() {
    const {isEditDialogOpen, setIsEditDialogOpen} = useContext(MyContext);

    const handleClose = () => {
        setIsEditDialogOpen(false);
    };

    return (
        <div>
            <Dialog open={isEditDialogOpen} onClose={handleClose} maxWidth={'md'} fullWidth>
                    <Grid container
                          justifyContent={'center'}
                          alignItems={'stretch'}
                          sx={{h:'100%',width:'100%'}}
                    >
                        <Grid item xs={5} sx={{backgroundColor:'#0C1251', p:5}}>
                            <Grid container sx={{height:'300px'}} direction={'column'} justifyContent={'space-between'}>
                                <Grid item xs={2}>
                                    <Typography  variant={'h5'} fontWeight={100}>
                                        Edit Item
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography variant={'h5'} fontWeight={100}>
                                        <Stack spacing={2}>
                                            <Button fullWidth variant={'outlined'} color={"secondary"} onClick={handleClose}>Cancel</Button>
                                            <Button fullWidth variant={'contained'} color={"secondary"}>Save</Button>
                                        </Stack>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={7} sx={{backgroundColor:'primary.dark', p:5}}>
                            <Stack spacing={5}>
                                <TextField
                                    variant={"outlined"}
                                    label="Todo Item"
                                />
                                <TextField
                                    variant={"outlined"}
                                    label="Author"
                                />
                            </Stack>

                        </Grid>

                    </Grid>
            </Dialog>
        </div>
    );
}
