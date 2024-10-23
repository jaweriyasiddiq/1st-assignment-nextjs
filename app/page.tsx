import Link from "next/link"
export default function Page(){
  return(

  <div className="bg-yellow-400 min h-screen">

     <ul className="flex justify-center gap-3 text-gray-700 bg-gradient-to-r from-cyan-500 to--50 sticky">
<li><Link href={'./'}>Home</Link></li>
<li><Link href={'./about'}>About</Link></li>
<li><Link href = {'./contact'}>Contact</Link></li>
    </ul>

     <p className="text-center pt-10">
        This is home page
     </p>
    </div>
  )}