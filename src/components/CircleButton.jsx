export default function CircleButton({src, className, onClick, imageClassName}){
    return(<button className={"mx-2 px-2 rounded-full p-2 hover:scale-105 animation-all duration-300 "+className} onClick={onClick}>
                <img src={src} className={"invert "+(imageClassName??"")}></img>
            </button>)
}