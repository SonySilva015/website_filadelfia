import React from 'react'
import log from '@/public/icon/logo.png'

export default function Logo() {
    return (
        <img
            src={log.src}
            alt="Meu Blog"
            style={{ maxWidth: 110, height: 'auto' }}
        />
    )
}