import {Navbar} from "@/components/navbar"

interface DashboardLayoutProps{
    children: React.ReactNode
    
}

export default function DashboardLayout({children}:DashboardLayoutProps) {
    return(
        <div>
            <Navbar />
    
            <main>
                {children}


            </main>
        </div>

    )
}