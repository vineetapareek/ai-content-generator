"use client"
import Image from "next/image";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface props{
    selectedTemplate?:TEMPLATE;
    userFormInput:any,
    loading:boolean
}


export default function FormSection({selectedTemplate,userFormInput,loading}:props){
    
    
    const [formData,setFormData] = useState<any>();

    const handleInputChange=(event:any)=>{
           const {name,value} = event.target;
           setFormData({...FormData,[name]:value});

    }
    const onSubmit=(e:any)=>{
        e.preventDefault();
        userFormInput(formData);
    }
    return(
        <div className="p-5 shadow-md border bg-white rounded-lg">
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
            <h2 className="font-bold text-2xl mb-2 text-black">{selectedTemplate?.name}</h2> 
            <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

            <form className="mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item,index)=>(
                    <div className="my-2 flex flex-col gap-2 mb-7">
                        <label className="font-bold">{item.label}</label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item?.required}
                            onChange={handleInputChange}
                            />
                            : item.field == 'textarea' ?
                                <Textarea name={item.name} required={item?.required}
                            onChange={handleInputChange}/> : null
                        }
                    </div>
                ))}
                <Button type='submit' disabled={loading}> {loading&&<Loader2Icon className="animate-spin"/>}Generate Content</Button>
            </form>
        </div>
    );
}