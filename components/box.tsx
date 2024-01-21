import React from 'react';
import Image from 'next/image'

type BoxProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    props?: any;
};

export default function Box(props: BoxProps) {
    return (
        <div className={props.className} id={props.id} style={props.style} {...props.props}>
            <div className='flex flex-col items-center justify-center w-full h-full p-4 space-y-4 rounded-xl'>
                {props.children}
            </div>
        </div>
    );
}
