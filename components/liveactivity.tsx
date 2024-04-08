import Image from 'next/image'
import React from 'react'
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent
} from '@/components/ui/hover-card'
import { Inter } from 'next/font/google'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
  

const i = Inter({ subsets: ['latin'] })

export default function LiveActivity(): React.ReactNode {
    // am i musicking??
    const [isJamming, setIsJamming] = React.useState(false)
    const [jamData, setJamData] = React.useState<any>(null)
    const [userAgentIsMobile, set] = React.useState(false)
    // ----------------
    // other stuff later

    React.useEffect(() => {
        const fetchData = async () => {
            while (true) {
                const response = await fetch('/api/nowplaying').then((res) => res.json())
                if (response.recenttracks.track[0]['@attr'].nowplaying === 'true') {
                    setIsJamming(true)
                    setJamData(response.recenttracks.track[0])
                } else {
                    setIsJamming(false)
                }
                await new Promise((r) => setTimeout(r, /* 7.5 seconds */ 7500))
            }
        }
        set(/Mobi|Android/i.test(navigator.userAgent))
        fetchData() // start the loop
    }, [])

    return (
        (isJamming &&
            <HoverCard openDelay={150} closeDelay={1}>
                {(userAgentIsMobile ? (
                    <Drawer>
                        <DrawerTrigger>
                            <div className={["flex items-center bg-green-600 text-white p-2 rounded-lg transition-all duration-1000", i.className].join(' ')}>
                                <FontAwesomeIcon icon={faMusic} beat />
                                <p className="pl-2 transition-all duration-1000">currently jamming</p>
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle className={`${i.className} text-3xl`}>
                                    <h1 className="font-bold">now playing</h1>
                                    <p className="text-sm"><span className="font-bold">{jamData?.artist['#text']}</span> - {jamData?.name}</p>
                                </DrawerTitle>
                            </DrawerHeader>
                            <DrawerDescription>
                                <div className={["relative", i.className].join(' ')}>
                                    <div className={["mx-4 my-4 flex flex-col items-center justify-center", i.className].join(' ')}>
                                        <Image
                                            className='rounded-lg'
                                            src={jamData?.image[3]['#text']}
                                            alt="Album art"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </DrawerDescription>
                            <DrawerFooter>
                                <DrawerClose />
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                ) : (
                    <HoverCardTrigger>
                        <div className={["flex items-center bg-green-600 text-white p-2 rounded-lg transition-all duration-1000", i.className].join(' ')}>
                            <FontAwesomeIcon icon={faMusic} beat />
                            <p className="pl-2 transition-all duration-1000">currently jamming</p>
                        </div>
                    </HoverCardTrigger>
                ))}
                <HoverCardContent>
                    <div className={["flex items-center space-x-2", i.className].join(' ')}>
                        <Image
                            className='rounded-l-lg'
                            src={jamData?.image[3]['#text']}
                            alt="Album art"
                            width={200}
                            height={200}
                        />
                        <div className='text-left pr-2'>
                            <p className="font-bold text-md">{jamData?.name}</p>
                            <p>{jamData?.artist['#text']}</p>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        )
    )
}