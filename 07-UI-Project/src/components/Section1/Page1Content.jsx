import LeftContent from "./leftContent";
import RightContent from "./RightContent";
const Page1Content = (props) => {
  return (
    <div className="flex gap-6 items-center h-[80vh] ">
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content