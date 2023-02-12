import { Card } from "antd";

export function LastProject() : JSX.Element {

    return(
        <div className="p-4">
               <Card  style={{ 
        backgroundColor: "#2C2C6C",
        borderColor: "#4db5FF"}} className="w-full " title="Mon dernier Projet">
               <div className="text-[#4db5FF]">
                <h1>Création d'une api REST avec deux jeux de données : </h1>
                <ul>
                    <li><b>Support</b> -{'>'} IntelliJ Ultimate</li>
                    <li><b>Langage</b> -{'>'} Kotlin</li>
                    <li><b>Tests</b> -{'>'} Kotlin et Curl</li>
                    <li><b>Gestion bases de données</b> -{'>'} PostgreSQL</li>
                    <li><b>Sources de données</b><a href="https://open.tan.fr/doc/openapi"> [Open API Tan] - </a>
                     <a href="https://data.nantesmetropole.fr/explore/dataset/234400034_070-008_offre-touristique-restaurants-rpdl%40paysdelaloire/table/">[Offre touristique : restaurants en Pays de la Loire]</a></li>
                    <li><b>License</b> <a href="https://opendatacommons.org/licenses/odbl/">[Licence ODBL Open Data]</a></li>
                </ul>
                </div> 
                
                </Card>


        </div>
    )
}