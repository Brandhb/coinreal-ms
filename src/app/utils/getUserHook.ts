import { auth } from "@clerk/nextjs/server";
 
const getUserFromClerk: Function = () => {
    const { userId } = auth();
    return userId;
}
 
export default getUserFromClerk;