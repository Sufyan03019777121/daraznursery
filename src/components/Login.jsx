import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      await axios.post('/api/auth/send-otp', { mobile });
      setIsOtpSent(true);
      alert('OTP sent to your mobile');
    } catch (err) {
      console.error(err);
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post('/api/auth/verify-otp', { mobile, otp });
      alert('Login successful');
      localStorage.setItem('userToken', res.data.token);
    } catch (err) {
      console.error(err);
      alert('Invalid OTP');
    }
  };

  return (
    <Container className="mt-4">
      <h2 className='text-primary'>Login with Mobile Number</h2>
      <Form>
        <Form.Group controlId="mobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="03XXXXXXXXX"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </Form.Group>

        {isOtpSent && (
          <Form.Group controlId="otp" className="mt-3">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </Form.Group>
        )}

        <Button
          variant="primary"
          className="mt-3"
          onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
        >
          {isOtpSent ? 'Verify OTP' : 'Send OTP'}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;