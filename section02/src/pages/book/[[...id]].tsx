import { useRouter } from "next/router"

export default function page() {
    const router = useRouter();
    const {id} = router.query;
 
    return <h1>book: {id} </h1>
}
// /book만 오거나, book뒤에 많은 쿼리 파라미터가 와도 허용