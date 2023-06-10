import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useMySelectedClass = () => {
const {user} = useAuth()
    const {refetch, data: mySelectedClass = [] } = useQuery({
        queryKey: ['mySelectedClass', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user.email}`)
            return res.json();
        }
    })
    return [mySelectedClass, refetch]
};

export default useMySelectedClass;