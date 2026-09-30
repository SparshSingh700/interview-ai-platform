import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import {login, register, logout, getMe} from "../services/auth.api"

export const useAuth= ()=>{
    const {user, setUser, loading, setLoading}= useContext(AuthContext);

    useEffect(() => {
    const getAndSetUser = async () => {
        setLoading(true);

        try {
            const data = await getMe();
            setUser(data.user);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    getAndSetUser();
    }, []);

    //everytime the app is refereshed, the context looses so i check if user is still logged in
    

    const handleLogin= async({email, password})=>{
        setLoading(true);
        try{
            const data = await login({email, password});
            setUser(data.user);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    const handleLogout= async()=>{
        setLoading(true);
        try{
            await logout();
            setUser(null);
        }catch(err){

        }finally{
            setLoading(false);
        }
        
    }

    const handleRegister= async({username, email, password})=>{
        setLoading(true);
        try{
            const data = await register({username, email, password});
            setUser(data.user);
        }catch(err){

        }finally{
            setLoading(false);
        }
    }

    

    return {user, loading, handleLogin, handleLogout, handleRegister}

}