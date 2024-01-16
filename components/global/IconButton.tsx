import Image from "next/image";

type Props = {
  icon: React.ReactComponent,
  text: string
}

const IconButton = ({icon, text=""}: Props) => {
  return (
    <button className="bg-gray-800 rounded-md py-4 px-4 mx-1">
      <Image src={icon} alt={text}/>
      {text}
    </button>
  )
}

export default IconButton;