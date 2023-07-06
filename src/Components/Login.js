import { useEffect, useState, useRef, useContext } from 'react';
import AuthContext from "./Context/AuthProvider";
import Logo from '../svg/logo3.jpg';
import axios from '../api/axios';

const LOGIN_URL = '/auth'; //path in node course !!?

export default function Login(){
    const {setAuth} = useContext(AuthContext); //when I log in I stored it into context
    const userRef = useRef();
    const errRef = useRef();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    
    const handleLog= async (e)=>{
     e.preventDefault();

     try{
        const response = await axios.post(LOGIN_URL, 
            JSON.stringify({email, password}),
            {
                headers: {'Content-type': 'application/json'},
                withCredentials: true
            }); //to send the email and password to api
        console.log(JSON.stringify(response?.data)); //to show all the data
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;  //roles it's array of numbers in backend
        setAuth({email, password, roles, accessToken});
        setEmail(''); //to clear the email in the next time you have to do login
        setPassword(''); //to clear the previous password you entered in the last time you login
        setSuccess(true);
     } catch(err){
        if(!err?.response){
             setErrMsg('No Server Response'); //if you turn on the code without turn on the node server
        } else if(err.response?.status === 400){
            setErrMsg('Missing Email or Password'); //does'nt worked!
        } else if(err.response?.status === 401){
            setErrMsg('Unautherized');
        } else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
     }
    
    
     const fetchUsers= async (email,password)=>{
        const response = await axios.get('http://localhost:3005/users');
        response.data.map(user =>{
            if((email === user.email) && (password === user.password)){
            window.location.assign('http://localhost:3000')
            }
        })

        }
        fetchUsers(email, password);
        

     }
    

    return <>
    {/* <section>
        <p ref={errRef} className={errMsg ? "errmsg" :
        "offscreen"} ariva-live="assertive">{errMsg}</p>
    </section> */}
    {success ? (
        <section>
            <h1>You are Logged in!</h1>
            <br/>
            <p>
                <a href='/'>Go to Home</a>
            </p>
        </section>
    ) : (

    <section className="bg-orange-50 " >

    <p ref={errRef} className={errMsg ? "errmsg" :
        "offscreen"} ariva-live="assertive">{errMsg}</p>

    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-4 text-2xl font-semibold text-gray-900 ">
            <img className="w-12 h-9 mr-2" src={Logo} alt="logo"/>
            Dimitri's    
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form onSubmit={handleLog}  className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" onChange={e => setEmail(e.target.value)} ref={userRef}  vlaue ={email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)} vlaue={password} placeholder="Your Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label className="text-gray-500">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500">
                        Don’t have an account yet? <a href="registration" className="font-medium text-blue-600 hover:underline">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
    )}
  </>
}