export const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div
                className="inline-block h-36 w-36 animate-spin rounded-full border-4 border-solid border-purple-700 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(15,15,15,0)]" />
            </div>
            <h2 className="absolute"> Carregando...</h2>
        </div>
    );
};
