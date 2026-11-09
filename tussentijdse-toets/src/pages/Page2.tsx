import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Commandos } from "../types/Interfaces";


const Oef2 = () => {
    const [results, setResults] = useState<Commandos[]>([]);

    useEffect(() => {
        const fetchFunction = async() => {
            let result = await fetch("https://raw.githubusercontent.com/similonap/json/refs/heads/master/linux.json");
            let json : Commandos[] = await result.json(); 

            setResults(json);
        }
        fetchFunction();
        console.log(results)
    },[]);


    return(
        <section>
            <table>
                <tbody>
                    {results.map((command, index) => (
                        <tr key={index}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 5fr 1fr",
                                marginTop: 10,
                                marginBottom: 10
                            }}>
                            <td>{index+1}</td>
                            <td>{command.command}</td>
                            <td>{command.description}</td>
                            <td><Link to="/oefening2/:cdm">See Examples</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default function Page2() {
    return(
        <Oef2 />
    )
}