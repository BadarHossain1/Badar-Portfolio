import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="footer footer-center text-base-content p-4">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Badar Hossain</p>
                </aside>
            </footer>
        </div>
    )
}
