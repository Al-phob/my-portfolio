import Image from "next/image"

interface Props {
    name: string
    imageSrc: string
}

const SkillCard = ({ name, imageSrc }: Props) => {
    return (
        <div className=" p-4 shadow text-center w-full flex flex-col items-center">
            <Image 
                src={imageSrc}
                alt={name}
                width={70}
                height={70}
                className="w-12 h-12 mb-2 object-contain"
            />

            <p className="font-medium"> {name} </p>

        </div>
    )
}

export default SkillCard