"use client"

import { useState } from "react"

export default function Page() {
    const [username, setusername] = useState<string>("")
    console.log(4)

    return (
        <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={username} onChange={e => setusername(e.target.value)} />
        </>
    )
}