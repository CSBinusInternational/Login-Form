import React from "react";
import { Paper, Grid, Typography, TextField, Button, Link } from "@material-ui/core";

function Login() {
const paperStyle={padding :20,height:'70vh',width:280, margin:"70px auto"}
const titleStyle={marginBottom: 30}
const btnStyle={margin:'8px 0'}

return (
    <div className="Login">
        <Paper style={paperStyle}>
            <Grid container>
                <Typography variant="h2" style={titleStyle}>Login</Typography>
                <Grid item>
                    <TextField
                        label="Username"
                        placeholder="Enter your username"
                        fullWidth required
                    />
                    <TextField
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        fullWidth required
                    />

                    <Button style={btnStyle}
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Login
                    </Button>

                    <Typography><Link href="#">Forgot Password?</Link></Typography>

                    <Typography>Don't have an account? <Link href="#">Register</Link></Typography>

                </Grid>
            </Grid>
        </Paper>
    </div>
  );
}

export default Login;