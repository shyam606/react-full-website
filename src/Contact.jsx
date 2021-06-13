import React, { useState } from 'react';

const Contact=()=>{
   const[data,setData] = useState({
       fullname:"",
       phone:"",
       email:"",
       message:""
   })

   const inputEvent=(event)=>{
       const {name,value} = event.target;
       setData((preVal)=>{
           console.log(preVal);
           console.log(value);
           return{
               ...preVal,
               [name]:value 
           }
       
       })
   }
    const formSubmit=(e)=>{
        e.preventDefault();
        
            alert(`my name is ${data.fullname} number is ${data.phone} and my email id is ${data.email} or this is my msg ${data.message}`);
        
    }

    return(<>
    <div className="main_div">
    <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-2">
                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" required/>
                </div>
                <div className="mb-2">
                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your number" required/>
                </div>
                <div className="mb-2">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" required/>
                </div>
                <div className="mb-2">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="message" value={data.message} onChange={inputEvent} required></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</>
)}

export default Contact;