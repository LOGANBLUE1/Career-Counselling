'use client';
import React from 'react';
import Image from 'next/image';


export const Section = ({ id, title, lastWord, description, imageSrc, imageAlt, reverse }) => {
  return (
    <section className="mb-18 p-2">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} gap-8 items-center`}>
        <div className='flex-1'>
          <h1 className={`${id == 1 ? 'text-4xl sm:text-4xl md:text-4xl lg:text-5xl' : 'text-3xl sm:text-3xl md:text-3xl lg:text-4xl'} font-semibold mb-4`}>
            {title} <span className="text-green-600">{lastWord}</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-black">{description}</p>
        </div>
        <div className='flex-1'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={425}
            height={425}
            className={`${reverse ? 'rounded-full' : 'rounded-md'}`}
          />
        </div>
      </div>
    </section>

  );
};
