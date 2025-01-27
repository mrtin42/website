import Image from 'next/image'
import * as React from 'react'
import { Inter } from 'next/font/google'
import * as Drawer from "@/components/ui/drawer"
import * as Tooltip from "@/components/ui/tooltip"
import * as Menu from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const socketUrl: string = process.env.NEXT_PUBLIC_SOCKET_URL || 'wss://nowplaying.martin.blue'

const i = Inter({ subsets: ['latin'] })

export type NowListeningObject = {
    listening: false;
} | {
    listening: true;
    track: {
        name: string;
        artist: string;
        albumArt: {
            small: string;
            medium: string;
            large: string;
        };
    };
};

export default function LiveActivity(): React.ReactNode {
    // am i musicking??
    const [socket, setSocket] = React.useState<any>(null)
    const [isJamming, setIsJamming] = React.useState<boolean | 'error'>(false)
    const [jamData, setJamData] = React.useState<any>(null)
    const [userAgentIsMobile, set] = React.useState(false)
    // ----------------
    // other stuff later

    React.useEffect(() => {
        const fetchData = async () => {
            const s = new WebSocket(socketUrl);
            setSocket(socket)

            s.onopen = () => {
                console.log('connected to socket')
            };
            s.onmessage = (event: any) => {
                if (event.data === 'yes yes i am alive, keep displaying the data.') {
                    console.log('ping successful')
                    return
                }
                const data = JSON.parse(event.data)
                setIsJamming(data.listening)    
                setJamData(data.track)
            };
            s.onerror = (error: any) => {
                console.error('[nowplaying.mbfrias.com] An error occurred:', error)
                setIsJamming('error')
                setJamData(null);
                clearInterval(pingInt)
            }

            const ping = () => {
                s.send('ba dum ba dum badum heartbeat')
            }

            const pingInt = setInterval(ping, 15000) // keep the connection alive every 15 seconds
        }
        set(/Mobi|Android/i.test(navigator.userAgent))
        fetchData() // start the loop
    }, /* ONLY RUN ONCE */ [])

    return (
        // (isJamming &&
        //     <HoverCard openDelay={150} closeDelay={1}>
        //         <HoverCardContent side='top'>
        //             <div className={["flex items-center space-x-2", i.className].join(' ')}>
        //                 <Image
        //                     className='rounded-l-lg'
        //                     src={jamData?.image[3]['#text']}
        //                     alt="Album art"
        //                     width={200}
        //                     height={200}
        //                 />
        //                 <div className='text-left pr-2'>
        //                     <p className="font-bold text-md">{jamData?.name}</p>
        //                     <p>{jamData?.artist['#text']}</p>
        //                 </div>
        //             </div>
        //         </HoverCardContent>
        //         {(userAgentIsMobile ? (
        //             <Drawer>
        //                 <DrawerTrigger>
        //                     <div className={["flex items-center bg-green-600 text-white p-2 rounded-lg transition-all duration-1000", i.className].join(' ')}>
        //                         <FontAwesomeIcon icon={faMusic} beat />
        //                         <p className="pl-2 transition-all duration-1000">currently jamming</p>
        //                     </div>
        //                 </DrawerTrigger>
        //                 <DrawerContent>
        //                     <DrawerHeader>
        //                         <DrawerTitle className={`${i.className} text-3xl`}>
        //                             <h1 className="font-bold">now playing</h1>
        //                             <p className="text-sm"><span className="font-bold">{jamData?.artist['#text']}</span> - {jamData?.name}</p>
        //                         </DrawerTitle>
        //                     </DrawerHeader>
        //                     <DrawerDescription>
        //                         <div className={["relative", i.className].join(' ')}>
        //                             <div className={["mx-4 my-4 flex flex-col items-center justify-center", i.className].join(' ')}>
        //                                 <Image
        //                                     className='rounded-lg'
        //                                     src={jamData?.image[3]['#text']}
        //                                     alt="Album art"
        //                                     width={300}
        //                                     height={300}
        //                                 />
        //                             </div>
        //                         </div>
        //                     </DrawerDescription>
        //                     <DrawerFooter>
        //                         <DrawerClose />
        //                     </DrawerFooter>
        //                 </DrawerContent>
        //             </Drawer>
        //         ) : (
        //             <HoverCardTrigger>
        //                 <div className={["flex items-center bg-green-600 text-white p-2 rounded-lg transition-all duration-1000", i.className].join(' ')}>
        //                     <FontAwesomeIcon icon={faMusic} beat />
        //                     <p className="pl-2 transition-all duration-1000">currently jamming</p>
        //                 </div>
        //             </HoverCardTrigger>
        //         ))}
        //     </HoverCard>
        // )
        (isJamming && (
           <div className={`absolute bottom-0 right-0 mb-2 mr-2 flex items-end gap-2 ${i.className}`}>
                <Tooltip.TooltipProvider>
                    <Tooltip.Tooltip delayDuration={0}>
                            {userAgentIsMobile ? <Drawer.Drawer>
                                <Drawer.DrawerTrigger disabled={isJamming == 'error'}>
                                    <div className={`group flex z-50 items-center ${isJamming == 'error' ? 'bg-red-600' : 'bg-green-600'} text-white p-2 rounded-full transition-all duration-1000`}>
                                            <Image
                                                className='rounded-full fa-spin'
                                                src={jamData?.albumArt['small']}
                                                alt={isJamming == 'error' ? '⚠️' : 'Album art'}
                                                width={24}
                                                height={24}
                                            />
                                    </div>
                                </Drawer.DrawerTrigger>
                                <Drawer.DrawerContent>
                                    <Drawer.DrawerHeader>
                                        <Drawer.DrawerTitle className={`${i.className} text-3xl`}>
                                            <h1 className="font-bold">now playing</h1>
                                            <p className="text-sm"><span className="font-bold">{jamData?.artist}</span> - {jamData?.name}</p>
                                        </Drawer.DrawerTitle>
                                    </Drawer.DrawerHeader>
                                    <Drawer.DrawerDescription>
                                        <div className={["relative", i.className].join(' ')}>
                                            <div className={["mx-4 my-4 flex flex-col items-center justify-center", i.className].join(' ')}>
                                                    <Image
                                                        className='rounded-lg'
                                                        src={jamData?.albumArt['large'].replace('174s', '300x300')}
                                                        alt="Album art"
                                                        width={300}
                                                        height={300}
                                                    />
                                            </div>
                                        </div>
                                        <Menu.DropdownMenuSeparator className='bg-black mt-6 mb-6 mx-10'/>
                                        <div className='mx-14'>
                                            <Link href='https://last.fm/user/t_ube' target='_blank'>
                                                <button className='my-2 block px-4 py-2 border w-full rounded-xl hover:bg-gray-100'>
                                                    me on last.fm
                                                </button>
                                            </Link>
                                            <Link href='https://open.spotify.com/user/thetubekid' target='_blank'>
                                                <button className='my-2 block px-4 py-2 border w-full rounded-xl hover:bg-gray-100'>
                                                    me on spotify
                                                </button>
                                            </Link>
                                            <Menu.DropdownMenuSeparator className='bg-black mt-6 mb-6 mx-4'/>
                                            <Link href={jamData?.urls.lastfm} target='_blank'>
                                                <button className='my-2 block px-4 py-2 border w-full rounded-xl hover:bg-gray-100'>
                                                    song on last.fm
                                                </button>
                                            </Link>
                                            <button className='my-2 block px-4 py-2 border w-full rounded-xl text-gray-400'>
                                                spotify link coming soon
                                            </button>
                                        </div>
                                    </Drawer.DrawerDescription>
                                    <Drawer.DrawerFooter>
                                        <Drawer.DrawerClose />
                                    </Drawer.DrawerFooter>
                                </Drawer.DrawerContent>
                            </Drawer.Drawer> : <Tooltip.TooltipTrigger>
                                    <div className={`group flex z-50 items-center ${isJamming == 'error' ? 'bg-red-600' : 'bg-green-600'} text-white p-2 rounded-full transition-all duration-1000`}>
                                        <Menu.DropdownMenu>
                                            <Menu.DropdownMenuTrigger disabled={isJamming == 'error'}>
                                                <Image
                                                    className='rounded-full fa-spin'
                                                    src={jamData?.albumArt['small']}
                                                    alt={isJamming == 'error' ? '⚠️' : 'Album art'}
                                                    width={24}
                                                    height={24}
                                                />
                                            </Menu.DropdownMenuTrigger>
                                            <Menu.DropdownMenuContent className={`w-65 border shadow-sm ${i.className}`}>
                                                <Menu.DropdownMenuLabel>go to...</Menu.DropdownMenuLabel>
                                                <Menu.DropdownMenuSeparator className='bg-black'/>
                                                <Menu.DropdownMenuItem>

                                                    <Link href='https://last.fm/user/t_ube' target='_blank' className='block px-4 py-2 hover:bg-gray-100'>
                                                        me on last.fm
                                                    </Link>
                                                </Menu.DropdownMenuItem>
                                                <Menu.DropdownMenuItem>
                                                    <Link href='https://open.spotify.com/user/thetubekid' target='_blank' className='block px-4 py-2 hover:bg-gray-100'>
                                                        me on spotify
                                                    </Link>
                                                </Menu.DropdownMenuItem>
                                                <Menu.DropdownMenuSeparator className='bg-black'/>
                                                <Menu.DropdownMenuItem>
                                                    <Link href={jamData?.urls.lastfm} target='_blank' className='block px-4 py-2 hover:bg-gray-100'>
                                                        song on last.fm
                                                    </Link>
                                                </Menu.DropdownMenuItem>
                                                <Menu.DropdownMenuItem disabled>
                                                    <span className='block px-4 py-2 text-gray-400'>
                                                        spotify link coming soon
                                                    </span>
                                                </Menu.DropdownMenuItem>
                                            </Menu.DropdownMenuContent>
                                        </Menu.DropdownMenu>
                                    </div>
                                </Tooltip.TooltipTrigger>}
                        <Tooltip.TooltipContent side='left'>
                            <div className="flex items-center space-x-2">
                                {isJamming == 'error' ? (
                                    <p className="text-lg">
                                        unable to fetch now playing data - check console for more info or try again later
                                    </p>
                                ) : (
                                    <p className="text-lg">
                                        listening to <span className="font-bold">{jamData?.name}</span> by <span className="font-bold">{jamData?.artist}</span>
                                    </p>
                                    )
                                }
                            </div>
                        </Tooltip.TooltipContent>
                    </Tooltip.Tooltip>
                </Tooltip.TooltipProvider>
           </div> 
        ))
    )
}