import { useState } from "react";
import { Box, Button, Heading, Text, VStack, HStack, Card } from '@chakra-ui/react'


export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: ""});

    const handleChange = (e) => 
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("https://portfolio-l8pj.onrender.com/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            alert(data.message || "Message sent!");
        } catch (err) {
            alert("Failed to send message.");
        }
    };

    return (
            
            <form onSubmit={handleSubmit} className="w-[80%] h-[80%] flex justify-evenly items-center">
                <div className="about-ImgProfile flex justify-center items-center">
                    <img className="size-3/4" src="/about-profile.png" alt="Profile"/>
                </div>
                
                <div className="form-content flex flex-col gap-10 w-1/2 h-full justify-center items-center">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        value={form.name} 
                        onChange={handleChange} 
                        className="!p-2 !border w-72 h-12 !text-white"/>
                    
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={form.email} 
                        onChange={handleChange} 
                        className="!p-2 !border w-72" />
                 
                        <textarea 
                        name="message" 
                        id="" 
                        placeholder="Enter message" 
                        value={form.message} 
                        onChange={handleChange} 
                        className="!p-2 !border w-72 h-1/4">
                        </textarea>
                    
                        <Button 
                        type="submit" 
                        className="w-1/2" 
                        colorScheme="blue" 
                        variant="subtle">
                            Submit
                        </Button>
                    
                </div>
                
            </form>

    )
}