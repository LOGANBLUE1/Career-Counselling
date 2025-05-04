'use client';

import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import {Mail, Lock, User, Facebook, Twitter} from 'lucide-react';
import LoginSignupTemplate from '../components/LoginSignupTemplate';

const SignupPage = () => {
  return (
    <LoginSignupTemplate 
      title="ONLINE EDUCATION IS NOW SIMPLE"
      name="signup"
      imgurl="/images/student4.jpg"
    />
  );
};

export default SignupPage;
