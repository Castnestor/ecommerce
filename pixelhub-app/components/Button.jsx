import Link from "next/link";
// import { useState } from "react";

export default function Button({ lRef, type, children }) {

  // const [isOver, setIsOver] = useState(false);

  return (
    <Link href={lRef} className={"btn " + type} /*onOver={() => setIsOver(true)}*/>
     {children} 
     {/*it seams that I need to use "use client" I'll come back to this*/}
     {/* {isOver ? <p>Yeah</p> : null} */}
    </Link>
  )
}
