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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={form.name} 
            onChange={handleChange} 
            className="!p-2 !border"/>

            <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={form.email} 
            onChange={handleChange} 
            className="!p-2 !border" />

            <textarea 
            name="message" 
            id="" 
            placeholder="Enter message" 
            value={form.message} 
            onChange={handleChange} 
            className="!p-2 !border">
            </textarea>

            <Button 
            type="submit" 
            className="" 
            colorScheme="blue" 
            variant="subtle">
                Submit
            </Button>
        </form>
    )
}