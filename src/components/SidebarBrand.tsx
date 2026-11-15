import React from 'react'
import logo from '@/public/icon/logo.png'

export default function SidebarBrand() {
    return (
        <div className="sb-brand">
            <div className="sb-brand__mark">
                <img src={logo.src} alt="" />
            </div>
            <div className="sb-brand__text">
                <span className="sb-brand__name">Filadélfia</span>
                <span className="sb-brand__tag"></span>
            </div>
        </div>
    )
}