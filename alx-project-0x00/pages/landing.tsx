import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button text="Small" className="text-xs px-3 py-1 rounded-sm"></Button>
      <Button text="Medium" className="text-sm px-4 py-4 rounded-md"></Button>
      <Button text="Large" className="text-base px-5 py-3 rounded-full"></Button>


    </div>
  )
}
export default Landing
