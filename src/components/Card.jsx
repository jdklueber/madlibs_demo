function Card({title, children}) {
    return (
        <div className="w-1/2 mx-auto border-2 
                      border-green-900 rounded-xl mt-5 p-5">
            <div className="text-2xl font-bold">{title}</div>
            {children}
        </div>
    );
}

export default Card;