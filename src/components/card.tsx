"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';

export default function Card(props: any) {
    const windowWidth = useWindowWidth();

    return (
        <Link href={`/detail/${props.postId}`}>
            { windowWidth >= 1024 ? (
                <div className="flex items-center bg-[#F1F8E9] p-5 rounded-lg">
                    <div className="flex-none">
                        <Image src={"/image.png"} alt="image" width={198} height={132} layout="fixed" className="rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col items-start ml-5">
                        <div className="border border-green-700 rounded text-green-700 text-sm inline-block mb-1.5">
                            <p className="px-1.5">{props.category}</p>
                        </div>
                        <div className="text-lg font-bold mb-0.5">
                            <p>{props.title}</p>
                        </div>
                        <div className="mb-1">
                            <p>{props.schoolName}</p>
                        </div>
                        <div className="flex space-x-5 mb-1 flex-wrap">
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/user.png"} alt='target' height={20} width={20} layout="fixed" />
                                <div>{props.target}</div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/type.png"} alt='type' height={20} width={20} layout="fixed" />
                                <div>{props.type}</div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/access.png"} alt='access' height={20} width={20} layout="fixed" />
                                <div>{props.access}</div>
                            </div>
                        </div>
                        <div className="text-stone-500 text-base w-2/3 xl:w-3/4 truncate">{props.description}</div>
                    </div>
                </div>
            ) : (
                <div className="bg-[#F1F8E9] p-5 rounded-lg">
                    <div className="border border-green-700 rounded text-green-700 text-sm inline-block mb-1.5">
                        <p className="px-1.5">{props.category}</p>
                    </div>
                    <div className="font-bold mb-0.5">
                        <p>{props.title}</p>
                    </div>
                    <div className="mb-2">
                        <p>{props.schoolName}</p>
                    </div>
                    <div className="flex">
                        <div>
                            <Image src={"/image.png"} alt="image" width={120} height={80} layout="fixed" className="rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-center ml-3 space-y-1">
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/user.png"} alt='target' height={20} width={20} layout="fixed" />
                                <div >{props.target}</div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/type.png"} alt='type' height={20} width={20} layout="fixed" />
                                <div>{props.type}</div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Image src={"/icon/access.png"} alt='access' height={20} width={20} layout="fixed" />
                                <div>{props.access}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Link>
    )
};