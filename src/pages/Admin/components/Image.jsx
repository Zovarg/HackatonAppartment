import React from "react";
import { clsx } from 'clsx';

export function Image({ path = '1', className = 'w-4 h-4' }) {
    return (
        <img
            src={path}
            alt=""
            className={clsx(className, 'rounded-full')}
        />
    );
}