import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import axios from '../../../node_modules/axios/index';

//회원가입
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        minaci Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      user_id: data.get('user_id'),
      password: data.get('password'),
      username: data.get('username'),
    });

    if (
      data.get('user_id') !== null &&
      data.get('password') !== null &&
      data.get('username') !== null
    ) {
      const response = axios
        .post('/api/v1/join', {
          user_id: data.get('user_id'),
          password: data.get('password'),
          username: data.get('username'),
        })
        .then((response) => {
          console.log('정상!');
          console.log(response.data);
          alert('정상적으로 회원가입 되었습니다. 로그인페이지 고고~');
          navigate('/');
        });
    } else {
      alert('양식이 누락되었습니다.');
    }
  };

  const handlePasswordValidation = (event) => {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (validatePassword(password)) {
      alert('비밀번호가 유효합니다.');
      // 비밀번호가 유효할 때 추가적인 작업을 수행할 수 있습니다.
    } else {
      alert('비밀번호는 최소 8자 이상이어야 합니다.');
      // 비밀번호가 유효하지 않을 때 추가적인 작업을 수행할 수 있습니다.
    }
  };

  function validatePassword(password) {
    return password.length >= 8;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  user_id="user_id"
                  label="아이디"
                  name="user_id"
                  autoComplete="user_id"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  username="username"
                  label="이름"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handlePasswordValidation}
                >
                  비밀번호 검증
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 0, mb: 2 }}
                >
                  회원가입
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  이미 회원이신가요? 로그인
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
