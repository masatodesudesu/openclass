"use client"

import { useParams } from 'next/navigation';

export default function Details() {
    const router = useParams();
    const id = router.id;
    return (
        <div>ID: {id} のページです</div>
    )
}

