import Link from "next/link";

export default function UsersPage(){
    return(
        <div>
            <Link href={"/users/create"}>
                Criar Usuario 
            </Link>
        </div>
    )
}