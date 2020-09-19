import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Homepage = () => {
    const router = useRouter();
    const [repo, setRepo] = useState('');

    return (
        <>
            <h1>Inspect a GitHub repo</h1>
            <p>Enter a GitHub repo below in the format of "owner/repo" and click on the Inspect button.</p>
            <input type="text" placeholder="vercel/next.js" value={repo} onChange={(e) => setRepo(e.target.value)}/>
            <button onClick={() => router.push(repo, repo)}>Inspect</button>
            <p>Or, pick some of the popular React libraries:</p>
            <ul>
                <li><Link href="facebook/react">facebook/react</Link></li>
                <li><Link href="vercel/next.js">vercel/next.js</Link></li>
                <li><Link href="framer/motion">framer/motion</Link></li>
                <li><Link href="tailwindlabs/tailwindcss">tailwindlabs/tailwindcss</Link></li>
            </ul>
        </>
    );
};

export default Homepage;
