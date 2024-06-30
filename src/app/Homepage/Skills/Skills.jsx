import Image from "next/image";


export default function Skills() {
    return (
        <div className="bg-[#f5df4e]  ">
            <p className="text-5xl pt-5 underline text-black font-extrabold font-serif w-full text-center ">My Skills</p>

            {/* logos */}
            <div className="max-w-[1170px] mx-auto pt-10">
                <p className="text-center text-black font-semibold font-mono text-4xl ">Front End Development</p>

                <div className="mt-3 grid grid-cols-2 lg:grid-cols-5 ">



                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/pQnE5FDoU6BT6-Lf9xToyLohKLrZy9brZ0pwgaIoudE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL0hUTUw1X2xv/Z29fYW5kX3dvcmRt/YXJrLnN2Zw' alt="HTML" width={100} height={100} ></Image>
                            <p className="text-center text-black font-bold">HTML</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/s5Qj495S2XYIA9ltbdvfLNos-gIiI3HHc_d3SYLNNSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L0NTUzNfbG9n/b19hbmRfd29yZG1h/cmsuc3Zn' alt="CSS" width={70} height={100} ></Image>
                            <p className="text-center text-black font-bold">CSS</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn' alt="JS" width={100} height={100} className="shadow-xl"></Image>
                            <p className="text-center text-black font-bold">JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/oG3o98QjKAbPSLZPTOvPhupljLwbNmIQ42GfRq2TFXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q1L1RhaWx3aW5k/X0NTU19Mb2dvLnN2/Zw' alt="Tailwind CSS" width={150} height={100} className=""></Image>
                            <p className="text-center text-black font-bold">Tailwind CSS</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/FihthY8hMrxn60mcDaOWs6cpLeU5olROkI4hra30AuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E3L1JlYWN0LWlj/b24uc3Zn' alt="React JS" width={100} height={100} className=""></Image>
                            <p className="text-center text-black font-bold">React JS</p>
                        </div>
                    </div>







                </div>

                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 mx-auto">



                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/qutrRyEOFMy6UfaPht58JzGgQpYfXc4N2Hz2J9yDSbo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXJl/YmFzZS5nb29nbGUu/Y29tL3N0YXRpYy9p/bWFnZXMvYnJhbmQt/Z3VpZGVsaW5lcy9s/b2dvLWxvZ29tYXJr/LnBuZw' alt="Firebase" width={100} height={100} ></Image>
                            <p className="text-center text-black font-bold">Firebase</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/tz2sjscKBz5oG_r9A84mjpVq33XPeIa9CKEE5tMjbos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmV4dGpz/LWxvZ28tOTYzRDQw/QjcxRS1zZWVrbG9n/by5jb20ucG5n' alt="Next JS" width={100} height={100} ></Image>
                            <p className="text-center text-black font-bold">Next JS</p>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/xHAjOrIihYwjsvEurXLF_VFptOW2c2z2o-S5vkyuam0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZGFpc3l1aS5jb20v/bG9nb3MvZGFpc3l1/aS5zdmc' alt="Daisy UI" width={100} height={100} ></Image>
                            <p className="text-center text-black font-bold">Daisy UI</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center">
                            <Image src='https://imgs.search.brave.com/Q_gZ4BZCOL-enXlzWj8TivdOtd7_Nsbu5YIABAwh0o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Y2Fy/ZWNkbi5jb20vN2Ri/OGM3NDItNTA3Ni00/YmNiLWI0MDItZmEx/NmZhZjEyYTlhLy0v/cmVzaXplLzE1MHgv' alt="Mamba UI" width={90} height={100} ></Image>
                            <p className="text-center text-black font-bold">Mamba UI</p>
                        </div>
                    </div>

                </div>









            </div>


            <hr className="mt-10 max-w-[1170px] mx-auto " />
            {/* Backend */}

            <div className="max-w-[1170px] mx-auto pt-10">
                <p className="text-center text-black font-semibold font-mono text-4xl ">Back End Development</p>

                <div className="mt-3 grid grid-cols-3 lg:grid-cols-3 ">


                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/fcNXSSyduxvLU-Wubg77c52r6-ZMaDekcK7vLXad_JA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tMDY1MjU3/REUyNC1zZWVrbG9n/by5jb20ucG5n' alt="Node JS" width={120} height={100} className=""></Image>
                            <p className="text-center text-black font-bold">Node.js</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/M4VVbZbWznYmGmK_UapYaFDGlC9bFryIQju7XWcOy5w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk1MDEx/Mi8xNDA4MDc0MC84/ZjkyMDM3YS1mNTI0/LTExZTUtOGM1Mi0y/N2E5YWM2M2FmNTAu/cG5n' alt="Express JS" width={120} height={100} className=""></Image>
                            <p className="text-center text-black font-bold">Express.js</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="text-center ">
                            <Image src='https://imgs.search.brave.com/FHAFDfLQ41Rp1NXEIMVJ0xVVZXmpjQYW-YkeJxN2Gd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL21vbmdv/ZGIvbW9uZ28vcmF3/L21hc3Rlci9kb2Nz/L2xlYWYuc3Zn' alt="Mongo DB" width={80} height={100} className=""></Image>
                            <p className="text-center text-black font-bold">Mongo DB</p>
                        </div>
                    </div>









                </div>





            </div>
        </div>




    )
}
