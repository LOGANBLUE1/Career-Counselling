'use client';

import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from "react-redux"
import {Mail, Lock, User, Facebook, Twitter} from 'lucide-react';
import SignupForm from "./auth/SignupForm" 


const LoginSignupTemplate = ({title, name, imgurl}) => {
    const { loading } = useSelector((state) => state.auth)
  return (
    <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="hidden md:flex flex-col justify-center items-center p-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
              <Image
                src={imgurl}
                alt="Signup Illustration"
                width={400}
                height={300}
              />
            </div>
            <SignupForm name={name} />
          </div>
        </div>
  )
}

export default LoginSignupTemplate;