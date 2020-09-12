import React from 'react';
import Link from 'next/link';

const WhoWeAre = (props) => {
    return (
        <div>
            Who we are!!
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
};

export default WhoWeAre;
