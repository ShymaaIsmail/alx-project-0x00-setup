

const Pill: React.FC<PillProps> = ({ title }) => {
    return (
        <div className="bg-[#F2F2F2] text-[#131212] text-[12.95px] font-medium px-3 py-1 rounded-full">
            <p>{ title }</p>
        </div>
    )
}
export default Pill;
