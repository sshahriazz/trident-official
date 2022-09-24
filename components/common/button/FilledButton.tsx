import React from 'react'

export const FilledButton = ({ onClick, children, className = "py-2 px-6 border border-white rounded-full transition ease-in-out delay-50 hover:border-primary-500 active:text-primaryDark-500 active:bg-primaryDark-200 focus:bg-primaryDark-400 focus:text-white focus:outline-none focus:ring focus:ring-primaryDark-200 bg-primaryDark-500 hover:bg-primaryDark-400 text-white" }: { onClick: any, children: any, className?: string }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}
export default FilledButton