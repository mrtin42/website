import React from 'react';
import Link from 'next/link';


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
        <div className={props.className} id={props.id} style={props.style} {...props.props}>
            <Link href={['https://', props.domainlink].join('')} className='text-3xl text-center text-white font-bold font-assistant'>{props.title}</Link>
            <div className='flex flex-col items-center justify-center w-full h-full p-4 space-y-4 rounded-xl bg-[#00000093] text-white'>
                {props.children}
            </div>
        </div>
    );
}
