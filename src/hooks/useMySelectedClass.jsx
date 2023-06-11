import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMySelectedClass = () => {
const {user, loading} = useAuth()
const [axiosSecure] = useAxiosSecure()
    const {refetch, data: mySelectedClass = [] } = useQuery({
        queryKey: ['mySelectedClass', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/mySelectedClass?email=${user?.email}`)
            return res.data;
        }
    })
    return [mySelectedClass, refetch]
};

export default useMySelectedClass;