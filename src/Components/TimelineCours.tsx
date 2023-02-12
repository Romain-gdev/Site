import { EditOutlined } from "@ant-design/icons"
import {Card, Timeline } from "antd"

export function TimelineCours(): JSX.Element {


    return (
        <div className=" flex p-4 " style={{borderColor: "#4db5FF"}} >
            <Card  style={{ 
        backgroundColor: "#2C2C6C",
        borderColor: "#4db5FF"}} title="Ma Formation">
            <div>
            <Timeline className="text-justify mt-4 text-[#4db5FF]  bg-[#2C2C6C] justify-start" mode={"left"} items={[
                {label: "2022-2023",
                children: "I.U.T. De Nantes"               
            },
            {label: "2021-2022",
            children: "Faculté des Sciences Angers"
             }, 
             {label: "2019-2021",
             children: "I.U.T. De Nantes"
             }, 
             {label: "2016-2019",
             children: "Lycée Général Notre Dame Rezé"
             }
        ]}

        ></Timeline>
        </div>
            </Card>
        </div>
    )
}