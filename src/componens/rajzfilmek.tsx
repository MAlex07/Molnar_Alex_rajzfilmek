import { useEffect, useState } from "react";
import type { Rajzfilm } from "../types/Rajzfilm";

function Rajzfilmek(){

    const fajl = './public/rajzfilmek.json'

    const [rajzfilmek, setRajzfilmek] = useState<Rajzfilm[]>([])

    useEffect(()=>{
        async function betolt(){
            try{
                const valasz = await fetch(fajl)
                const adatok = await valasz.json()
                setRajzfilmek(adatok)
            }catch(err){
                console.error(err)
            }
        }
        betolt()
    },[])


    return<>
        <h1>Rajzfilmek</h1>

        {rajzfilmek.map((rajzfilmek) => (
            <div key={rajzfilmek.id}>
                <h2>{rajzfilmek.cim}</h2>
                <p>Studió neve: <i>{rajzfilmek.studio}</i></p>
                <p>Megjelenés éve: <b>{rajzfilmek.megjelenesEve}</b></p>


            </div>
        ))}
    
    </>


}

export default Rajzfilmek