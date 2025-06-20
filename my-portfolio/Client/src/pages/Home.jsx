import { Button, DownloadTrigger } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";

export default function Home() {
    const pdfData = "/cv-keith.pdf";
    const [pdfBlob, setPdfBlob] = useState(null);


    useEffect(() => {
    // Fetch the PDF file from public folder and convert to Blob
    fetch("/cv-keith.pdf")
      .then((res) => res.blob())
      .then((blob) => setPdfBlob(blob))
      .catch((err) => console.error("Failed to fetch PDF:", err));
    }, []);
    return (
        

        <div className="main w-screen h-[90vh]">
            <div className="main-container w-full h-full">
                <div className="main-content h-3/4 flex justify-center items-center">

                    <div className="left-content w-1/2 flex flex-col">
                        <p className="!text-2xl text-white">Hi, I'm </p>
                        <p className="text-6xl text-white !font-bold">Keith Clarence Sison</p>
                        <p className="!text-4xl text-white !font-bold">Web Developer</p>
                        <div className="btn !my-5">
                        <Button variant="outline" colorPalette="blue" className="!mr-5"><a href="#email">Send me an Email</a> <HiOutlineMail /></Button>
                            {pdfBlob ? (
                            <DownloadTrigger data={pdfBlob} fileName="cv-keith.pdf" mimeType="application/pdf" asChild>
                                <Button colorPalette="blue" variant="subtle">
                                Download PDF <span><LuDownload /></span>
                                </Button>
                            </DownloadTrigger>
                            ) : (
                            <Button isLoading colorScheme="blue" variant="outline">
                                Preparing PDF...
                            </Button>
                            )}
                        </div>
                    </div>

                    <div className="right-content w-1/4 flex justify-center items-center">
                        <div className="ProfileImg size-3/4">
                            <img className="rounded-[50%]" src="/keith.jpg" alt="Profile"/>
                        </div>
                    </div>
                </div>
                <div className="addition-features h-1/4 gap-6 flex justify-center">
                    <div className="feature-one w-1/4 h-1/4 flex gap-x-2 justify-center text-white !border items-center"><span className="!border text-white rounded-[30%] bg-[#AD46FF] !p-1">20+</span> Libraries Used</div>
                    <div className="feature-two w-1/4 h-1/4 flex gap-x-2 justify-center text-white !border items-center"><span className="!border rounded-full bg-[#AD46FF] !p-1 mr-1">50+</span> Video Games Played</div>
                    <div className="feature-three w-1/4 h-1/4 flex gap-x-2 justify-center text-white !border items-center"><span className="!border rounded-full bg-[#AD46FF] !p-1 mr-1">1k+</span> Ice Cream Consumed</div>
                </div>
            </div>
        </div>
    )
}