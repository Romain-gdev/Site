import {Card} from 'antd'

export function Profil(): JSX.Element {

    return(
        <div className="flex flex-wrap w-full">
            <Card style={{ 
        backgroundColor: "#2C2C6C",
        borderColor: "#4db5FF"}}>
    <p className="txtProfil text-justify">
    <p className="text-2xl font-bold">Mon profil :</p>
    <p className="text-xl">Passionné de développement Informatique, je suis grandement intéressé dans la programmation web et mobile
    . J'ai développé des projets d'api REST dans différents langages (Kotlin, Java, NodeJs). Concernant le mobile, j'ai développé en 
    Java ainsi qu'en Kotlin, et je me suis essayé au React Natif.   
    </p>
    </p>
        </Card>
        </div>
    )
}