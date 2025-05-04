'use client';

import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {Mail, Lock, Facebook, Twitter} from 'lucide-react';
import LoginSignupTemplate from '../components/LoginSignupTemplate';

const LoginPage = () => {
  return (
    <LoginSignupTemplate 
      title="ONLINE EDUCATION IS NOW SIMPLE"
      name="login"
      imgurl="/images/student3.jpg"
    />
  );
};

export default LoginPage;
