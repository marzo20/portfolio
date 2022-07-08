//  import the use router hook to get the path params
import { useRouter } from 'next/router'

export default function UserIdpage(){
    // open instance of the router
    const router = useRouter()
    //  pull the path param from the router
    const { uid } = router.query
    return (
        <div>
            <h1>Hello user at id {uid}</h1>
        </div>
    )
}