import React from "react";

export default function PageHeading({ children }: { children: React.ReactNode }) {
    return (<h1 className='text-lg font-semibold text-[#666] dark:text-zinc-300 mb-4'>{children}</h1>)
}
