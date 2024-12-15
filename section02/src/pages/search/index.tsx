import { useRouter } from "next/router";

export default function page() {
    const router = useRouter();
    const {q} = router.query;
 
    return <h1>search {q}</h1>
}