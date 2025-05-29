import Image from 'next/image';
import * as React from 'react';
import { Inter } from 'next/font/google';
import * as Dialog from '@/components/ui/dialog';
import Link from 'next/link';
import * as Drawer from '@/components/ui/drawer';
import { toast } from 'sonner';

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 'wss://listening.achtung.dev';
const inter = Inter({ subsets: ['latin'] });

type ListeningStatusObject = {
    listening: false;
} | {
    listening: true;
    track: {
        name: string;
        artist: string;
        albumArt: {
            small: string;
            medium?: string;
            large: string;
        };
        urls: {
            lastfm: string;
            spotify?: string;
        };
    };
};

export default function MusicStream() {
    const [activeToast, setActiveToast] = React.useState<string | number | undefined>(undefined);
    const toastId = React.useRef<string | number | undefined>(activeToast);
    const [sock, setSock] = React.useState<WebSocket | null>(null);
    const activeSock = React.useRef<WebSocket | null>(null);
    const [listening, setListening] = React.useState<boolean | 'err'>(false);
    const [data, setData] = React.useState<any>(null);
    const dataRef = React.useRef<any>(null);
    const [mobile, setMobile] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState<string | null>(null);
    const [showSheet, setShowSheet] = React.useState(false);

    React.useEffect(() => {
        dataRef.current = data;
    }, [data]);

    React.useEffect(() => {
            toastId.current = activeToast;
    }, [activeToast]);

    React.useEffect(() => {
        activeSock.current = sock;
    }, [sock]);

    React.useEffect(() => {

        const ping = () => {
            if (activeSock && activeSock.current?.readyState === WebSocket.OPEN) {
                activeSock.current?.send('ba dum ba dum heartbeat');
            } else {
                console.log('Socket not open, cannot ping');
            }
        };

        const pingInt = setInterval(ping, 12500);

        const sockFunctions = {
            onopen: (...stuff: any): any => {
                console.log('Connected to the socket');
            },
            onmessage: (event: MessageEvent) => {
                if (event.data === 'yes yes i am alive, keep displaying the data.') {
                    console.log('Keep-alive confirmed');
                    return;
                }
                const parsed: ListeningStatusObject = JSON.parse(event.data);
                setListening(parsed.listening);
                if (parsed.listening) {
                    if (dataRef.current && toastId.current && parsed.track.name !== dataRef.current.name) {
                        toast(
                            <>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-center gap-2'>
                                    <div className='flex flex-row items-center justify-center p-1 bg-red-600 rounded-full'>
                                        <div className='w-2 h-2 ml-2 mr-1 bg-white rounded-full animate-pulse' />
                                        <p className='text-xs text-white mr-2'>live</p>
                                    </div>
                                    <p className='text-lg font-bold'>Now Playing</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src={parsed.track.albumArt?.medium ?? "/placeholderAlbum.png"}
                                        alt={parsed.track.name}
                                        width={48}
                                        height={48}
                                        className='rounded-lg'
                                    />
                                    <div className='flex flex-col'>
                                        <span className='text-sm font-semibold'>{parsed.track.name}</span>
                                        <span className='text-xs text-gray-500'>{parsed.track.artist}</span>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-2 w-full'>
                                    <Link href={parsed.track.urls.lastfm} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                        view on Last.fm
                                    </Link>
                                    <button
                                        onClick={() => {
                                            toast.dismiss(toastId.current);
                                            setActiveToast(undefined);
                                            toastId.current = undefined;
                                        }}
                                        className='text-red-500 hover:underline'
                                    >
                                        close
                                    </button>
                                </div>                             
                            </div>
                        </>,
                            {
                                id: toastId.current,
                                duration: Infinity,
                                onDismiss: () => {
                                    setActiveToast(undefined);
                                    toastId.current = undefined;
                                },
                                onAutoClose: () => {
                                    setActiveToast(undefined);
                                    toastId.current = undefined;
                                }
                            }
                        )
                    }
                    setData(parsed.track);
                } else {
                    setData(null);
                }
            },
            onerror: (error: Event) => {
                // if closed, reconnect
                if (activeSock.current?.readyState === WebSocket.CLOSED) {
                    console.log('Socket closed, reconnecting...');
                    let prevState = listening;
                    setListening('err');
                    setErrMsg('Connection closed by server');
                    let s = new WebSocket(socketUrl);
                    // map predefined functions to the new socket
                    s.onopen = sockFunctions.onopen;
                    s.onmessage = sockFunctions.onmessage;
                    s.onerror = sockFunctions.onerror;
                    s.onclose = sockFunctions.onclose;
                    activeSock.current = s;
                }
                console.log('WebSocket error:', error);
                console.log('Socket state:', sock?.readyState);
            },
            onclose: (event: CloseEvent) => {
                console.log('Socket closed:', event);
                setListening('err');
                setErrMsg('Connection closed by server');
                setData(null);
                clearInterval(pingInt);
                /* the only known way for the stream to close is on a 1006 error, which is already handled in the onerror function - thus, we do not need to handle it here */
            },
        } 

        const begin = () => {
            activeSock.current = new WebSocket(socketUrl);
            activeSock.current.onopen = sockFunctions.onopen;
            activeSock.current.onmessage = sockFunctions.onmessage;
            activeSock.current.onerror = sockFunctions.onerror;
            activeSock.current.onclose = sockFunctions.onclose;
        };
        setMobile(/Mobi|Android/i.test(navigator.userAgent));
        begin();
    }, []);

    return (
        (listening === true && (
            <div className={`${inter.className} group absolute flex-row-reverse bottom-0 right-0 mb-2 mr-2 p-1 md:p-2 rounded-full bg-green-600 transition-all duration-300 ease-in-out md:hover:bg-green-700 flex items-center group-hover:gap-2 overflow-hidden max-w-[48px] hover:max-w-[70vw]`}>
                <a href={data.urls.lastfm} target='_blank' rel='noopener noreferrer' className='hidden md:block'>
                <Image
                    src={data.albumArt?.small ?? "/placeholderAlbum.png"}
                    alt={data.name}
                    title={`Click me to view ${data.name} by ${data.artist} on Last.fm`}
                    width={24}
                    height={24}
                    className='hidden md:block rounded-full flex-shrink-0 animate-[spin_2.5s_linear_infinite]'
                />
                </a>
                <button
                    onClick={() => {
                        toast.dismiss(activeToast);
                        setActiveToast(toast(
                            <>
                                <div className='flex flex-col gap-2 w-full'>
                                    <div className='flex flex-row items-center gap-2 w-full'>
                                        <div className='flex flex-row items-center justify-center p-1 bg-red-600 rounded-full'>
                                            <div className='w-2 h-2 ml-2 mr-1 bg-white rounded-full animate-pulse' />
                                            <p className='text-xs text-white mr-2'>live</p>
                                        </div>
                                        <p className='text-lg font-bold'>Now Playing</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image
                                            src={data.albumArt?.medium ?? "/placeholderAlbum.png"}
                                            alt={data.name}
                                            width={48}
                                            height={48}
                                            className='rounded-lg'
                                        />
                                        <div className='flex flex-col'>
                                            <span className='text-sm font-semibold'>{data.name}</span>
                                            <span className='text-xs text-gray-500'>{data.artist}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between gap-2 w-full'>
                                        <Link href={data.urls.lastfm} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                            view on Last.fm
                                        </Link>
                                        <button
                                            onClick={() => {
                                                toast.dismiss(toastId.current);
                                                setActiveToast(undefined);
                                                toastId.current = undefined;
                                            }}
                                            className='text-red-500 hover:underline'
                                        >
                                            close
                                        </button>
                                    </div>
                                </div>
                            </>, {
                                duration: Infinity,
                                onDismiss: () => {
                                    setActiveToast(undefined);
                                    toastId.current = undefined;
                                },
                                onAutoClose: () => {
                                    setActiveToast(undefined);
                                    toastId.current = undefined;
                                },
                            }
                        ))
                    }}
                    className='md:hidden rounded-full flex-shrink-0 animate-[spin_2.5s_linear_infinite]'
                >
                    <Image
                        src={data.albumArt?.small ?? "/placeholderAlbum.png"}
                        alt={data.name}
                        width={18}
                        height={18}
                        className='rounded-full'
                    />
                </button>
                <p className='max-w-0 md:group-hover:max-w-[35vw] opacity-0 md:group-hover:opacity-100 transition-all duration-300 text-sm text-gray-200 overflow-hidden md:group-hover:px-2 leading-tight max-h-0 md:group-hover:max-h-[100px] line-clamp-1 hover:line-clamp-2'>
                    listening to:{' '}
                    <span className='font-bold text-white'>
                        {`${data.name}`}
                    </span>
                    {' – '}
                    <span className='italic text-gray-200'>
                        {`${data.artist}`}
                    </span>
                </p>
            </div>
        ))
    )
}