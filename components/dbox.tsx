import React from 'react';
import Link from 'next/link';
import { VT323 } from 'next/font/google';

const vt = VT323({ weight: '400', subsets: ['latin'] });

type DBoxProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    props?: any;
    domainlink: string;
};

export default function DBox(props: DBoxProps) {
    return (
        <div className={[props.className, '  bg-[#00000093] text-white'].join(' ')} id={props.id} style={props.style} {...props.props}>
            <Link href={['https://', props.domainlink].join('')} className={['text-3xl text-center text-white font-bold font-assistant', vt.className].join(' ')}>{props.title}</Link>
            <div className='flex flex-col items-center justify-center w-full h-full p-4 space-y-4 rounded-xl'>
                {props.children}
            </div>
        </div>
    );
}
