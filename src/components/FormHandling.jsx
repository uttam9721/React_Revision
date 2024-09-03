import React,{useState} from 'react'

const FormHandling = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("your form has been submited"+name+email+password)
        setName('');
        setEmail('');
        setPassword('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
        Name: <input  value={name}
        onChange={(e)=>setName(e.target.value)}
        type="text" />
        <h4>{name}</h4>
        </div><br />
        <div>
            Email: <input value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email" />
            <h1>{email}</h1>
        </div><br />

        <div>
            Password: <input value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            type="password" />
            <h4>{password}</h4>
        </div>
     <div>

     </div>
     <button>submit</button>
     </form>
    </div>
  )
}

export default FormHandling
