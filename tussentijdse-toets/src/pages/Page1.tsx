import { rainbow } from "rainbow-colors-array-ts"
import { useState } from "react"

const ColorWidget = () => {
    const getColors = rainbow(14)
    const [colors, setColors ] = useState<string[]>([])
    const [colorId, setColorId] = useState<number | null>(null)
    const [selected, setSelected] = useState(false)

    return(
        <section>
            <article style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
            }}>
                {getColors.map((color) => (
                    <div 
                    onClick={
                        () => setColors([...colors, color.hex])
                    }
                    style={{
                    backgroundColor: color.hex,
                    width: 50,
                    height: 50,
                    cursor: "pointer",
                    marginBottom: 50,
                    marginTop: 50
                }}
                    
                ></div>
            ))}
            </article>
            <article style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                {colors.map((color) => (
                    <div 
                    style={{
                    backgroundColor: color,
                    width: 50,
                    height: 50}}></div>
                ))}

            </article>

        </section>
    )
}

export default function Page1() {

    return(
        <ColorWidget />
    )
}