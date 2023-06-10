import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useMySelectedClass = () => {
const {user} = useAuth()
    const { data: mySelectedClass = [] } = useQuery({
        queryKey: ['mySelectedClass', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user.email}`)
            return res.json();
        }
    })
    return [mySelectedClass]
};

export default useMySelectedClass;